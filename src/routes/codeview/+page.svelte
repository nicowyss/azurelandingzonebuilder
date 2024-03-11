<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;

	let code = `resource symbolicname 'Microsoft.Management/managementGroups@2021-04-01' = {
  name: 'string'
  scope: tenant()
  properties: {
    details: {
      parent: {
        id: 'string'
      }
    }
    displayName: 'string'
  }
}
`;

	onMount(async () => {
		// Import our 'monaco.ts' file here
		// (onMount() will only be executed in the browser, which is what we want)
		monaco = (await import('$lib/monaco')).default;
        
		// Your monaco instance is ready, let's display some code!
		const editor = monaco.editor.create(editorContainer, {theme: "vs-dark", language: "bicep", readOnly: true});
		const model = monaco.editor.createModel(code, 'bicep', monaco.Uri.file('bicep.js'));
		editor.setModel(model);
	});

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
	});
</script>

<div>
	<div class="container" bind:this={editorContainer} />
</div>
<div>
	<button class="button" >COPY CODE</button>
</div>

<style>
	.container {
		width: 100%;
		height: 600px;
	}
    .button {
        width:auto;
        height: 100px;
    }
</style>
