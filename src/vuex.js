import { createStore } from "vuex";
import axios from "axios"

const store = createStore({
    state:{
        url:[],
        siparis:[]
    },
    mutations:{
        urlMutations(state,url){
            state.url = url
        },
        siparisUrl(state,siparis){
            state.siparis = siparis
        }
    },
    actions:{
        newUrl(context){
            axios.get('http://localhost:3000/categories').then(newUrl_response => {
                console.log('newUrl_response :>> ', newUrl_response);
                context.commit('urlMutations', newUrl_response?.data)
            })
        },
        newSiparis(context){
            axios.get('http://localhost:3000/siparis').then(siparis_response => {
                console.log('siparis_response :>> ', siparis_response);
                context.commit('siparisUrl', siparis_response?.data)
            })
        }
    },
    getters:{
        _url : state => state.url,
        _siparis : state => state.siparis
    }
})

export default store