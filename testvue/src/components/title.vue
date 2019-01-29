<template>
    <div onclick='changeText'>
        ddd
    </div>
</template>
<script>
// import '@/sass/home.scss'
export default {
    name:"title",
    data(){
        return {
            data:"1"
        }
    },
    methods: {
        changeText(){
            console.log(1111)
        }
    },
}
</script>
<style lang="scss" scope>
    @import '@/sass/home.scss';
</style>