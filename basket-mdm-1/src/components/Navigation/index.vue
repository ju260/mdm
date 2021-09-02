<template>
  <nav class="nav">
    <div class="nav__content">
      <router-link to="/">Home</router-link> |
      <router-link to="/panier">panier</router-link>
    </div>
    <div class="nav__mini-card">
      <Mini-card />
    </div>
  </nav>
</template>
<script>

import MiniCard from '@/components/MiniCard'

export default {
  name: 'App',
  components: {
    MiniCard
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li {list-style: none}
.nav {
  padding: 30px;
  position: relative;

  &__mini-card {
    position: absolute;
    right: 2rem;
    top: 0;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
