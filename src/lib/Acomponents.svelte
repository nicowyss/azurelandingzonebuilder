<script lang="ts">
	import { CpuIcon, AirplayIcon } from 'svelte-feather-icons';

	const onDragStart = (event: DragEvent, nodeType: string) => {
    if (!event.dataTransfer) {
      return null;
    }

    event.dataTransfer.setData('application/svelteflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

</script>

<div id="componentsDraggables">Components will be listed here</div>
<div class="aComponents">
	<div class='managementGroup' on:dragstart={(event) => onDragStart(event, 'input')} draggable={true}>
		<i> <AirplayIcon /> </i>
	</div>
	<CpuIcon />
	<CpuIcon />
	<CpuIcon />
	<CpuIcon />
	<CpuIcon />
	<CpuIcon />
	<CpuIcon />
	<CpuIcon />
</div>

<style>
	#componentsDraggables {
		padding: 1em;
		background-color: blueviolet;
		color: white;
	}

	.aComponents {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 3em);
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		place-items: center;
	}
</style>
