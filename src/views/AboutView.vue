<template>
  <div id="app">
    <SearchWik></SearchWik>
  </div>
</template>

<script>
  import SearchWik from '../components/SearchWik.vue'

  export default {
    components: {
      SearchWik
    }
  }
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
