import graphene
from graphene.types.generic import GenericScalar
from graphene_django import DjangoObjectType
from ix.chains.models import Chain, ChainNode, ChainEdge
from ix.utils.exceptions import catch_and_print_traceback


class ChainType(DjangoObjectType):
    class Meta:
        model = Chain
        fields = "__all__"


class PositionType(graphene.ObjectType):
    x = graphene.Float()
    y = graphene.Float()


class ChainNodeType(DjangoObjectType):
    config = GenericScalar()
    position = graphene.Field(PositionType)

    class Meta:
        model = ChainNode
        fields = "__all__"


class ChainEdgeType(DjangoObjectType):
    input_map = GenericScalar()

    class Meta:
        model = ChainEdge
        fields = "__all__"

    source = graphene.Field(ChainNodeType)
    target = graphene.Field(ChainNodeType)


class ChainWithGraphType(graphene.ObjectType):
    chain = graphene.Field(ChainType)
    nodes = graphene.List(ChainNodeType)
    edges = graphene.List(ChainEdgeType)


class Query(object):
    chain = graphene.Field(ChainType, id=graphene.UUID(required=True))
    chains = graphene.List(ChainType)
    graph = graphene.Field(ChainWithGraphType, id=graphene.UUID(required=True))

    def resolve_chain(self, info, id):
        return Chain.objects.get(pk=id)

    def resolve_chains(self, info):
        return Chain.objects.all()

    @catch_and_print_traceback
    def resolve_graph(self, info, id):
        chain = Chain.objects.get(id=id)
        nodes = chain.nodes.all()
        edges = chain.edges.all()

        return ChainWithGraphType(chain=chain, nodes=nodes, edges=edges)
