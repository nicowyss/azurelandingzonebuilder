import type { Node, Edge } from '@xyflow/svelte';

export const initialNodes: Node[] = [
    {
        id: '1',
        type: 'custom',
        data: { img: 'https://code.benco.io/icon-collection/azure-icons/Management-Groups.svg', resourceName: 'ManagementGroup', resourceCustomName: 'mgmt-xxx' },
        style: 'border: 1px solid #777; padding: 10px;',
        position: { x: -150, y: 0 }
    },
    {
        id: '2',
        type: 'custom',
        data: { img: 'https://code.benco.io/icon-collection/azure-icons/Subscriptions.svg', resourceName: 'Subscription', resourceCustomName: 'sub-xxx' },
        style: 'border: 1px solid #777; padding: 10px;',
        position: { x: 0, y: 100 }
    },
    {
        id: '3',
        type: 'custom',
        data: { img: 'https://code.benco.io/icon-collection/azure-icons/Resource-Groups.svg', resourceName: 'ResourceGroup', resourceCustomName: 'rg-xxx' },
        style: 'border: 1px solid #777; padding: 10px;',
        position: { x: 150, y: 200 }
    },
    {
        id: '4',
        type: 'input',
        data: { label: 'An input node' },
        position: { x: 100, y: 0 },
      },
      {
        id: '5',
        type: 'default',
        data: { label: 'An default node' },
        position: { x: 150, y: 100 },
      },
      {
        id: '6',
        type: 'output',
        data: { label: 'An output node' },
        position: { x: 300, y: 200 },
      }
];

export const initialEdges: Edge[] = [
    {
        id: '1-2',
        type: 'smoothstep',
        style: 'stroke: #777;',
        source: '1',
        target: '2',
    },
    {
        id: '2-3',
        type: 'smoothstep',
        style: 'stroke: #777;',
        source: '2',
        target: '3',
    },
    {
        id: '4-5',
        type: 'smoothstep',
        style: 'stroke: #777;',
        source: '4',
        target: '5',
    },
    {
        id: '5-6',
        type: 'smoothstep',
        style: 'stroke: #777;',
        source: '5',
        target: '6',
    }
];