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
      style="background:url(https://images.pexels.com/photos/5646011/pexels-photo-5646011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); margin-top:80px"
      dark
    >
     
    </v-card>
         <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> Listes Coaches</h1> <br>
                
                

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
      Ajouter Coach
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
                  <form action="" @submit.prevent="SaveCoach">   
               <v-row >
                   

                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Ajouter Coach</h4>
                        
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
                            label="slug"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="specialite"
                            label="specialite"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="age"
                            label="age"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="adresse"
                            label="adresse"
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
                            label="Label"
                          ></v-textarea>
                           </v-col>
      
                           </v-row>
                           <v-file-input
                          accept="image/*" label="File input"    @change="onChange" ></v-file-input>
    
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
                           <v-row class="mx-16">
             <v-col cols="12" md="4">
                <v-text-field 
                   
            color="secondary"
            label="Rechercher Par adresse"
            variant="contained"
            placeholder="Rechercher Par Adresse"
            v-model="search"
          >
          </v-text-field>
          <v-btn style="color:green" @click.prevent="searchCoach">Search</v-btn>
            <v-btn style="color:green" @click.prevent="getCoach">All Coaches</v-btn>
        <div v-if="coaches == '' ">
            <v-alert type="error">Dzl Aucune Donneés Pour Le Moment</v-alert>
             </div>
             </v-col>
            
         </v-row>
                            <v-table fixed-header>
        <thead style="color:lightsteelblue">
          <tr>
             
             <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">slug</th>
            <th scope="col">specialite</th>
            <th scope="col">age</th>
                <th scope="col">Description</th>
                  <th scope="col">adresse</th>
                 <th scope="col">photo</th>
            <th> delete</th>
               <th> update</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="coach in coaches" :key="coach.id">
     
           
             <td>{{coach.id}}</td>
            <td>{{coach.name}}</td>
            <td>{{coach.text}}</td>
            <td>{{coach.specialite}}</td>
             <td>{{coach.age}}</td>
              <td>{{coach.subtext}}</td>
                <td>{{coach.adresse}}</td>
            <td><v-img v-bind:src="'../image/Coach/' + coach.photo" style="width:150px ; height: 150px"></v-img>
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
                <form @submit.prevent="ModifierImage(coach.id)">
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
                
                 <v-img type="button" @click="deleteCoach(coach.id) " 
                         src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" style="margin-left:-50px; width: 150px;">
                        </v-img>
             </td>
              <td>      
             <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
          <v-img type="button" v-bind="props"  @click="updateCoach(coach.id)"
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
                          class="text-center" >Modifier Coach</h4>  
                           <v-row class="mx-4">
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editname"  label="name"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="edittext"  label="slug"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editspecialite"  label="specialiter"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                              <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editadresse"  label="adresse"  color="secondary" variant="contained" placeholder="Placeholder"
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
              @click="editCoach(coach.id)"
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
import axios from 'axios';
export default {
  components: { SideBar },
    data() {
        return{
           dialog:false,
           dialog1:false,
           coaches:{},
           id:"",
           name:"",
           text:"",
           specialite:"",
           age:"",
           subtext:"",
           adresse:"",
           photo:"",
           editname:"",
           edittext:"",
           editspecialite:"",
           editage:"",
           editsubtext:"",
           editadresse:"",
           editphoto:"",
           errors:[],
           search:""
          
        } 
    },
        mounted(){
      this.getCoach();
    },
    methods:{
           onChange(e){
           console.log("selected file", e.target.files[0])
           this.photo = e.target.files[0]; 
         },
         SaveCoach(){
           this.errors = [];
                   if(!this.name){
                     this.errors.push("Name is required")
                   }
                    if(!this.age){
                     this.errors.push("age is required")
                   }
                    if(!this.text){
                     this.errors.push("text is required")
                   }
                    if(!this.subtext){
                     this.errors.push("description is required")
                   }
                    if(!this.specialite){
                     this.errors.push("specialite is required")
                   }
                     if(!this.adresse){
                     this.errors.push("adresse is required")
                   }
                    if(!this.photo){
                     this.errors.push("photo is required")
                   }
                 if(!this.errors.lenght){
                     let fd = new FormData(); 
           console.log(FormData)
                fd.append('photo', this.photo);
               fd.append('name', this.name);
               fd.append('age', this.age);
               fd.append('text', this.text);
               fd.append('specialite', this.specialite); 
                fd.append('adresse', this.adresse); 
               fd.append('subtext', this.subtext);
           axios.post("http://localhost:8000/api/auth/SaveCoach" ,fd , { 
           })
               .then (res => {
         console.log(res);
           this.$toast.success(" success Coach saved.", {
                          position : "top-right"
                  });
                  this.getCoach()
            }).catch(
              error =>{
                  this.$toast.error(" error Coach not saved.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
                 }
         },
         
    
          getCoach() {
            axios.get('http://localhost:8000/api/auth/getCoach')
                .then(response => {
                  console.log(response.data)
                    this.coaches = response.data;
                });
        },
    
         deleteCoach(id){
        axios.delete('http://localhost:8000/api/auth/deleteCoach/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getCoach();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
      updateCoach(id){
           axios.get('http://localhost:8000/api/auth/updateCoach/'+ id)
        .then(response => {
               console.log(response);
               this.id = response.data.id;
               this.editname = response.data.name;
               this.edittext = response.data.text;
                   this.editadresse = response.data.adresse;
               this.editspecialite = response.data.specialite;
               this.editage = response.data.age;
               this.editsubtext = response.data.subtext;
             this.editphoto = response.data.photo;
     }); 
    },
       editCoach(){
          if(!this.editname){
                     this.errors.push("Name is required")
                   }
                    if(!this.edittext){
                     this.errors.push("text is required")
                   }
                    if(!this.editspecialite){
                     this.errors.push("specialite is required")
                   }
                    if(!this.editage){
                     this.errors.push("age is required")
                   }
                    if(!this.editsubtext){
                     this.errors.push("description is required")
                   }
                    if(!this.editphoto){
                     this.errors.push("photo is required")
                   }
           axios.put('http://localhost:8000/api/auth/editCoach' ,{
             
                id : this.id,
               name : this.editname,
               text: this.edittext,
                specialite: this.editspecialite,
                  adresse: this.editadresse,
               age: this.editage,
               subtext: this.editsubtext,
               photo : this.editphoto,
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                        this.$toast.success(" update Coach succesfuly.", {
                          position : "top-right"
                  });
                      this.getCoach();
                   
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
        searchCoach(){
            axios.get('http://localhost:8000/api/auth/searchCoach/'+this.search)
            .then (res => {
         console.log(res.data);
         this.coaches = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )

        },
            ModifierImage($id) {
      let fd = new FormData();
      fd.append("photo", this.photo);
      axios
        .post("http://localhost:8000/api/auth/ModifierImageCoach/" + $id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.getCoach();
        })
        .catch((err) => console.log(err));
    },
    }
   
}
</script>