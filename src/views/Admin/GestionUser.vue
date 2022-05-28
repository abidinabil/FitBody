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
                <h1 style="font-size:20px; "> List Utilisateur</h1> <br>
                
                

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
      Ajout Administrateur
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
                  <form action="" @submit.prevent="SaveAdmin">   
               <v-row >
                   

                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Ajouter Administrateur</h4>
                        
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
                            v-model="email"
                            label="email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="password"
                            label="password"
                            outlined
                            dense
                            type="password"
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                               <input type="hidden" v-model="role">
                           
                         
      
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
                        <v-row class="mx-16">
             <v-col cols="12" md="4">
                <v-text-field 
                   
            color="secondary"
            label="Rechercher Par Role"
            variant="contained"
            placeholder="Rechercher Par Role"
            v-model="search"
          >
          </v-text-field>
          <v-btn style="color:green" @click.prevent="searchUser">Rechercher</v-btn>
            <v-btn style="color:blue" @click.prevent="getAllUser">Tous Les Uutilisateurs</v-btn>
            <div v-if="users == '' ">
            <v-alert type="error">Dzl Aucune Donneés Pour Le Moment</v-alert>
             </div>
             </v-col>
            
         </v-row>
                       
                            <v-table fixed-header>
        <thead style="color:lightsteelblue">
          <tr>
             
             <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">role</th>
            <th scope="col">taille</th>
                <th scope="col">weight</th>
                <th>Photo Profile</th>
                
            <th> delete</th>
               <th> update</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="user in users" :key="user.id">
     
           
             <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.role}}</td>
             <td>{{user.taille}}</td>
              <td>{{user.weight}}</td>
               
            <td><v-img v-bind:src="'../image/ProfileUser/' + user.photo" style="width:50px ; height: 50px"></v-img></td>
              <td>
                
                 <v-img type="button" @click="deleteUser(user.id) " 
                         src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" style="margin-left:-50px; width: 150px;">
                        </v-img>
             </td>
              <td>      
             <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
          <v-img type="button" v-bind="props"  @click="updateAdmin(user.id)" v-if="user.role == 'admin'"
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
                          class="text-center" >Modifier Administrateur</h4>  
                           <v-row class="mx-4">
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editname"  label="name"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editemail"  label="email"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editpassword"  label="password"  color="secondary" variant="contained" placeholder="Placeholder"
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
              @click="editAdmin(user.id)"
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
           users:{},
           id:"",
           name:"",
           email:"",
           password:"",
          role:"admin",
           editname:"",
           editemail:"",
           editpassword:"",
           search:"",
       
           errors:[],
          
        } 
    },
        mounted(){
      this.getAllUser();
    },
    methods:{
               SaveAdmin(){
           this.errors = [];
                   if(!this.name){
                     this.errors.push("Name is required")
                   }
                    if(!this.email){
                     this.errors.push("email is required")
                   }
                    if(!this.password){
                     this.errors.push("password is required")
                   }
                  
                 if(!this.errors.lenght){
                     let fd = new FormData(); 
           console.log(FormData)
               
               fd.append('name', this.name);
               fd.append('email', this.email);
               fd.append('password', this.password);
                       fd.append('role', this.role);
            
           axios.post("http://localhost:8000/api/auth/SaveAdmin" ,fd , { 
           })
               .then (res => {
         console.log(res);
           this.$toast.success(" success administrateur saved.", {
                          position : "top-right"
                  });
                  this.getAllUser()
            }).catch(
              error =>{
                  this.$toast.error(" error administrateur not saved.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
                 }
         },

         
    
          getAllUser() {
            axios.get('http://localhost:8000/api/auth/getAllUser')
                .then(response => {
                  console.log(response.data)
                    this.users = response.data;
                });
        },
    
         deleteUser(id){
        axios.delete('http://localhost:8000/api/auth/deleteUser/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getAllUser();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
      updateAdmin(id){
           axios.get('http://localhost:8000/api/auth/updateAdmin/'+ id)
        .then(response => {
               console.log(response);
               this.id = response.data.id;
               this.editname = response.data.name;
               this.editemail = response.data.email;
                   this.editpassword = response.data.password;
            
     }); 
    },
       editAdmin(){
          if(!this.editname){
                     this.errors.push("Name is required")
                   }
                    if(!this.editemail){
                     this.errors.push("text is email")
                   }
                    if(!this.editpassword){
                     this.errors.push("password is required")
                   }
                
           axios.put('http://localhost:8000/api/auth/editAdmin' ,{
             
                id : this.id,
               name : this.editname,
               email: this.editemail,
                password: this.editpassword,
               
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                        this.$toast.success(" update admin succesfuly.", {
                          position : "top-right"
                  });
                      this.getAllUser();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" error admin not update.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
       },
              searchUser(){
            axios.get('http://localhost:8000/api/auth/searchUser/'+this.search)
            .then (res => {
         console.log(res.data);
         this.users = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )

        },
    }
   
}
</script>