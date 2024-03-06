<script lang="ts">
	import { CodeIcon, DownloadIcon, HomeIcon } from 'svelte-feather-icons';



</script>

<div id="topContent">
	<div>
		<button class='button'><HomeIcon size="2x" /></button>
	</div>
	<div>
		<button class='button'><CodeIcon size="2x" /></button>
	</div>
	<div>
		<button class='button'><DownloadIcon size="2x" /></button>
	</div>
</div>

<style>
	#topContent {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: space-between;
		align-items: end;
		padding: 3em;
	}
	.button {
		color: white;
		background-color: transparent;
		border: transparent;
	}

	.button:hover {
		color: yellow;
		cursor: pointer;
	}
</style>
