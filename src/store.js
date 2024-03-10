import { reactive } from 'vue';

export const store = reactive({

    // array che contiene i film generati dall'API
    movies: [],
    movieCast: [],
    movieGenres: [],
    arrayTemp: [],
    series: [],
    seriesCast: [],
    seriesGenres: [],

    allMovieGenre: [],
    allSeriesGenres: [],

   

    // stringa che contiene la scelta dell'utente
    userTitleMovie: '',

    // stringa poster url condivisa da MovieItem e SeriesItem
    posterUrl: 'https://image.tmdb.org/t/p/w342',

    showRatedStars(rated) {
        return rated = Math.floor((rated * 5) / 10);
    },

})