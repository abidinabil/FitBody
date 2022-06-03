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
         <th class="text-left">
          Supprimer
        </th>
         <th class="text-left">
          Modifier
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
                      <td>
                
                 <v-img type="button" @click="deleteRegime(regime.id) " 
                         src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" style="margin-left:-50px; width: 150px;">
                        </v-img>
             </td>
             <td>
                     <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
          <v-img type="button" v-bind="props"  @click="updateAlimentUser(regime.name)"
                         src="https://www.lenovo.com/_ui/desktop/common/images/lsb/lsb-loading.gif" style="color:red ; width: 70px;">
                        </v-img>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card style=" width: 900px ; margin-top:-130px ; margin-left:-150px" >
            <v-toolbar
              color="primary"
            >Opening from the top</v-toolbar>
             <v-window v-model="step">
                <v-window-item :value="1">               
                 <form action="" >  
                        <h4
                          class="text-center" >Modifier Aliment</h4>  
                           <v-row class="mx-4">
                               <v-col cols="12" sm="6">
                                 <v-text-field
                            v-model="AlimentUser.qty"  label="qty"  color="secondary" variant="contained" type="number" placeholder="Placeholder"
                          />
                          
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                           v-bind:label="AlimentUser.calorie * AlimentUser.qty"  disabled="disabled"  color="secondary" variant="contained" 
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                              v-bind:label="AlimentUser.carbs * AlimentUser.qty"   disabled="disabled"   color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                              v-bind:label="AlimentUser.grammage * AlimentUser.qty"  disabled="disabled"   color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                              <v-col cols="12" sm="6">
                            <v-text-field
                              v-bind:label="AlimentUser.fat * AlimentUser.qty"  disabled="disabled"   color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                              <v-col cols="12" sm="12">
                               <v-text-field
                               v-bind:label="AlimentUser.proteine * AlimentUser.qty" disabled="disabled"  color="secondary" variant="contained" placeholder="Placeholder"
                          ></v-text-field>
                           </v-col>
                         
                        
                           </v-row>
 
                           </form>
                           </v-window-item>
                           </v-window>
                           
                      
                          
            <v-card-actions class="justify-center">
              <v-btn
                text
                @click="isActive.value = false"
              >Close</v-btn>
                <v-btn
              @click="editRegimeUser(regime.id)"
              >Update</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog> 
             </td>
             
                  
                    
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
               
                 
                 AlimentUser:{},
                 
            grammage:"",
            calorie:"",
            carbs:"",
            fat:"",
            qty:"",
            proteine:"",
    
        
           
       
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
        
      updateAlimentUser($name){
           axios.get('http://localhost:8000/api/auth/updateAlimentUser/'+ $name)
         .then (res => {
         console.log(res.data);
         this.AlimentUser = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
    },
    
         deleteRegime(id){
        axios.delete('http://localhost:8000/api/auth/deleteRegime/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getRegime();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
      editRegimeUser($id){
       
           axios.post('http://localhost:8000/api/auth/editRegimeUser/'+ $id ,{
              
        
             grammage:this.AlimentUser.grammage * this.AlimentUser.qty,
             calorie:this.AlimentUser.calorie * this.AlimentUser.qty,
             carbs:this.AlimentUser.carbs * this.AlimentUser.qty,
             fat:this.AlimentUser.fat * this.AlimentUser.qty,
             proteine:this.AlimentUser.proteine * this.AlimentUser.qty,
               qty:this.AlimentUser.qty ,
          
           
          
                
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
    }
    
}
</script>