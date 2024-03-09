<script>
import { store } from './store.js'

import AppNav from './components/AppNav.vue';
import AppCard from './components/AppCard.vue';

export default {

  components: {
    AppNav,
    AppCard,
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
   <AppCard
    v-for="(currentMovie,index) in this.store.movies"
    :item="currentMovie"  :movieCast="this.store.movieCast[index]" 
   >
   </AppCard>

   <AppCard
    v-for="(currentSeries,index) in this.store.series"
    :item="currentSeries" :seriesCast="this.store.seriesCast[index]"
   >
   </AppCard>
 </div>

</template>

<style lang="scss">
/* test */
.movies-list{
  display: flex;
  flex-wrap: wrap;

  max-width: 1400px;

  margin: 0 auto;
}
</style>
