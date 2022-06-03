<template>
    <navbar-view />
    <br><br>
          <h2 style=" color: #9AA8BA; font-size:50px; text-align:center">Accompagnement Nutritionnel</h2>
    <v-container>
  <v-row > 
    <v-carousel
    cycle
    height="300"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
    
      :key="i"
    >
      <v-sheet
       
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <p class="text-center">
            Dans une société ou l’image corporelle prend de plus en plus de place, nos relations avec <br> notre corps et notre alimentation jouent un rôle majeur dans le bien être cognitif et <br> physiologique. <br>
            <br> <span  style="color:#61CE70">La psychonutrition : une science ! </span>
            

          </p> <br> <br>   
        </div>
      
        
      </v-sheet>
      
    </v-carousel-item>
     <v-carousel-item
    
     
    >
      <v-sheet
       
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <p >					
             Les choix alimentaires et votre relation à l’alimentation constituent les fondations de votre <br> santé tant physique que mentale. Au-delà de l’image, votre corps reste l’essentiel de votre <br> 
             bien-être et travailler à prendre soin de lui chaque jour est précieux. <br>
             <br>  <span style="color:#61CE70">Votre alimentation : le pilier de votre santé </span> 					
          </p>
           
        </div>
      </v-sheet>
      
    </v-carousel-item>
  </v-carousel>
 </v-row>
  </v-container>
    <div style="margin-top:100px">
     <v-row class="mx-16">
             <v-col cols="12" md="4">
                <v-text-field 
                   
            color="secondary"
            label="Rechercher Par Nom"
            variant="contained"
            placeholder="Rechercher Par Adresse"
            v-model="search"
          >
          </v-text-field>
          <v-btn style="color:green" @click.prevent="searchNutritionniste">Search</v-btn>
            <v-btn style="color:blue" @click.prevent="getNutritionniste">Tous Les Nutritionniste</v-btn>
            <div v-if="nutritionnistes == '' ">
                  
            <v-alert type="error">Not Found</v-alert>
             </div>
             </v-col>
            
         </v-row>
         <v-row class="mx-16">
           
          <v-col cols="12" md="4" lg="4" v-for="nutritionniste in nutritionnistes" :key="nutritionniste.id">
        
            <div class="cardNutritionniste">
         <div class="box">
            <div class="front-face" >
               <div class="icon">
                    <v-img  class="bg-white"   style="width:600px ; height: 450px" :aspect-ratio="1" v-bind:src="'../image/Nutritionniste/' + nutritionniste.photo" 
                   cover   > </v-img>
               </div>
             
            </div>
            <div class="back-face">
               <span>{{nutritionniste.text}}</span>
               <p>
                 {{nutritionniste.subtext}}
               </p>
               
            </div><br><br><br>
               <span style="color:dodgerblue">Nutritionniste</span>
               <h5>{{nutritionniste.nom}}</h5>
               <p><v-icon style="color:dodgerblue">mdi-map-marker</v-icon> {{nutritionniste.adresse}}</p>
         </div>
             
   
        
      </div>
      
          </v-col>
        </v-row>
      
    </div>
     
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios'
export default {
  components: { NavbarView },
  data(){
      return{
         search:'',
               nutritionnistes:{},
       
        
      }
  },
        created(){
      this.getNutritionniste();
    },
  methods:{
       getNutritionniste(){
       axios.get('http://localhost:8000/api/auth/getNutritionniste')
        .then (res => {
         console.log(res.data);
         this.nutritionnistes = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
      //************************Fin Get Nutritionniste ************************* */
          searchNutritionniste(){
            axios.get('http://localhost:8000/api/auth/searchNutritionniste/'+this.search)
            .then (res => {
         console.log(res.data);
         this.nutritionnistes = res.data;
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
@media (max-width: 700px) {
  .cardNutritionniste{
   
  }
}
.cardNutritionniste .box{
 
  margin: 0 auto;
  position: relative;
  perspective: 1000px;
}
.cardNutritionniste .box .front-face{
  background: #fff;
  height: 390px;
  width: 100%;

}


.box .back-face{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 550px;
  width: 100%;
  padding: 30px;
  color: #fff;

  transform-style: preserve-3d;
  backface-visibility: hidden;
  background: linear-gradient(-135deg, rgb(120, 137, 248), rgb(90, 238, 199));
  transform: translateY(110px) rotateX(-90deg);
  box-shadow: 0px 5px 20px 0px rgba(0, 81, 250, 0.1);
  transition: all 0.5s ease;
}

.box:hover .back-face{
  opacity: 1;
  transform: rotateX(0deg);
}
</style>