<template>
  <navbar-view /><br><br>
  <!--------------------------Shop---------------------->
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
          <v-chip  pill v-on="on" to="AccesoiresViews" >
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

  <div >
     <v-carousel hide-delimiters  cycle  height="730">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
     
    >

    </v-carousel-item>
  </v-carousel>
  </div><br><br>
 

 
    <v-toolbar dark style="background-color:white ;" class="mx-16">
    <v-toolbar-title style="font-weight: 700; font-size:30px;  margin-top:-30px">NEW RELEASES</v-toolbar-title>
    <v-spacer></v-spacer>
    <p style="color: black; font-size: 20px;">View All</p>
  </v-toolbar>

    <v-row class="mx-16">
      <v-col cols="12" md="3" lg="3" v-for="product in Products" :key="product.title">
        <v-card 	>
        <div class="ui-card">
          <img :src="product.img" cover>
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
        <p style="color: black; font-size: 20px;">{{product.price}}</p>   
      </v-toolbar>
      <p class="mx-2">{{product.title}}</p>
      </v-col>
    </v-row><br><br>

    <v-row class="mx-4">
      <v-col cols="12" md="6">
        <div class="men">
               <h2  style="color:white">Voir <br> Les Hommes <br>
                <v-btn style="background-color: white ; color:black ; border-radius:20px" >Achetez Maintenant</v-btn> 
               </h2>
                
        </div>
      </v-col>
       <v-col cols="12" md="6">
        <div class="women">
          <h2  style="color:white">Voir <br> Les Femmes <br>          
          <v-btn style="background-color: white ; color:black ; border-radius:20px" >Achetez Maintenant</v-btn> </h2>
 
        </div>
      </v-col>
          <v-col cols="12" md="6">
        <div class="women1">
          <h2  style="color:white"> Haute Femmes <br></h2>
        </div>
      </v-col>
        <v-col cols="12" md="6">
        <div class="men1">
               <h2  style="color:white"> Hautes Hommes <br> </h2>  
        </div>
      </v-col>
    </v-row>
    <br><br>
    <h2 class="text-center" style="color:black ; font-family:'Courier New', Courier, monospace">  À LA MODE MAINTENANT</h2>
        <div class="text-center">
       <v-chip @click="activecatégorie = 'mens'" :color="activecatégorie === 'mens' ? 'black':''" class="mx-3">Mens </v-chip>
        <v-chip @click="activecatégorie = 'womens'" :color="activecatégorie === 'womens' ? 'success':''" class="mx-3"> Womens</v-chip>
        <v-chip @click="activecatégorie = 'accesoires'" :color="activecatégorie === 'accesoires' ? 'black':''" class="mx-3"> accesoires</v-chip>
        <v-chip @click="activecatégorie = 'proteine'" :color="activecatégorie === 'proteine' ? 'success':''" class="mx-3"> Proteine</v-chip>
         </div><br><br><br>

    <!-------------------------Transition ---------------------->
    <!----------------- Transition Mens ------------>
      <v-fade-transition mode="out-in">
      <v-row>
         <slot v-if="activecatégorie=='mens'">
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="men in mens" :key="men.title">
          <v-card 	>
        <div class="ui-card">
          <img :src="men.img" cover>
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
        <p style="color: black; font-size: 20px;">{{men.price}}</p>   
      </v-toolbar>
      <p class="mx-2">{{men.title}}</p>
        </v-col>
        </slot>
           <!-----------------Fin Transition Mens ------------>

        <!---------------------Transition Womens --------->
              <slot v-if="activecatégorie=='womens'">
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="women in womens" :key="women.title">
          <v-card 	>
        <div class="ui-card">
          <img :src="women.img" cover>
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
      <p class="mx-2">{{women.title}}</p>
        </v-col>
        </slot>
           <!----------------- Fin Transition Womens ------------>
        </v-row>
    </v-fade-transition><br><br><br>

    <!--------------------- Fin Transition ---------------------->
     <div class="text-center">
            <h2  style="color:black ; font-family:'Courier New', Courier, monospace">  ACHETEZ SANS COUTURE</h2>
            <p>Pour une coupe qui vous épouse aux bons endroits.</p>
              <v-btn style="background-color: #00FFB0 ; color:black ; border-radius:20px" >Achetez Maintenant</v-btn><br><br><br>
              <v-row class="mx-16">
                <v-img  style="    min-height: 330px;
    object-fit: cover;
    border-radius: 10px;
    max-height: 600px;"
                   src="https://cdn.shopify.com/s/files/1/0669/7933/files/blackout-shop-seamless-hp_1_1300x.jpg?v=1637287712" 
                   cover   > </v-img>
              </v-row>
                  

     </div><br><br><br>


     <!-------------------Coupe ------------->
     <div class="coupe" style="   background-color: lightgray ;">
        <h2  style="color:black ; font-family:'Courier New', Courier, monospace" class="text-center"> TROUVEZ VOTRE COUPE</h2>
        <p class="text-center">Achetez des leggings, des bas, des chemises, des hauts et plus encore.</p>
        <v-row>  <v-col cols="12" md="2" lg="2" v-for="coupe in coupes" :key="coupe.img">
            <img :src="coupe.img" cover >
        </v-col>
        </v-row>
      
     </div>


  
    
   
  

   
   
  
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  components: { NavbarView },
  data() {
    return{
        items: [
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/files/NEW_Power_W_Homepage_Desktop_1900x.jpg?v=1651095808',
          },
            {
            src: 'https://cdn.shopify.com/s/files/1/0669/7933/files/EVOKE_DESKTOP_1900x.jpg?v=1651016977',
          },
           {
            src: 'https://cdn.shopify.com/s/files/1/0669/7933/files/Web_BannerArtboard_1_copy_2_1900x.jpg?v=1648688039',
          },
          {
            src:'https://cdn.shopify.com/s/files/1/0669/7933/files/Web_BannerArtboard_1_copy_8_1900x.jpg?v=1648689189'
          }

        ],
        Products:[
          {
            img:"https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSsCrewREP-M-A0011CherryBrown-A1A4W-NBD4.A_ZH_ZH_800x.jpg?v=1650633113",
            title:"power short sleeve crew",
            price:"45$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0156/6146/products/Power5-ShortRep-M-A0011PebbleGrey-A1A4J-GBG6.A_ZH_ZH_800x.jpg?v=1650633117",
            title:"power 5 short",
            price:"42$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRep-L-A0024CherryBrown-B2A7J-NBD1.A_ZH_ZH_7e432e30-f354-4689-9cf0-5976bd24c331_800x.jpg?v=1650633124",
            title:"gs power sports bra",
            price:"46$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0156/6146/products/PowerTightShortsRep-L-A0024CherryBrown-B2A8U-NBD1.A_ZH_ZH_7c621c14-669d-46c9-9659-4dae95d53baa_800x.jpg?v=1650633121",
            title:"gs power high rise shorts",
            price:"45$"
          },
       
        ],
         activecatégorie:'mens',
        mens:[
        {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/tri-mark-muscle-tank-black-31212069290170_480x@2x.jpg?v=1649734996",
            title:"Débardeur Tri-Mark Muscle - Noir",
            price:"40$"
          },
       
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/retro-regular-fit-tee-dusty-blue-31211809505466_480x@2x.jpg?v=1649733857",
            title:"T-shirt coupe classique rétro - bleu poussiéreux",
            price:"45$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/compfit-core-tights-navy-29153923956922_480x@2x.jpg?v=1628343438",
            title:"Collants Compfit Core - Marine",
            price:"45$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/ultra-running-shorts-black-30111564595386_480x@2x.jpg?v=1636554498",
            title:"Ultra Running Shorts - Black",
            price:"35$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/origin-acid-wash-sleeveless-hoodie-black-31061443150010_480x@2x.jpg?v=1648591625",
            title:"Sweat à capuche sans manches Origin Acid Wash - Noir",
            price:"42$"
          },
       
        ],
          womens:[
        {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/excel-leggings-jet-black-28961432731834_480x@2x.jpg?v=1628333887",
            title:"Legging Excel+ - Noir de Jais",
            price:"40$"
          },
       
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/dye-scrunch-seamless-shorts-jet-black-29153573404858_480x@2x.jpg?v=1628341449",
            title:"DYE Scrunch Short Sans Couture - Noir De Jais",
            price:"45$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/ombre-seamless-crop-grey-30190687682746_480x@2x.jpg?v=1637705056",
            title:"Crop Sans Couture Ombre - Gris",
            price:"70$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/dye-scrunch-seamless-crop-grey-marl-14566349045844_480x@2x.jpg?v=1628191521",
            title:"DYE Scrunch Seamless Crop - Gris Chiné",
            price:"55$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/products/dye-scrunch-seamless-shorts-bright-white-30743228055738_480x@2x.jpg?v=1645421826",
            title:"DYE Scrunch Short Sans Couture - Blanc Vif",
            price:"55$"
          },
       
        ],
        coupes:[
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/collections/Shorts_400x@2x.jpg?v=1634620569"
          },
            {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/collections/MensHoodie_1_400x@2x.jpg?v=1634567737"
          },
            {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/collections/leggings_400x@2x.png?v=1634567735"
          },
            {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/collections/MensShorts_400x@2x.jpg?v=1634567736"
          },
            {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/collections/Crops_400x@2x.jpg?v=1634813784"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0669/7933/collections/MensTee_400x@2x.jpg?v=1634567735"
          }
        ]
        
    }
  },
}
</script>
<style>


.men{
    
    min-height: 120vh;
    min-width: 57vh;
    background-size: cover !important;
   padding: 7rem 10%;
    display: flex;
    align-items: flex-end;
    border-radius: 20px;
   background-image: url("https://cdn.shopify.com/s/files/1/0669/7933/files/post_bfcm_shop_mens_2.jpg?v=1638240535"); 
}
.women{
    
    min-height: 120vh;
    min-width: 57vh;
    background-size: cover !important;
   
    padding: 7rem 10%;
    display: flex;
    align-items: flex-end;
    border-radius: 20px;
   background-image: url("https://cdn.shopify.com/s/files/1/0669/7933/files/post_bfcm_shop_womens.jpg?v=1638238224"); 
}
.men1{
    
    min-height: 120vh;
    min-width: 57vh;
    background-size: cover !important;
  
   padding: 7rem 10%;
    display: flex;
    align-items: flex-end;
    border-radius: 20px;
   background-image: url("https://cdn.shopify.com/s/files/1/0669/7933/files/boxing_day_hp_under_31.jpg?v=1640046439"); 
}
.women1{
    
    min-height: 120vh;
    min-width: 57vh;
    background-size: cover !important;
   
    padding: 7rem 10%;
    display: flex;
    align-items: flex-end;
    border-radius: 20px;
   background-image: url("https://cdn.shopify.com/s/files/1/0669/7933/files/Womens_Crops_Bucket.jpg?v=1643069838"); 
}
img{
	max-width: 100%;
}
.ui-card{
	width: 400px;
 
	position: relative;
	overflow: hidden;
	transition: all 0.3s ease-out;
	background:radial-gradient(#111 50%, #000 100%);
}

.ui-card img{

	transition: all 0.8s ease-out;
}
.ui-card:hover img{
	transform: scale(1.1) translateY(-20px); 
	opacity: 0.3
}
.ui-card .description{
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 15px;
	width: 100%;
	text-align: center;
	color: #fff;
	font-size: 18px;
}
.ui-card .description h3{


	margin: 10px  25px 0px 0px  ;
	transform: translateY(30px);
	opacity: 0;
	transition: all 0.5s ease-out;

}

.ui-card .description p{
	transform: translateY(30px);
	opacity: 0;
	transition: all 0.3s ease-out 0.2s;
}
.ui-card .description a{
	color: #fff;
	background:#34aff3;
	display: inline-block;
	padding: 10px 25px;
	border-radius: 5px;
	text-decoration: none;
	transform: translateY(30px);
	opacity: 0;
	transition: all 0.3s ease-out 0.4s;
}
.ui-card .description a:hover{
	background:#0a83c5;
}
.ui-card:hover .description h3{
	opacity: 1;
	transform: translateY(0px);
}
.ui-card:hover .description p{
	opacity: 1;
	transform: translateY(0px);
}
.ui-card:hover .description a{
	opacity: 1;
	transform: translateY(0px);
}


</style>