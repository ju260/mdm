<template>
  <div
    class="mini-card"
  >
    <img class="mini-card__icon" src="https://cdn.maisonsdumonde.com/front-assets/img/picto-cart@2x.aa0b1f2.png">
    <div class="mini-card__qty">{{ totalQty }}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MiniCard',
  computed: {
    ...mapGetters({
      getBasketItems: 'basket/getItems'
    }),
    totalQty () {
      return this.getBasketItems.reduce((prev, cur) => prev + cur.qty, 0)
    }
  }
}
</script>
<style lang="scss">

.mini-card {
  display: flex;
  align-items: baseline;

  &__icon {
    max-width: 2rem;
  }

  &__qty {
    font-size: 14px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    padding: 0.3rem;
    left: -20%;
    width: 0.8rem;
    height: 0.8rem;
  }
}

</style>
