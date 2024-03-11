<script lang="ts">
	import CustomNode from "./CustomNode.svelte";

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
	<div>
		MGMT Group
		<img
			on:dragstart={(event) => onDragStart(event, "ManagementGroup")}
			draggable={true}
			class="azicon"
			src="https://code.benco.io/icon-collection/azure-icons/Management-Groups.svg"
			alt="test"
		/>
	</div>
	<div>
		Subscription
		<img
			on:dragstart={(event) => onDragStart(event, 'custom')}
			class="azicon"
			src="https://code.benco.io/icon-collection/azure-icons/Subscriptions.svg"
			alt="test"
		/>
	</div>
	<div>
		Resource Group
		<img
			on:dragstart={(event) => onDragStart(event, 'custom')}
			class="azicon"
			src="https://code.benco.io/icon-collection/azure-icons/Resource-Groups.svg"
			alt="test"
		/>
	</div>
	<div>
		Resource Graph Explorer
		<img
			on:dragstart={(event) => onDragStart(event, 'input')}
			class="azicon"
			src="https://code.benco.io/icon-collection/azure-icons/Resource-Graph-Explorer.svg"
			alt="test"
		/>
	</div>
	<div>
		Resource Linked
		<img
			on:dragstart={(event) => onDragStart(event, 'default')}
			class="azicon"
			src="https://code.benco.io/icon-collection/azure-icons/Resource-Linked.svg"
			alt="test"
		/>
	</div>
	<div>
		Event Grid Subscriptions
		<img
			on:dragstart={(event) => onDragStart(event, 'output')}
			class="azicon"
			src="https://code.benco.io/icon-collection/azure-icons/Event-Grid-Subscriptions.svg"
			alt="test"
		/>
	</div>
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
		grid-row-gap: 50px;
		place-items: center;
	}
	.azicon {
		width: '5';
		height: '5';
	}
</style>
