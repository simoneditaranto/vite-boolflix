import { reactive } from 'vue';

export const store = reactive({

    // array che contiene i film generati dall'API
    movies: [],

    // stringa che contiene la scelta dell'utente
    userTitleMovie: '',

})