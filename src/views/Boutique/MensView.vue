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
      <!--------------Image -------------->   
    <div style=" min-height: 85vh;
    min-width: 57vh;
   
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
   background-image: url(https://cdn.shopify.com/s/files/1/0669/7933/files/Web_BannerArtboard_1_copy_6_693c84a2-192a-4d1f-9b57-c3371f35f349_1900x.jpg?v=1648688872);"
>
    </div>  <br>
    <!-----------------Mens--------------->
    <div style=" min-height: 25; background: lightgray; padding:2rem "><br><br>
    <p style="color:black"> MENS</p>
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
        <v-btn value="left">
          Left
        </v-btn>

        <v-btn value="center">
          Center
        </v-btn>

        <v-btn value="right">
          Right
        </v-btn>

        <v-btn value="justify">
          Justify
        </v-btn>
      </v-btn-toggle>
    </v-col> 
    </div> 



</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  components: { NavbarView },
    setup() {
        
    },
}
</script>