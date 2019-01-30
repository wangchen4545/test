<template>
    <div @click='changeText2'>
        {{titleText}}
        <p>{{title2}}222</p>
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
            title2:this.titleText
        }
    },
    methods: {
        changeText2(){
            // console.log(1111)
            this.title2++;
            // console.log(this)
            this.$toast({
                text:"ilove",
                isshow:true
            })
        }
    },
}
</script>
<style lang="scss" scope>
    @import '@/sass/home.scss';
</style>