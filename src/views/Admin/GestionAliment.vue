<template>
    <side-bar />
    <v-row>
    <v-col cols="12" md="2"></v-col>
    <v-col cols="12" md="10">
   
      <v-card
      
      height="500px"
      tile
      flat
      class="mx-10"
      style="background:url(https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940); margin-top:80px"
      dark
    >
     
    </v-card>
        <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="transparent">
                

                <h1 style="font-size:20px; "> Listes des Aliments</h1> <br>
                
                

                <v-spacer></v-spacer>
                   <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
          Ajouter Aliments
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        
          <v-spacer></v-spacer>
          
        </v-toolbar>
         <v-container style="margin-top:70px">
     
            
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                      <div class="alert alert-danger mt-4" v-if="errors.length" > 
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
              </ul>
                  </div>
                 <form action="" @submit.prevent="SaveAliment" novalidate>  
               <v-row >
                   
                 
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center" >Ajouter Aliment</h4>  
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="name"  label="name" outline  dense   color="blue"  autocomplete="false"  class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="calorie"  label="Calorie" outline  dense   color="blue"  autocomplete="false"  class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="carbs"  label="Carbs" outline  dense   color="blue"  autocomplete="false"  class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="fat" label="Fat" outlined  dense color="blue" autocomplete="false" class="mt-4"  />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="proteine" label="Proteine" outlined  dense color="blue" autocomplete="false" class="mt-4"  />
                           </v-col>
                              <v-col cols="12" sm="6">
                                <label for="workout-type" class="mb-1 text-sm text-at-light-green"
                        >Grammage</label
                    >
                            <select
                           
                            class="form-select"
                            required
                           
                            v-model="grammage"
                    >
                            <option >Select Grammage</option>
                            <option value="100">100g</option>
                            <option value="1">1L</option>
                               <option value="1">1</option>
                           
                          
                 </select>
                  
                           </v-col>
                            
                           </v-row>
                             
                           <input type="submit" value="Ajouter">
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                     
                  </v-row>
                  </form>
                </v-window-item>
                <v-window-item :value="2">
                  
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>


     
      </v-card>
    </v-dialog>
  </v-row>
         

                </v-toolbar>

                 </v-col>
                 
                 
            </v-row>
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
            <v-btn style="color:green" @click.prevent="getAliment">Tous Les Aliments</v-btn>
        <div v-if="Aliments == '' ">
            <v-alert type="error">Dzl Aucune Donneés Pour Le Moment</v-alert>
             </div>
             </v-col>
            
         </v-row>
                  <v-table
    fixed-header
    height="400px"
   
    class="mx-16"
  >


    <thead style="color:lightsteelblue">
      <tr>
        <th class="text-left">
          id
        </th>
        <th class="text-left">
          name
        </th>
        <th class="text-left">
          calorie
        </th>
        <th class="text-left">
          carbs
        </th>
        <th class="text-left">
          fat
        </th>
          <th class="text-left">
          proteine
        </th>
         
          <th class="text-left" >
          delete
        </th>
                <th class="text-left">
          update
        </th>
        
        
     
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="aliment in Aliments"
        :key="aliment.id"
      >
        <td>{{ aliment.id }}</td>
        <td>{{ aliment.name }}</td>
            <td>{{ aliment.calorie }}</td>
                <td>{{ aliment.carbs }}</td>
                    <td>{{ aliment.fat }}</td>
                     <td>{{ aliment.proteine }}</td>
                      <td>
                        <v-img type="button" @click="deleteAliment(aliment.id) " 
                         src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" style="margin-left:-50px; width: 150px;">
                        </v-img>
                        
                      
               
               </td>        
                    <td>      
             <v-dialog
      v-model="dialog1"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
      
            <v-img type="button" v-bind="props"  @click="updateAliment(aliment.id)"
                         src="https://www.lenovo.com/_ui/desktop/common/images/lsb/lsb-loading.gif" style="color:red ; width: 70px;">
                        </v-img>
       
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        
          <v-spacer></v-spacer>
          
        </v-toolbar>
         <v-container style="margin-top:70px">
     
            
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                    
                 <form action="" @submit.prevent="editAliment" novalidate>  
               <v-row >
                   
                 
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center" style="color:black">Modifier Aliment</h4>  <br><br>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editname"  label="name"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editcalorie"  label="Calorie"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editcarbs"  label="Carbs"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editfat" label="Fat"  color="secondary" variant="contained" placeholder="Placeholder" />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editproteine" label="Proteine"  color="secondary" variant="contained" placeholder="Placeholder"  />
                           </v-col>
                              <v-col cols="12" sm="6">
                                <label for="workout-type" class="mb-1 text-sm text-at-light-green"
                        >Grammage</label
                    >
                            <select
                           
                            class="form-select"
                            required
                           
                            v-model="editgrammage"
                    >
                            <option >Select Grammage</option>
                            <option value="100">100g</option>
                            <option value="1">1L</option>
                               <option value="1">1</option>
                           
                          
                 </select>
                  
                           </v-col>
                            
                           </v-row>
                             
                           <input type="submit" value="Modifier">
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                     
                  </v-row>
                  </form>
                </v-window-item>
                <v-window-item :value="2">
                  
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>


     
      </v-card>
    </v-dialog>   
                    </td>
                  
                  
                    
      </tr> 
     
     
    </tbody>
  </v-table> 
    </v-card>
    <!-- Button trigger modal -->

  <!-- Button trigger modal -->


  </v-col> 
  </v-row>
</template>
<script>
import SideBar from "@/components/SideBar.vue"
import axios from 'axios'
export default {
  components: { SideBar },
    data(){
        return{
              test: false,
              dialog:false,
              dialog1:false,
              
              
                
          Aliments :{},
          id:"",
               name:"",
               calorie:"",
               carbs:"",
               fat:"",
               proteine:"",
               grammage:"",
                editname:"",
               editcalorie:"",
               editcarbs:"",
               editfat:"",
               editproteine:"",
               editgrammage:"",
               errors:[],
               search:""
           
        
        }
    },
      created(){
      this.getAliment();
    },
    methods:{
        
    
             SaveAliment(){
                 this.errors = [];
                   if(!this.name){
                     this.errors.push("Name is required")
                   }
                    if(!this.calorie){
                     this.errors.push("calorie is required")
                   }
                    if(!this.carbs){
                     this.errors.push("carbs is required")
                   }
                    if(!this.fat){
                     this.errors.push("fat is required")
                   }
                    if(!this.proteine){
                     this.errors.push("proteine is required")
                   }
                if(!this.errors.lenght){
                   let fd = new FormData();
           
         
           console.log(FormData)
          
               fd.append('name', this.name);
           fd.append('calorie', this.calorie);
            fd.append('carbs', this.carbs);
                 fd.append('fat', this.fat);
                      fd.append('proteine', this.proteine);
                        fd.append('grammage', this.grammage);
     axios.post("http://localhost:8000/api/auth/SaveAliment" ,fd , { 
           
           })
        .then (res => {
         console.log(res);
           this.$toast.success(" success aliment saved.", {
                          position : "top-right"
                  });
                 
        
       }).catch(
         error =>{
             this.$toast.error(" error aliment not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
                }
     },
     
    
      
     
          getAliment(){
       axios.get('http://localhost:8000/api/auth/getAliment')
        .then (res => {
         console.log(res.data);
         this.Aliments = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
       deleteAliment(id){
        axios.delete('http://localhost:8000/api/auth/deleteAliment/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getAliment();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
       editAliment(){
        
           axios.put('http://localhost:8000/api/auth/editAliment' ,{
             
                id : this.id,
               name : this.editname,
               calorie: this.editcalorie,
                carbs: this.editcarbs,
               fat: this.editfat,
               proteine: this.editproteine,
               grammage : this.editgrammage,
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                        this.$toast.success(" update Aliment succesfuly.", {
                          position : "top-right"
                  });
                  this.$router.go(0);
                      this.getAliment();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" error Aliment not update.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
       },
        updateAliment(id){
           axios.get('http://localhost:8000/api/auth/updateAliment/'+ id)
        .then(response => {
               console.log(response);
               this.id = response.data.id;
               this.editname = response.data.name;
               this.editcalorie = response.data.calorie;
               this.editcarbs = response.data.carbs;
               this.editfat = response.data.fat;
               this.editproteine = response.data.proteine;
             this.editgrammage = response.data.grammage;
     }); 
    },
           searchAliment(){
            axios.get('http://localhost:8000/api/auth/searchAliment/'+this.search)
            .then (res => {
         console.log(res.data);
         this.Aliments = res.data;
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
@media(max-width: 500px){
  .table thead{
    display:none;
  }
  .table, .table tbody, .table tr,  .table th, .table td{
    display: block;
    width: 100%;
  }
  .table tr{
    margin-bottom: 15px;
 
  }
    
     
      .table th::before{
        content: attr(data-label);
        position: absolute;
        left: 0;
       
        padding-left: 15px;
        font-size: 15px;
        font-weight: bold;
        text-align: left;
      };
      .si{
    height:150vh;
    background: linear-gradient(-3deg,#172b4d 50%,#2dcecc 50%, #2dce89);
}
}
</style>