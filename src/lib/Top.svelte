<script>
	import { CodeIcon, DownloadIcon } from 'svelte-feather-icons';
</script>

<div id="topContent">
	<div class="icon"><CodeIcon size="2x" /></div>
	<div class="icon"><DownloadIcon size="2x" /></div>
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

    .icon {
        color: white;
    }

    .icon:hover {
        color: yellow;
        cursor: pointer;
    }
</style>
