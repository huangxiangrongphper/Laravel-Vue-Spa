<template>
    <div>
        <top-menu></top-menu>
        <transition nmae="fade" mode="out-in">
             <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './commen/TopMenu'
    import jwtToken from './../helpers/jwt'
    export default {
     created(){
         if(jwtToken.getToken()) {
             this.$store.dispatch('setAuthUser')
         }
     },
     components:{
         TopMenu
       }
    }
</script>
