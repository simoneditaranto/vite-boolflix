<script>
import { store } from '../store.js';

import axios from 'axios';

export default {
    name: 'AppCard',

    props:{
        item: Object,
        movieCast: Array,  
        seriesCast: Array,
        movieGenres: Array,
        seriesGenres: Array,
    },

    data() {
        return {
            store,

            // variabile che gestisce l'hover sui film/serie
            isHover: true,

            // cast: [],
        }
    },

    methods: {

        showFlagImage(flagName) {

            flagName == 'en' ? flagName = 'gb-eng' : flagName = flagName;
            flagName == 'ja' ? flagName = 'jp' : flagName = flagName;
            let urlFlag = `https://flagcdn.com/20x15/${flagName}.png`

            return urlFlag;
        },


    },

}

</script>

<template>

    <div id="item" >
        <div class="info" v-if="!isHover" @mouseleave="isHover = true">
            <div class="type">{{ item.title ? 'film' : 'serie tv' }}</div>
            <div class="title">
                <span>titolo:</span> {{ item.title ? item.title : item.name }}
            </div>
            <div class="original-title">
                <span>titolo-originale:</span> {{ item.original_title ? item.original_title : item.original_name }}
            </div>
            <div class="language">
                <span>lingua originale:</span> 
                <img
                    :src="showFlagImage(item.original_language ? item.original_language : item.original_language)"
                    width="20"
                    height="15"
                >
            </div>
            <div class="overview">
                <span>Descrizione:</span>
                {{ item.overview ? item.overview : item.overview }}
            </div>
            
            <div class="rating">
                <span>voto:</span>
                <div class="rating-stars">
                    <span v-for="star in this.store.showRatedStars(item.vote_average ? item.vote_average : item.vote_average)">&#9733;</span>
                </div>
            </div>

            <div class="cast">
                <span>cast:</span>
                <div class="actor" v-for="currentActor in movieCast ? movieCast : seriesCast">
                    {{ currentActor.name }}
                </div>
            </div>

            <div class="movie-genres">
                <span>Genere:</span>
                <div class="genre" v-for="currentGenre in movieGenres ? movieGenres : seriesGenres">
                    {{ currentGenre }}
                </div>
            </div>
        </div>
        
        <div 
            class="poster"
            @mouseenter="isHover = false"
            @mouseleave="isHover = true"
            v-if="isHover"
        >
            <img v-if="item.poster_path"
                :src="`${this.store.posterUrl}${item.poster_path}`" 
                alt=""
            >
            <div v-else>
                !!immagine non troavata!!
            </div>
        </div>


        
    </div>

</template>


<style lang="scss">

#item{
    width: calc(100% / 4);

    border: 1px solid white;

    overflow-y: hidden;

    .info{
        display: flex;
        flex-direction: column;
        gap: 5px;

        padding: 10px;

        height: 500px;

        color: white;

        background-color: black;

        overflow-y: auto;

        .type{
            text-transform: uppercase;
            
            color: red;
        }

        span{
            font-weight: bold;
        }

        .language{
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .rating{
            display: flex;
            align-items: center;

            .rating-stars {
            font-size: 1.8em;

            color: #FFBD00;
            }
            
        }

    }

    .poster{
        width: 100%;
        height: 500px;

    img{
        width: 100%;
        height: 500px;
        object-fit: cover;
    }

    }

    .poster.hide{
        display: none;
    }
}

</style>