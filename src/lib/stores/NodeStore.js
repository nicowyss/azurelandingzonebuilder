import { writable } from 'svelte/store'

export let nodestatus = writable(
    {
        data: {
            id: '',
            label: '',
            name: ''
        }
    }
);