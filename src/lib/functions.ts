import CustomNode from "./CustomNode.svelte";

export function setCustomNodeData(node: CustomNode, params: {}) {
    node.data.azureparams = params;
}