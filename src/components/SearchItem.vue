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
        <label for="">Cerca il film:</label>
        <input type="text" placeholder="Inserisci il titolo di un film">

        <button class="btn">Cerca</button>
    </div>

</template>


<style lang="scss">

#search-item {
    display: flex;

    margin-bottom: 20px;
    /* test */

    font-size: 1.5em;
    label{
        margin-right: 10px;
    }

    input{
        padding: 0 10px;

        color: black;

        background-color: white;
    }

    button{
        width: 50px;
    }
}

</style>