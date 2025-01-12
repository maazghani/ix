import { useColorMode } from "@chakra-ui/color-mode";

export const useEditorColorMode = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const retrieval = isLight ? "gray.700" : "gray.900";

  return {
    isLight,
    highlightColor: isLight ? "gray.100" : "gray.100",
    color: isLight ? "gray.800" : "gray.100",
    bg: isLight ? "white" : "gray.700",
    border: isLight ? "gray.600" : "black",
    node: {
      section: isLight
        ? {
            color: "gray.300",
            bg: "blackAlpha.200",
          }
        : {
            color: "gray.600",
            bg: "blackAlpha.200",
          },
      root: isLight
        ? {
            color: "gray.700",
            bg: "gray.300",
          }
        : {
            color: "gray.400",
            bg: "gray.800",
          },
    },
    root: {
      color: isLight ? "gray.800" : "gray.400",
    },
    code: {
      bg: isLight ? "gray.200" : "gray.900",
      color: isLight ? "gray.800" : "gray.200",
    },
    connector: {
      connected: isLight ? "gray.800" : "gray.100",
      required: isLight ? "red.800" : "red.300",
      default: isLight ? "gray.400" : "gray.500",
    },
    highlight: {
      root: isLight ? "gray.300" : "gray.900",
      document_loader: retrieval,
      llm: isLight ? "red.300" : "red.300",
      prompt: isLight ? "orange.300" : "orange.500",
      memory: isLight ? "purple.500" : "purple.300",
      memory_backend: isLight ? "purple.500" : "purple.300",
      chain: isLight ? "blue.500" : "blue.300",
      agent: isLight ? "green.500" : "green.600",
      parser: retrieval,
      retriever: retrieval,
      text_splitter: retrieval,
      tool: isLight ? "yellow.500" : "yellow.600",
      embeddings: retrieval,
      output_parser: isLight ? "gray.400" : "gray.700",
      vectorstore: retrieval,
      default: isLight ? "gray.400" : "gray.700",
    },
  };
};

export const useSideBarColorMode = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return {
    isLight,
    highlightColor: isLight ? "gray.100" : "gray.100",
    color: isLight ? "gray.800" : "gray.100",
    bg: isLight ? "gray.300" : "gray.700",
    border: isLight ? "gray.400" : "gray.700",
  };
};

export const useChatColorMode = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return {
    isLight,
    editorHighlight: isLight ? "gray.200" : "gray.700",
    autoCompleteSelected: isLight ? "gray.200" : "gray.700",
    message: {
      color: isLight ? "gray.800" : "gray.100",
    },
    mention: isLight
      ? {
          color: "blue.500",
          fontWeight: "bold",
        }
      : {
          color: "blue.300",
        },
    link: isLight
      ? {
          color: "blue.500",
          fontWeight: "bold",
        }
      : {
          color: "blue.300",
        },
    artifact: isLight
      ? {
          color: "orange.600",
          fontWeight: "bold",
        }
      : {
          color: "yellow.300",
        },
  };
};
