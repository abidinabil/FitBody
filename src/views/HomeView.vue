<template>
<navbar-view />
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
                    <v-container>

    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>
  
    <v-window v-model="step">
      
      <v-window-item :value="1">
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
                      <v-btn
        v-if="step < 3"
        color="primary"
        type="submit"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
     
                    </form>
      </v-window-item>
     <v-container>
      <v-window-item :value="2" >
           
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

          

       
       
      </v-window-item>
      </v-container>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="text-caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

  
  </v-container>
  </v-card>
  

  <br>
 
  <form action="" @submit.prevent="submit">
      <input type="text" v-model="name">
    <input type="file" @change="onChange">
    <input type="submit" value="upload">
 
  </form><br><br><br>
      <v-text-field
                 v-model="name" 
            color="secondary"
            label="name"
            variant="contained"
            placeholder="Placeholder"
            
          ></v-text-field>
  <h1>selected file </h1>
  <input @change="imageChange" type="file" class="hidden" name="image" ref="files" multiple>
   <div>
     <p v-for="(image,index) in images" :key="index">{{image.name}}</p>
   </div>
   <v-btn @click="uploadImages">upload image</v-btn>

   <table>
     <thead>
       <tr>
         <th>id</th>
         <th>images</th>
         <th>name</th>
         <th>action</th>
       </tr>
     </thead>
     <tbody>
       <tr v-for="picture in pictures" :key="picture.id" >
        <td>{{picture.id}} </td>
        <td><img v-for="img in picture.images" :key="img.id" v-bind:src=" '../image/boutique/' + img" width="100px" height="100px" >
        
        </td>
          
          
        <td>{{picture.name}}</td>
       </tr>
     </tbody>
   </table><br><br><br>
   
        <div >
          <div class="card card-body text-center mt-5">
            <h1 class="heading display-5 pb-3">Calorie Calculator</h1>
            <form id="calorie-form">

              <div class="form-group row">
                <label for="age" class="col-sm-2 col-form-label">Age</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="age" placeholder="Ages 15-80">
                </div>
              </div>

              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                  <div class="col-sm-10" id="form-radio">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="male" name="customRadioInline1" class="custom-control-input" checked="checked">
                      <label class="custom-control-label" for="male">Male</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="female" name="customRadioInline1" class="custom-control-input">
                      <label class="custom-control-label" for="female">Female</label>
                    </div>  
                  </div>
                </div> 
              </fieldset> 

              <div class="form-group row">
                <label for="weight" class="col-sm-2 col-form-label">Weight</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="weight" placeholder="In kilograms">
                </div>
              </div>

              <div class="form-group row">
                <label for="height" class="col-sm-2 col-form-label">Height</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="height" placeholder="In centimeters">
                </div>
              </div>
              
              <div class="form-group row">
                <legend class="col-form-label col-sm-2 pt-0">Activity</legend>
                <select class="custom-select col-sm-10" id="list">
                  <option selected value="1">Sedentary (little or no exercise)</option>
                  <option value="2">Lightly active (light exercise/sports 1-3 days/week)</option>
                  <option value="3">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                  <option value="4">Very active (hard exercise/sports 6-7 days a week)</option>
                  <option value="5">Extra active (very hard exercise/sports & physical job or 2x training)</option>
                </select>
              </div>

              <div class="form-group">
                <input type="submit" value="Calculate" class="btn btn-dark btn-block">
              </div>

            </form>

            <div id="loading">
              <img src="./img/Loading.gif" alt="">
            </div>

            <div id="results" class="pt-4">
              <h5>Total Calories</h5>
              <div class="form-group">
                <div class="input-group">
                  <input type="number" class="form-control" id="total-calories" disabled>
                </div>
              </div>                       
            </div>
          </div>
        </div><br><br>
            <div id="app">
              <h1>test</h1>
        
    </div>
   
    
</template>


 <!--<script>
import { defineComponent } from 'vue';
// Components
import NavbarView from '@/components/NavbarView.vue';
import axios from 'axios';
export default defineComponent({
  name: 'HomeView',
  components:{
    NavbarView
  },
data(){
  return{
    image:null,
    name:"",
    
  }
},
  methods: {
        /* imageChange(){
           for(let i =0 ; i<this.$refs.files.files.lenght ; i++){
             this.images.push(this.$refs.files.files[i]);
             console.log(this.images)
           }
         },
         uploadImage(){
           var self = this;
           let formData = new FormData();
           for(let i = 0 ; i< this.images.lenght;i++){
             let file =self.images[i];
             formData.append('files [' +i + ']' , file);
           }
          
            console.log(formData)
            axios.post('http://localhost:8000/api/auth/SaveImages',formData , {
              text:this.text,
            }).then(response =>{
               
              self.$refs.files.value='';
              self.images =[];
               console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
         } */
         onChange(e){
           console.log("selected file", e.target.files[0])
           this.image = e.target.files[0]; 
         },
         submit(){
           let fd = new FormData();
           
         
           console.log(FormData)
            console.log(this.name)
           fd.append('images', this.image);
            fd.append('name', this.name);
           
      
           axios.post("http://localhost:8000/api/auth/SaveImages" ,fd , { 
           
           })
          
           .then(res=>{
             console.log("Response" , res.data);
               if(res.status == 200){
                    alert('success');
                    
               }else{
                 alert('error')
               }
             
           })
         },
         
       },
});
</script> -->
<!--<script>
import axios from 'axios'
import { ref } from "vue";
import { uid } from "uid";
  export default {
     data: () => ({
      step: 1,
    }),
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
   

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
    methods:{
        saveWorkout(){
    
           axios.post('http://localhost:8000/api/auth/SaveWorkout' ,{
             workoutName : this.workoutName,
             workoutType: this.workoutType,
                
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                      this.$toast.success(" success workout saved.", {
                          position : "top-right"
                  });
            
                  
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
       axios.get('http://localhost:8000/api/auth/getWorkout')
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
                
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
    }
  }
</script> -->
 <!--<script>

import axios from 'axios';

export default {
  data() {
    return{
      images:[],
      pictures:'',
      name:'',
    }
    
  },
  methods:{
    imageChange(){
      for(let i=0 ; i< this.$refs.files.files.length; i++){
        this.images.push(this.$refs.files.files[i]);
        console.log(this.images)
      }
    },
    uploadImages(){
      var self = this;
      let formData = new FormData();
      for( let i = 0 ; i<this.images.length; i++){
        let file = self.images[i];
        formData.append('files['+i+']',file);
        formData.append('name', this.name);
      }
      const config = {
        headers:{"content-type" : "multipart/form-data"}
      }
      axios.post("http://localhost:8000/api/auth/store",formData,config)
      .then(response => {
        self.$refs.files.value = '';
        self.images=[];
        self.getImages();
                console.log(response)
      }).catch(error => {
        console.log(error)
      })

    },
    getImages(){
      axios.get("http://localhost:8000/api/auth/getImages")
      .then(response=>{
        this.pictures = response.data.images;

      }).catch(error=>{
          console.log(error)
      })
    }
  },
  created(){
    this.getImages();
  }
}
</script>  -->

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.enCours{
  border-left: 4px solid orange;
}
.project.finit{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  border-left: 4px solid #3cd1c2;
}
.v-chip.enCours{
  border-left: 4px solid orange;
}
.v-chip.finit{
  border-left: 4px solid tomato;
}
 
</style>