<template>
    <navbar-view /><br><br>
     <div class="text-center" >
        <v-chip  pill v-on="on" to="MensView" >
            <v-avatar left > 
              <v-img src="https://cdn.shopify.com/s/files/1/0669/7933/products/origin-acid-wash-sleeveless-hoodie-black-31061443150010_480x@2x.jpg?v=1648591625"></v-img>
            </v-avatar>
            MENS
          </v-chip>
          <v-chip  pill v-on="on" to="WomensView" >
            <v-avatar left>
              <v-img src="https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRep-L-A0024CherryBrown-B2A7J-NBD1.A_ZH_ZH_7e432e30-f354-4689-9cf0-5976bd24c331_800x.jpg?v=1650633124"></v-img>
            </v-avatar>
            WOMENS
          </v-chip>
          <v-chip  pill v-on="on" to="AccessoiresView" >
            <v-avatar left>
              <v-img src="https://cdn.shopify.com/s/files/1/0156/6146/products/GFXBOBSlingBagBlackI1A9U-BBKQ.A_ZH_ZH_600x.jpg?v=1643996301"></v-img>
            </v-avatar>
            ACCESOIRES
          </v-chip>
          <v-chip  pill v-on="on" to="ProteineViews" >
            <v-avatar left>
              <v-img src=""></v-img>
            </v-avatar>
            PROTEINES
          </v-chip>
         </div><br><br>
           <v-breadcrumbs :items="items" class="mx-16"></v-breadcrumbs><br><br>
          <v-row class="mx-16">
                      <v-container v-if=" ProduitUser == '' ">
                  
                      <v-alert type="error">  Désolé, nous ne pouvons pas publier ceci ici, c'est hors contenu </v-alert>
                      </v-container>
                          <v-col cols="12" sm="8" v-for="produit in ProduitUser" :key="produit.id">
                   
                             <v-divider></v-divider>
                           <v-row>
                           <v-col cols="12" sm="4">
                            
                           <v-img      cover v-bind:src="'../image/boutique/' + produit.image"></v-img>
                           </v-col>
                           <v-col cols="12" sm="6">
                               <v-toolbar dark style="background-color:white ;" >
                         
                          <h1>{{produit.categorie}}</h1>
                          <v-spacer></v-spacer>
                           
                        </v-toolbar>
                         <p style="color: black; font-weight: bold;">{{produit.slug}}</p> 
                        <p style="color: black; font-weight: bold;">{{produit.categorie}}</p> 
                              <v-col cols="12" md="12">
                
                        <v-text-field
                        color="secondary"
                        label="Quantité"
                        variant="contained"
                        type="number"
                         required
                         v-model="produit.qty"
                  
                    ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                   <select
                          
                        class="form-select"
                            required
                         
                           
                    >
                            <option value="select-catégorie">Taille</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                               <option value="L">L</option>
                                  <option value="XL">XL</option>
                                  <option value="XXL">XXL</option>
                 </select>
              </v-col>
              
                   <v-btn @click.prevent="deleteProduitPanier(produit.id)" class="mx-16" justify-center style="background-color: red; ; color:White ; border-radius:15px" >
               <v-icon>mdi-delete</v-icon>Supprimer Produit</v-btn><br><br>
                           </v-col>
                           </v-row>
                            
                           </v-col>
                           
                           <v-col cols="12" sm="4" md="4" v-if=" ProduitUser != '' " >
                             <div style=" min-height: 25; background: lightgray ; border-radius:15px;  padding:2rem"><br><br>
                     
                        <h2  style="color:black ; font-family:'Courier New', Courier, monospace">Panier  </h2>
                         <p style="color:black ; font-size:25px"> Total : </p>
                         <v-col v-for="produit in ProduitUser" :key="produit.id">
                                  <v-toolbar dark style="background-color:white ;" >
                          <p style="color: black; font-weight: bold;">{{produit.sous_categorie}}</p> 
                        <v-spacer></v-spacer>
                        <p style="color: black; font-size: 20px;"> {{this.Total =produit.qty  * produit.price}}$</p>   <br>
                        
                      </v-toolbar>

                       <v-divider></v-divider>
                 
                  
                        
                         </v-col>
                       {{subTotal}} <br><br><br>

                       
                      </div>
                             
                             
                           </v-col>
                          <v-btn @click.prevent="storeCart" v-if=" ProduitUser != '' ">Commender</v-btn>
                           </v-row>
         
            
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
         calcPayment:"",
         Total:0,
        
          items: [
        {
          text: 'Boutique',
          disabled: false,
          href: 'BoutiqueView',
        },
       
        {
          text: ' Votre Panier',
          disabled: true,
          href: '',
        },
      ],
      }   
    },
      computed: {
    user() {
      return this.$store.getters.get_user;
    },
    subTotal(){
      var subCost=0;
      for(var items in this.ProduitUser){
        var p1 = this.ProduitUser[items];
        subCost += p1.qty * p1.price;
      }
      return subCost
    }

    
  
    
    
  },
     mounted(){
      
      this.getProduitUser();
    
    },
    methods:{
                    storeCart(){
            
            
                   let fd = new FormData();
           
         
           console.log(FormData)
            
                              fd.append('cartItems', this.ProduitUser);
                               fd.append('id_user', this.user.id);

     axios.post("http://localhost:8000/api/auth/storeCart" ,fd , { 
           
           })
        .then (res => {
         console.log(res);
           this.$toast.success(" success Produit saved.", {
                          position : "top-right"
                  });
                 
                   
        
       }).catch(
         error =>{
             this.$toast.error(" error Produit not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
                
     },
              getProduitUser(){
       axios.get('http://localhost:8000/api/auth/getProduitUser/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.ProduitUser = res.data;
         console.log(this.ProduitUser)
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
       deleteProduitPanier($id){
        axios.delete('http://localhost:8000/api/auth/deleteProduitPanier/'+ $id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getProduitUser();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
     
   

    }
}
</script>