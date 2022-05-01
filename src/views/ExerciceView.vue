<template>
<navbar-view />

<v-row>
  <v-col cols="12" md="2">
    
  <div>
 <v-app-bar-nav-icon @click="drawer= true"   ></v-app-bar-nav-icon>
   <v-navigation-drawer style="margin-top:80px ; background-color:white ;" flat app v-model="drawer"  >
      <v-list-item-group  >  
        <!---------------------- Biceps -------- ------>
        <v-list-item  @click.prevent="getExerciceByCategorie(this.Biceps)">
          <v-list-item-action style="padding:0.5rem">
            <v-img src="https://img.icons8.com/ios-filled/2x/biceps.png" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Biceps</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
          <!---------------------- Triceps -------- ------>
           <v-list-item  @click.prevent="getExerciceByCategorie(this.Triceps)" >
          <v-list-item-action style="padding:0.5rem">
            <v-img src="https://img.icons8.com/ios-filled/2x/triceps.png" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Triceps</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
            <!---------------------- Pectoreaux -------- ------>
           <v-list-item  @click.prevent="getExerciceByCategorie(this.Pectoreaux)">
          <v-list-item-action style="padding:0.5rem">
            <v-img src="https://img.icons8.com/ios-filled/2x/chest.png" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >pectoreaux</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
            <!---------------------- Dorseaux -------- ------>
           <v-list-item   @click.prevent="getExerciceByCategorie(this.Dorseaux)">
          <v-list-item-action style="padding:0.5rem">
            <v-img src="https://img.icons8.com/ios-filled/2x/back-muscles.png" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Triceps</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
            <!---------------------- Jambes -------- ------>
           <v-list-item   @click.prevent="getExerciceByCategorie(this.Jambe)">
          <v-list-item-action style="padding:0.5rem">
            <v-img src="https://img.icons8.com/ios-filled/2x/quadriceps.png" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Jambes</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
            <!---------------------- Epaule -------- ------>
           <v-list-item  @click.prevent="getExerciceByCategorie(this.Epaule)"  >
          <v-list-item-action style="padding:0.5rem">
            <v-img src="https://img.icons8.com/ios-filled/2x/shoulders.png" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Epaule</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
            <!---------------------- Abdominauux -------- ------>
           <v-list-item  @click.prevent="getExerciceByCategorie(this.Abdominaux)"  >
          <v-list-item-action style="padding:0.5rem">
            <v-img src="https://img.icons8.com/ios-glyphs/2x/sit-ups.png" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Abdominaux</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
   </v-navigation-drawer>
       
    </div>
  </v-col>
  <v-col cols="12" md="10">
        <div class="Exercice">
   <v-container>
       <br><br>
       <span style="color:grey">CATÉGORIE</span><br><br>
       <h1 style="color:dodgerblue">Exercice</h1>
       <br>
      <v-img src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/344/external-dumbell-sports-and-awards-smashingstocks-hand-drawn-black-smashing-stocks-2.png" style="width:50px ; "></v-img>         <v-img src="https://img.icons8.com/color/344/pushups--v1.png" style="width:50px ;"></v-img>   
       
   </v-container>
</div>
<v-container>
  
      <v-row >
       <v-col cols="12" md="4"  lg="4" v-for="exercice in Exercices" :key="exercice.title" >
   <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
      max-width="800"
      v-bind="props"
    >
      <v-img   :aspect-ratio="1"   v-bind:src="'../image/Exercice/' + exercice.image" 
                   cover    >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-blue-darken-2 v-card--reveal "
            style="height: 100%; opacity: .8; "
          > 
 
          </div>
        </v-expand-transition>
      </v-img>
       
    </v-card>
  </v-hover><br>
  <span style="color:dodgerblue">Exercice</span>
   <h1 style="font-size:25px ; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">{{exercice.title}}</h1>
   <p>{{exercice.text}}</p>
  </v-col>
    </v-row><br><br>
</v-container>
  </v-col>
  </v-row>





</template>
<script>
import NavbarView from '@/components/NavbarView.vue'

import axios from 'axios'
export default {
  components: { NavbarView,  },
    data() {
     return{
        drawer: true,
         Exercices:{},
         Pectoreaux:"Pectoreaux",
         Dorseaux:"Dorseaux",
         Biceps:"Biceps",
         Triceps:"Triceps",
         Jambe:"Jambe",
         Epaule:"Epaule",
         Abdominaux:"Abdominaux",
         Mollets:"Mollets",

               items: [
                { text: 'Biceps', img: 'https://img.icons8.com/ios-filled/2x/biceps.png' },
                { text: 'Triceps', img: 'https://img.icons8.com/ios-filled/2x/triceps.png'  },
                { text: 'Jambes', img: 'https://img.icons8.com/ios-filled/2x/quadriceps.png'  },
                { text: 'Pectoreaux', img: 'https://img.icons8.com/ios-filled/2x/chest.png' },
                { text: 'Dorceaux', img: 'https://img.icons8.com/ios-filled/2x/back-muscles.png'  },
                { text: 'Abdominaux', img: 'https://img.icons8.com/ios-glyphs/2x/sit-ups.png'  },
                {text: 'Epaule' , img:'https://img.icons8.com/ios-filled/2x/shoulders.png'}
      
           
        
      ],
     }   
    },
         mounted(){
      this.getExercice();
      this.getExerciceByCategorie();
    },
    methods:{
           getExercice(){
       axios.get('http://localhost:8000/api/auth/getExercice')
        .then (res => {
         console.log(res.data);
         this.Exercices = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
         getExerciceByCategorie($categorie){
       axios.get('http://localhost:8000/api/auth/getExerciceByCategorie/'+$categorie)
        .then (res => {
         console.log(res.data);
         this.Exercices = res.data;
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
.Exercice{
    margin-top:50px;
    min-height: 35vh; 
    background: lightgray; 
   
}
</style>