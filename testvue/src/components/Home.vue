<template>
    <div onclick='changeText'>
        {{text}}
    </div>
</template>
<script>
// import '@/sass/home.scss'
export default {
    name:"home",
    data(){
        return {
            text:"1"
        }
    },
    methods: {
        changeText(){
            setTimeout(()=>{
                this.text="2"
            })
        }
    },
}
</script>
<style lang="scss" scope>
    @import '@/sass/home.scss';
</style>

