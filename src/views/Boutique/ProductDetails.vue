<template>
    <navbar-view > </navbar-view><br><br>
        <div style=" min-height: 25; background: lightgray; padding:2rem "><br><br>
    <p style="color:black"> MENS</p>
      <h2  style="color:black ; font-family:'Courier New', Courier, monospace">NEW RELEASES  </h2>
    </div> 
    <div style="margin-top:100px" class="details">
        <v-row class="mx-16">
            <v-col cols="12" md="8" lg="8">
                   <v-img      v-bind:src="'../image/boutique/' + products.image" 
                   cover    > </v-img>
    
            </v-col>
            <v-col cols="12" md="4" lg="4">
                  <p style="color: black; font-weight: bold;">NEW</p> 
                     <v-toolbar dark style="background-color:white ;" >
                 <h1 style="color: black  ;text-transform: uppercase ; font-family: Montserrat, Helvetica, Arial, sans-serif;">{{products.name}}</h1> 
                <v-spacer></v-spacer>
                <p style="color: black; font-size: 20px;">{{products.price}}</p>   
            </v-toolbar>
            <p style="color: black; font-weight: bold;">FITBODY {{products.categorie}}</p><br>
            <v-divider></v-divider><br>
                <p style="color: black; font-weight: bold;">SELECT SIZE</p>
                   <v-btn-toggle
        v-model="text"
        tile
        color="deep-purple accent-3"
        group
        class="mx-16"
      >
        <v-btn value="left">
          XS
        </v-btn>

        <v-btn value="center">
          S
        </v-btn>

        <v-btn value="right">
          M
        </v-btn>

        <v-btn value="justify">
          L
        </v-btn>
           <v-btn value="justify">
          XL
        </v-btn>
           <v-btn value="justify">
         XXL
        </v-btn>
      </v-btn-toggle><br><br><br>
           <v-btn class="mx-16" justify-center style="background-color: rgb(0, 125, 181); ; color:White ; border-radius:15px" >
               <v-icon>mdi-shopping</v-icon> Achetez Maintenant</v-btn><br><br>
                    <div style="  background: rgb(245, 245, 245); padding:2rem "><br><br>
                    <p style="color:black"><v-icon  style="padding: 0% 1.5rem">mdi-refresh</v-icon> Free Returns On All Orders</p>
                     <p style="color:black"><v-icon style="padding: 0% 1.5rem">  mdi-signature-freehand</v-icon>    Free Standard Over $75</p>
                      <p style="color:black"><v-icon style="padding: 0% 1.5rem">mdi-truck-fast</v-icon>     Free Express over $150</p>
                    
                    </div> <br><br>
                    <p style="color: black; font-weight: bold;">DESCRIPTION</p><br><br>
                    <p>{{products.description}}</p>

            </v-col>
        </v-row>
    </div>
   
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios'
export default {
  components: { NavbarView },
    data() {
      return{
         products:{},
         categorieType:""
      }  
    },
       mounted(){
      this.getProductDetails();
      
    },
    methods:{
             getProductDetails(){
       axios.get('http://localhost:8000/api/auth/getProductDetails/'+this.$route.params.id)
        .then (res => {
         console.log(res.data);
         this.products = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
    }
}
</script>
<style>

</style>