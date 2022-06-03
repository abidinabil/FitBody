<template>
  <nav>
      <v-toolbar-title class="text-uppercase " style="color:white">
        <li><router-link :to="{name:'exampleView' }">FitBody</router-link></li>
   
    </v-toolbar-title>
       
    <input type="checkbox" id="click">
    <label for="click" class="menu-btn">
      <i class="fas fa-bars"></i>
    </label>
 
    <ul>
      <li v-if="loggedIn">
         <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="indigo"
          v-bind="props"
        >
          {{this.user.name}}
        </v-btn>
      </template>

      <v-card min-width="300">
        <v-list>

          <v-list-item
        
            v-bind:title="this.user.name"
            v-bind:subtitle="this.user.email"
          >
          
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list v-if="loggedIn" style="margin-left:-20px">
          <v-list-item router-link :to="{name:'ProfileView' }" style="padding:0rem 25%" >
           <v-img v-bind:src="'../image/ProfileUser/' + user.photo"   width="30px" height="30px"> </v-img>
           Profile
          </v-list-item>
            <v-list-item router-link :to="{name:'PosteUser' }" style="padding:0rem 20%">
             <v-img src="https://cdn-icons-png.flaticon.com/512/1055/1055661.png" width="30px" height="30px"></v-img>
           Mes Postes
          </v-list-item>
            <v-list-item router-link :to="{name:'CreateWorkout' }" style="padding:0rem 20%">
             <v-img src="https://cdn-icons-png.flaticon.com/512/3703/3703446.png" width="30px" height="30px"></v-img>
           Create Workout
          </v-list-item>
            <v-list-item router-link :to="{name:'CreateRegime' }" style="padding:0rem 20%" >
            <v-img src="https://cdn-icons-png.flaticon.com/512/1410/1410596.png" width="30px" height="30px"></v-img>
           CreateRegime
          </v-list-item>
            <v-list-item router-link :to="{name:'PanierView' }"  style="padding:0rem 20%" >
             <v-img src="https://cdn-icons-png.flaticon.com/512/420/420012.png" width="30px" height="30px"></v-img>
           Votre Panier
          </v-list-item>
           <v-list-item @click.prevent="performLogout" style="padding:0rem 20%"  >
             <v-img src="https://cdn-icons.flaticon.com/png/512/4210/premium/4210146.png?token=exp=1654179646~hmac=db1d43e53c97118a8022e519a30787c8" width="30px" height="30px"></v-img>
           Logout
          </v-list-item>

        </v-list>

       
      </v-card>
    </v-menu>
      </li>
      <li><router-link :to="{name:'EntrainementView' }">Entrainement</router-link></li>
      <li><router-link :to="{name:'NutritionView' }">Nutrition</router-link></li>
      <li>
        
      </li>
        <li v-bind="props"  >
          <router-link to="ArticleNutrition">Blog</router-link>
        </li>
      <li>
             <v-menu>
      <template v-slot:activator="{ props }">
        <li v-bind="props"  >
          <router-link to="">Annuiaire</router-link>
        </li>
      </template>
      <v-list>
              
                <li><router-link :to="{name:'NutritionnisteView' }" >Nutritionniste</router-link></li>
                <li><router-link :to="{name:'CoachView1' }" >Coach</router-link></li>
                 <li><router-link :to="{name:'GymView' }" >Gym</router-link></li>
                
      </v-list>
    </v-menu>
    
      </li>
       <li><router-link :to="{name:'posteView' }" >Poste</router-link></li> 
       <li><router-link :to="{name:'BoutiqueView' }" >Boutique</router-link></li>

      <li>  <v-btn v-if="!loggedIn" :to="{name:'SignIn1' }" >Se Connecter</v-btn></li>
       <li>  <v-btn v-if="!loggedIn" :to="{name:'SignUp' }" >Commencer dés maintenant</v-btn></li>  
             
         
          
    </ul>
  </nav>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
} 
nav{
  
  display: flex;
  height: 80px;
  width: 100%;
  background: #1b1b1b;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 100px;
  flex-wrap: wrap;
}
nav .logo{
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}
nav ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
nav ul li{
  margin: 0 5px;
  
}
nav ul li a{
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
 
  border-radius: 5px;
  letter-spacing: 1px;
  
}
nav ul li a.active,
nav ul li a:hover{
  color: #111;
  background: #fff;
}
nav .menu-btn i{
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"]{
  display: none;
}
@media (max-width: 1000px){
  nav{
    padding: 0 40px 0 50px;
  }
}
@media (max-width: 920px) {
  nav .menu-btn i{
    display: block;
  }
  #click:checked ~ .menu-btn i:before{
    content: "\f00d";
  }
  nav ul{
    position: absolute;
    top: 80px;
    left: -100%;
    background: #111;
    height: 120vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
  }
  #click:checked ~ ul{
    left: 0;
  }
  nav ul li{
    width: 100%;
    margin: 40px 0;
  }
  nav ul li a{
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul li a{
    margin-left: 0px;
  }
  nav ul li a.active,
  nav ul li a:hover{
    background: none;
    color: cyan;
  }
}
</style>

<script>
export default {
  data() {
    return{
      token:null,
        fav: true,
      menu: false,
      message: false,
      hints: true,
    }
    
  },

  methods: {
   
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
  },
}
</script>