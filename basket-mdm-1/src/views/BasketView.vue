<template>
  <div class="basketView">
    <div class="basketView__content">
      <Basket />
      <button
        v-if="showBt"
        class="basketView__bt-load-products"
        type="button"
        @click="getBasket"
      >
        afficher le panier
      </button>
    </div>
    <div class="basketView__summary">
      <Summary-basket />
    </div>
  </div>
</template>

<script>

import Basket from '@/components/Basket'
import SummaryBasket from '@/components/SummaryBasket'
import { mapActions } from 'vuex'

export default {
  name: 'BasketView',
  components: {
    Basket,
    SummaryBasket
  },
  data () {
    return {
      products: null,
      showBt: true
    }
  },
  methods: {
    ...mapActions({
      fetchItems: 'basket/fetchItems'
    }),
    async getBasket () {
      try {
        const loader = this.$loading.show()
        await this.fetchItems()
        loader.hide()
        this.showBt = false
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<style lang="scss">

.basketView {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &__summary {
      grid-column: 4 / span 2;
    }

    &__content {
      grid-column: 1 / span 3;
    }

    &__bt-load-products {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
}
</style>
