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
                  
                    
                    <v-container>
                      <form action="" @submit.prevent="saveWorkout">
                                <!-- Workout Name -->
                    <div class="flex flex-col">
                    <label for="workout-name" class=" text-sm text-at-light-green"
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
                  
                          <v-btn
                       
                          color="primary"
                          type="submit"
                          depressed
                      
                      
                        >
                          Complete Your Workout
                        </v-btn>
                  
                                
                      </form>

    <v-divider></v-divider>
    <v-row>
    <v-col v-for="workout in workouts" :key="workout.id" cols="4" md="4" lg="4" >
       
        <v-card    
         class="mx-auto"
         max-width="368"
         style="height:250px ; background-color:lightgrey"
            :to="{name: 'WorkoutDetails' , params:{id:workout.id}}"
            
    >   <v-img 
                           @click="deleteWorkout(workout.id) " 
              src="../assets/images/trash-light-green.png"
              width="20" height="20"
         
           
            />
    <br><br>
         
          
        
             <v-img cover class=" mx-auto" width="90px" height="70px"  src="../assets/images/dumbbell-light-green.png"></v-img>
        <h1 >{{workout.workoutName}}</h1>
     
      
      </v-card>
    </v-col>
    </v-row>
     

  
  </v-container>
  </v-card>
               
        </div> 
         


 
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios';
export default {
    components: { NavbarView,  },
  data() {
    return{
      workoutName:"",
      workouts:{}
      
    }
  },
      mounted(){
      this.getWorkout();
    },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
    methods:{
        saveWorkout(){
            this.errors = [];
                   if(!this.workoutName){
                     this.errors.push("Name is required")
                   }
           axios.post('http://localhost:8000/api/auth/SaveWorkout' ,{
             workoutName : this.workoutName,
             id_user: this.user.id,
          
                
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                      this.$toast.success(" success workout saved.", {
                          position : "top-right"

                  });
               this.getWorkout();
                  
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
            getWorkout(){
       axios.get('http://localhost:8000/api/auth/getWorkout/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.workouts = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
        deleteWorkout(id){
        axios.delete('http://localhost:8000/api/auth/deleteWorkout/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                
                             this.$toast.success(" Deleted workout succesfuly.", {
                          position : "top-right"
                  });
                    this.getWorkout();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" Error workout Not Delete.", {
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