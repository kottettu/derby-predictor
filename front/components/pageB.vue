<style scoped lang="scss">
    .blue {
        color: #00f;
    }
</style>

<template>
    <div>
        <h1 class="blue">apge B</h1>
        <p>
            this page is B!!!
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
                msg: 'yes page B!!!!!'
            }
        }
    }
</script>