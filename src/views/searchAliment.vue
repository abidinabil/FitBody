<template>
    <navbar-view />
    <div><br><br>
        <p class="mx-16"  style="color:black ; font-family:'Courier New', Courier, monospace">  Recherche notre base de données alimentaire par nom :</p>
         <v-row class="mx-16">
             <v-col cols="12" md="4">
                <v-text-field      
            color="secondary"
            label="Rechercher Par Nom"
            variant="contained"
            placeholder="Rechercher Par Nom"
            v-model="search"
          >
          </v-text-field>
          <v-btn style="color:green" @click.prevent="searchAliment">Search</v-btn>
             </v-col>
         </v-row>
         <v-row class="mx-16">
             <v-col cols="12" md="4" sm="4" v-for="index in AlimentSearch " :key="index.id">
              
                          <v-card
              class="mx-auto"
              max-width="400"
              tile
               @click.prevent="getAlimentById(index.id)"
            >
             

              <v-list-item lines="two">
                <v-list-item-header>
                  <v-list-item-title>{{index.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{index.name}}, {{index.grammage}},{{index.calorie}} calorie</v-list-item-subtitle>
                </v-list-item-header>
              </v-list-item>

            </v-card>
             </v-col>
         
         </v-row>
           
           <v-container>
                <form action="" @submit.prevent="SaveRegime">
           <v-row  >
                          <v-col cols="12" sm="12" v-for="i in AlimentById " :key="i.id">
                           <p>Name :</p>
                                 <v-chip color="indigo"  text-color="white"  pill v-on="on" style="width:150px" v-model="name" >
          
                            {{i.name}} </v-chip>
                           <v-row>
                           
                                <v-col cols="12" sm="2"  md="2">
                               <p>Quantité</p>
                               <v-text-field
                               
                              class="quantiteAliment"
                              color="secondary"
                              label="Quantité" variant="contained" type="number" required v-model="i.qty"  width="50px" ></v-text-field>
                             </v-col>
                             <v-col cols="12" sm="2" md="2">
                               <p>Grammage(g,L,Portion)</p>
                                <v-chip color="indigo"  text-color="white"  pill v-on="on" style="width:150px" v-model="grammage" >
          
                               {{this.Total =i.qty  * i.grammage}} </v-chip>
                             </v-col>
                               <v-col cols="12" sm="2" md="2">
                                 <p>calorie(Kcal)</p>
                           <v-chip color="indigo"  text-color="white"  pill v-on="on" style="width:150px" v-model="calorie" >
             <v-avatar left > 
              <v-img src="https://cdn.ithinkdiff.com/wp-content/uploads/2014/11/Calories2.gif"></v-img>
            </v-avatar>
            {{this.Total =i.qty  * i.calorie}} </v-chip>
                           </v-col>
                           <v-col cols="12" sm="2"  md="2">
                             <p>Carbs(G)</p>
                     <v-text-field
                               
                              class="quantiteAliment"
                              color="secondary"
                              label="Quantité" variant="contained" type="number" required v-model="carbs"  width="50px" > {{this.Total =i.qty  * i.carbs}}</v-text-field>
                           </v-col>
                           <v-col cols="12" sm="2"  md="2">
                             <p>Fat</p>
                           <v-chip color="indigo"  text-color="white" v-model="fat" >
                    <v-avatar left > 
              <v-img src="https://cdn-icons.flaticon.com/png/128/1951/premium/1951542.png?token=exp=1652491631~hmac=0df2314b6c6ee5f1c05eab85febaf673"></v-img>
            </v-avatar>
                {{this.Total =i.qty  * i.fat}}(G)</v-chip>
                           </v-col>
                           <v-col cols="12" sm="2"  md="2">
                             <p>Proteine(G)</p>
                             <v-chip color="indigo"  text-color="white" v-model="proteine" >
                <v-avatar left > 
              <v-img src="https://cdn-icons-png.flaticon.com/128/2736/2736046.png"></v-img>
            </v-avatar>
            {{this.Total =i.qty  * i.proteine}} </v-chip>
                           </v-col>
                             <v-btn  
                          color="primary"
                          type="submit"
                          depressed>Add Aliment to Jornal</v-btn>
                           </v-row>
                           </v-col>
                         
                           </v-row>
                           </form>
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
          search:'',
          AlimentSearch:{},
          AlimentById:{},
            Total:0,
            name:"",
            grammage:"",
            calorie:"",
            carbs:"",
            fat:"",
            proteine:"",
             id_user:"",
      }  
    },
           computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
    methods:{
        searchAliment(){
            axios.get('http://localhost:8000/api/auth/searchAliment/'+this.search)
            .then (res => {
         console.log(res.data);
         this.AlimentSearch = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )

        },
  
    SaveRegime(){
       
           axios.post('http://localhost:8000/api/auth/SaveRegime' ,{
               id_user: this.user.id,
             name : this.name,
             grammage:this.grammage,
             calorie:this.calorie,
             carbs:this.carbs,
             fat:this.fat,
             proteine:this.proteine
           
          
                
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                      this.$toast.success(" success aliment saved.", {
                          position : "top-right"

                  });
               this.getWorkout();
                  
               }
          }).catch(
         error =>{
             this.$toast.error(" error aliment not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
        },
        getAlimentById($id){
             axios.get('http://localhost:8000/api/auth/getAlimentById/'+$id)
            .then (res => {
         console.log(res.data);
         this.AlimentById = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
        }
    }
}
</script>
<style>
.v-text-field .v-field--active input {
    opacity: 1;
    width: 20px;
}
</style>