<template>
    <div class="detail">
        detail!!!
        {{$route.params.id}}
    </div>
</template>
<style>

</style>
<script>
export default {
    mounted(){
        console.log(this.$route.params.id)
    }
}
</script>
