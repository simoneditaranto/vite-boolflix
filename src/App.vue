<script>
import { store } from './store.js'

import AppNav from './components/AppNav.vue';
import MovieItem from './components/MovieItem.vue';
import SeriesItem from './components/SeriesItem.vue';

export default {

  components: {
    MovieItem,
    SeriesItem,
    AppNav,
  },

  data() {
    return {

      store,

    }
  },


}

</script>

<template>

 <AppNav></AppNav>

 <div class="movies-list">
   <MovieItem
    v-for="currentMovie in this.store.movies"
    :movie="currentMovie"
   >
   </MovieItem>

   <SeriesItem
    v-for="currentSeries in this.store.series"
    :series="currentSeries"
   >
   </SeriesItem>
 </div>

</template>

<style lang="scss">
/* test */
.movies-list{
  display: flex;
  flex-wrap: wrap;
}
</style>
