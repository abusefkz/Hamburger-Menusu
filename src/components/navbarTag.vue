<template>
  <div class="header">
 <v-container>
 <nav class="navbar  navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">Mutlu-Et</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <li class="nav-item dropdown">
        <a @click.prevent="$emit('category-changed', _url.id)" class="nav-link dropdown-toggle hamburger" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hamburger Çeşitleri
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Et Hamburger</a>
          <a class="dropdown-item" href="#">Tavuk Hamburger</a>
          <a class="dropdown-item" href="#">Vejeteryan Hamburger</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle meat" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Et Çeşitleri
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Bonfile</a>
          <a class="dropdown-item" href="#">Steak</a>
          <a class="dropdown-item" href="#">Antrikot</a>
          <a class="dropdown-item" href="#">Dana Kaburga</a>
        </div>
      </li>
      <a class="nav-item nav-link" href="#">Mezeler</a>
      <a class="nav-item nav-link" href="#">Soğuk İçecekler</a>
      <a class="nav-item nav-link" href="#">Sıcak İçecekler</a>
      <router-link to="/sepetim">
      <div class="icon">
        <h6 class="box">{{ _siparis.length }}</h6>
        <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" alt="">
      </div>
    </router-link>
    </div>
  </div>
</nav>
</v-container>
</div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default{
    emits:['category-changed'],
    created(){
      return this.$store.dispatch('newSiparis')
  
    },
    computed:{
      ...mapGetters(['_siparis','_url'])
    },
    
  }
</script>