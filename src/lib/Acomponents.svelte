<script>
	import { CpuIcon } from 'svelte-feather-icons';
</script>

<div id="componentsDraggables">Components will be listed here</div>
<div class="aComponents">
	<CpuIcon />
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
		padding: 0.25em;
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
