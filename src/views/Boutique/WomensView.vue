<template>
    <navbar-view /><br>
      <!--------------------------background image---------------------->
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
         </div><br>
      <!--------------Image -------------->   
    <div style=" min-height: 85vh;
    min-width: 57vh;
   
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
   background-image: url(https://cdn.shopify.com/s/files/1/0669/7933/files/Web_BannerArtboard_1_copy_3_1900x.jpg?v=1648688346);"
>
    </div>  <br>
    <!-----------------Mens--------------->
    <div style=" min-height: 25; background: lightgray; padding:2rem "><br><br>
    <p style="color:black"> Womens</p>
      <h2  style="color:black ; font-family:'Courier New', Courier, monospace">NEW RELEASES  </h2>
    </div> 
    <!---------------Shop ---------------------->
    <div>
       <v-col
      cols="12"
      class="py-2"
      style="padding:5rem"
    >
      <v-btn-toggle
        v-model="text"
        tile
        color="deep-purple accent-3"
        group
      >
        <v-btn value="" @click.prevent="getProduitByCategorie(this.Womens)">
          All Produit
        </v-btn>
        <v-btn value="" @click.prevent="getProduitBySousCategorie(this.Tshirt)">
          t-shirt
        </v-btn>
        <v-btn value="" @click.prevent="getProduitBySousCategorie(this.shorts)" >
          shorts
        </v-btn>
         <v-btn value="" @click.prevent="getProduitBySousCategorie(this.Tanks)" >
          Tanks Tops
        </v-btn>
         <v-btn value="" @click.prevent="getProduitBySousCategorie(this.Hoodies)">
          Hoodies
        </v-btn>
         <v-btn value="" @click.prevent="getProduitBySousCategorie(this.Jackets)">
          Jackets
        </v-btn>
         <v-btn value="" @click.prevent="getProduitBySousCategorie(this.Stringers)">
          Stringers
        </v-btn>
          <v-btn value="" @click.prevent="getProduitBySousCategorie(this.Joggers)">
          Joggers
        </v-btn>
        <v-btn value="" @click.prevent="getProduitBySousCategorie(this.Sports)">
          Sports Bras
        </v-btn>
      </v-btn-toggle>
    </v-col> 
    </div> <br><br><br>
    <v-row class="mx-4">
      <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="women in ProduitWomens" :key="women.name">
          <v-card 	>
        <div class="ui-card">
            <v-img   :aspect-ratio="1"   v-bind:src="'../image/boutique/' + women.image" 
                   cover    > </v-img>
          <div class="description">
            <h3><v-card style="background:rgba(255,255,255,.8);">
            <p>Quik Add</p>
            <v-row class="mx-4">
              <v-col cols="12" md="3">
                <v-card style="background:rgba(255,255,255,.8);" height="30px"> xs </v-card>
              </v-col>
              <v-col cols="12" md="3">
                <v-card style="background:rgba(255,255,255,.8);" height="30px"> s </v-card>
              </v-col>
              <v-col cols="12" md="3">
                <v-card style="background:rgba(255,255,255,.8);" height="30px"> m </v-card>
              </v-col>
              <v-col cols="12" md="3">
                <v-card style="background:rgba(255,255,255,.8);" height="30px"> l </v-card>
              </v-col>
              <v-col cols="12" md="3">
                <v-card style="background:rgba(255,255,255,.8);" height="30px"> xl </v-card>
              </v-col><br><br>
            </v-row>
            </v-card></h3>

          </div>
          
        </div>
      </v-card>
             <v-toolbar dark style="background-color:white ;" >
        <p style="color: black; font-weight: bold;">NEW</p> 
        <v-spacer></v-spacer>
        <p style="color: black; font-size: 20px;">{{women.price}}</p>   
      </v-toolbar>
         <p class="mx-2">{{women.categorie}}</p>
      <p class="mx-2">{{women.sous_categorie}}</p>
        </v-col>
        </v-row>
        <v-img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t45.1600-4/277698946_6285877061793_410141223228836215_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=111&ccb=1-5&_nc_sid=68ce8d&_nc_ohc=Kp3eXnNmVvgAX9c9Esc&_nc_ht=scontent.ftun16-1.fna&oh=00_AT8mqN13I_tFvmL3Q6r5e_bVpFR9pAbv5_svdKnsL8BabA&oe=62775C0B"></v-img>



</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios'
export default {
  components: { NavbarView },
   data(){
     return{
       
       ProduitWomens:{},
       Womens:'Womens',
       shorts:'shorts',
       Tshirt:'T-shirt',
       Tanks:'Tanks',
       Sports:'Sports',
       Hoodies:'Hoodies',
       Jackets:'Jackets',
       Stringers:'Stringers',
       Joggers:'Joggers'
     }
    
   },
        mounted(){
      
      this.getProduitByCategorie();
      this.getProduitBySousCategorie()
    },
    methods: {
         getProduitByCategorie($categorie){
       axios.get('http://localhost:8000/api/auth/getProduitByCategorie/'+$categorie)
        .then (res => {
         console.log(res.data);
         this.ProduitWomens = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
        getProduitBySousCategorie($sous_categorie){
       axios.get('http://localhost:8000/api/auth/getProduitWomens/'+$sous_categorie)
        .then (res => {
         console.log(res.data);
         this.ProduitWomens = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
     
       
     },
}
</script>