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
      style="background:url(https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt24c38c91be162c7e/5de0b81b9ea65b64fac04644/Meal_Prep_Header_Cut.jpg?format=pjpg&auto=webp&quality=76&width=1232); margin-top:80px"
      dark
    >
     
    </v-card>
        <v-card tile class="mx-16 mt-n10 card1" color="white">
             <v-row>
                 <v-col cols="12" md="12">
                     <v-toolbar extended color="transparent">
                

                <h1 style="font-size:20px; "> Listes des Articles du Nutrition</h1> <br>
                
                

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
          Ajouter Article
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
                 <form action="" @submit.prevent="SaveNutrition" novalidate>  
               <v-row >
                   
                 
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center" style="color:black">Ajouter Article</h4> <br><br> 
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="name"  label="name"  color="secondary"     variant="contained"  required
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="title"   color="secondary"  label="Title" variant="contained"  required
                          />
                           </v-col>
                           <v-col cols="12" sm="12">
                            <v-text-field
                            v-model="text"  color="secondary"        label="Slug"    variant="contained" required  />
                           </v-col>
                            <v-col cols="12" sm="12">
                              <v-textarea
                              v-model="subtext"   color="secondary"  label="Description"  variant="contained" required
                          ></v-textarea>
                           </v-col>
                           </v-row>
                            <v-file-input
                          accept="image/*"  color="secondary"  label="Image" variant="contained"
                         required   @change="onChange" ></v-file-input>     
                           <input type="submit" value="Ajouter" >
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
             <v-table  fixed-header>
        <thead style="color:lightsteelblue">
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">text</th>
            <th scope="col">subtext</th>
            <th scope="col">image</th>
            <th> delete</th>
            <th>update</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="nutrition in nutritions" :key="nutrition.id">
              <td>{{nutrition.id}}</td>
            <td>{{nutrition.title}}</td>
            <td>{{nutrition.text}}</td>
            <td><p v-if="nutrition.subtext.length > 100">
                {{
                  showAll ? nutrition.subtext : nutrition.subtext.slice(0, 120)
                }}
                <a  ><span @click="showAll = true" style="color: blue"
                    >Lire la Suite</span ></a >
                  

              </p>
             
              </td>
            <td>  <v-img v-bind:src="'../image/Nutrition/' + nutrition.image" style="width:150px ; height: 150px"></v-img>
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
                <form @submit.prevent="ModifierImage(nutrition.id)">
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
                
                 <v-img type="button" @click="deleteNutrition(nutrition.id) " 
                         src="https://cdn.dribbble.com/users/1914549/screenshots/5346994/day21.gif" style="margin-left:-30px; width: 150px;">
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
      
            <v-img type="button" v-bind="props"  @click="updateNutrition(nutrition.id)"
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
                    
                 <form action="" @submit.prevent="editNutrition" novalidate>  
               <v-row >
                   
                 
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center" style="color:black" >Modifier Article de Nutrition</h4> <br><br> 
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                               <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="edittitle"  label="Title"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="edittext"  label="Text"  color="secondary" variant="contained" placeholder="Placeholder"
                          />
                           </v-col>
                           
                               <v-textarea
                              v-model="editsubtext"  label="Description"  color="secondary" variant="contained" placeholder="Placeholder"
                          ></v-textarea>
                          
                           
                            
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
              
              
                
          nutritions :{},
          id:"",
               title:"",
               text:"",
               subtext:"",
               image:"",
               edittitle:"",
               edittext:"",
               editsubtext:"",
               editimage:"",
               errors:[],
               showAll:false,
               showAll1:false,
           
        
        }
    },
      created(){
      this.getNutrition();
    },
    methods:{
        onChange(e){
           console.log("selected file", e.target.files[0])
           this.image = e.target.files[0]; 
         },
    
             SaveNutrition(){
                 this.errors = [];
                   if(!this.name){
                     this.errors.push("Name is required")
                   }
                    if(!this.text){
                     this.errors.push("text is required")
                   }
                    if(!this.title){
                     this.errors.push("title is required")
                   }
                    if(!this.subtext){
                     this.errors.push("description is required")
                   }
                    if(!this.image){
                     this.errors.push("photo is required")
                   }
                if(!this.errors.lenght){
                   let fd = new FormData();
           
         
           console.log(FormData)
            console.log(this.name)
           fd.append('image', this.image);
            fd.append('text', this.text);
                 fd.append('title', this.title);
                      fd.append('subtext', this.subtext);
     axios.post("http://localhost:8000/api/auth/Nutrition" ,fd , { 
           
           })
        .then (res => {
         console.log(res);
           this.$toast.success(" success Nutrition saved.", {
                          position : "top-right"
                  });
                   this.getNutrition();
        
       }).catch(
         error =>{
             this.$toast.error(" error Nutrition not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
                }
     },
     
    
      
     
          getNutrition(){
       axios.get('http://localhost:8000/api/auth/getNutrition')
        .then (res => {
         console.log(res.data);
         this.nutritions = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
       mounted() {
       console.log('Nutrition ')
     },
     deleteNutrition(id){
        axios.delete('http://localhost:8000/api/auth/deleteNutrition/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getNutrition();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
     updateNutrition(id){
           axios.get('http://localhost:8000/api/auth/updateNutrition/'+ id)
        .then(response => {
               console.log(response);
                  this.id = response.data.id;
               this.edittitle = response.data.title;
               this.edittext = response.data.text;
               this.editsubtext = response.data.subtext;
               this.editimage = response.data.image
     }); 
    },
       editNutrition(){
             if(!this.edittitle){
                     this.errors.push("Name is required")
                   }
                    if(!this.edittext){
                     this.errors.push("text is required")
                   }
                  
                    if(!this.editsubtext){
                     this.errors.push("description is required")
                   }
                    if(!this.editimage){
                     this.errors.push("photo is required")
                   }
           axios.put('http://localhost:8000/api/auth/editNutrition' ,{
                id : this.id,
               title : this.edittitle,
               text: this.edittext,
               subtext: this.editsubtext,
               image : this.editimage,
                
             })   .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  
                          this.$toast.success(" update Nutrition succesfuly.", {
                          position : "top-right"
                  });
                      this.getNutrition();
                   
               }
          }).catch(
              error =>{
                  this.$toast.error(" error Nutrition not update.", {
                                position : "top-right"
                                
                        });      
                console.log(error);
              } 
              
            )
       },
           ModifierImage($id) {
      let fd = new FormData();
      fd.append("image", this.image);
      axios
        .post("http://localhost:8000/api/auth/ModifierImageNutrition/" + $id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.getNutrition();
        })
        .catch((err) => console.log(err));
    },
       imagechange(){
         for(let i = 0 ;i<this.$refs.files.files.length; i++){
           this.image.push(this.$refs.files.files[i]);
           console.log(this.image);
         }
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