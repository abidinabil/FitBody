<template>
   <navbar-view />
     <div class="workout">
       <v-row >
      <v-col  cols="12" xs="12" sm="6" md="12" lg="12" class="text-align:center">
            <h2 class="text-align:center" style="color:white">Welcome to FitBodt</h2>
            
            <p style="color:aliceblue ; font-size:20px"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem animi eveniet voluptate beatae, facilis vitae 
              rerum perspiciatis blanditiis porro, unde, sunt optio similique quidem ab. Veniam laudantium tempore dolore.</p>
           <v-btn to="ArticleNutrition" style="background-color: white ; color:black" >Commencer dés maintenant</v-btn>    
      </v-col>
      </v-row>
 
   </div>
    <div class="work">
        
                 <v-row> 
              <v-col cols="12" md="3"></v-col>
                 <v-col cols="12" md="3">
                      <v-img   src="https://wgl-demo.net/zium/wp-content/uploads/2021/12/cases_10.jpg" 
                   cover   style="margin-top:-100px" >
                    <p style="color:white; padding:5rem" class="text-center">OPTIMISER LA FORCE ET L'ENDURANCE</p>
                   </v-img>
                 </v-col>
                    <v-col cols="12" md="3">
                         <v-img  src="https://wgl-demo.net/zium/wp-content/uploads/2021/12/cases_9.jpg" 
                   cover    style="margin-top:-100px" >
                    <p style="color:white; padding:5rem" class="text-center">OPTIMISER LA FORCE ET L'ENDURANCE</p>
                   </v-img>
                    </v-col>
                       <v-col cols="12" md="3">
                            <v-img   src="https://wgl-demo.net/zium/wp-content/uploads/2021/12/cases_8.jpg" 
                   cover   style="margin-top:-100px">
                    <p style="color:white; padding:5rem" class="text-center">OPTIMISER LA FORCE ET L'ENDURANCE</p>
                   </v-img>
                       </v-col>
          </v-row><br>
           <v-card tile class="mx-4 " color="white">
                 <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> Record Workout</h1> <br>
                </v-toolbar>
                    <!-- Status Message -->
                    <div
                    v-if="statusMsg || errorMsg"
                    class="mb-10 p-4 bg-light-grey rounded-md shadow-lg"
                    >
                    <p class="text-at-light-green">
                        {{ statusMsg }}
                    </p>
                       
                        <v-alert type="error">{{ errorMsg }}</v-alert>
                    </div>
                          <!-- Form -->
    <form @submit.prevent="createWorkout" class="flex flex-col gap-y-5 w-full">
        <v-container>
                           <!-- Workout Name -->
                    <div class="flex flex-col">
                    <label for="workout-name" class="mb-1 text-sm text-at-light-green"
                        >Workout Name</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Workout Name"
                        variant="contained"
                         required
                        id="workout-name"
                        v-model="workoutName"
                    ></v-text-field>
                    </div>
                      <!-- Workout Type -->
                    <div class="flex flex-col">
                    <label for="workout-type" class="mb-1 text-sm text-at-light-green"
                        >Workout Type</label
                    >
                   <select
                            id="workout-type"
                        class="form-select"
                            required
                            @change="workoutChange"
                            v-model="workoutType"
                    >
                            <option value="select-workout">Select Workout</option>
                            <option value="strength">Strength Training</option>
                            <option value="cardio">Cardio</option>
                 </select>
                    </div><br><br>
                            <!-- Strength Training Inputs -->
        <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
            v-for="(item, index) in exercises"
            :key="index"
          >
          <v-row>
              <div>
                            <v-img
              @click="deleteExercise(item.id)"
              src="@/assets/images/trash-light-green.png"
              width="20" height="20"
           
            />
              </div>
              <v-col cols="12" md="4">
           
                   <label for="exercise-name" class="mb-1 text-sm text-at-light-green"
                >Exercise
              </label>
             
                        <v-text-field
                        color="secondary"
                        label="Exercices"
                        variant="contained"
                         required
                      v-model="item.exercise"
                    ></v-text-field>
              </v-col>
                <v-col cols="12" md="3">
                           <label for="sets" class="mb-1 text-sm text-at-light-green">Sets </label>
                        <v-text-field
                        color="secondary"
                        label="Sets"
                        variant="contained"
                         required
                         v-model="item.sets"
                    ></v-text-field>
              </v-col>
                <v-col cols="12" md="2">
                    <label for="reps" class="mb-1 text-sm text-at-light-green">Reps </label>
                        <v-text-field
                        color="secondary"
                        label="Reps"
                        variant="contained"
                         required
                      v-model="item.reps"
                    ></v-text-field>
              </v-col>
                <v-col cols="12" md="2">
                  <label for="weight" class="mb-1 text-sm text-at-light-green"
                >Weight (Kg)
              </label>
                        <v-text-field
                        color="secondary"
                        label="Weight"
                        variant="contained"
                         required
                        v-model="item.weight"
                    ></v-text-field>
              </v-col>
          </v-row>
          
          </div>
          
               <v-btn flat  color="secondary"  @click="addExercise" type="button" >    Add Exercise </v-btn>
          </div>
                    
                     <!-- Cardio Inputs -->
        <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
            v-for="(item, index) in exercises"
            :key="index"
          >
          <v-row>
                <div>
                 <v-img
              @click="deleteExercise(item.id)"
              src="@/assets/images/trash-light-green.png"
              width="20" height="20"
           
            />
              </div>
              <v-col cols="12" md="4">
              
                  <label for="cardio-type" class="mb-1 text-sm text-at-light-green"
                >Type
                
              </label>
                        <select
                        class="form-select" aria-label="Default select example"
                        v-model="item.cardioType"
                    >
                        <option value="#">Select Type</option>
                        <option value="run">Runs</option>
                        <option value="walk">Walk</option>
                    </select>
              </v-col>
                <v-col cols="12" md="3">
                    <label for="distance" class="mb-1 text-sm text-at-light-green"
                >Distance
              </label>
                        <v-text-field
                        color="secondary"
                        label="Distance"
                        variant="contained"
                         required
                         v-model="item.distance"
                    ></v-text-field>
              </v-col>
                <v-col cols="12" md="2">
                     <label for="duration" class="mb-1 text-sm text-at-light-green"
                >Duration
              </label>
                        <v-text-field
                        color="secondary"
                        label="Duration"
                        variant="contained"
                         required
                      v-model="item.duration"
                    ></v-text-field>
              </v-col>
                <v-col cols="12" md="2">
                      <label for="pace" class="mb-1 text-sm text-at-light-green">Pace </label>
                        <v-text-field
                        color="secondary"
                        label="Pace"
                        variant="contained"
                         required
                        v-model="item.pace"
                    ></v-text-field>
              </v-col>
          </v-row>
           
          </div>
          
           <v-btn flat  color="secondary"  @click="addExercise" type="button" >    Add Exercise </v-btn>
          </div>
          <br><br>
             <v-btn
            flat
            type="submit"
            color="secondary"  >
            Record Workout
            </v-btn>
        
        </v-container>
           
                   </form>  
                </v-card>
        </div> 
         


 
</template>
<script>
import { ref } from "vue";
import { uid } from "uid";
import NavbarView from '@/components/NavbarView.vue';
import axios from 'axios';
export default {
  components: { NavbarView },
  
  
  setup() {
    // Create data
     const workoutName = ref("");
    const workoutType = ref("select-workout");
    const exercises = ref([1]);
    const statusMsg = ref(null);
    const errorMsg = ref(null);
    // Add exercise
      const addExercise = () => {
      if (workoutType.value === "strength") {
        exercises.value.push({
          id: uid(),
          exercise: "",
          sets: "",
          reps: "",
          weight: "",
        });
     
      }
      exercises.value.push({
        id: uid(),
        cardioType: "",
        distance: "",
        duration: "",
        pace: "",
      });
    };
    // Delete exercise
       const deleteExercise = (id) => {
      if (exercises.value.length > 1) {
        exercises.value = exercises.value.filter((exercise) => exercise.id !== id);
        return;
      }
         errorMsg.value = "Error: Cannot remove, need to at least have one exercise";
      setTimeout(() => {
        errorMsg.value = false;
      }, 5000);
       }
    // Listens for chaging of workout type input
       const workoutChange = () => {
      exercises.value = [];
      addExercise();
    };
    

  /*const createWorkout = async() => {
      try{
      const {error} = axios.post("http://localhost:8000/api/auth/SaveWorkout")([
         {
            workoutName : workoutName.value,
            workoutType: workoutType.value,
            exercises: exercises.value,
         },
      ]);
         if (error) throw error;
        statusMsg.value = "Succes: Workout Created!";
        workoutName.value = null;
        workoutType.value = "select-workout";
        exercises.value = [];
          setTimeout(() => {
          statusMsg.value = false;
        }, 5000);
      }catch (error) {
          errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = false;
        }, 5000);
      }
     
    }  */
 
  

      
    
    return {      
      workoutName,
      workoutType,
      exercises,
      statusMsg,
      errorMsg,
     addExercise,
     workoutChange,
     deleteExercise,
     
 
   
   };
   
  },
     methods: {
      createWorkout(){
    
           axios.post('http://localhost:8000/api/auth/SaveWorkout' ,{
               workoutName : this.workoutName,
               workoutType: this.workoutType,
               exercises: this.exercises,
             
                
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                    alert('success')
            
               }else{
                 alert('error')
               }
          });
        }, 
    },

};
</script>
<style>
.workout{
      min-height: 105vh;
    min-width: 57vh;
   
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
   background-image: url("https://wgl-demo.net/zium/wp-content/uploads/2021/12/home2_image_1.jpg");
}
.work{
      background-color: #181818 ;
    
}
</style>