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
                  <v-img  class="bg-white"     src="https://cdn-icons.flaticon.com/png/128/5667/premium/5667029.png?token=exp=1653166454~hmac=8a3c1712902d652270fe64b0e90c1dbf" 
                   cover    >
                       
                   </v-img>
             
            </v-avatar>
               <strong >Enregistrements</strong>
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
                <div v-if="EnregistrementUser == '' ">
                   <v-img class="mx-auto" src="https://cdn4.iconfinder.com/data/icons/pretticons-1/64/not-found-512.png" width="250px" height="250px"></v-img>
                   <h1 >Désoler on n'a pas des donner enregistrer</h1>
             </div>
                <v-col cols="8" sm="8" md="8"  >
             
                     <v-card width="600"  class="postUser" cols="12" sm="6" v-for="post1 in EnregistrementUser" :key="post1.id" style="padding: 1em 2em 5em;">
    <v-toolbar style="background-color:white">
      <template v-slot:title>
         <v-avatar size="50px" >
              <v-img
               v-bind:src="'../image/ProfileUser/' + post1.photo"
                style="border-radius:30px"
              ></v-img>
            </v-avatar>
            <strong v-html="post1.name"></strong><br>
          
    </template>
    <v-spacer></v-spacer> 
       <v-menu
      v-model="menu"
      :close-on-content-click="false"
      anchor="end"
    >
      <template v-slot:activator="{ props }">
        <v-btn
       
          color="indigo"
          v-bind="props"
        >
          <v-img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" width="250px" style="margin-right:-100px"></v-img>
        </v-btn>
      </template>

      <v-card min-width="300" >
         

        <v-list class="mx-4" >
        

          <v-list-item  @click="deleteEnregistrement(post1.id) ">
          Supprrimer
          </v-list-item>
        </v-list>

      
      </v-card>
    </v-menu>
    </v-toolbar>
        
      <v-row class="mx-4">
        <p>{{post1.post}}</p><br>
       
      </v-row> 
           <v-img cover v-bind:src="'../image/Post/' + post1.image"></v-img>
           <v-divider></v-divider>
           <v-row>
             <v-col cols="12" md="6">
                <v-avatar
              size="50px"
              style="padding:1rem" >
                  <v-img  class="bg-white" src="https://cdn-icons.flaticon.com/png/512/2593/premium/2593491.png?token=exp=1653253025~hmac=6959622a62ffdd9a4e55e9e4d7ff85e8" 
                   cover    >
                       
                   </v-img>
             
            </v-avatar>
               <strong @click.prevent="getCommentaire(post1.id)">Commentaire</strong> <br>
             </v-col>
               <v-col cols="12" md="6">
                <v-avatar
              size="50px"
              style="padding:1rem"
            >
                  <v-img  class="bg-white"  src="https://cdn-icons.flaticon.com/png/128/5667/premium/5667029.png?token=exp=1653166454~hmac=8a3c1712902d652270fe64b0e90c1dbf" 
                   cover    >
                       
                   </v-img>
             
            </v-avatar>
             
             </v-col>
           </v-row><br>
          
               <v-text-field
                  
            color="secondary"
            label="Commentaire"
            variant="contained"
            v-model="commentaire">   
          </v-text-field>
         <v-btn @click.prevent="SaveCommentaire(post1.id)">Ajouter Commentaire</v-btn>
         <v-col v-for="com in Commentaires" :key="com.id">
         {{com.commentaire}}
         </v-col>
            <v-divider></v-divider>
  </v-card>
                </v-col>
          </v-row>
   </div>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios';
export default {
  components: { NavbarView },
    data() {
        return{
            EnregistrementUser:{},
            users:{}
        }
    },
      mounted(){
      
      this.getEnregistrementUser();
           this.getUser();
    },
        computed: {
    user() {
      return this.$store.getters.get_user;
    },
        },
    methods:{
              getEnregistrementUser(){
       axios.get('http://localhost:8000/api/auth/getEnregistrementUser/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.EnregistrementUser = res.data;
       }).catch(
         error =>{
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
      deleteEnregistrement(id){
        axios.delete('http://localhost:8000/api/auth/deleteEnregistrement/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                
                             this.$toast.success(" Deleted Enregistrement succesfuly.", {
                          position : "top-right"
                  });
                   this.getEnregistrementUser();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" Error Enregistrement Not Delete.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
     },
    }
}
</script>