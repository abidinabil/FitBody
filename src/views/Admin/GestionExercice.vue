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
                           <div class="alert alert-danger mt-4" v-if="errors.length" > 
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
              </ul>
                  </div>
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
                           <v-row class="mx-16">
             <v-col cols="12" md="4">
                <v-text-field 
                   
            color="secondary"
            label="Rechercher Par Catégorie"
            variant="contained"
            placeholder="Rechercher Par Catégorie"
            v-model="search"
          >
          </v-text-field>
          <v-btn style="color:green" @click.prevent="searchExercice">Rechercher</v-btn>
            <v-btn style="color:blue" @click.prevent="getExercice">Tous Les Exercices</v-btn>
            <div v-if="Exercices == '' ">
            <v-alert type="error">Dzl Aucune Donneés Pour Le Moment</v-alert>
             </div>
             </v-col>
            
         </v-row>
                          <v-table  fixed-header>
        <thead style="color:lightsteelblue">
          <tr>
             <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">text</th>
            <th scope="col">catégories</th>   
            <th scope="col">description</th>
            <th scope="col">photo</th>
               <th scope="col">photo2</th>
            <th> Delete</th>
            <th>Modifier</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="exercice in Exercices" :key="exercice.id">
     
           
               <td>{{exercice.id}}</td>
            <td>{{exercice.title}}</td>
            <td>{{exercice.text}}</td>
            <td>{{exercice.catégorie}}</td>

              <td>{{exercice.subtext}}</td>
              <td>
                    <v-img v-bind:src="'../image/Exercice/' + exercice.image"> </v-img>
                      <v-dialog transition="dialog-top-transition">
            <template v-slot:activator="{ props }">
              <v-btn flat rounded v-bind="props"
                ><v-icon>mdi-image-edit</v-icon></v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="primary">Télécharger votre photo</v-toolbar>
                <v-icon style="margin-left: 200px" size="50">
                  mdi-check-outline
                </v-icon>
                <form @submit.prevent="ModifierImage1(exercice.id)">
                  <input type="file" @change="onChange" />
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn text rounded type="submit">ENregistrer</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </template>
          </v-dialog>
              </td>
              <td>
                    <v-img v-bind:src="'../image/Exercice/' + exercice.image1"></v-img>
                     <v-dialog transition="dialog-top-transition">
            <template v-slot:activator="{ props }">
              <v-btn flat rounded v-bind="props"
                ><v-icon>mdi-image-edit</v-icon></v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card style="width:500px">
                <v-toolbar color="primary">Télécharger votre photo</v-toolbar>
               
                <form @submit.prevent="ModifierImage2(exercice.id)">
                  <input type="file" @change="onChange" />
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn text rounded type="submit">ENregistrer</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </template>
          </v-dialog>
              </td>
        
             <td>
              <v-img type="button" @click="deleteExercice(exercice.id) " 
                         src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" style="margin-left:-30px; width: 150px;">
                        </v-img>  
             </td>
             <td>
                   <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
          <v-img type="button" v-bind="props"  @click="updateExercice(exercice.id)"
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
                          class="text-center" >Modifier Exercice</h4>  
                           <v-row class="mx-4">
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="edittitle"  label="name"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="edittext"  label="Calorie"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                        
                              <v-col cols="12" sm="6">
                              <select
                            
                            class="form-select"
                            required
                           
                            v-model="editcatégorie"
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
              @click="editExercice(exercice.id)"
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
           Exercices:{},
           title:"",
           text:"",
           subtext :"",
           catégorie:"",
           image:"",
           image1:"",
           edittitle:"",
           edittext:"",
           editsubtext:"",
           editcatégorie:"",
           errors:[],
           search:""
           
           
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
           this.errors = [];
                   if(!this.title){
                     this.errors.push("Title is required")
                   }
                 
                    if(!this.text){
                     this.errors.push("text is required")
                   }
                    if(!this.subtext){
                     this.errors.push("description is required")
                   }
                    if(!this.catégorie){
                     this.errors.push("Catégorie is required")
                   }
                  if(!this.errors.lenght){
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
                  }
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
       /******************************update Exercice******************** */
            updateExercice(id){
           axios.get('http://localhost:8000/api/auth/updateExercice/'+ id)
        .then(response => {
               console.log(response);
                  this.id = response.data.id;
               this.edittitle = response.data.title;
               this.edittext = response.data.text;
               this.editsubtext = response.data.subtext;
               this.editcatégorie = response.data.catégorie;
             
     }); 
    },
    /****************************Fin Update Exercice */
        editExercice(){
           if(!this.edittitle){
                     this.errors.push("Name is required")
                   }
                    if(!this.edittext){
                     this.errors.push("text is required")
                   }
                 
                   
                    if(!this.editsubtext){
                     this.errors.push("description is required")
                   }
                    if(!this.editcatégorie){
                     this.errors.push("catégorie is required")
                   }
           axios.put('http://localhost:8000/api/auth/editExercice' ,{
                id : this.id,
               title : this.edittitle,
               text: this.edittext,
               subtext: this.editsubtext,
               catégorie : this.editcatégorie,
             
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                      this.$toast.success(" update Exercice succesfuly.", {
                          position : "top-right"
                  });
                      this.getExercice();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error("  Exercice not update.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
       },
        /*******************************Fin Edit Exercice */
          ModifierImage1($id) {
      let fd = new FormData();
      fd.append("image", this.image);
      axios
        .post("http://localhost:8000/api/auth/ModifierImage/" + $id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.getExercice();
        })
        .catch((err) => console.log(err));
    },
         ModifierImage2($id) {
      let fd = new FormData();
      fd.append("image1", this.image);
      axios
        .post("http://localhost:8000/api/auth/ModifierImage2/" + $id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.getExercice();
        })
        .catch((err) => console.log(err));
    },
           searchExercice(){
            axios.get('http://localhost:8000/api/auth/searchExercice/'+this.search)
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