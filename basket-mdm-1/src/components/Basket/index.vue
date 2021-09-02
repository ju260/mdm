<template>
  <div
    class="basket"
  >
    <ul
      class="basket__items"
    >
      <li
        class="basket__ele"
        v-for="(item, indexItem) in getBasketItems"
        :key="`item__${indexItem}`"
      >
        <Basket-item
          :item="item"
        />
      </li>
    </ul>
  </div>
</template>
<script>

import BasketItem from './_subs/item.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Basket',
  components: {
    BasketItem
  },
  computed: {
    ...mapGetters({
      getBasketItems: 'basket/getItems'
    }),
    showBasket () {
      return this.getBasketItems?.length > 0
    }
  }
}
</script>
