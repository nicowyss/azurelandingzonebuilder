<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';

	type $$Props = NodeProps;
	export let data: $$Props['data'];

</script>

<div>
	<div>
		<div>
			{data.img}
		</div>
		<div>
			<div>{data.resourceName}</div>
			<div class="text-gray-500">{data.resourceCustomName}</div>
		</div>
	</div>
</div>
