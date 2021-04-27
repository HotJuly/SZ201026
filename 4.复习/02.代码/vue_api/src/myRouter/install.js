import view from './components/view';
export default function install(Vue){
    Vue.component('RouterView',view)
    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                this.$routerRoot=this;
            }
        }
    })
}