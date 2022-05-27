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
      style="background:url(https://images.pexels.com/photos/1092874/pexels-photo-1092874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); margin-top:80px"
      dark
    >
     
    </v-card>
         <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> List Salle de Sport</h1> <br>
                
                

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
      Ajout Salle de Sport
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
                  <div class="alert alert-danger mt-4" v-if="errors.length" > 
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
              </ul>
                  </div>
                   <form action="" @submit.prevent="SaveGym" novalidate>        
               <v-row >
                   

                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Ajouter Salle de Sport</h4>
                        
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="name"
                            label="name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="text"
                            label="Text"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="6">
                              <v-textarea
                              v-model="subtext"
                              
                            background-color="grey lighten-2"
                            color="cyan"
                            label="SubText"
                          ></v-textarea>
                           <v-text-field
                            v-model="adresse"
                            label="Adresse"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                       
                           </v-row>
                              <v-file-input
                          accept="image/*" label="File input"    @change="onChange" ></v-file-input>
    
                       <v-btn type="submit">Ajouter</v-btn>
                 
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

                        <v-table  fixed-header>
        <thead style="color:lightsteelblue">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Text</th>
            <th scope="col">subtext</th>
            <th scope="col">Adresse</th>
             <th scope="col">Photo</th>
            <th> delete</th>
            <th> update</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="i in gym" :key="i.id">
              <td>{{i.id}}</td>
            <td>{{i.name}}</td>
            <td>{{i.text}}</td>
            <td>{{i.subtext}}</td>
            <td>{{i.adresse}}</td> 
             <td> <v-img v-bind:src="'../image/gym/' + i.photo" style="width:50px ; height: 50px"></v-img></td>  
                <td>
                
                 <v-img type="button" @click="deleteGym(i.id) " 
                         src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" style="margin-left:-50px; width: 150px;">
                        </v-img>
             </td>
                <td>      
               <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
          <v-img type="button" v-bind="props"  @click="updateGym(i.id)"
                         src="https://www.lenovo.com/_ui/desktop/common/images/lsb/lsb-loading.gif" style="color:red ; width: 70px;">
                        </v-img>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card style=" width: 900px ; margin-top:-130px ; margin-left:-150px" >
            <v-toolbar
              color="primary"
            >Opening from the top</v-toolbar>
             <v-window v-model="step">
                <v-window-item :value="1">               
                 <form action="" >  
                        <h4
                          class="text-center" >Modifier Gym</h4>  
                           <v-row class="mx-4">
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editName"  label="name"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="edittext"  label="Calorie"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                        
                              <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editadresse"  label="Calorie"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                              <v-col cols="12" sm="12">
                               <v-textarea
                              v-model="editsubtext"  label="Description"  color="secondary" variant="contained" placeholder="Placeholder"
                          ></v-textarea>
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
              @click="editGym(i.id)"
              >Update</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>     
                    </td>
               </tr>
               </tbody>
               </v-table>
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
             dialog1:false,
           gym:{},
           name:"",
           text:"",
           subtext:"",
           adresse:"",
           photo:"",
             editName:"",
               edittext:"",
               editsubtext:"",
               editadresse:"",
               editphoto:"",
               errors:[],
        } 
    },
        created(){
      this.getGym();
    },
    methods:{
        //************************Save Nutritionniste ************************* */
         onChange(e){
           console.log("selected file", e.target.files[0])
           this.photo = e.target.files[0]; 
         },
        

                 SaveGym(){
                   this.errors = [];
                   if(!this.name){
                     this.errors.push("Name is required")
                   }
                    if(!this.text){
                     this.errors.push("text is required")
                   }
                    if(!this.adresse){
                     this.errors.push("adresse is required")
                   }
                    if(!this.subtext){
                     this.errors.push("description is required")
                   }
                    if(!this.photo){
                     this.errors.push("photo is required")
                   }
                   if(!this.errors.lenght){
                     let fd = new FormData();
           console.log(FormData)
           fd.append('photo', this.photo);
              fd.append('name', this.name);
                 fd.append('adresse', this.adresse);
            fd.append('text', this.text);
               fd.append('subtext', this.subtext);
             
           
      
           axios.post("http://localhost:8000/api/auth/SaveGym" ,fd , { 
           
           })
             .then (res => {
         console.log(res);
           this.$toast.success(" success Gym saved.", {
                          position : "top-right"
                  });
                  this.getGym()
            }).catch(
              error =>{
                  this.$toast.error(" error Gym not saved.", {
                                position : "top-right"
                                
                        });
                        
                console.log(error);
              } 
              
            )
                   }
         
              },
         //************************Fin Save Nutritionniste ************************* */
         //******************************Get Nutritionniste*************************** */
          getGym(){
       axios.get('http://localhost:8000/api/auth/getGym')
        .then (res => {
         console.log(res.data);
         this.gym = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
      //************************Fin Get Nutritionniste ************************* */
      //***************************Delete Nutritionniste ************************* */
          deleteGym(id){
        axios.delete('http://localhost:8000/api/auth/deleteGym/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getGym();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
       //************************Fin Delete Nutritionniste ************************* */
       /******************************update Nutritionniste******************** */
            updateGym(id){
           axios.get('http://localhost:8000/api/auth/updateGym/'+ id)
        .then(response => {
               console.log(response);
                  this.id = response.data.id;
               this.editName = response.data.name;
               this.edittext = response.data.text;
               this.editsubtext = response.data.subtext;
               this.editadresse = response.data.adresse;
              this.editphoto = response.data.photo;
     }); 
    },
    /****************************Fin Update Nutritionniste */
       /********************* edit Nutritionniste *********************** */
       editGym(){
           if(!this.editName){
                     this.errors.push("Name is required")
                   }
                    if(!this.edittext){
                     this.errors.push("text is required")
                   }
                    if(!this.editadresse){
                     this.errors.push("specialite is required")
                   }
                   
                    if(!this.editsubtext){
                     this.errors.push("description is required")
                   }
                    if(!this.editphoto){
                     this.errors.push("photo is required")
                   }
           axios.put('http://localhost:8000/api/auth/editGym' ,{
                id : this.id,
               name : this.editName,
               text: this.edittext,
               subtext: this.editsubtext,
               adresse : this.editadresse,
               photo : this.editphoto,
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                      this.$toast.success(" update Gym succesfuly.", {
                          position : "top-right"
                  });
                      this.getGym();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error("  gym not update.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
       },
        /*******************************Fin Edit Nutritionniste */
       mounted() {
       console.log('Gym ')
     },
    }
}
</script>