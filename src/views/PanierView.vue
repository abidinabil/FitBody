<template>
    <navbar-view />

    <v-row>
        <v-col v-for="produit in ProduitUser" :key="produit.id">
          <h1>{{produit.categorie}}</h1>
          <p>{{produit.sous_categorie}}</p>
          <p>{{produit.price}}</p>
             <v-text-field
                            color="secondary"
                           
                            variant="contained"
                            required
                            type="number"
                         
                        ></v-text-field>
                 <v-img  class="bg-white"   height="500px"  cover v-bind:src="'../image/boutique/' + produit.image"></v-img>
        </v-col>
    </v-row>
     <div class="flex items-center justify-center gap-x-4">
  
  </div>
</template>
<script>

import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios'
export default {
    
  components: { NavbarView },
    data() {
      return{
        ProduitUser:{},
         number: 1,
      }   
    },
      computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
     mounted(){
      
      this.getProduitUser();
    
    },
    methods:{
              getProduitUser(){
       axios.get('http://localhost:8000/api/auth/getProduitUser/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.ProduitUser = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
       increment() {
      this.number++;
    },
    decrement() {
      this.number--;
    },
    }
}
</script>