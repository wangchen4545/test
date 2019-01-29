<template>
    <div @click='changeText'>
        <Title :titleText='text'></Title>
        {{text}}
    </div>
</template>
<script>
// import '@/sass/home.scss'
import Title from './Title'
export default {
    name:"home",
    components:{
        Title
    },
    data(){
        return {
            text:"1",
            // titleTxext:''
        }
    },
    methods: {
        changeText(){
            setTimeout(()=>{
                this.text="2"
            },100)
        }
    },
}
</script>
<style lang="scss" scope>
    @import '@/sass/home.scss';
</style>

