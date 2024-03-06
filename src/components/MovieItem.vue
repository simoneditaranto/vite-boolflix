<script>

export default {
    name: 'MovieItem',

    props:{
        movie: Object,
    },
}

</script>

<template>

    <div id="movie">

        <div class="title">
            titolo: {{ movie.title }}
        </div>
        <div class="original-title">
            titolo-originale: {{ movie.original_title }}
        </div>
        <div class="language">
            lingua originale: {{ movie.original_language }}
        </div>
        <div class="rating">
            voto: {{ movie.vote_average }}
        </div>

    </div>

</template>


<style lang="scss">

#movie{
    padding: 15px;

    width: 30%;

    border: 1px solid white;

    font-size: 1.2em;
    font-weight: bold;

    background-color: rgba(0, 0, 0, 0.3);
    /* test */
}

</style>