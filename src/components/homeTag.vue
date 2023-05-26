<template>
    
    <navbarTag/>

    <carousel :url="gettersUrl"/>
</template>

<script>
    import carousel from "@/components/carouselTag.vue"
    
    export default{
        components:{
            carousel
        },
        computed:{
            gettersUrl(){
                return this.$store.getters._url
            }
        }
        
    }
</script>