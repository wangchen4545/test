<template>
    <div @click='changeText'>
        <Title :titleText='text'></Title>
        {{text}}

        <div @click="toTitle">点击跳转</div>

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
    beforeCreate(){
        console.log("在创建组件的时候调用");
    },
    beforeMount(){
        console.log("在渲染结构之前调用")
        debugger
    },
    mounted(){
        debugger
        console.log("在渲染结构之后调用")
    },
    created(){
        console.log("在创建完成的时候")
        debugger
    },
    beforeUpdate(){
        debugger
        console.log("组件更新之前")
    },
    updated () {
        debugger
        console.log("组件更新之后")
    },
    activated(){
        debugger
        console.log("组件被激活时候调用")
    },
    deactivated(){
        debugger
        console.log("组件被销毁候调用")
    },
    beforeDestroy(){
        debugger
        console.log("组件被销毁前调用")
    },
    methods: {
        changeText(){
            setTimeout(()=>{
                this.text="2"
            },100)
        },
        toTitle(){
            this.$router.push({
                path:"./Title.vue"
            })
        }
    },
}
</script>
<style lang="scss" scope>
    @import '@/sass/home.scss';
</style>

