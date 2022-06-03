<template>
  <div>
<v-app-bar flat app     style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important;  ">
     <v-app-bar-nav-icon @click="drawer= true" ></v-app-bar-nav-icon>
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Fit</span>
   <span>Body</span>
  
    </v-toolbar-title>
 
    <v-spacer></v-spacer>
       <v-menu>
      <template v-slot:activator="{ props }">
           <v-avatar   >
    <v-img v-bind:src="'../image/ProfileUser/' + user.photo" style="width:150px ; height: 150px"></v-img>
    </v-avatar>
        <v-btn
         v-if="loggedIn"
          color="primary"
          v-bind="props"
        >
          {{this.user.name}}
        </v-btn>
      </template>
      <v-list>
      
          <v-list-item-title  v-if="loggedIn" ><router-link :to="{name:'ProfileView' }" >Profile</router-link></v-list-item-title>
  
              <v-list-item-title  v-if="loggedIn" ><v-btn @click.prevent="performLogout" >Logout</v-btn></v-list-item-title>
     
      </v-list>
    </v-menu>
    <br>
   
        
   
    
   </v-app-bar> 
   <v-navigation-drawer style="margin-top:55px ; background-color:white ;" flat app v-model="drawer"  >
      
      
      <v-list-item-group  >
         
        <v-list-item v-for="item in items" :key="item.text" router :to="item.route"  >
          <v-list-item-action style="padding:0.5rem">
            <v-icon style="  color:#2dcecc" >{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >{{item.text}}</v-list-item-title>
             
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
   
   </v-navigation-drawer>
    </div>
</template>
<script>
import axios from 'axios'
import PopupView from "./PopupView.vue"
export default {
    component:{PopupView},
    data() {
        return {
            users: {},
            drawer: true,
             items: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard' , route:'/DashbordView' },
        { text: 'Exercice', icon: 'mdi-dumbbell' , route:'/GestionExercice' },
            { text: 'Article de Nutrition', icon: 'mdi-nutrition' , route:'/GestionNutrition' },
            { text: 'Nutritionniste', icon: 'mdi-account' , route:'/GestionNutritionniste' },
                  { text: 'Utilisateur', icon: 'mdi-account' , route:'/GestionUser' },
             { text: 'Coach', icon: 'mdi-account' , route:'/GestionCoach' },
                 { text: 'Salle de Sport', icon: 'mdi-dumbbell' , route:'/GestionGym' },
              { text: 'Boutique', icon: 'mdi-shopping' , route:'/GestionBoutique' },
                   { text: 'Aliment', icon: 'mdi-nutrition' , route:'/GestionAliment' },
                     { text: 'Poste Adhérant', icon: 'mdi-nutrition' , route:'/GestionPoste' },
           
        
      ],
        }
    },
     methods: {
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
   
   performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then((res) => {
          console.log(res);
          this.$router.push("/exampleView");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
    computed: {
    loggedIn() {
      return this.$store.getters.get_loggedIn;
    },
      user() {
      return this.$store.getters.get_user;
    },
    }
}
</script>
<style>
.v-navigation-drawer__content {
  
     height: 100%; 
     max-width: 250%; 
   
    margin-left: -80px;
    
}

</style>

