<template>
    <navbar-view />
    <div style="margin-top:30px">
        
              <v-row class="mx-16">
           <v-col cols="12" md="6" >
         
               <!---------------------Petit Déjuner ------------->
                  <p style="color:brown">Petit Déjuner</p>
                      <v-btn to="searchAliment" style="background-color:lightsteelblue">Ajouter Un aliment</v-btn>
               <v-col v-for="pdejuner in PDejuner" :key="pdejuner.id">
                 
                     <p>{{pdejuner.name}} , {{pdejuner.calorie}}calorie</p>
      
            

        <v-divider></v-divider>
               </v-col>
            
        <!----------------------------Déjuner --------------------->
              
                    <p style="color:brown">Déjuner</p>
                    <v-btn to="searchAliment" style="background-color:lightsteelblue">Ajouter Un aliment</v-btn>
                      <v-col v-for="dejuner in Dejuner" :key="dejuner.id">
                     <p>{{dejuner.name}} , {{dejuner.calorie}}calorie</p>
          
            

        <v-divider></v-divider>
               </v-col>
        <!--------------------------Dinner ----------------------->
                
                    <p style="color:brown">Dinner</p>
                     <v-btn to="searchAliment" style="background-color:lightsteelblue">Ajouter Un aliment</v-btn>
                    <v-col v-for="dinner in Dinner" :key="dinner.id">
                     <p>{{dinner.name}} , {{dinner.calorie}}calorie</p>
         
            

        <v-divider></v-divider>
               </v-col>
        <!----------------------Snack ------------------->
            
         
                    <p style="color:brown">Snack</p>
                     <v-btn to="searchAliment" style="background-color:lightsteelblue">Ajouter Un aliment</v-btn>
                          <v-col v-for="snack in Snack" :key="snack.id">
                     <p>{{snack.name}} , {{snack.calorie}}calorie</p>
     
            

        <v-divider></v-divider>
               </v-col>
           </v-col>
           <!-------------------------Tableau --------------------------------->
           <v-col cols="12" md="6">
                  <v-table
    fixed-header
    height="400px"
    style="margin-top:100px"
  >


    <thead style="color:lightsteelblue">
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
        <th class="text-left">
          Carbs
        </th>
        <th class="text-left">
          fat
        </th>
        <th class="text-left">
          proteine
        </th>
        
        
     
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="regime in Regimes"
        :key="regime.id"
      >
        <td>{{ regime.name }}</td>
        <td>{{ regime.calorie }}</td>
            <td>{{ regime.carbs }}</td>
                <td>{{ regime.fat }}</td>
                    <td>{{ regime.proteine }}</td>
                  
                    
      </tr> 
      <tr>
         <td style="color:lightsteelblue">Total</td>
      <td style="color:brown">{{subTotalCalorie}}</td>
                     <td style="color:brown">{{subTotalCarbs}}</td>
                      <td style="color:brown">{{subTotalFat}}</td>
                       <td style="color:brown">{{subTotalProteine}}</td>
      </tr>
     
    </tbody>
  </v-table>
           </v-col>
        </v-row>
       
      
    </div>
   
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import axios from 'axios'
export default {
  components: { NavbarView },
    data() {
       return{
       dialog:false,
       Regimes:{},
       PDejuner:{},
            Dejuner:{},
                 Dinner:{},
                 Snack:{},
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
             carbs: 180,
              fat: 50,
               proteine: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
        
           
       
       } 
    },
           created(){
      this.getPDejuner();
      this.getDejuner();
      this.getDinner();
      this.getSnack();
       this.getRegime();
    },
     computed: {
    user() {
      return this.$store.getters.get_user;
    },
    subTotalCalorie(){
      var subCost=0;
      for(var items in this.Regimes){
        var p1 = this.Regimes[items];
        subCost = subCost+ p1.calorie;
      }
      return subCost
    },
     subTotalCarbs(){
      var subCost=0;
      for(var items in this.Regimes){
        var p1 = this.Regimes[items];
        subCost = subCost+ p1.carbs;
      }
      return subCost
    },
     subTotalFat(){
      var subCost=0;
      for(var items in this.Regimes){
        var p1 = this.Regimes[items];
        subCost = subCost+ p1.fat;
      }
      return subCost
    },
     subTotalProteine(){
      var subCost=0;
      for(var items in this.Regimes){
        var p1 = this.Regimes[items];
        subCost = subCost+ p1.proteine;
      }
      return subCost
    }
      
  },

    methods:{
            getRegime(){
       axios.get('http://localhost:8000/api/auth/getRegime/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.Regimes = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
                getPDejuner(){
       axios.get('http://localhost:8000/api/auth/getRegimeByPdejuner/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.PDejuner = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
            getDejuner(){
       axios.get('http://localhost:8000/api/auth/getRegimeByDejuner/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.Dejuner = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
            getDinner(){
       axios.get('http://localhost:8000/api/auth/getRegimeByDinner/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.Dinner = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
            getSnack(){
       axios.get('http://localhost:8000/api/auth/getRegimeBySnack/'+this.user.id)
        .then (res => {
         console.log(res.data);
         this.Snack = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
    }
}
</script>