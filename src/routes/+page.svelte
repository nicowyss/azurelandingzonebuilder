<script lang="ts">
	import { nodestatus } from '$lib/stores/NodeStore';
	import { writable } from 'svelte/store';
	import { initialNodes, initialEdges } from '$lib/nodes-and-edges';
	import CustomNode from '$lib/CustomNode.svelte';

	import {
		SvelteFlow,
		SvelteFlowProvider,
		Controls,
		Background,
		BackgroundVariant,
		MiniMap,
		type Node,
		type Edge
		// @ts-ignore
	} from '/node_modules/@xyflow/svelte/dist/lib/index.js';

	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '/node_modules/@xyflow/svelte/dist/style.css';

	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	const nodes = writable<Node[]>(initialNodes);
	const edges = writable<Edge[]>(initialEdges);

	const nodeTypes = {
		custom: CustomNode
	};
	const snapGrid = [25, 25];

	const DefaultEdgeOptions = {
		type: 'smoothstep',
		animated: false,
		deletable: true
	};
</script>

<!--
  👇 By default, the Svelte Flow container has a height of 100%.
  This means that the parent container needs a height to render the flow.
  -->
<div id="nodeCanvas">
	<SvelteFlowProvider>
		<SvelteFlow
			{nodes}
			{edges}
			{nodeTypes}
			{snapGrid}
			{DefaultEdgeOptions}
			fitView
			colorMode="light"
			on:nodeclick={(event) => {
				$nodestatus = event.detail.node;
				console.log('on node click', event.detail.node);
			}}
		>
			<Controls />
			<Background variant={BackgroundVariant.Lines} />
			<MiniMap />
		</SvelteFlow>
	</SvelteFlowProvider>
</div>

<style>
	#nodeCanvas {
		height: 100%;
	}
</style>


