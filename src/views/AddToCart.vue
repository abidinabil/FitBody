<template>

     <v-btn @click.prevent="addTocart" class="mx-16" justify-center style="background-color: rgb(0, 125, 181); ; color:White ; border-radius:15px" >
               <v-icon>mdi-shopping</v-icon> Achetez Maintenant</v-btn><br><br>
</template>
<script>


export default {
  components: {  },
  props:{
      id:{
          required:true,
          type:Object
      }
  },
   /* methods:{
      async addTocart(){
         alert(this.id)
            let response = await axios.post('http://localhost:8000/api/auth/addToCart' , {
                'id_produits':this.id
            });
            console.log(response.data)
     } 
     
       
     
    }*/
}
</script>