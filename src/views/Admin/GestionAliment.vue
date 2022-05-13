<template>
    <side-bar />
    <v-row>
    <v-col cols="12" md="2"></v-col>
    <v-col cols="12" md="10">
   
      <v-card
      
      height="500px"
      tile
      flat
      class="mx-10"
      style="background:url(https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); margin-top:80px"
      dark
    >
     
    </v-card>
        <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="transparent">
                

                <h1 style="font-size:20px; "> List Aliment</h1> <br>
                
                

                <v-spacer></v-spacer>
                   <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
          Ajout Aliment
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        
          <v-spacer></v-spacer>
          
        </v-toolbar>
         <v-container style="margin-top:70px">
     
            
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                      <div class="alert alert-danger mt-4" v-if="errors.length" > 
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
              </ul>
                  </div>
                 <form action="" @submit.prevent="SaveAliment" novalidate>  
               <v-row >
                   
                 
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center" >Ajouter Aliment</h4>  
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="name"  label="name" outline  dense   color="blue"  autocomplete="false"  class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="calorie"  label="Calorie" outline  dense   color="blue"  autocomplete="false"  class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="carbs"  label="Carbs" outline  dense   color="blue"  autocomplete="false"  class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="fat" label="Fat" outlined  dense color="blue" autocomplete="false" class="mt-4"  />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="proteine" label="Proteine" outlined  dense color="blue" autocomplete="false" class="mt-4"  />
                           </v-col>
                            
                           </v-row>
                             
                           <input type="submit" value="Ajouter">
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                     
                  </v-row>
                  </form>
                </v-window-item>
                <v-window-item :value="2">
                  
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>


     
      </v-card>
    </v-dialog>
  </v-row>
         

                </v-toolbar>

                 </v-col>
                 
                 
            </v-row>
             <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Carbs</th>
            <th scope="col">Fat</th>
            <th scope="col">Proteine</th>
            <th> Action</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="aliment in Aliments" :key="aliment.id">
              <td>{{aliment.id}}</td>
            <td>{{aliment.name}}</td>
            <td>{{aliment.calorie}}</td>
            <td>{{aliment.carbs}}</td>
             <v-img>{{aliment.fat}}</v-img>
             <td>
               <v-btn type="button" @click="deleteNutrtion(nutrition.id) " color="error"> delete</v-btn> 
               
              
                  <v-container >
                
       
      <v-dialog
        transition="dialog-bottom-transition"
        style="margin-top:-400px ;"
     
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            @click="updateNutrition(nutrition.id)"
          >Update</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
            >Update Nutrition</v-toolbar>
                  <div class="alert alert-danger mt-4" v-if="errors.length" > 
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
              </ul>
                  </div>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
    <v-row align="center" justify="center">
                          <v-col cols="12" sm="12">
                           <v-row>
                           <v-col cols="12" sm="12">
                            <v-text-field
                            v-model="edittitle"
                            label="title"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="12">
                            <v-text-field
                            v-model="edittext"
                            label="text"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="12">
                              <v-textarea
                              v-model="editsubtext"
                            background-color="grey lighten-2"
                            color="cyan"
                            label="Label"
                          ></v-textarea>
                           </v-col>
                       
                           </v-row>
                          <v-text-field
                            v-model="editimage"
                            label="image"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                               
                           
                          <v-btn color="black" dark block tile type="submit" @click="editNutrition" data-dismiss="modal"> Update</v-btn>
                 
                          </v-col>
                        </v-row> 

 

  
  </v-form>
            <v-card-actions class="justify-end">
              <v-btn
              color="blue" dark block tile
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    
   
               </v-container>
               
             </td>
             
          </tr> 
              
        </tbody>
      </table>  
    </v-card>
    <!-- Button trigger modal -->

  <!-- Button trigger modal -->


  </v-col> 
  </v-row>
</template>
<script>
import SideBar from "@/components/SideBar.vue"
import axios from 'axios'
export default {
  components: { SideBar },
    data(){
        return{
              test: false,
              dialog:false,
              
              
                
          Aliments :{},
          id:"",
               name:"",
               calorie:"",
               carbs:"",
               fat:"",
               proteine:"",
               edittext:"",
               editsubtext:"",
               editimage:"",
               errors:[],
           
        
        }
    },
      created(){
      this.getAliment();
    },
    methods:{
        
    
             SaveAliment(){
                 this.errors = [];
                   if(!this.name){
                     this.errors.push("Name is required")
                   }
                    if(!this.calorie){
                     this.errors.push("calorie is required")
                   }
                    if(!this.carbs){
                     this.errors.push("carbs is required")
                   }
                    if(!this.fat){
                     this.errors.push("fat is required")
                   }
                    if(!this.proteine){
                     this.errors.push("proteine is required")
                   }
                if(!this.errors.lenght){
                   let fd = new FormData();
           
         
           console.log(FormData)
          
               fd.append('name', this.name);
           fd.append('calorie', this.calorie);
            fd.append('carbs', this.carbs);
                 fd.append('fat', this.fat);
                      fd.append('proteine', this.proteine);
     axios.post("http://localhost:8000/api/auth/SaveAliment" ,fd , { 
           
           })
        .then (res => {
         console.log(res);
           this.$toast.success(" success aliment saved.", {
                          position : "top-right"
                  });
                 
        
       }).catch(
         error =>{
             this.$toast.error(" error aliment not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
                }
     },
     
    
      
     
          getAliment(){
       axios.get('http://localhost:8000/api/auth/getAliment')
        .then (res => {
         console.log(res.data);
         this.Aliments = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
       mounted() {
       console.log('Nutrition ')
     },
     deleteNutrtion(id){
        axios.delete('http://localhost:8000/api/auth/deleteNutrition/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getNutrition();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
     updateNutrition(id){
           axios.get('http://localhost:8000/api/auth/updateNutrition/'+ id)
        .then(response => {
               console.log(response);
                  this.id = response.data.id;
               this.edittitle = response.data.title;
               this.edittext = response.data.text;
               this.editsubtext = response.data.subtext;
               this.editimage = response.data.image
     }); 
    },
       editNutrition(){
             if(!this.edittitle){
                     this.errors.push("Name is required")
                   }
                    if(!this.edittext){
                     this.errors.push("text is required")
                   }
                  
                    if(!this.editsubtext){
                     this.errors.push("description is required")
                   }
                    if(!this.editimage){
                     this.errors.push("photo is required")
                   }
           axios.put('http://localhost:8000/api/auth/editNutrition' ,{
                id : this.id,
               title : this.edittitle,
               text: this.edittext,
               subtext: this.editsubtext,
               image : this.editimage,
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                          this.$toast.success(" update Nutrition succesfuly.", {
                          position : "top-right"
                  });
                      this.getNutrition();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" error Nutrition not update.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
       },
       imagechange(){
         for(let i = 0 ;i<this.$refs.files.files.length; i++){
           this.image.push(this.$refs.files.files[i]);
           console.log(this.image);
         }
       },

    }
}
</script>
<style>
@media(max-width: 500px){
  .table thead{
    display:none;
  }
  .table, .table tbody, .table tr,  .table th, .table td{
    display: block;
    width: 100%;
  }
  .table tr{
    margin-bottom: 15px;
 
  }
    
     
      .table th::before{
        content: attr(data-label);
        position: absolute;
        left: 0;
       
        padding-left: 15px;
        font-size: 15px;
        font-weight: bold;
        text-align: left;
      };
      .si{
    height:150vh;
    background: linear-gradient(-3deg,#172b4d 50%,#2dcecc 50%, #2dce89);
}
}
</style>