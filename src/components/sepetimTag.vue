<template>
   <navbarTag />
   <v-container>
    <v-row>
        <v-col cols="6">
            <h4 class="sepetim">SEPETİM</h4>
            <hr>
            <h6 class="fw-bold">Şunları Seçtiniz;</h6>
            <div v-for="i in sepetim " :key="i.id" class="d-flex">
            <p >{{ i.category.name }} ,{{ i.patates }}, {{ i.sos }}, {{ i.icecek }}</p>
            <p style="color: red; font-weight: bold;">{{ i.category.price }}</p>
        </div>
            <button class="btn btn-success">Siparişi Onayla</button>
        </v-col>
    </v-row>
   </v-container>
</template>

<script>
    import axios from "axios"

    export default{
        data(){
            return{
                sepetim:[]
            }
        },
        created(){
            axios.get(`http://localhost:3000/siparis?_expand=category`).then(sepetim_response => {
                console.log('sepetim_response :>> ', sepetim_response);
                this.sepetim = sepetim_response?.data || []
            })
        }
    }
</script>