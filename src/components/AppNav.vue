<script>
import axios from 'axios';

import { store } from '../store.js'

import SearchItem from './SearchItem.vue';

export default {
    name: 'AppNav',

    components: {
        SearchItem,
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

    <nav>
        <h1>Boolflix</h1>

        <SearchItem @search="searchMoviesByTitle()"></SearchItem>
    </nav>

</template>

<style lang="scss">

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    background-color: black;

    h1{
        text-transform: uppercase;

        color: red;
    }
}

</style>