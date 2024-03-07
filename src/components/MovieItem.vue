<script>
import { store } from '../store.js';

export default {
    name: 'MovieItem',

    props:{
        movie: Object,
    },

    data() {
        return {
            store,
        }
    },

    methods: {

        showFlagImage(flagName) {

            flagName == 'en' ? flagName = 'gb-eng' : flagName = flagName;
            flagName == 'ja' ? flagName = 'jp' : flagName = flagName;
            let urlFlag = `https://flagcdn.com/20x15/${flagName}.png`
            

            return urlFlag;
        },

    }
}

</script>

<template>

    <div id="movie">
        <div class="info">
            <div class="type">FILM</div>
            <div class="title">
                <span>titolo:</span> {{ movie.title }}
            </div>
            <div class="original-title">
                <span>titolo-originale:</span> {{ movie.original_title }}
            </div>
            <div class="language">
                <span>lingua originale:</span> 
                <img
                    :src="showFlagImage(movie.original_language)"
                    width="20"
                    height="15"
                >
            </div>
            <div class="overview">
                <span>Descrizione:</span>
                {{ movie.overview }}
            </div>
            
            <div class="rating">
                <span>voto:</span>
                <div class="rating-stars">
                    <span v-for="star in this.store.showRatedStars(movie.vote_average)">&#9733;</span>
                </div>
            </div>
        </div>
        
        <div class="poster">
            <img v-if="movie.poster_path != null"
                :src="`${this.store.posterUrl}${movie.poster_path}`" 
                alt=""
            >
            <div v-else>
                !!immagine non troavata!!
            </div>
        </div>
    </div>

</template>


<style lang="scss">



</style>