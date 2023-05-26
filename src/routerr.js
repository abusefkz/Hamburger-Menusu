import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/homeTag.vue"
import Shopping from "@/components/ShoppingTag.vue"
import Sepetim from "@/components/sepetimTag.vue"
const routes = [
    {
        name: "homePage",
        path: "/",
        component: HomePage
    },
    {
        name: 'shoppingPage',
        path: '/shopping/:userId',
        component: Shopping
    },
    {
        name: 'sepetPage',
        path: '/sepetim',
        component: Sepetim
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router