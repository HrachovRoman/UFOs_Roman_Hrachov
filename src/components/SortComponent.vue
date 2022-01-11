<template>

    <div class="sort">
      <label class="sort__label" for="sort">SORT</label>
        <select v-model="selected" name="option" class="sort__select" id='sort'>
            <option class="sort__select-item"  value="Default">Default</option>
            <option class="sort__select-item"  value="Likes">Likes</option>
            <option class="sort__select-item" value="Comments">Comments</option>
        </select>
      <div class="sort__filter">
          <input type="text" placeholder="Filter" class="sort__filter-tags">
      </div>
    </div>
</template>

<script>

export default {
    name: 'SortComponent',

    data() {
      return {
        selected: 'Default',
      }
    },

    computed: {
      getProducts () {
        if (this.selected === 'Comments') {
          return this.$store.getters.PRODUCTS.sort((a, b) => b.comments - a.comments);   
        } else if (this.selected === "Likes") {
          return this.$store.getters.PRODUCTS.sort((a, b) => b.likes - a.likes); 
        } else {
          this.$store.dispatch('GET_PRODUCTS_FROM_API')
          return this.$store.getters.PRODUCTS;  
        }
      },
    }
}

</script>

<style lang='scss'>
.sort {

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;
    max-width: 1320px;
   

    &__label {
        width: 150px;
        border: 2px solid #008fa1;
        background-color: #00BCD4;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-radius: 5px;
        height: 100%;
        width: 5rem;
        margin-right: 5px;
    }

    &__select {
        display: inline-block;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-radius: 5px;
        z-index: 1;
        margin-right: 15px;
    }

    &__select-item {
    }

    &__filter {
        margin-left: auto;
    }

    &__filter-tags {
        
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-radius: 5px;
        z-index: 1;
        width: 250px;
    }
}
    
</style>