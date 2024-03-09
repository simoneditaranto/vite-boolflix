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


        getMovieCast() {
            this.store.movies.forEach(movie =>{
            axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=145d04767bf0a6995a595c480bbd094f`)
            .then(result => {
                // elimino tutti gli elementi apparte i primi 5
                result.data.cast.splice(5); 
                // aggiungo il risultato all'array del cast              
                this.store.movieCast.push(result.data.cast); 
            });
            
        })
        },

        getSeriesCast() {
            this.store.series.forEach(series =>{
            axios.get(`https://api.themoviedb.org/3/tv/${series.id}/credits?api_key=145d04767bf0a6995a595c480bbd094f`)
            .then(result => {
                // elimino tutti gli elementi apparte i primi 5
                result.data.cast.splice(5); 
                // aggiungo il risultato all'array del cast              
                this.store.seriesCast.push(result.data.cast); 
            });
            
        })
        },



        searchMoviesByTitle() {

        if(this.store.userTitleMovie.trim() != '') {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=145d04767bf0a6995a595c480bbd094f&query=${this.store.userTitleMovie}`)
            .then(res => {
            this.store.movies = res.data.results;
            this.getMovieCast();
            })

            
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=145d04767bf0a6995a595c480bbd094f&query=${this.store.userTitleMovie}`)
            .then(res => {
            this.store.series = res.data.results;
            this.getSeriesCast();
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