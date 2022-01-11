<template>
<div class="container">
<SortComponent />
    <!-- <div class="sort">
      <label class="sort__label" for="sort">SORT</label>
        <select v-model="selected" name="option" class="sort__select" id='sort'>
            <option class="sort__select-item"  value="Default">Default</option>
            <option class="sort__select-item"  value="Likes">Likes</option>
            <option class="sort__select-item" value="Comments">Comments</option>
        </select>
      <div class="sort__filter">
          <input type="text" placeholder="Filter" class="sort__filter-tags">
      </div>
    </div> -->

  <div class="cards-wrapper">
    <div class="card" 
      v-for="product in getProducts"
      :key="product.id">
        <a :href="product.pageURL" target="_blank" class="card__image"> 
          <img :src="product.previewURL" :alt="product.type">
        </a>
          <div class="card__description">
            <div class="card__description-likes">Likes: {{product.likes}}</div>  
            <div class="card__description-comments">Comments: {{product.comments}}</div>  
          </div> 

          <div class="card__tag"> 
            <div class="card__tag-item"
              v-for="tag of tagsBuilder(product.tags)" :key="tag">
              #{{tag}}
            </div>  

          </div>
        
    </div>
  </div>
</div>  
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import SortComponent from './SortComponent.vue'

  export default {
    name: 'CatsCatalog',
    components: {
      SortComponent
    },
    data() {
      return {
        selected: 'Default',
      }
    },
    computed: {
      // getProducts () {
      //   if (this.selected === 'Comments') {
      //     return this.$store.getters.PRODUCTS.sort((a, b) => b.comments - a.comments);   
      //   } else if (this.selected === "Likes") {
      //     return this.$store.getters.PRODUCTS.sort((a, b) => b.likes - a.likes); 
      //   } else {
      //     this.$store.dispatch('GET_PRODUCTS_FROM_API')
      //     return this.$store.getters.PRODUCTS;  
      //   }
      // },
      ...mapGetters([
        'PRODUCTS'
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
      ]),
      
      tagsBuilder (string) {
        let tagsArr = string.split(',').map(elem => elem.trim());
        return tagsArr;
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
    },
  } 
</script>
