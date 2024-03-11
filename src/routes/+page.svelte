<script lang="ts">
	import { nodestatus } from '$lib/stores/NodeStore';
	import { writable } from 'svelte/store';
	import { initialNodes, initialEdges } from '$lib/nodes-and-edges';
	import CustomNode from '$lib/CustomNode.svelte';
	import { setCustomNodeData } from '$lib/functions';

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
	import { ManagementGroup } from '$lib/azure-resources/ManagementGroup';

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
	const onDragOver = (event: DragEvent) => {
		event.preventDefault();

		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move';
		}
	};

	const onDrop = (event: DragEvent) => {
		event.preventDefault();
		console.log("THE EVENT", event)

		if (!event.dataTransfer) {
			return null;
		}

		const type = event.dataTransfer.getData('application/svelteflow');
		console.log(type)


		  const newNode = {
		  	id: `${Math.random()}`,
		  	type: `${type}`,
		  	position: { x: 150, y: 200 },
		  	data: `${type}`,
		  	origin: [0.5, 0.0]
		  } satisfies Node;

		//const newNode = new ManagementGroup(); 
		//this is no Node or Custom Node yet TODO

		// setCustomNodeData(newNode, {
		// 	id: 'sdfijsdifj',
		// 	name: 'SomeNode',
		// 	coordinates: [23, 44],
		// 	isActive: true,
		// 	canConnect: false
		// });

		$nodes.push(newNode);
		$nodes = $nodes;
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
			on:dragover={onDragOver}
			on:drop={onDrop}
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
