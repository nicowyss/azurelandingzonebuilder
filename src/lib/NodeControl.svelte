<script lang="ts">
	import { nodestatus } from './stores/NodeStore';


</script>

<div id="nodeControl">
	{#if $nodestatus.data.label !== ''}
		<p><u>NODE SELECTED</u></p>

		<p>ID:</p>
		<input type='text' bind:value={$nodestatus.data.id}/>
		<p></p>
		<p>Label:</p>
		<input type='text' bind:value={$nodestatus.data.label}/>
		<p></p>
		<p>Name:</p>
		<input type='text' bind:value={$nodestatus.data.name}/>
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
