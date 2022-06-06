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
            <div v-if="AlimentSearch == '' ">
                   <h1 class="error">error</h1>
             </div>
             </v-col>
            
         </v-row>
         <v-row class="mx-16">
             <v-col cols="12" md="4" sm="4" v-for="index in AlimentSearch " :key="index.id">
              
                          <v-card
              class="mx-auto"
              max-width="400"
              tile
             
            >
             

              <v-list-item lines="two"   @click.prevent="getAlimentById(index.id)">
                <v-list-item-header>
                  <v-list-item-title >{{index.name}}</v-list-item-title>
                  <v-list-item-subtitle >{{index.name}}, {{index.grammage}},{{index.calorie}} calorie</v-list-item-subtitle>
                </v-list-item-header>
              </v-list-item>

            </v-card>
             </v-col>
         
         </v-row>
        <div>
           <v-container  >
                <form action="" @submit.prevent="SaveRegime"  >
              
                  <v-row>
                          <v-col cols="12" sm="12" >
                           <p>Name :</p>
                                <v-text-field
                                 disabled="disabled"
                              class="quantiteAliment"
                              color="secondary" v-model="AlimentById.name"  width="50px" > </v-text-field>
                              
                           <v-row>
                           
                                <v-col cols="12" sm="2"  md="2">
                               <p>Quantité</p>
                               <v-text-field
                               type="float"
                              class="quantiteAliment"
                              color="secondary"
                             variant="contained"  v-model="AlimentById.qty"  width="50px" ></v-text-field>
                             </v-col>
                             <v-col cols="12" sm="2" md="2">
                               <p>Grammage(g,L,Portion)</p>
                              <v-text-field
                               disabled="disabled"
                              class="quantiteAliment"
                              color="secondary"
                              variant="contained"  v-bind:label="AlimentById.qty * AlimentById.grammage" width="50px" > </v-text-field>
                             </v-col>
                               <v-col cols="12" sm="2" md="2">
                                 <p>calorie(Kcal)</p>
                   <v-text-field
                                 disabled="disabled"
                              class="quantiteAliment"
                              color="secondary"
                             variant="contained" v-bind:label="AlimentById.qty * AlimentById.calorie"  width="50px" > </v-text-field>
                           </v-col>
                           <v-col cols="12" sm="2"  md="2">
                             <p>Carbs(G)</p>
                     <v-text-field
                                 disabled="disabled"
                              class="quantiteAliment"
                              color="secondary"
                              variant="contained" v-bind:label="AlimentById.qty * AlimentById.carbs"  width="50px" > </v-text-field>
                           </v-col>
                           <v-col cols="12" sm="2"  md="2">
                             <p>Fat</p>
                         <v-text-field
                                 disabled="disabled"
                              class="quantiteAliment"
                              color="secondary"
                              variant="contained" v-bind:label="AlimentById.qty * AlimentById.fat"  width="50px" ></v-text-field>
                           </v-col>
                           <v-col cols="12" sm="2"  md="2">
                             <p>Proteine(G)</p>
                        <v-text-field
                                 disabled="disabled"
                              class="quantiteAliment"
                              color="secondary"
                               variant="contained" v-bind:label="AlimentById.qty * AlimentById.proteine" width="50px" > </v-text-field>
                           </v-col>
                           <v-col cols="12" sm="2" md="2">
                               <label  class="mb-1 text-sm text-at-light-green"
                        >Catégorie Type</label
                    >
                   <select
                          
                        class="form-select"
                            required
                            
                            v-model="categorieType"
                           
                    >
                            <option value="select-catégorie">Select Catégorie</option>
                            <option value="PDejuner">Petit Dejuner</option>
                            <option value="Dejuner">Dejuner</option>
                               <option value="Dinner">Dinner</option>
                                  <option value="Snack">Snack</option>
                 </select>
                           </v-col>
                           <v-col cols="12" sm="6 " md="6">
                               <v-btn  
                          color="primary"
                          type="submit"
                          depressed>Ajouter un élément au journal</v-btn>
                           </v-col>
                           
                           </v-row>
                           </v-col>
                         
                           </v-row>
                           </form>
           </v-container> 
          </div>
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
            qty:"",
            proteine:"",
             id_user:"",
             categorieType:'',
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
             name : this.AlimentById.name,
             grammage:this.AlimentById.grammage * this.AlimentById.qty,
             calorie:this.AlimentById.calorie * this.AlimentById.qty,
             carbs:this.AlimentById.carbs * this.AlimentById.qty,
             fat:this.AlimentById.fat * this.AlimentById.qty,
             proteine:this.AlimentById.proteine * this.AlimentById.qty,
               qty:this.AlimentById.qty ,
            categorieType:this.categorieType
           
          
                
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                      this.$toast.success(" success aliment saved.", {
                          position : "top-right"

                  });
            
                  
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
           this.AlimentById = '';
        
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