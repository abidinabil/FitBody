<template>
<navbar-view />
    <div style="margin-top:30px">
   
        <v-card    
         class="mx-auto"
         max-width="700"
         style=" background-color:lightgrey"
   
    ><br><br>

             <v-img cover class=" mx-auto" width="90px" height="70px"  src="../assets/images/dumbbell-light-green.png"></v-img><br><br>
             <h1 style="background-color: cadetblue;; color:white; font-size:20px ; text-align:center" class="text-center">Strength Training</h1><br>
        <h1 class="text-center">{{workouts.workoutName}}</h1>

      </v-card><br><br>
       <v-card    
         class="mx-auto"
         max-width="700"
         style=" background-color:lightgrey"
   
    ><br><br>
    
     <v-row class="mx-1">
            
              <v-col cols="12" md="6">
           
                   <label for="exercise-name" class="mb-1 text-sm text-at-light-green"
                >Exercise
              </label>
             
                        <v-text-field
                        color="secondary"
                        label="Exercices"
                        variant="contained"
                         required
                         v-model="exercice"
                    
                    ></v-text-field>
              </v-col>
                <v-col cols="12" md="2">
                           <label for="sets" class="mb-1 text-sm text-at-light-green">Sets </label>
                        <v-text-field
                        color="secondary"
                        label="Sets"
                        variant="contained"
                         required
                         v-model="sets"
                      
                    ></v-text-field>
              </v-col>
                <v-col cols="12" md="2">
                    <label for="reps" class="mb-1 text-sm text-at-light-green">Reps </label>
                        <v-text-field
                        color="secondary"
                        label="Reps"
                        variant="contained"
                         required
                         v-model="reps"
                  
                    ></v-text-field>
              </v-col>
                <v-col cols="12" md="2">
                  <label for="weight" class="mb-1 text-sm text-at-light-green"
                >Weight
              </label>
                        <v-text-field
                        color="secondary"
                        label="Weight(Kg)"
                        variant="contained"
                         required
                         v-model="weight"
                      
                    ></v-text-field>
              </v-col>
              <button type="submit" ></button><br>
                <v-btn  variant="outlined" class="mx-auto" style="color:cadetblue" @click.prevent="saveExerciceWorkout">  Record exercice </v-btn><br><br><br>
            
          </v-row>
              <v-row v-for="exercice in exerciceWorkouts" :key="exercice.exercice" class="mx-2"> 
                   
          <v-col xs="12" md="6">
                           <v-img 
                           @click="deleteExerciceWorkout(exercice.id) " 
              src="../assets/images/trash-light-green.png"
              width="20" height="20"
           
            />
            <div >Exercice</div>
            <div>{{exercice.exercice}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">sets</div>
            <div>{{exercice.sets}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text"> reps</div>
            <div>{{exercice.reps}}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
               <div class="caption grey--text"> weight</div>
            <div>{{exercice.weight}}</div>
          </v-col>
      </v-row>
     
          
    </v-card>
     
   
    
  
    
   
    </div>
</template>
<script>
import axios from 'axios';
import NavbarView from '@/components/NavbarView.vue';
export default {
  components: { NavbarView },
    data() {
        return{
            workouts:{},
            exerciceWorkouts:{},
            exercice: "",
            sets:"",
            reps:"",
            weight:"",
        }
        
    },
       mounted(){
      this.getWorkoutDetails();
      this.getExerciceWorkout()
    },
    methods:{
        saveExerciceWorkout(){
           
           axios.post('http://localhost:8000/api/auth/saveExerciceWorkout' ,{
               id_workouts:this.workouts.id,
                exercice : this.exercice,
               sets: this.sets,
               reps: this.reps,
               weight : this.weight,
          
                
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                      this.$toast.success(" success workout saved.", {
                          position : "top-right"

                  });
                  this.getExerciceWorkout()
                  
         
                  
               }
          }).catch(
         error =>{
             this.$toast.error(" error workout not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
        },
           getWorkoutDetails(){
       axios.get('http://localhost:8000/api/auth/getWorkoutDetails/'+this.$route.params.id)
        .then (res => {
         console.log(res.data);
         this.workouts = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
       getExerciceWorkout(){
       axios.get('http://localhost:8000/api/auth/getExerciceWorkout/'+this.$route.params.id)
        .then (res => {
         console.log(res.data);
         this.exerciceWorkouts = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
     
         deleteExerciceWorkout(id){
        axios.delete('http://localhost:8000/api/auth/deleteExerciceWorkout/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                
                             this.$toast.success(" Deleted Exercice succesfuly.", {
                          position : "top-right"
                  });
                    this.getExerciceWorkout();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" Error Exercice Not Delete.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
     },
    }
}
</script>