<template>
   <v-container>
    <h3 class="menuTitle">Hamburgerler</h3>
    <v-row>
    <v-col v-for="i in url" :key="i.id"  class="col-md-3">
        <div class="menuResim">
        <img  src="https://www.burgerking.com.tr/cmsfiles/categories/urunler/menuler.png?v=249" alt="">
    </div>
    <div class="text-align-center align-items-center justify-content-center">
        <h6 class="menuName">{{ i.name }}</h6>
        <h6 class="price">{{ i.price }}</h6>
        <button @click="this.$router.push({name: 'shoppingPage', params:{userId:i.id} })" class="btn btn-danger btn-sm order">Sipariş Ver</button>
    </div>
    </v-col>
</v-row>
   </v-container>
</template>

<script>
  
    export default{
    props:["url"],
    created(){
        return this.$store.dispatch('newUrl')
    }
    }
</script>