/**
 * This type can be used to standardize the required params of azure components
 * The data therefore will be set as property of a svelteflow node in the data.azuredata property (for example)
 */
interface CustomNode extends Node {
    id: string
    name: string
    coordinates: [number, number]
    isActive: boolean
    canConnect: boolean
}