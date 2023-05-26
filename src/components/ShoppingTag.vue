<template>
    <navbarTag />
    <v-container>
        <v-row>
            <v-col  class="col-md-4">
                <div  class="card" >
                    <h6  class="menuName">{{ shopping.name }}</h6>
                <img src="https://www.burgerking.com.tr/cmsfiles/categories/urunler/menuler.png?v=249" alt="">
            <hr>
            <div  class="d-flex align-items-center mb-2">
                <h6 class="menuPrice">{{ shopping.price }}</h6>
                <button  @click="sepetPush(this.shopping)" class="btn btn-danger ms-auto menuSepet">Sepete Ekle</button>
            </div>  
        </div>
            </v-col>
            <div class="col-md-8 mt-2">
                <div class="card selectOption">
                    <div>
                   <h6 class="mt-2">Sos Seçimi</h6>
                </div>
                <select v-model="allSiparis.sos" class="form-select" aria-label="Default select example">
                        <option  v-for="i in sos" :key="i.id" :value="i.name">{{ i.name }}</option>
                </select>
                </div>
                
                <div class="card selectOption mt-4">
                    <div>
                   <h6 class="mt-2">Patates Seçimi</h6>
                </div>
                <select v-model="allSiparis.patates" class="form-select" aria-label="Default select example">
                        <option v-for="patato in patates" :key="patato.id" :value="patato.name">{{patato.name}}</option>
                </select>
                </div>

                <div class="card selectOption mt-4">
                    <div>
                   <h6 class="mt-2">İçecek Seçimi</h6>
                </div>
                <select v-model="allSiparis.icecek" class="form-select" aria-label="Default select example">
                        <option v-for="cola in icecek" :key="cola.id" :value="cola.name">{{ cola.name }}</option>
                </select>
                </div>
                
                <div class="card selectOption mt-4"> <!-- selectOption Başlangıç-->
                    <div>
                        <h6>Garnitür Seçimi</h6>
                    </div>

                    <div class="d-flex checkBox">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="marul">
                    <label class="form-check-label" for="marul">
                        Marul
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="domates" checked>
                    <label class="form-check-label" for="domates">
                        Domates
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="narEski">
                    <label class="form-check-label" for="narEski">
                        Nar Eşkisi
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="tursu">
                    <label class="form-check-label" for="tursu">
                        Turşu
                    </label>
                </div>
                </div>

            </div> <!-- selectOption Bitiş-->


            </div> <!-- Col-md-8 Bitiş-->
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

    export default{
        data(){
            return{
                allSiparis:{
                    categoryId: this.$route.params.userId,
                    sos: null,
                    patates:null,
                    icecek: null
                },
                shopping:[],
                sos:[],
                patates: [],
                icecek: []
            }
        },
        created(){
            const params= this.$route.params.userId
            axios.get(`http://localhost:3000/categories/${params}`).then(shop_response => {
                this.shopping = shop_response?.data ||[]
            }),
            axios.get('http://localhost:3000/Sos').then(sos_response => {
                this.sos = sos_response?.data || []
            }),
            axios.get('http://localhost:3000/Patates').then(patates_response => {
                this.patates = patates_response?.data || []
            }),
            axios.get('http://localhost:3000/icecek').then(icecek_response => {
                this.icecek = icecek_response?.data || []
            })
        },
        methods:{
            sepetPush(){
                axios.post(`http://localhost:3000/siparis`, this.allSiparis).then(
                    push_response => {
                        console.log('push_response :>> ', push_response);
                        this.$router.push('/sepetim')
                    }
                )
            }
        }
    }
</script>