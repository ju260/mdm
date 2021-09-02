<template>
  <div
    class="basket-item"
  >
    <article class="basket-item__wrapper">
      <div class="basket-item__bloc-image">
        <Item-image
          :srcset-obj="item?.images[0]"
        />
      </div>
      <div>
        <p><span class="basket-item__ref">ref: {{ item.reference }}</span></p>
        <h3>{{ item.name }}</h3>
        <p>
          <span class="basket-item__price">prix: {{ item.price?.base.formatted }}</span>
        </p>
        <div class="basket-item__bloc-qty">
          <button @click="removeQty">-</button>
          <input class="basket-item__qty" type="number" min="1" :value="itemQty" disabled />
          <button @click="addQty">+</button>
        </div>
        <button id="bt-delete" class="basket-item__delete-item" @click="removeItem(item.reference)">Supprimer</button>
      </div>
    </article>
  </div>
</template>
<script>

import ItemImage from './ItemImage.vue'
import { mapActions, mapGetters } from 'vuex'
import _debounce from 'lodash/debounce'

export default {
  name: 'BasketItem',
  components: {
    ItemImage
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    itemQty: 0
  }),
  methods: {
    ...mapActions({
      updateItemQuantity: 'basket/updateItem',
      deleteBasketItem: 'basket/deleteItem'
    }),
    addQty () {
      this.itemQty++
    },
    removeQty () {
      this.itemQty > 1 && this.itemQty--
    },
    async removeItem (itemRef) {
      try {
        const loader = this.$loading.show()
        await this.deleteBasketItem({ itemRef })
        loader.hide()
      } catch (err) {
        console.error('deleteItem error', err)
        this.defaultAlert = true
      }
    }
  },
  computed: {
    ...mapGetters({
      getOrderItems: 'basket/getItems'
    })
  },
  watch: {
    itemQty: _debounce(async function (newval) {
      if (newval === this.item.qty) return
      try {
        const patch = { qty: this.itemQty }
        const loader = this.$loading.show()
        await this.updateItemQuantity({ itemRef: this.item?.reference, patch })
        loader.hide()
      } catch (error) {
        console.error(error)
      }
    }, 250, { maxWait: 1000 })
  },
  mounted () {
    this.itemQty = this.item.qty
  }
}
</script>
<style lang="scss">

.basket-item {
  text-align: left;
  border-bottom: 1px solid #ccc;

  &__delete-item {
    margin: 2rem 0;
  }

  &__qty {
    width: 2rem;
    text-align: center;
  }
  &__bloc-qty {
    display: flex;
  }

  &__bloc-image {
    margin-right: 2rem;
  }

  &__wrapper {
    display: flex;
  }

  &__image {
    max-width: 100%;
    max-height: 10rem;
  }

  &__ref {
    font-size: 12px;
    font-weight: bold;
  }
}

</style>
