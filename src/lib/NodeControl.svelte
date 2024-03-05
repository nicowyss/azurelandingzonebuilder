<script>
	import { nodestatus } from './stores/NodeStore';
</script>

<div id="nodeControl">
	{#if $nodestatus.data.label !== ''}
		<p><u>NODE SELECTED</u></p>
		{$nodestatus.data.name = "Harold"}
		<p>my name is: {$nodestatus.data.name}</p>
		<p>{$nodestatus.data.label}</p>
	{:else}
		<p>No Node selected</p>
	{/if}
</div>

<style>
	#nodeControl {
		padding: 0.25em;
		background-color: #003a78;
	}

	#nodeControl p {
		color: white;
	}
</style>
