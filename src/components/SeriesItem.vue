<script>
import { store } from '../store.js';

export default {
    name: 'SeriesItem',

    props:{
        series: Object,
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
        }

    }
}

</script>

<template>

<div id="movie">
        <div class="info">
            <div class="type">FILM</div>
            <div class="title">
                <span>titolo:</span> {{ series.title }}
            </div>
            <div class="original-title">
                <span>titolo-originale:</span> {{ series.original_title }}
            </div>
            <div class="language">
                <span>lingua originale:</span> 
                <img
                    :src="showFlagImage(series.original_language)"
                    width="20"
                    height="15"
                >
            </div>
            <div class="overview">
                <span>Descrizione:</span>
                {{ series.overview }}
            </div>
            
            <div class="rating">
                <span>voto:</span>
                <div class="rating-stars">
                    <span v-for="star in this.store.showRatedStars(series.vote_average)">&#9733;</span>
                </div>
            </div>
        </div>
        
        <div class="poster">
            <img v-if="series.poster_path != null"
                :src="`${this.store.posterUrl}${series.poster_path}`" 
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