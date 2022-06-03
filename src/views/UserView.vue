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
           <p class="text-center"> S'incrire</p>
        
       
           
           
            <v-form>
                <v-container>
                     <v-text-field
                  
                color="secondary"
                label="Name"
                variant="contained"
                placeholder="Placeholder"
                v-model="name"
              ></v-text-field>
              <v-text-field
                  
            color="secondary"
            label="Email"
            variant="contained"
            placeholder="Placeholder"
            v-model="email"
          >
          
          </v-text-field>
               <v-text-field
                  
            color="secondary"
            label="Password"
            variant="contained"
            placeholder="Placeholder"
            type="password"
            v-model="password"
          ></v-text-field>  
              <input type="hidden" v-model="role">
          <div class="text-center">
          <v-btn flat color="#5e72e4"  @click.prevent="performRegister" > S'incrire</v-btn> </div>
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
               <router-link :to="{name:'SignIn1' }"> <p style="color:white" >Vous avez déja un compte ? </p></router-link>
                 </v-col>
             </v-row>
         </v-container>
    </div>
    <footer-view style=" background: linear-gradient(87deg,#2dce89,#2dcecc)!important;"></footer-view>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
   components: { NavbarView , FooterView },
  name: "SignIn",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "user",
      error: "",
      isLoading: false,
    };
  },
  methods: {
    performRegister() {
      this.isLoading = true;
      this.$store
        .dispatch("performRegisterUser", {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
        })
        .then((res) => {
          console.log(res);
          this.isLoading = false;
            this.$toast.success(" You are Logeed In.", {
                          position : "top-right"
                  });
          this.$router.push("/ProfileView");
        })
        .catch((err) => {
          this.isLoading = false;
          this.error = " Registration faild";
          console.log(err.message);
        });
    },
  },
};
</script>


<style>
.si{
    background: linear-gradient(87deg,#2dce89,#2dcecc)!important;
}
</style>