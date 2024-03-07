<script>
import { store } from '../store.js';

export default {
    name: 'SearchItem',

    data() {
        return {
            store,
        }
    }
}

</script>


<template>

    <div id="search-item">
        <label for="">Cerca il film o la serie tv:</label>
        <input 
            type="text" 
            placeholder="Inserisci il titolo di un film" v-model="this.store.userTitleMovie" 
            @keyup.enter="$emit('search')"
        >

        <button class="btn" @click="$emit('search')">Cerca</button>
    </div>

</template>


<style lang="scss">

#search-item {
    display: flex;

    font-size: 1.5em;

    color: white;
    label{
        margin-right: 10px;
    }

    input{
        padding: 0 10px;

        font-size: .8em;

        color: black;

        background-color: white;
    }

    button{
        width: 50px;
    }
}

</style>