<template>
  <div class="wrapper">
    <navbar></navbar>
    <login></login>
    <div>
      <h1>BTT</h1>
      <a v-link="{ path: '/' }">Home</a>
      <a v-link="{ path: '/events' }">Eventos</a>
      <a v-link="{ path: '/about' }">Sobre</a>
      
      <div class="container">
        <router-view></router-view>
      </div>      
    </div> 
    <div class="push"></div>   
  </div>  
  <app-footer></app-footer>
</template>
<script>
export default {
  replace: false
}
</script>
<style>
  * {
 font-family: 'Rambla', sans-serif;
} 
</style>
