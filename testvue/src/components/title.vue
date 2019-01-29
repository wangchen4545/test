<template>
    <div onclick='changeText'>
        {{titleText}}
    </div>
</template>
<script>
// import '@/sass/home.scss'
export default {
    name:"Title",
    props: {
        titleText:String
    },
    data(){
        return {
            // data:"1",
            // titleText:{}
        }
    },
    methods: {
        changeText(){
            // console.log(1111)
        }
    },
}
</script>
<style lang="scss" scope>
    @import '@/sass/home.scss';
</style>