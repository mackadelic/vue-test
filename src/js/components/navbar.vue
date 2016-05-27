<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top" data-spy="affix" data-offset-top="100">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
		  <a href="#" class="pull-left">
            <img class="logo" src="/images/logo.png"></a>
          <a class="navbar-brand" v-link="{ path: '/'}">
            Clube de Praticantes PeraltaBTT</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li v-link-active><a v-link="{ path: '/', exact: true, activeClass:'active' }">Início</a></li>
            <li v-link-active><a v-link="{ path: '/about', exact: true, activeClass:'active' }">Sobre nós</a></li>
            <li v-link-active><a v-link="{ path: '/contact', exact: true, activeClass:'active' }">Contacto</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
  </div>
</template>
<script>

export default {

}
</script>

<style>
.logo{
	max-height:42px;
}

html,body {
	height:100%;
  /*padding-top:70px;*/
}
/*moving navbar*/
section {
  height:calc(90% - 50px);
}

.affix {
  padding:0px;
  -webkit-transition:padding 0.2s linear;
  -moz-transition:padding 0.2s linear;
  -o-transition:padding 0.2s linear;
  transition:padding 0.2s linear;

}

.affix-top {
  padding-top:15px;
  padding-bottom:15px;
  -webkit-transition:padding 0.5s linear;
  -moz-transition:padding 0.5s linear;
  -o-transition:padding 0.5s linear;
  transition:padding 0.5s linear;
}

/* The company logo */
.navbar{
  color:  #ffffff;
  font: normal 18px 'Jockey One', sans-serif;
  margin: 0 0 10px;
  padding-left: 15px;
  padding-right: 15px;
}

@media (max-width: 800px) {

  .navbar-brand{
    font-size: 16px;
  }
  .navbar-toggle{
    margin-right: 0px;
  }
}

</style>
