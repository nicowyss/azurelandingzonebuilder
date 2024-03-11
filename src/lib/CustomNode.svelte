<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte';

	type $$Props = NodeProps;
	export let data: $$Props['data'];

	// DEMO DATA
	// setCustomNodeData({
	// 	id: 'sdfijsdifj',
	// 	name: 'SomeNode',
	// 	coordinates: [23, 44],
	// 	isActive: true,
	// 	canConnect: false
	// });
</script>

<div>
	<img src={data.img} alt={data.resourceName} width="20" height="20" />
	<div>{data.resourceName}</div>
	{#if data.azureparams}
		{#each Object.entries(data.azureparams) as [name, value]}
			<p>{name}: {value}</p>
		{/each}
	{/if}
	<div class="text-gray-500">{data.resourceCustomName}</div>
</div>
