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
        <div class="type">SERIE</div>
        <div class="title">
            titolo: {{ series.name }}
        </div>
        <div class="original-title">
            titolo-originale: {{ series.original_name }}
        </div>
        <div class="language">
            lingua originale: 
            {{ series.original_language }}
            <!-- <img
                :src="showFlagImage(series.original_language)"
                width="20"
                height="15"
        > -->
        </div>
        <div class="rating">
            voto: {{ series.vote_average }}
        </div>

        <img v-if="series.poster_path != null"
            :src="`${this.store.posterUrl}${series.poster_path}`" 
            alt=""
        >
        <div v-else>
            !!immagine non troavata!!
        </div>

    </div>

</template>


<style lang="scss">



</style>