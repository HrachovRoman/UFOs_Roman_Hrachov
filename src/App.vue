<template>
  <div class='app'>
    <h2 class="title">Cats Catalog</h2>
  <CatsCatalog />
  </div>
</template>

<script>
import CatsCatalog from './components/CatsCatalog.vue'

export default {
  name: 'App',
  components: {
    CatsCatalog, 
  }
}
</script>
