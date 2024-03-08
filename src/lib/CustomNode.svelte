<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte';

	type $$Props = NodeProps;
	export let data: $$Props['data'];

</script>

<div>
	<img src={data.img} alt={data.resourceName} width="20" height="20" />
	<div>{data.resourceName}</div>
	<div class="text-gray-500">{data.resourceCustomName}</div>
</div>
