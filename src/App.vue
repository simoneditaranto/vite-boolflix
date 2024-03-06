<script>
import axios from 'axios';

import { store } from './store.js'

import SearchItem from './components/SearchItem.vue';
import MovieItem from './components/MovieItem.vue';

export default {

  components: {
    SearchItem,
    MovieItem,
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
          console.log(this.store.movies);
        })
        
      } 
    }

  },

}

</script>

<template>

 <h1>Boolflix</h1>

 <SearchItem @search="searchMoviesByTitle()"></SearchItem>

 <MovieItem></MovieItem>

</template>

<style>

</style>
