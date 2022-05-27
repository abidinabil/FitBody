<template>
    <div class="si">
         <v-container style="padding:7rem">
             <h1 style="color:white" class="text-center">Welcome</h1>
             <p style="color:white" class="text-center">Use these awesome forms to login or create new account in <br> your project for free.</p>
             <br>
             <br>
               <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
  <br>
  <br>
  

        <div class="text-center">
          Sign in with
        </div>
        <br>
        
        <v-row class="text-center">
        <v-col cols="12" md="12" >
             <v-btn  style="  width:130px ; border-radius:5px" color="white " ><v-icon color="blue">mdi-facebook</v-icon > Facebook</v-btn> 
             <v-btn  style="  width:130px ; border-radius:5px" color="white "><v-icon color="red">mdi-google</v-icon>Google</v-btn>    
        </v-col>
        <br>
        <v-divider></v-divider> <br>         
        </v-row>
        <br><br>
           <p class="text-center">Or sign in with credentials</p>
           
           
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
          <v-btn flat color="#5e72e4" @click.prevent="performLogin" > Sign in </v-btn> </div>
                </v-container>
                  
            </v-form>
            <br>
            <br>
            
        

   
  </v-card>
         </v-container>
         <v-container style="margin-top:-130px">
             <v-row class="text-center">
                 <v-col cols="12" md="6">
                <p style="color:white">Forgot password?</p>
                 </v-col>
                  <v-col cols="12" md="6">
                <p style="color:white">Create new account</p>
                 </v-col>
             </v-row>
         </v-container>
    </div>
</template>
<script>
export default {
  
  
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
    height:250vh;
    background: linear-gradient(-3deg,#172b4d 50%,#2dcecc 50%, #2dce89);
}
</style>