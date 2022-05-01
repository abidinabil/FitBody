<template>
<navbar-view />

<div class="Exercice">
   <v-container>
       <br><br>
       <span style="color:grey">CATÉGORIE</span><br><br>
       <h1 style="color:dodgerblue">Exercice</h1>
       <br>
      <v-img src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/344/external-dumbell-sports-and-awards-smashingstocks-hand-drawn-black-smashing-stocks-2.png" style="width:50px ; "></v-img>         <v-img src="https://img.icons8.com/color/344/pushups--v1.png" style="width:50px ;"></v-img>   
  
   </v-container>
</div>
<side-bar-exercice />
<v-container>
    <v-btn @click.prevent="getExerciceByCategorie(this.poitrine)">Poitrine</v-btn>
      <v-btn>Dorseauc</v-btn>
        <v-btn>Jambes</v-btn>
          <v-btn>Biceps</v-btn>
            <v-btn>Triceps</v-btn><br><br>
    <h1>All Exercice</h1><br>
      <v-row class="mx-16">
      <v-col cols="12" md="3" lg="3" v-for="exercice in Exercices" :key="exercice.text">
        <v-card 	>
        <div class="ui-card">
          <img v-bind:src="'../image/Exercice/' + exercice.image" cover height="350" width="800">
          <div class="description">
            <h3>{{exercice.title}}</h3>
          </div>
        </div>
      </v-card>
     
        <p style="color: black; font-weight: bold;">{{exercice.text}}</p> 
       
         </v-col>
    </v-row><br><br>
</v-container>



</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import SideBarExercice from '@/components/SideBarExercice.vue'
import axios from 'axios'
export default {
  components: { NavbarView, SideBarExercice },
    data() {
     return{
         Exercices:{},
         poitrine:"poitrine"
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