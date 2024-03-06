<script>
import axios from 'axios';

import { store } from './store.js'

import SearchItem from './components/SearchItem.vue';
import MovieItem from './components/MovieItem.vue';
import SeriesItem from './components/SeriesItem.vue';

export default {

  components: {
    SearchItem,
    MovieItem,
    SeriesItem,
  },

  data() {
    return {

      store,

    }
  },

  methods: {

    searchMoviesByTitle() {
      if(this.store.userTitleMovie.trim() != '') {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=145d04767bf0a6995a595c480bbd094f&query=${this.store.userTitleMovie}`)
        .then(res => {
          this.store.movies = res.data.results;
        })

        
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=145d04767bf0a6995a595c480bbd094f&query=${this.store.userTitleMovie}`)
        .then(res => {
          this.store.series = res.data.results;
        })
        
      } else {
        this.store.movies = [];
        this.store.series = [];
      } 
    }

  },

}

</script>

<template>

 <h1>Boolflix</h1>

 <SearchItem @search="searchMoviesByTitle()"></SearchItem>

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
