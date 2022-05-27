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
       <div class="alert alert-danger mt-4" v-if="errors.length" > 
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
              </ul>
                  </div> 
    <form action="">
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
    </form>
   
              <v-row v-for="exercice in exerciceWorkouts" :key="exercice.exercice" class="mx-2"> 
               <v-col sm="3" md="2">
                   <v-img 
                           @click="deleteExerciceWorkout(exercice.id) " 
              src="../assets/images/trash-light-green.png"
              width="30" height="30"/> 
                     <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
          <v-img type="button" v-bind="props"  @click="updateExerciceWorkout(exercice.id)"  width="30" height="30"
                         src="https://www.lenovo.com/_ui/desktop/common/images/lsb/lsb-loading.gif" >
                        </v-img>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card style=" width: 900px ; margin-top:-150px ; margin-left:-150px" class="exercice">
            <v-toolbar
              color="primary"
            >Opening from the top</v-toolbar>
             <v-window v-model="step">
                <v-window-item :value="1">  
                     <div class="alert alert-danger mt-4" v-if="errors.length" > 
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
              </ul>
                  </div>             
                 <form action="" >  
                        <h4
                          class="text-center" >Modifier Exercice</h4>  
                           <v-row class="mx-4">
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editexercice"    color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editsets"   color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editreps"   color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                              <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editweight"    color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           
                         
                        
                           </v-row>
 
                           </form>
                           </v-window-item>
                           </v-window>
                           
                      
                          
            <v-card-actions class="justify-center">
              <v-btn
                text
                @click="isActive.value = false"
              >Close</v-btn>
                <v-btn
              @click="editExerciceWorkout(exercice.id)"
              >Update</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog> 
               </v-col>    
          <v-col sm="3" md="2">
                    
            <div >Exercice</div>
            <div>{{exercice.exercice}}</div>
          </v-col>
          <v-col xs="6" sm="3" md="2">
            <div class="caption grey--text">sets</div>
            <div>{{exercice.sets}}</div>
          </v-col>
          <v-col xs="6" sm="3" md="2">
            <div class="caption grey--text"> reps</div>
            <div>{{exercice.reps}}</div>
          </v-col>
          <v-col xs="2" sm="3" md="2">
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
            editexercice:"",
           editsets:"",
           editreps:"",
           editweight:"",
           errors:[]
        }
        
    },
       mounted(){
      this.getWorkoutDetails();
      this.getExerciceWorkout()
    },
    methods:{
        saveExerciceWorkout(){
             if(!this.exercice){
                     this.errors.push("Exercice is required")
                   }
                    if(!this.sets){
                     this.errors.push("sets is required")
                   }
                    if(!this.reps){
                     this.errors.push("reps is required")
                   }
                    if(!this.weight){
                     this.errors.push("weight is required")
                   }
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
         updateExerciceWorkout(id){
           axios.get('http://localhost:8000/api/auth/updateExerciceWorkout/'+ id)
        .then(response => {
               console.log(response);
               this.id = response.data.id;
               this.editexercice = response.data.exercice;
               this.editsets = response.data.sets;
                   this.editreps = response.data.reps;
               this.editweight = response.data.weight;
            
     }); 
    },
      editExerciceWorkout(){
          if(!this.editexercice){
                     this.errors.push("Exercice is required")
                   }
                    if(!this.editsets){
                     this.errors.push("sets is required")
                   }
                    if(!this.editreps){
                     this.errors.push("reps is required")
                   }
                    if(!this.editweight){
                     this.errors.push("weight is required")
                   }
                 
           axios.put('http://localhost:8000/api/auth/editExerciceWorkout' ,{
             
                id : this.id,
               exercice : this.editexercice,
               sets: this.editsets,
                reps: this.editreps,
                 weight: this.editweight,
             
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                        this.$toast.success(" update Coach succesfuly.", {
                          position : "top-right"
                  });
                      this.getExerciceWorkout();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" error Coach not update.", {
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
<style>
@media only screen and (max-width: 768px) {
  .exercice {
    
    width: 400px;
    margin-left: -200px;
  }
}
</style>