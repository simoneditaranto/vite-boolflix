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
        }

    }
}

</script>

<template>

    <div id="movie">
        <div class="type">FILM</div>
        <div class="title">
            titolo: {{ movie.title }}
        </div>
        <div class="original-title">
            titolo-originale: {{ movie.original_title }}
        </div>
        <div class="language">
            lingua originale: 
            <!-- {{ movie.original_language }} -->
            <img
                :src="showFlagImage(movie.original_language)"
                width="20"
                height="15"
        >
        </div>
        <div class="rating">
            voto: {{ movie.vote_average }}
        </div>
        <img 
            :src="`${this.store.posterUrl}${movie.poster_path}`" 
            alt=""
        >

    </div>

</template>


<style lang="scss">



</style>