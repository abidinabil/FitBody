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
      style="background:url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500); margin-top:80px"
      dark
    >
     
    </v-card>
         <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> List Exercice</h1> <br>
                
                

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
      rounded="lg"
      color="primary"
      v-bind="props"
    >
      Ajout Exercice
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
  
        </v-toolbar>
          <v-container style="margin-top:-20px">
     
            
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                   <form action="" @submit.prevent="SaveExercice">  
               <v-row >
                   

                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Ajouter Exercice</h4> <br><br>
                        
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="12">
                           <v-row>
                           <v-col cols="12" sm="6">
                                 <v-text-field
                            color="secondary"
                            label="Title"
                            variant="contained"
                            required
                          v-model="title"
                        ></v-text-field>
                           </v-col>
                           <v-col cols="12" sm="6">
                             <v-text-field
                              color="secondary"
                              label="Text"
                              variant="contained"
                              required
                            v-model="text"
                          ></v-text-field>
                           </v-col>
                           <v-col cols="12" sm="6">
                                <label for="workout-type" class="mb-1 text-sm text-at-light-green"
                        >Catégorie Exercice</label
                    >
                            <select
                            id="Catégorie"
                            class="form-select"
                            required
                           
                            v-model="catégorie"
                    >
                            <option value="select-workout">Select Catégorie</option>
                            <option value="pectoreaux">Pectoreaux</option>
                            <option value="Dorseaux">Dorseaux</option>
                           
                             <option value="Biceps">Biceps</option>
                             <option value="Triceps">Triceps</option>
                             <option value="Jambe">Jambe</option>
                              <option value="Abdominaux">Abdominaux</option>
                              <option value="Epaule">Epaule</option>
                              <option value="Mollets">Mollets</option>
                 </select>
                  
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col>
                           
                            
                            <v-col cols="12" sm="12">
                              <v-textarea
                              v-model="subtext"
                          color="secondary"
                              label="Text"
                              variant="contained"
                              required
                          ></v-textarea>
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange1"  >
                          </v-file-input>
                           </v-col>

                           </v-row>
                          <v-btn
                          class="ma-2"
                          outlined
                          color="indigo"
                          type="submit" value="Ajouter" 
                        >
                          Ajouter
                        </v-btn>
    
                 
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
             <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">text</th>
            <th scope="col">catégories</th>   
            <th scope="col">description</th>
            <th scope="col">photo</th>
            <th> Action</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="exercice in Exercices" :key="exercice.id">
     
           
               <td>{{exercice.id}}</td>
            <td>{{exercice.title}}</td>
            <td>{{exercice.text}}</td>
            <td>{{exercice.catégorie}}</td>

              <td>{{exercice.subtext}}</td>
            <v-img v-bind:src="'../image/Exercice/' + exercice.image"></v-img>
                 <v-img v-bind:src="'../image/Exercice/' + exercice.image1"></v-img>
             <td>
               <v-btn type="button" @click="deleteExercice(exercice.id) " color="error"> delete</v-btn> 
               
              
                 
               
             </td>
             
          </tr> 
              
        </tbody>
              
        </table>
         
                       
                       </v-card>
        </v-col>
        </v-row>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import axios from 'axios'
export default {
  components: { SideBar },
    data() {
        return{
           dialog:false,
           Exercices:{},
           title:"",
           text:"",
           subtext :"",
           catégorie:"",
           image:"",
           image1:""
           
           
        } 
    },
       mounted(){
      this.getExercice();
    },
    methods:{
       //************************Save Exercice ************************* */
             onChange(e){
           console.log("selected file", e.target.files[0])
           this.image = e.target.files[0]; 
         },
               onChange1(e){
           console.log("selected file", e.target.files[0])
           this.image1 = e.target.files[0]; 
         },
         SaveExercice(){
           let fd = new FormData();
           console.log(FormData)
     
             fd.append('title', this.title);
             fd.append('catégorie', this.catégorie);
             fd.append('text', this.text);  
             fd.append('subtext', this.subtext);
             fd.append('image', this.image);
              fd.append('image1', this.image1);
            
        
           
      
           axios.post("http://localhost:8000/api/auth/SaveExercice" ,fd , { 
           
           })
          
           .then(res=>{
             console.log("Response" , res.data);
               if(res.status == 200){
                     this.$toast.success(" success Exercice saved.", {
                          position : "top-right"
                  }); 
                  this.getExercice();    
               }
             
           }).catch(
         error =>{
             this.$toast.error(" error Exercice not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
         },
         //************************Fin Save Exercice ************************* */
         
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
          deleteExercice(id){
        axios.delete('http://localhost:8000/api/auth/deleteExercice/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getExercice();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
    }
}
</script>