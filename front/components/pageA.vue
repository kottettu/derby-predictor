<style lang="scss">
    .yellow {
        color: #f0f;
    }
</style>

<template>
    <div>
        <h1 class="yellow">apge A</h1>
        <p>
            this page is A!!!
        </p>
        <p>
            msg = {{msg}}
        </p>
    </div>

</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: 'yes page A'
            }
        }
    }
</script>