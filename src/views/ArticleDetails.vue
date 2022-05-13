<template>
    <navbar-view > </navbar-view>
    <div style="margin-top:20px">
   
        <v-container>
            <v-row>
                <v-col >
                        <h2 class="text-center font-italic" style="color:crimson ; font-family:'Courier New', Courier, monospace">  {{nutritionsDetails.title}}</h2><br><br>
                            <v-img  class="bg-white" height="750px" cover v-bind:src="'../image/Nutrition/' + nutritionsDetails.image"></v-img>
                              <p style="color:crimson; font-size: 30px;">Description de L'Exercice</p> <br>
                                <p style="color: black; font-size: 20px;">{{nutritionsDetails.text}}</p> <br><br>
                               


                      
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios'
export default {
  components: { NavbarView },
    data() {
       return{
          nutritionsDetails:{}
       } 
    },
        mounted(){
     
      this.getNutritionDetails();
    },
    methods:{
             getNutritionDetails(){
       axios.get('http://localhost:8000/api/auth/getNutritionDetails/'+this.$route.params.id)
        .then (res => {
         console.log(res.data);
         this.nutritionsDetails = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
    }
}
</script>