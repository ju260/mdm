<template>
  <div
    v-if="getBasketItems.length"
    class="summary-basket"
  >
    <h2>Récapitulatif</h2>
    <section class="summary-basket__content">
    <p>Total <strong>{{total}} €</strong></p>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SummaryBasket',
  computed: {
    ...mapGetters({
      getBasketItems: 'basket/getItems'
    }),
    total () {
      return this.getBasketItems.reduce((prev, cur) => prev + cur.price?.base?.amount * cur.qty, 0)
    }
  }
}
</script>
<style lang="scss">

.summary-basket {
  &__content {
    background-color:rgb(247, 247, 247);
    padding: 2rem;
    text-align: left;
  }
}

</style>
