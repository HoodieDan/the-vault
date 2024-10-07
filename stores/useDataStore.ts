// stores/counter.ts
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})
