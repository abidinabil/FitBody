<template>
    

   <navbar-view />

         <v-row  class="mx-2" >
    
    <v-col cols="12" md="12" justify-center>
     <div >
        <v-card
      style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important; margin-top:50px; "
      height="500px"
      tile
      flat   
      class="d-flex align-center " >
      <v-container>
          <h1>Hello</h1> <br>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, sit architecto. Consequuntur, 
         <br> voluptatum nihil maxime veritatis fuga voluptate molestias dignissimos sunt at aliquam vitae atque est ipsam cupiditate. Quam, perferendis.</p>
    </v-container>
   
    </v-card>
    <v-row>
        <v-col cols="12" md="8">
             <v-card tile class="mx-5 mt-n10 card1" color="white">
                 <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> MyAccount</h1> <br>
                </v-toolbar>
                <v-divider></v-divider>
                <v-container>
                    <p>User Information</p><br>
                    <v-form>
                        <v-row >
                          <v-col cols="12" sm="6">
                             <v-text-field
                  
                                color="secondary"
                                
                                variant="contained"
                               v-model="users.name"
                            >
                            
                            </v-text-field>
                           </v-col>
                            <v-col cols="12" sm="6">
                                   <v-text-field
                  
                                color="secondary"
                                
                                variant="contained"
                                v-model="users.email"
                                
                            >
                            
                            </v-text-field>
                           </v-col>
                              <v-col cols="12" sm="6">
                             <v-text-field
                      v-model="users.password"
                                color="secondary"
                              
                                variant="contained"
                              
                               
                            >
                            
                            </v-text-field>
                           </v-col>
                            <v-col cols="12" sm="6">
                                   <v-text-field
                      v-if="user.role == 'user'"
                                color="secondary"
                                label="weight"
                                v-model="users.weight"
                                variant="contained"
                                placeholder="Placeholder"
                                type="number"
                            >
                            
                            </v-text-field>
                           </v-col>
                              <v-col cols="12" sm="6">
                             <v-text-field
                       v-if="user.role == 'user'"
                                color="secondary"
                                label="Taille"
                                v-model="users.taille"
                                variant="contained"
                                placeholder="Placeholder"
                                type="number"
                            >
                            
                            </v-text-field>
                           </v-col>
                           <v-divider></v-divider>

                         
                           </v-row>
                             <p>ABOUT ME</p>
                               
                            <v-btn color="black" dark tile  type="submit" @click="updateProfil" > Update</v-btn>
                    </v-form>
                </v-container>
              </v-card>
        </v-col>
          <v-col cols="12" md="4">
             <v-card tile class=" mt-n10 card1" color="white">
             <v-img v-bind:src="'../image/ProfileUser/' + users.photo"  alt="" class="rounded-circle " style="width:150px ; margin-left:150px ;"> 
             <v-col cols="auto">
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
                <form @submit.prevent="submit">
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
        </v-col>
             </v-img>
          
             <br>
             <v-row  >
                    <v-col cols="12" md="4" class="text-center">
                     <p>{{users.weight}}</p> 
                   <p class="text-center">  <v-img src="https://cdn-icons-png.flaticon.com/128/4813/4813685.png" style="width:50px ; margin-left:60px"></v-img>Weight(Kg)</p> 
                    </v-col>
                 <v-col cols="12" md="4" class="text-center">
                     <p>3330</p> 
                   <p class="text-center">  <v-img src="https://cdn-icons.flaticon.com/png/512/2058/premium/2058065.png?token=exp=1650203625~hmac=bf0b4eb93c902b72a3ed52a885591448" style="width:50px ; margin-left:60px"></v-img>Calorie</p> 
                    </v-col>
                    <v-col cols="12" md="4" class="text-center">
                     <p>{{users.taille}}</p> 
                   <p class="text-center">  <v-img src="https://cdn-icons-png.flaticon.com/128/349/349410.png" style="width:50px ; margin-left:60px"></v-img>Taille(Cm)</p> 
                    </v-col>
             </v-row><br><br>
             <div class="text-center">
               <h3>{{users.name}}</h3>
               <p>{{users.email}}</p>
               <p>Coach de Fitness</p>
               <p>University of Computer Science</p>
               <v-divider></v-divider>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore et est voluptates libero,
                   <br> eum reiciendis itaque molestias necessitatibus beatae nulla laboriosam ex accusamus provident ratione qui harum, quos dolorem?</p>
             </div>
              </v-card>
        </v-col>
    </v-row>
      </div>
                            
                   </v-col> 
   </v-row>           

</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import axios from 'axios';
export default {
  components: { NavbarView },
  data() {
    return {
      image: null,
      
      name: "",
      email: "",
      password: "",
      weight:"",
      taille:"",
      users: {},
     
      }
  },
     mounted(){
      this.getUser();
    },
  
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods:{
     updateProfil(){
         
           axios.post('http://localhost:8000/api/auth/updateProfil/'+this.user.id ,{
             
                
               name : this.users.name,
               email: this.users.email,
            
               weight: this.users.weight,
               taille: this.users.taille,
               
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                        this.$toast.success(" update profil succesfuly.", {
                          position : "top-right"
                         
                  });
                   this.getUser();
                     
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" error  profil not update.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
       },
             getUser(){
       axios.get('http://localhost:8000/api/auth/getUser/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.users = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
     onChange(e) {
      console.log("selected file", e.target.files[0]);
      this.image = e.target.files[0];
    },
    submit() {
      let fd = new FormData();
      fd.append("photo", this.image);
      axios
        .post("http://localhost:8000/api/auth/updateImage/" + this.user.id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.getUser();
        })
        .catch((err) => console.log(err));
    },
  }
};
</script>

        