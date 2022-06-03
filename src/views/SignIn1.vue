<template>
<navbar-view style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important;"> </navbar-view>
    <div class="si">
         <v-container style="padding:7rem">
             <h1 style="color:white" class="text-center">FitBody</h1>
             <p style="color:white" class="text-center">Ravis de vous <br> revoir</p>
             <br>
             <br>
               <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
  <br>
  <br>
  

        <v-img src="https://us.v-cdn.net/6032561/uploads/365P6BBB46LC/bienvenue-lettres.gif"></v-img>
       <v-divider></v-divider>
        <br><br>
           <p class="text-center"> Connexion</p>
           
           
            <v-form >
                <v-container>
                   <v-text-field
                  
            color="secondary"
            label="Email"
            variant="contained"
            placeholder="Placeholder"
            v-model="email"
        
          >
          
          </v-text-field>
               <v-text-field
                 v-model="password" 
            color="secondary"
            label="Password"
            variant="contained"
            placeholder="Placeholder"
            type="password"
          ></v-text-field>
           <div style="color:red" v-if="error">{{error}}</div>
          <div class="text-center">
          <v-btn flat color="#5e72e4" @click.prevent="performLogin" > Connexion</v-btn> </div>
                </v-container>
                  
            </v-form>
            <br>
            <br>
            
        

   
  </v-card>
         </v-container>
         <v-container style="margin-top:-130px">
             <v-row class="text-center">
                 <v-col cols="12" md="6">
               
                 </v-col>
                  <v-col cols="12" md="6">
             <router-link :to="{name:'UserView' }"> <p style="color:white" >Créer un nouveau compte</p></router-link>  
                 </v-col>
             </v-row>
         </v-container>
    </div>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
     components: { NavbarView },
  
  data() {
    return {
       
      email: "",
      
      password: "",
      error: "",
      isLoading: false,
    };
  },
  methods: {
   
    performLogin() {
     
      this.$store
        .dispatch("performLoginAction", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
        
        if(res.data.user.role == 'admin'){
                   this.$router.push("/DashbordView");
                 
                    } else if   (res.data.user.role == 'user'){
                      
                         this.$router.push("/ProfileView")
                    }
                     else{
                        (res.data.user.role == 'coach')
                         this.$router.push("/NutritionView")
                    }
                   
               })
        .catch((err) => {
          this.isLoading = false;
          this.error = " Password or email incorrect";
          console.log(err.message);
        });
    },
  },
};
</script>
<style>
.si{
  
    background: linear-gradient(-3deg,#172b4d 50%,#2dcecc 50%, #2dce89);
}
</style>