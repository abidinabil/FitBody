<template>
  <navbar-view />
  <div >
     <v-carousel hide-delimiters  cycle     height="730">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
     
    >

    </v-carousel-item>
  </v-carousel>
  </div><br><br>
  <div class="shop">
   <v-container>
        <br><br><br>
       
        <v-row >
            
        <v-col cols="12" md="6" lg="6">
            <br><br><br>
            
            <h1 class="test" style="color:white">Reach new heights <br> with my trainings <br> right now...</h1>
        </v-col>
        <v-col cols="12" md="6" lg="6">
              <v-img   width="600px"  height="650px"    src="https://img01.ztat.net/article/spp-media-p1/1e01280c63e4477386a27eab5a8a5ed0/6adde3f7854844ee857a3395036ecf3a.jpg?imwidth=1800" 
                   cover   > </v-img>
        </v-col>
            <v-col cols="12" md="6" lg="6">
            <br><br><br>
            <v-img  class="bg-white" width="600px"  height="650px"  style="margin-top:-200px" :aspect-ratio="1"  src="https://tiboinshape.com/shop/modules/jscomposer/uploads/IMG_1516.jpg" 
                   cover   > </v-img>
        </v-col>
        <v-col cols="12" md="6" lg="6">
         
            <div style="margin-left:250px ; ">    
              <h1 class="test" style="color:white">Reach new heights <br> with my trainings <br> right now...</h1>
            </div>   
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="6" lg="6">
        
            <div >    
               <h1 class="test" style="color:white">Reach new heights <br> with my trainings <br> right now...</h1>
            </div>   
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="6" lg="6">
              <v-img  class="work"  width="600px"  height="650px"  style="margin-top:-200px" :aspect-ratio="1"  src="https://tiboinshape.com/shop/modules/jscomposer/uploads/SHAKER001.jpg" 
                   cover   > </v-img>
        </v-col>

        </v-row>
      
    </v-container> 
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

    <!------------shop 1-->
   <div class="shop1">
    
      <v-col  cols="12" xs="12" sm="6" md="4" lg="4">
            <h2  style="color:#111">FREE YOUR <br>MOVEMENT</h2>
            
            <p style="color:#111 ; font-size:20px"  >in the latest Studio collection</p>
           <v-btn style="background-color: white ; color:black ; border-radius: 30px;" >SHOP STUDIO</v-btn>    
      </v-col>
     
   </div>
   <!---------------shop2-->

   <div class="shop2">
    
    <v-row >
      <v-col  cols="12" xs="12" sm="6" md="12" lg="12" class="text-align:center">
            <h2 class="text-align:center" style="color:white">Welcome to FitBody</h2>
            
            <p style="color:aliceblue ; font-size:20px"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem animi eveniet voluptate beatae, facilis vitae 
              rerum perspiciatis blanditiis porro, unde, sunt optio similique quidem ab. Veniam laudantium tempore dolore.</p>
           <v-btn to="ArticleNutrition" style="background-color: white ; color:black" >Commencer dés maintenant</v-btn>    
      </v-col>
      </v-row>
   
 </div><br><br><br>

    <!--------------------Product 1-->
    <v-row class="mx-16">
      <v-col cols="12" md="3" lg="3" v-for="product1 in Products1" :key="product1.title">
        <v-card 	>
        <div class="ui-card">
          <img :src="product1.img" cover>
          <div class="description">
            <h3><v-card style="background:rgba(255,255,255,.8);">
            <p>Quik Add</p>
            <a href="#"> Buy Now</a>   
            </v-card></h3>
          </div>
        </div><br><br>
      </v-card>
      <v-toolbar dark style="background-color:white ;" >
        <p style="color: black; font-weight: bold;">NEW</p> 
        <v-spacer></v-spacer>
        <p style="color: black; font-size: 20px;">{{product1.price}}</p>   
      </v-toolbar>
      <p class="mx-2">{{product1.title}}</p>
      </v-col>
    </v-row>
    
   
  

   
   
  
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
            src: 'https://images.pexels.com/photos/4348627/pexels-photo-4348627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
           {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/files/US_DUAL-GENDER_DESKTOP_3800x1700_0ab9d54d-0cba-4218-bf34-8fb0450c9049_1900x.jpg?v=1651096483',
          },

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
        Products1:[
        {
            img:"https://cdn.shopify.com/s/files/1/0156/6146/products/1.3LWaterBottleBlackI1A2J20-Edit_BK_600x.jpg?v=1638161833",
            title:"Watter Bottle",
            price:"14$"
          },
       
          {
            img:"https://ld-wp73.template-help.com/tf/demo_biona/biona_demo/wp-content/uploads/2021/05/prod11.png",
            title:"Creatine",
            price:"26$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0156/6146/products/CrewSocks3pk-Navy-AthleticBlue-LightGreyMarlI1A2F-UBR44_ZH_ZH_600x.jpg?v=1649169628",
            title:"gs power high rise shorts",
            price:"45$"
          },
          {
            img:"https://ld-wp73.template-help.com/tf/demo_biona/biona_demo/wp-content/uploads/2021/05/prod15.png",
            title:"Whey Protein",
            price:"80$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0156/6146/products/GluteBundleFadedLilacMoonstoneBlueCactusGreenI1A6C-PBDF_ZH_ZH_600x.jpg?v=1647949760",
            title:"Glute set 3pk",
            price:"42$"
          },
          {
            img:"https://ld-wp73.template-help.com/tf/demo_biona/biona_demo/wp-content/uploads/2021/05/prod5.png",
            title:"BCAA",
            price:"30$"
          },
          {
            img:"https://ld-wp73.template-help.com/tf/demo_biona/biona_demo/wp-content/uploads/2021/05/prod7.png",
            title:"Casein",
            price:"60$"
          },
          {
            img:"https://cdn.shopify.com/s/files/1/0156/6146/products/AbRollerBlackI1A2W18.D11_GB_EDITTIFF_IS_a15b487d-18a9-4a25-a85b-d5a1c5f60c87_600x.jpg?v=1632255159",
            title:"Ab Roller",
            price:"20$"
          },
        ]
        
    }
  },
}
</script>
<style>
  .shop{
    
    min-height: 75vh;
    min-width: 57vh;
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
   background-image: url("https://cdn.shopify.com/s/files/1/0156/6146/files/Black_Texture_Desktop_1900x_194fa131-8b59-4ef1-ae5a-41a0d7180edf_1440x.webp?v=1650656275");
  
   
}
.shop1{
    min-height: 85vh;
    min-width: 57vh;
    background-size: cover !important;
    padding: 1rem 5%;
   background-image: url("https://cdn.shopify.com/s/files/1/0156/6146/files/DESKTOP_4_7ef0e495-01bb-43f8-9065-af6f72996f46_1900x.jpg?v=1650555758");
}
.shop2{
    
    min-height: 75vh;
    min-width: 57vh;
    background-size: cover !important;
    background-position: center !important;
    padding: 5rem 25%;
    display: flex;
    align-items: center;
   background-image: url("https://cdn.shopify.com/s/files/1/0156/6146/files/Black_Texture_Desktop_1900x_194fa131-8b59-4ef1-ae5a-41a0d7180edf_1440x.webp?v=1650656275");
  
   
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