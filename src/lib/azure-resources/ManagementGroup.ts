import CustomNode from "$lib/CustomNode.svelte";

export class ManagementGroup {

    constructor(
        public id: string = String(Math.random()),
        public name: string = "ManagementGroup",
        public coordinates: [number, number] = [23, 34],
        public isActive: boolean = true,
        public canConnect: boolean = true,
        public position: { x: number, y: number } = { x: -150, y: 0 },
        public data: { img: string, resourceName: string, resourceCustomName: string } = { img: 'https://code.benco.io/icon-collection/azure-icons/Management-Groups.svg', resourceName: 'ManagementGroup', resourceCustomName: 'mgmt-xxx' }
    ) {

    }
}