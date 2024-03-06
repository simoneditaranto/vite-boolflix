<script>

export default {
    name: 'MovieItem',
}

</script>

<template>

    <div id="movie">

        <div class="title">
            titolo:
        </div>
        <div class="original-title">
            titolo-originale:
        </div>
        <div class="language">
            lingua:
        </div>
        <div class="rating">
            voto: 
        </div>

    </div>

</template>


<style lang="scss">

#movie{
    padding: 15px;

    width: 30%;

    font-size: 1.2em;
    font-weight: bold;

    background-color: rgba(0, 0, 0, 0.3);
    /* test */
}

</style>