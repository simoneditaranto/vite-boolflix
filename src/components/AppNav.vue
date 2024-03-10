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
        
        getSingleMovieGenres() {
            this.store.movieGenres = [];
            const moviesGenres = [];
            this.store.movies.forEach(movie => {
                // console.log(movie.genre_ids)
                moviesGenres.push(movie.genre_ids);
            })
            // console.log("1", moviesGenres)
            // test
                // console.log(result.data.genres)
                moviesGenres.forEach(movieGenres => {
                    let arrayTemp = [];
                    // console.log("2", movieGenres)
                    // test
                    movieGenres.forEach(genre => {
                        // console.log("2", genre)
                        // test
                        this.store.allMovieGenre.forEach(res => {
                            if(genre === res.id) {
                                // console.log("res", res)
                                arrayTemp.push(res.name);
                                // console.log("tmp", arrayTemp)
                                // test                   
                            }
                        })
                    })
                    
                    this.store.movieGenres.push(arrayTemp); 
                    // console.log("3", this.store.movieGenres)
                    // test
                    // arrayTemp.splice(0)

                })
                // console.log("m", this.store.movieGenres)
                // test

        },
        

        getMoviesGenres() {
            axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=145d04767bf0a6995a595c480bbd094f')
            .then(result => {
                this.store.allMovieGenre = result.data.genres;
                this.getSingleMovieGenres();
                
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

        getSingleSeriesGenres() {
            this.store.seriesGenres = [];
            const seriesGenres = [];
            this.store.series.forEach(actualSeries => {
                // console.log(movie.genre_ids)
                seriesGenres.push(actualSeries.genre_ids);
            })
            // console.log("1", seriesGenres)
            // test
                // console.log(result.data.genres)
                seriesGenres.forEach(singeSerieGenres => {
                    let arrayTemp = [];
                    // console.log("2", singeSerieGenres)
                    // test
                    singeSerieGenres.forEach(genre => {
                        // console.log("2", genre)
                        // test
                        this.store.allSeriesGenres.forEach(res => {
                            if(genre === res.id) {
                                // console.log("res", res)
                                arrayTemp.push(res.name);
                                // console.log("tmp", arrayTemp)
                                // test                   
                            }
                        })
                    })
                    
                    this.store.seriesGenres.push(arrayTemp); 
                    // console.log("3", this.store.singeSerieGenres)
                    // test
                    // arrayTemp.splice(0)

                })
                // console.log("m", this.store.singeSerieGenres)
                // test

        },

        getSeriesGenres() {
              
              axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=145d04767bf0a6995a595c480bbd094f')
              .then(result => {
                  this.store.allSeriesGenres = result.data.genres;
                  this.getSingleSeriesGenres();
                  
              })
          },



        searchMoviesByTitle() {

            if(this.store.userTitleMovie.trim() != '') {
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=145d04767bf0a6995a595c480bbd094f&query=${this.store.userTitleMovie}`)
                .then(res => {
                    this.store.movies = res.data.results;
                    this.getMovieCast();
                    this.getMoviesGenres();
                })

                
                axios.get(`https://api.themoviedb.org/3/search/tv?api_key=145d04767bf0a6995a595c480bbd094f&query=${this.store.userTitleMovie}`)
                .then(res => {
                    this.store.series = res.data.results;
                    this.getSeriesCast();
                    this.getSeriesGenres();
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