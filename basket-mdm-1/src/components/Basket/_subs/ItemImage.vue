<template>
  <img
    class="basket-item__image"
    :srcset="srcsetDefinition"
    :src="srcsetObj?.medium"
    alt="description image">
</template>

<script>

import mapSrcSetImage from '@/assets/json/mapSrcSetImage.json'

export default {
  name: 'ItemImage',
  props: {
    srcsetObj: {
      type: Object,
      default: null
    }
  },
  computed: {
    srcsetDefinition () {
      const tab = []
      for (const [key, value] of Object.entries(this.srcsetObj)) {
        const srcSet = `${value} ${mapSrcSetImage[key]}w`
        tab.push(srcSet)
      }
      if (tab.length === 0) return null
      return tab.join(',')
    }
  }
}
</script>
