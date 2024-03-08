<script lang="ts">
	import { nodestatus } from './stores/NodeStore';
	import { writable } from 'svelte/store';
	import { initialNodes } from '$lib/nodes-and-edges';
	import { type Node } from '@xyflow/svelte';

	const nodes = writable<Node[]>(initialNodes);

	let resourceCustomName = '';

	$: updateNode({ resourceCustomName });

	function updateNode({ resourceCustomName }: { resourceCustomName?: string }) {
		$nodes.forEach((node) => {
			if (node.id === node.id) {
				if (resourceCustomName) {
					// IMPORTANT: You need to mutate the data object
					// otherwise the node will not be updated
					node.data = {
						...node.data,
						resourceCustomName: resourceCustomName
					};
				}

				$nodes = $nodes;
			}
			
		});
	}
</script>

<div id="nodeControl">
	{#if $nodestatus.data.label !== ''}
		<p><u>NODE LABEL SELECTED</u></p>
		<p>{$nodestatus.data.label}</p>
		<p>----------------------</p>
		<p>Custome Resource Name:</p>
		<input
			value={resourceCustomName}
			on:input={(evt) => (resourceCustomName = evt.target?.value)}
		/>
	{:else}
		<p>No Node selected</p>
	{/if}
</div>

<style>
	#nodeControl {
		padding: 1em;
		background-color: #003a78;
	}

	#nodeControl p {
		color: white;
	}
</style>
