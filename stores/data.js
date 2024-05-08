import { defineStore } from 'pinia'

export const useStoreData = defineStore('data', () => {
  const data = reactive({
    count:10
  })
  

  return {
    data,

  }
})