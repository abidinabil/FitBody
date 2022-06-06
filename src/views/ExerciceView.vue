<template>
<navbar-view />

<v-row>
  <v-col cols="12" md="2">
    
  <div>
 <v-app-bar-nav-icon @click="drawer= true"   ></v-app-bar-nav-icon>
   <v-navigation-drawer style="margin-top:80px ; background-color:white ;" flat app v-model="drawer"  >
      <v-list-item-group  >  <br><br>
      <!----------------------------------All Exercice ---------------->
         <v-list-item  @click.prevent="getExercice(this.Exercices)">
          <v-list-item-action style="padding:0.5rem">
            <v-img src="data:image/png;base64,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" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Tous Les Exercices</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
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
       <v-col cols="12" md="3"  lg="3" v-for="exercice in Exercices" :key="exercice.title" >
   <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
      max-width="800"
      v-bind="props"
        :to="{name: 'ExerciceDetails' , params:{id:exercice.id}}"
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