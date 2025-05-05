import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        loading: false
    }),
    actions: {
        setLoading(val) {
            this.loading = val
        }
    }
})
