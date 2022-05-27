<template>
    <navbar-view />
    <div style="margin-top:50px">
     <div>
            <v-avatar
              size="150px"
              style="padding:1rem"
            >
              <v-img
             
                v-bind:src="'../image/ProfileUser/' + users.photo"
                style="border-radius:30px"
              ></v-img>
             
            </v-avatar>
               <strong v-html="users.name"></strong> <br>
                 <v-avatar
              size="70px"
              style="padding:1rem"
            >
                  <v-img  class="bg-white"     src="https://cdn-icons.flaticon.com/png/512/5667/premium/5667029.png?token=exp=1653656683~hmac=6882bd44b904bba8b00d5ed3c2e30c45" 
                   cover    >
                       
                   </v-img>
             
            </v-avatar>
               <router-link to="EnregistrementView">Enregistrement</router-link>
     </div>
            <v-row
          align="center"
          class="mx-4"
          no-gutters
          style="margin-top:-150px"
        >
        <!----------------------side----------------------->
          <v-col
            cols="4"
            sm="4"
            md="4"
          
          >
          </v-col>
          <!-------------------Publier Post et Afficher ---------------------->
          <v-col cols="8" sm="8" md="8"  >
               <v-card width="600" class="post">
  
    <template v-slot:title >
         <v-avatar size="50px" >
              <v-img
                v-bind:src="'../image/ProfileUser/' + users.photo"
                style="border-radius:30px" ></v-img>
            </v-avatar>
               <v-dialog
        transition="dialog-bottom-transition">
        <template v-slot:activator="{ props }">
         <v-chip  pill v-on="on"   v-bind="props" style="width:500px" >
        
          Quoi de neuf , {{users.name}} ?
            
          </v-chip >
           
        </template>
        <template v-slot:default="{ isActive }">
         <form action="" @submit.prevent="SavePost" novalidate>  
          <v-card style="width: 600px; margin-top:-80px" class="poste1">
            <v-toolbar
              color="primary"
              class="text-center"
            >Créer une publication</v-toolbar>
             <v-avatar
              size="60px"
              style="padding:1rem"
            >
              <v-img
             
                v-bind:src="'../image/ProfileUser/' + users.photo"
                style="border-radius:30px"
              ></v-img>
             
            </v-avatar>
               <strong v-html="users.name"></strong> <br>
               <v-textarea
       color="secondary"
            :label="'Quoi de neuf,  ' + users.name +' ?' "
            variant="contained"
            v-model="post"
           
    ></v-textarea>
    <v-divider></v-divider>
    <p class="mx-4">Ajouter a Votre publication</p>
            <v-file-input
            @change="onChange"
            variant="contained"
              class="mx-16"
              
                prepend-icon="mdi-image-edit"
            ></v-file-input>
            <v-card-actions class="justify-center">
                <input type="submit" value="Ajouter">
              <v-btn
              
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
          </form>
        </template>
      </v-dialog>
      
    </template>
    <v-divider></v-divider>
  

    
         </v-card><br><br><br>
        
  <v-card width="600"  class="postUser" cols="12" sm="6" v-for="post in Posts" :key="post.id" style="padding: 1em 2em 5em;">
    <v-toolbar style="background-color:white">
      <template v-slot:title>
         <v-avatar size="50px" >
              <v-img
               v-bind:src="'../image/ProfileUser/' + post.photo"
                style="border-radius:30px"
              ></v-img>
            </v-avatar>
            <strong v-html="post.name"></strong><br>
          
    </template>
    <v-spacer></v-spacer> 
    
       <v-menu
      v-model="menu"
      :close-on-content-click="false"
      anchor="end"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-if="post.id_user == user.id"
          color="indigo"
          v-bind="props"
        >
          <v-img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" width="250px" style="margin-right:-100px"></v-img>
        </v-btn>
      </template>

      <v-card min-width="300" >
         <v-avatar size="50px" >
              <v-img
               v-bind:src="'../image/ProfileUser/' + post.photo"
                style="border-radius:30px"
              ></v-img>
            </v-avatar>

        <v-divider></v-divider>

        <v-list class="mx-4" >
          <v-list-item   >
              <v-dialog
        transition="dialog-bottom-transition">
        <template v-slot:activator="{ props }">
        <v-btn
           @click="updatePost(post.id)"
            v-bind="props"
          >Modifier</v-btn>
           
        </template>
        <template v-slot:default="{ isActive }">
         <form action="" @submit.prevent="editPosts(post.id)" novalidate>  
          <v-card style="width: 600px; margin-top:-80px" class="poste1">
        
             <v-avatar
              size="60px"
              style="padding:1rem"
            >
              <v-img
             
                v-bind:src="'../image/ProfileUser/' + users.photo"
                style="border-radius:30px"
              ></v-img>
             
            </v-avatar>
               <strong v-html="users.name"></strong> <br>
               <v-textarea
       color="secondary"
          v-model="editPost"
            variant="contained"
            
           
    ></v-textarea>
   
            <v-card-actions class="justify-center">
                <input type="submit" value="Update">
              <v-btn
              
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
          </form>
        </template>
      </v-dialog>
          </v-list-item>

          <v-list-item  @click="deletePost(post.id) ">
          Supprrimer
          </v-list-item>
        </v-list>

      
      </v-card>
    </v-menu>
    </v-toolbar>
        
      <v-row class="mx-4">
        <p>{{post.post}}</p><br>
       
      </v-row> 
           <v-img cover v-bind:src="'../image/Post/' + post.image"></v-img>
           <v-toolbar style="background-color:white">
             <v-spacer></v-spacer>
                 <v-col cols="auto">
          <v-dialog transition="dialog-top-transition">
            <template v-slot:activator="{ props }">
              <v-btn flat rounded v-bind="props"
                >  <v-img  class="bg-white" src="https://cdn-icons-png.flaticon.com/512/2659/2659360.png" 
                   cover    >
                       
                   </v-img></v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="primary">Télécharger votre photo</v-toolbar>
                <v-icon style="margin-left: 200px" size="50">
                  mdi-check-outline
                </v-icon>
                <form @submit.prevent="updateImagePost(post.id)">
                  <input type="file" @change="onChange1" />
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn text rounded type="submit">Update</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
           </v-toolbar>
           <v-divider></v-divider>
           <v-row>
             <v-col cols="12" md="6">
                <v-avatar
              size="50px"
              style="padding:1rem" >
                  <v-img  class="bg-white " src="https://cdn-icons.flaticon.com/png/512/5410/premium/5410631.png?token=exp=1653656590~hmac=726ea4c9a661d142519b8aceda7bd652" 
                   cover    >
                       
                   </v-img>
             
            </v-avatar>
               <strong @click.prevent="getCommentaire(post.id)" >Commentaire</strong> <br>
             </v-col>
               <v-col cols="12" md="6">
                <v-avatar
              size="50px"
              style="padding:1rem"
            >
                  <v-img  class="bg-white"  src="https://cdn-icons.flaticon.com/png/512/5667/premium/5667029.png?token=exp=1653656683~hmac=6882bd44b904bba8b00d5ed3c2e30c45" 
                   cover    >
                       
                   </v-img>
             
            </v-avatar>
               <strong @click.prevent="SaveEnregistrement(post.id)"  >Enregistrer</strong> <br>
             </v-col>
           </v-row><br>
          
               <v-text-field
                
            color="secondary"
            label="Commentaire"
            variant="contained"
            v-model="commentaire ">   
          </v-text-field>
         <v-btn @click.prevent="SaveCommentaire(post.id)">Ajouter Commentaire</v-btn>
         <v-col v-for="com in Commentaires" :key="com.id">
         <div v-if="post.id == com.id_post">
            
             <v-toolbar style="background-color:white">
             <v-avatar
              size="70px"
              style="padding:1rem"
            >
              <v-img
             
                v-bind:src="'../image/ProfileUser/' + com.photo"
                style="border-radius:30px"
              ></v-img>
             
            </v-avatar>
             <v-chip>
              <p style="color:red">{{com.name}} :</p><br> <br>
              <p> {{com.commentaire}}</p>
              
            </v-chip>
            <v-spacer></v-spacer>
                <v-menu
      v-model="menu"
      :close-on-content-click="false"
      anchor="end"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-if="com.id_user == user.id"
          color="indigo"
          v-bind="props"
        >
          <v-img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" width="250px" style="margin-right:-100px"></v-img>
        </v-btn>
      </template>

       <v-card min-width="300" >
         <v-avatar size="50px" >
              <v-img
               v-bind:src="'../image/ProfileUser/' + com.photo"
                style="border-radius:30px"
              ></v-img>
            </v-avatar>

        <v-divider></v-divider>

        <v-list class="mx-4" >
          <v-list-item   >
            <v-dialog
        transition="dialog-bottom-transition">
        <template v-slot:activator="{ props }">
        <v-btn
         
            v-bind="props"
          >Modifier</v-btn>
           
        </template>
        <template v-slot:default="{ isActive }">
          <v-card style="width: 600px; margin-top:-80px" class="poste1">
        
             <v-avatar
              size="60px"
              style="padding:1rem"
            >
              <v-img
             
                v-bind:src="'../image/ProfileUser/' + com.photo"
                style="border-radius:30px"
              ></v-img>
             
            </v-avatar>
               <strong v-html="com.name"></strong> <br>
               <v-textarea
       color="secondary"
          v-model="com.commentaire"
            variant="contained"
            
           
    ></v-textarea>
    <v-divider></v-divider>
   
            <v-card-actions class="justify-center">
                <v-btn  @click.prevent="updateCommentaire(com.commentaire , com.id)">Modifier</v-btn>
              <v-btn
              
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
          </v-list-item>

          <v-list-item  @click.prevent="deleteCommentaire(com.id) ">
          Supprrimer
          </v-list-item>
        </v-list>

      
         </v-card>
         </v-menu>
            </v-toolbar>
           
      </div>
         </v-col>
            <v-divider></v-divider>
  </v-card>
  <br><br><br>
  <v-divider></v-divider>
          </v-col>

</v-row>
            </div>
    
                    

        
  
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios'
export default {
      components: { NavbarView },
    data() {
       return{
         dialog: false,
            users: {},
             post:"",
             editPost:"",
             editImage:"",
             image:null,
             Posts:{},
             id:"",
             commentaire:"",
             editCommentaire:"",
             id_post: "",
             id_user: "",
             Commentaires:{}
       }
    },
      mounted(){
      this.getUser();
      this.getPost();
      this.getCommentaire();
    },
     computed: {
    user() {
      return this.$store.getters.get_user;
    },
      loggedIn() {
      return this.$store.getters.get_loggedIn;
    },
  },
    methods:{
          onChange(e){
           console.log("selected file", e.target.files[0])
           this.image = e.target.files[0]; 
         },
        
           onChange1(e){
           console.log("selected file", e.target.files[0])
           this.image = e.target.files[0]; 
         },
         SavePost(){
          
                     let fd = new FormData(); 
           console.log(FormData)
                fd.append('post', this.post);
               fd.append('image', this.image);
               fd.append('id_user', this.user.id);
            
           axios.post("http://localhost:8000/api/auth/SavePost" ,fd , { 
           })
               .then (res => {
         console.log(res);
           this.$toast.success(" success Post saved.", {
                          position : "top-right"
                  });
               
            }).catch(
              error =>{
                  this.$toast.error(" error Post not saved.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
                 
         },
             getPost(){
       axios.get('http://localhost:8000/api/auth/getPost')
        .then (res => {
         console.log(res.data);
         this.Posts = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
       deletePost(id){
        axios.delete('http://localhost:8000/api/auth/deletePost/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                
                             this.$toast.success(" Deleted Post succesfuly.", {
                          position : "top-right"
                  });
                   this.getPost();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" Error Post Not Delete.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
     },
      updatePost(id){
           axios.get('http://localhost:8000/api/auth/updatePost/'+ id)
        .then(response => {
               console.log(response);
               this.id = response.data.id;
               this.editPost = response.data.post;
              
            
     }); 
    },
      editPosts(){
          if(!this.editPost){
                     this.errors.push("Name is required")
                   }
                   
           axios.put('http://localhost:8000/api/auth/editPost' ,{
             
                id : this.id,
               post : this.editPost,
            
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                        this.$toast.success(" update post succesfuly.", {
                          position : "top-right"
                  });
                      this.getPost();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" error Post not update.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
       },
        updateImagePost($id) {
      let fd = new FormData();
      fd.append("image", this.image);
      axios
        .post("http://localhost:8000/api/auth/updateImagePost/" + $id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.getPost();
        })
        .catch((err) => console.log(err));
    },
       SaveCommentaire($id){
           
           axios.post('http://localhost:8000/api/auth/SaveCommentaire' ,{
             id_post : $id,
             id_user: this.user.id,
             commentaire : this.commentaire,
          
                
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                      this.$toast.success(" success commentaire saved.", {
                          position : "top-right"

                  });
                  this.getCommentaire()
              
                  
               }
          }).catch(
         error =>{
             this.$toast.error(" error commentaire not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
        },
           getCommentaire($id){
       axios.get('http://localhost:8000/api/auth/getCommentaire/'+ $id)
        .then (res => {
         console.log(res.data);
         this.Commentaires = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
     async deleteCommentaire($id){
        axios.delete('http://localhost:8000/api/auth/deleteCommentaire/'+ $id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                
                             this.$toast.success(" Deleted commentaire succesfuly.", {
                          position : "top-right"
                  });
                   this.getCommentaire();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" Error commentaire Not Delete.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
     },
    
    async updateCommentaire($commentaire ,$id) {
      axios
        .post("http://localhost:8000/api/auth/updateCommentaire/" + $id, {
          commentaire: $commentaire,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" commentaire updated.", {
            position: "top-right",
          });
          this.$router.go(0);
        });
    },

     async SaveEnregistrement($id) {
      axios .post("http://localhost:8000/api/auth/SaveEnregistrement/" +this.user.id +"/" +$id,
          {
            id_post: $id,
            id_user: this.user.id,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Post Sauvegarder avec success.", {
            position: "top-right",
          });
        })
        .catch((err) => {
          this.$toast.error(" Post Sauvegarder déja.", {
            position: "top-right",
          });
          console.log(err);
        });
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
    }
}
</script>
<style>

@media only screen and (max-width: 600px) {
  .post {
    margin-left: -250px;
    margin-top:  330px;
  }
   .poste1 {
    margin-left: -120px;
    width: 200px;

  }
    .postUser {
    margin-left: -220px;
    text-align: center;
  
  }
    .detai {
   width: 100%;
    margin-top:  -600px;
  }
}
</style>