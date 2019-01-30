
import toast from './toast.vue';

var toastExtend={};

toastExtend.install=function(Vue,optionsText){

    Vue.prototype.$toast=function(){
        Vue.component(toast,optionsText)
    }
}
export default toastExtend;
