<template>
<navbar-view />

<div>
   <v-container justify-center>
       <h2 class="text-center" style="color:black ; font-family:'Courier New', Courier, monospace"> Nutrition</h2> <br>
       <v-container>
          <v-row class="mx-16">
        
             <v-img  class="bg-white" width="150px" height="150px"   src="https://i.gifer.com/origin/3e/3e04f54abbcf57cd43b68702aa9e97dc_w200.gif" 
                   cover    >
                        
                   </v-img>
       
             <v-img  class="bg-white" width="150px" height="150px"   src="https://media0.giphy.com/media/xUPGcuomRFMUcsB9nO/200.gif" 
                   cover    >
                        
                   </v-img>
       
             <v-img  class="bg-white" width="150px" height="150px"   src="https://c.tenor.com/JCWloO9N0ugAAAAM/%E9%87%91%E5%AD%97%E5%A1%94pyramid-food-pyramid%E9%A3%9F%E7%89%A9%E9%87%91%E5%AD%97%E5%A1%94.giff" 
                   cover    >
                        
                   </v-img>
       
       </v-row>
       </v-container>
      
   </v-container>
</div> <br><br>
<p class="mx-16">Voici Nos Article à Consulter : </p>
<div>
    
  <v-row class="mx-16">
    <v-col cols="12" md="3"  lg="3" v-for="nutrition in nutritions" :key="nutrition.title" >
   <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
      max-width="800"
      v-bind="props"
       :to="{name: 'ArticleDetails' , params:{id:nutrition.id}}"
    >
     <v-img  class="bg-white"   height="380px"  cover v-bind:src="'../image/Nutrition/' + nutrition.image">
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-blue-darken-2 v-card--reveal "
            style="height: 100%; opacity: .8; "
          > 
           <p style="margin-top:320px  ; color:white"> <v-icon style="color:white">mdi-av-timer</v-icon> temps de lecture : 10min</p> 
          </div>
        </v-expand-transition>
    </v-img>
       
    </v-card>
  </v-hover><br>
  <span style="color:dodgerblue">Nutrition</span>
   <h1 style="font-size:25px ; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">{{nutrition.title}}</h1>
   <p>{{nutrition.text}}</p>
  </v-col>
 
  </v-row>

</div>
    



</template>
<script>

import axios from 'axios'
import NavbarView from '@/components/NavbarView.vue';
export default {
  components: { NavbarView },

 
    data() {
        return{
             nutritions :{},
        }
    },
      created(){
      this.getNutrition();
    },
    methods:{
            getNutrition(){
       axios.get('http://localhost:8000/api/auth/getNutrition')
        .then (res => {
         console.log(res.data);
         this.nutritions = res.data;
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
.ArticleNutrition{
    margin-top:50px;
    min-height: 35vh; 
    background: lightgray; 
   
}
</style>