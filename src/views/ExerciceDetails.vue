<template>
    <navbar-view /><br><br>
    
    <div style="margin-top:20px">
   
        <v-container>
            <v-row>
                <v-col >
                        <h2 class="text-center font-italic" style="color:crimson ; font-family:'Courier New', Courier, monospace">  {{exercicesDetails.title}}</h2><br><br>
                            <v-img  class="bg-white"   cover v-bind:src="'../image/Exercice/' + exercicesDetails.image"></v-img>
                              <p style="color:crimson; font-size: 30px;">Description de L'Exercice</p> <br>
                                <p style="color: black; font-size: 20px;">{{exercicesDetails.subtext}}</p> <br><br>
                                <v-img  class="bg-white"   cover v-bind:src="'../image/Exercice/' + exercicesDetails.image1"></v-img>


                      
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
          exercicesDetails:{}
       } 
    },
        mounted(){
     
      this.getExerciceDetails();
    },
    methods:{
             getExerciceDetails(){
       axios.get('http://localhost:8000/api/auth/getExerciceDetails/'+this.$route.params.id)
        .then (res => {
         console.log(res.data);
         this.exercicesDetails = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
    }
}
</script>