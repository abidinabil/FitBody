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
      style="background:url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500); margin-top:80px"
      dark
    >
     
    </v-card>
         <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="lightgray">
                <h1 style="font-size:20px; "> List Produit</h1> <br>
                
                

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
      rounded="lg"
      color="primary"
      v-bind="props"
    >
      Ajout Produit
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
  
        </v-toolbar>
          <v-container style="margin-top:-20px">
     
            
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                   <form action="" @submit.prevent="SaveProduit" novalidate >  
               <v-row >
                   

                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Ajouter Produit</h4> <br><br>
                        
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="12">
                           <v-row>
                           <v-col cols="12" sm="12">
                                        <!-- Produit Name -->
                    <div class="flex flex-col">
                    <label  class="mb-1 text-sm text-at-light-green"
                        >Produit Name</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Produit Name"
                        variant="contained"
                         required
                        
                        v-model="name"
                    ></v-text-field>
                    </div>
                           </v-col>
                           <v-col cols="12" sm="12">
                                  <!-- Workout Type -->
                    <div class="flex flex-col">
                    <label  class="mb-1 text-sm text-at-light-green"
                        >Catégorie Type</label
                    >
                   <select
                          
                        class="form-select"
                            required
                            @change="workoutChange"
                            v-model="categorieType"
                           
                    >
                            <option value="select-catégorie">Select Catégorie</option>
                            <option value="Mens">Mens</option>
                            <option value="Womens">Womens</option>
                               <option value="Accessoires">Accessoires</option>
                                  <option value="Proteine">Proteine</option>
                 </select>
                    </div><br><br>
                           </v-col>
     <!------------------------------------------------ Mens Input -------------------------------------->
       <v-col cols="12" sm="12">
        <div v-if="categorieType === 'Mens'" >
          <div
            v-for="(item, index) in exercises"
            :key="index"
          >     
                <!--------------------Sous_Catégorie---------------->
                
                  <v-col cols="12" sm="12">
                                <label for="workout-type" class="mb-1 text-sm text-at-light-green"
                        >Sous_Catégorie</label
                    >
                            <select
                            id="Catégorie"
                            class="form-select"
                              v-model="sous_categorie"
                            required >
                            <option value="select-workout">Select Sous Catégorie</option>
                            <option value="T-shirt">T-shirt</option>
                            <option value="shorts">Shorts</option>
                             <option value="Tanks">Tanks</option>
                             <option value="Hoodies">Hoodies</option>
                             <option value="Jackets">Jackets</option>
                              <option value="Stringers">Stringers</option>
                               <option value="Joggers">Joggers</option>
                              
                 </select>
                           </v-col>
                           <v-row>
                           <!---------------Slug ------------->
                                  <v-col cols="12" sm="6">
                            <label  class="mb-1 text-sm text-at-light-green"
                            
                        >Slug</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Slug"
                        variant="contained"
                         required
                           v-model="slug"
                      
                    ></v-text-field>
                           </v-col>
                               <!---------------Price ------------->
                        <v-col cols="12" sm="6">
                            <label  class="mb-1 text-sm text-at-light-green"
                        >Price</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Price"
                        variant="contained"
                         required
                           v-model="price"
                        
                      
                    ></v-text-field>
                           </v-col>
                           <!------------Image Profile ------------>
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col>
                           <!------------------Image Details ------------
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col> -->
                           <!---------------description ----------->
                              <v-col cols="12" sm="12">
                              <v-textarea
                                     color="secondary"
                                    label="Description"
                                    variant="contained"
                                      v-model="description"
                          ></v-textarea>
                           </v-col>
                           </v-row>
          </div>
          </div>
          </v-col>  

      <!----------------------------------------------Womens Input ----------------------------------------->
     
       <v-col cols="12" sm="12">
        <div v-if="categorieType === 'Womens'" >
          <div
            v-for="(item, index) in exercises"
            :key="index"
          >     
                <!--------------------Sous_Catégorie---------------->
                
                  <v-col cols="12" sm="12">
                                <label class="mb-1 text-sm text-at-light-green"
                        >Sous_Catégorie</label
                    >
                            <select
                            v-model="sous_categorie"
                            class="form-select"
                            required >
                            <option value="select-workout">Select Sous Catégorie</option>
                            <option value="T-shirt">T-shirt</option>
                            <option value="shorts">Shorts</option>
                             <option value="Tanks">Tanks Tops</option>
                               <option value="Sports">Sports Bras</option>
                             <option value="Hoodies">Hoodies</option>
                             <option value="Jackets">Jackets</option>
                              <option value="Stringers">Stringers</option>
                               <option value="Joggers">Joggers</option>
                              
                 </select>
                           </v-col>
                           <v-row>
                           <!---------------Slug ------------->
                                  <v-col cols="12" sm="6">
                            <label  class="mb-1 text-sm text-at-light-green"
                        >Slug</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Slug"
                        variant="contained"
                         required
                         v-model="slug"
                      
                    ></v-text-field>
                           </v-col>
                               <!---------------Price ------------->
                        <v-col cols="12" sm="6">
                            <label  class="mb-1 text-sm text-at-light-green"
                        >Price</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Price"
                        variant="contained"
                         required
                        v-model="price"
                      
                    ></v-text-field>
                           </v-col>
                           <!------------Image Profile ------------>
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col>
                           <!------------------Image Details ------------
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col> -->
                           <!---------------description ----------->
                              <v-col cols="12" sm="12">
                              <v-textarea
                                     color="secondary"
                                    label="Description"
                                    variant="contained"
                                    v-model="description"
                          ></v-textarea>
                           </v-col>
                           </v-row>
          </div>
          </div>
          </v-col>  


             <!----------------------------------------------Accesoires Input ----------------------------------------->
     
       <v-col cols="12" sm="12">
        <div v-if="categorieType === 'Accessoires'" >
          <div
            v-for="(item, index) in exercises"
            :key="index"
          >     
                <!--------------------Sous_Catégorie---------------->
                
                  <v-col cols="12" sm="12">
                                <label class="mb-1 text-sm text-at-light-green"
                        >Sous_Catégorie</label
                    >
                            <select
                            id="Catégorie"
                            class="form-select"
                            v-model="sous_categorie"
                            required >
                            <option value="select-workout">Select Sous Catégorie</option>
                            <option value="Bags">Bags</option>
                            <option value="HeadWear">HeadWear</option>
                             <option value="Socks">Socks</option>
                               <option value="Equipement">Equipement</option>
                             <option value="Bootles">Bootles</option>
                           
                              
                 </select>
                           </v-col>
                           <v-row>
                           <!---------------Slug ------------->
                                  <v-col cols="12" sm="6">
                            <label  class="mb-1 text-sm text-at-light-green"
                        >Slug</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Slug"
                        variant="contained"
                         required
                         v-model="slug"
                      
                    ></v-text-field>
                           </v-col>
                               <!---------------Price ------------->
                        <v-col cols="12" sm="6">
                            <label  class="mb-1 text-sm text-at-light-green"
                        >Price</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Price"
                        variant="contained"
                         required
                        v-model="price"
                      
                    ></v-text-field>
                           </v-col>
                           <!------------Image Profile ------------>
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col>
                           <!------------------Image Details ------------
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col> -->
                           <!---------------description ----------->
                              <v-col cols="12" sm="12">
                              <v-textarea
                                     color="secondary"
                                    label="Description"
                                    variant="contained"
                                    v-model="description"
                          ></v-textarea>
                           </v-col>
                           </v-row>
          </div>
          </div>
          </v-col>  


    <!-----------------------------------------------------Proteine --------------------------------------------->
       <v-col cols="12" sm="12">
        <div v-if="categorieType === 'Proteine'" >
          <div
            v-for="(item, index) in exercises"
            :key="index"
          >     
                <!--------------------Sous_Catégorie---------------->
                
                  <v-col cols="12" sm="12">
                                <label class="mb-1 text-sm text-at-light-green"
                        >Sous_Catégorie</label
                    >
                            <select
                            id="Catégorie"
                            class="form-select"
                            v-model="sous_categorie"
                            required >
                            <option value="select-workout">Select Sous Catégorie</option>
                            <option value="Amino">Amino</option>
                            <option value="MICRONUTRIMENTS">MICRONUTRIMENTS</option>
                             <option value="CÉRÉALES">CÉRÉALES</option>
                               <option value="Proteine">Proteine</option>
                             
                           
                              
                 </select>
                           </v-col>
                           <v-row>
                           <!---------------Slug ------------->
                                  <v-col cols="12" sm="6">
                            <label  class="mb-1 text-sm text-at-light-green"
                        >Slug</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Slug"
                        variant="contained"
                         required
                      v-model="slug"
                    ></v-text-field>
                           </v-col>
                               <!---------------Price ------------->
                        <v-col cols="12" sm="6">
                            <label  class="mb-1 text-sm text-at-light-green"
                        >Price</label
                    >
                        <v-text-field
                        color="secondary"
                        label="Price"
                        variant="contained"
                         required
                        v-model="price"
                      
                    ></v-text-field>
                           </v-col>
                           <!------------Image Profile ------------>
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col>
                           <!------------------Image Details ------------
                           <v-col cols="12" sm="6">
                            <v-file-input
                          accept="image/*" label="File input" color="secondary" variant="contained" required  @change="onChange"  >
                          </v-file-input>
                           </v-col> -->
                           <!---------------description ----------->
                              <v-col cols="12" sm="12">
                              <v-textarea
                                     color="secondary"
                                    label="Description"
                                    variant="contained"
                                    v-model="description"
                          ></v-textarea>
                           </v-col>
                           </v-row>
          </div>
          </div>
          </v-col>        

                           </v-row>
                          <v-btn
                          class="ma-2"
                          outlined
                          color="indigo"
                          type="submit" value="Ajouter" 
                        >
                          Ajouter
                        </v-btn>
    
                 
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
                   <v-table
    fixed-header
    height="800px">


    <thead style="color:lightsteelblue">
      <tr>
        <th class="text-left">
          id
        </th>
        <th class="text-left">
          name
        </th>
        <th class="text-left">
          categorie
        </th>
        <th class="text-left">
          sous_categorie
        </th>
        <th class="text-left">
          slug
        </th>
          <th class="text-left">
          desprition
        </th>
          <th class="text-left">
          price
        </th>
          <th class="text-left">
          image
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
        v-for="produit in produits"
        :key="produit.id"
      >
        <td>{{ produit.id }}</td>
        <td>{{ produit.name }}</td>
            <td>{{ produit.categorie }}</td>
                <td>{{ produit.sous_categorie }}</td>
                    <td>{{ produit.slug }}</td>
                     <td>{{ produit.description }}</td>
                      <td>{{ produit.price }}</td>
                <td>  <v-img v-bind:src="'../image/boutique/' + produit.image" style="width:150px ; height: 150px"></v-img>
                   <v-dialog transition="dialog-top-transition">
            <template v-slot:activator="{ props }">
              <v-btn flat rounded v-bind="props"
                ><v-icon>mdi-image-edit</v-icon></v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="primary">Télécharger votre photo</v-toolbar>
                <v-icon style="margin-left: 200px" size="50">
                  mdi-check-outline
                </v-icon>
                <form @submit.prevent="ModifierImageProduit(produit.id)">
                  <input type="file" @change="onChange" />
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn text rounded type="submit">ENregistrer</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </template>
          </v-dialog>
                </td>
                    <td>     
                       <v-img type="button"  @click="deleteProduit(produit.id) "
                         src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" style="margin-left:-50px; width: 150px;">
                        </v-img>         
                    </td>
                        <td>      
                <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
          <v-img type="button" v-bind="props"  @click="updateProduit(produit.id)"
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
                          class="text-center" >Modifier Coach</h4>  
                           <v-row class="mx-4">
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editname"  label="name"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editsouscategorie"  label="Calorie"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editslug"  label="Calorie"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                              <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="editdescription"  label="Calorie"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                              <v-col cols="12" sm="12">
                               <v-textarea
                              v-model="editprice"  label="Description"  color="secondary" variant="contained" placeholder="Placeholder"
                          ></v-textarea>
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
              @click="editProduit(produit.id)"
              >Update</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>  
                    </td>
                  
                  
                    
      </tr> 
     
     
    </tbody>
  </v-table>
         
                       
                       </v-card>
        </v-col>
        </v-row>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import { ref } from '@vue/reactivity';
import axios from 'axios'
export default {
  components: { SideBar },
    data() {
        const categorieType = ref("select-catégorie");
           const exercises = ref([1]);
        return{
                    dialog:false, 
                    dialog1:false,
                       categorieType,
               exercises,
               
       
                 errors:[],
                 name:"",
              
                 sous_categorie:"",
                 slug:"",
                 price:"",
                 description:"",
                 image:"", 
                 produits:{},
                 editname:"",
                 editcategorie:"",
                 editslug:"",
                 editprice:"",
                 editdescription:"",
        }
    },
  
        mounted(){
      this.getProduit();
    },
  
    methods: {
         onChange(e){
           console.log("selected file", e.target.files[0])
           this.image = e.target.files[0]; 
         },  
                    SaveProduit(){
            
            
                   let fd = new FormData();
           
         
           console.log(FormData)
              fd.append('name', this.name);
           fd.append('image', this.image);
            fd.append('categorie', this.categorieType);
                 fd.append('sous_categorie', this.sous_categorie);
                      fd.append('slug', this.slug);
                          fd.append('price', this.price);
                              fd.append('description', this.description);
     axios.post("http://localhost:8000/api/auth/saveProduit" ,fd , { 
           
           })
        .then (res => {
         console.log(res);
           this.$toast.success(" success Produit saved.", {
                          position : "top-right"
                  });
                   
        
       }).catch(
         error =>{
             this.$toast.error(" error Produit not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
                
     },
      getProduit() {
            axios.get('http://localhost:8000/api/auth/getProduit')
                .then(response => {
                  console.log(response.data)
                    this.produits = response.data;
                });
        },
         deleteProduit(id){
        axios.delete('http://localhost:8000/api/auth/deleteProduit/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getProduit();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
          updateProduit(id){
           axios.get('http://localhost:8000/api/auth/updateProduit/'+ id)
        .then(response => {
               console.log(response);
               this.id = response.data.id;
               this.editname = response.data.name;
               this.editcategorie = response.data.categorieType;
                   this.editslug = response.data.slug;
                         this.editdescription = response.data.description;
               this.editprice = response.data.price;
            
     }); 
    },
        ModifierImageProduit($id) {
      let fd = new FormData();
      fd.append("image", this.image);
      axios
        .post("http://localhost:8000/api/auth/ModifierImageProduit/" + $id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.getProduit();
        })
        .catch((err) => console.log(err));
    },
    },
}
</script>