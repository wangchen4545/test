<template>
    <div class="toast" v-if='optionsText.ishow'>
        {{optionsText.text}}
    </div>
</template>
<script>
export default {
    created(){
        console.log(111)
    },
    data(){
        return {

        }
    },
    props:{
        optionsText:Object
    }
}
</script>
<style>
    .toast{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: none;
    }
</style>



