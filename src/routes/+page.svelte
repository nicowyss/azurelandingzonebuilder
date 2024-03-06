<script lang="ts">
	import { nodestatus } from '$lib/stores/NodeStore';
	import { writable } from 'svelte/store';


	import {
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		MiniMap

		// @ts-ignore
	} from '/node_modules/@xyflow/svelte/dist/lib/index.js';

	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '/node_modules/@xyflow/svelte/dist/style.css';

	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	const nodes = writable([
		{
			id: '1',
			type: 'input',
			data: { label: 'Input Node' },
			position: { x: -150, y: 0 }
		},
		{
			id: '2',
			type: 'default',
			data: { label: 'Default Node' },
			position: { x: 0, y: 100 }
		},
    {
			id: '3',
			type: 'output',
			data: { label: 'Output Node' },
			position: { x: 150, y: 200 }
		}
	]);

	// same for edges
	const edges = writable([
		{
			id: '1-2',
			type: 'smoothstep',
			source: '1',
			target: '2'
		},
    {
			id: '2-3',
			type: 'smoothstep',
			source: '2',
			target: '3'
		}
	]);

	const snapGrid = [25, 25];

</script>


<!--
  👇 By default, the Svelte Flow container has a height of 100%.
  This means that the parent container needs a height to render the flow.
  -->
<div id="nodeCanvas">
	<SvelteFlow
		{nodes}
		{edges}
		{snapGrid}
		fitView
		on:nodeclick={(event) => {
			$nodestatus = event.detail.node;
			console.log('on node click', event.detail.node);
		}}
	>
		<Controls />
		<Background variant={BackgroundVariant.Dots} />
		<MiniMap />
  	</SvelteFlow>
</div>

<style>
	#nodeCanvas {
		height: 100%;
	}
</style>
