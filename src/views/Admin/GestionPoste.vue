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
                

                <h1 style="font-size:20px; "> Listes des Postes </h1> <br>
                
                

                <v-spacer></v-spacer>
     
         

                </v-toolbar>

                 </v-col>
                 
                 
            </v-row>
             <v-table  fixed-header>
        <thead style="color:lightsteelblue">
          <tr>
           
            <th scope="col">id utilisateur</th>
            <th scope="col">description</th>
            <th scope="col">image Poste</th>
          
            <th> accepter</th>
            <th>Refuser</th>
           
          </tr>
        </thead>
        <tbody >
          <tr v-for="poste in Postes" :key="poste.id">
              <td>{{poste.id}}</td>
              <td><p v-if="poste.post.length < 100">
                {{
                  showAll ? poste.post : poste.post.slice(0, 120)
                }}
                <a  ><span @click="showAll = true" style="color: blue"
                    >Lire la Suite</span ></a >
                  

              </p>
             
              </td>
            <td><v-img v-bind:src="'../image/Post/' + poste.image" style="width:150px ; height: 150px"></v-img></td>
            <td>
                   <v-img type="button"   @click="AccepterPost(poste.id) " 
                         src="data:image/png;base64,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" style="margin-left:-30px; width: 110px;">
                        </v-img>
            </td>
          
             <td>
                
                 <v-img type="button" @click="RefuserPost(poste.id) " 
                         src="data:image/png;base64,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" style="margin-left:-30px; width: 90px;">
                        </v-img>
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
          Postes :{},
          showAll:false,
          etat:"",
        }
    },
      created(){
      this.getAllPost();
    },
    methods:{
          getAllPost(){
       axios.get('http://localhost:8000/api/auth/getAllPost')
        .then (res => {
         console.log(res.data);
         this.Postes = res.data;
       }).catch(
         error =>{
           console.log(error);
         } 
         
       )
     },
     
     deletePoste(id){
        axios.delete('http://localhost:8000/api/auth/deletePost/'+ id)
        .then(response => {
               console.log(response);
              
               if(response.status == 200){
                  this.getPost();
                      this.$swal('deleted succefuly');
                   
               }else{
                 alert('error')
               }
          });
     },
      AccepterPost($id){
       
           axios.post('http://localhost:8000/api/auth/AccepterPost/'+ $id ,{
             etat:1    
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                      this.$toast.success(" success poste saved.", {
                          position : "top-right"

                  });
            
                  
               }
          }).catch(
         error =>{
             this.$toast.error(" error poste not saved.", {
                          position : "top-right"
                          
                  });
                  
           console.log(error);
         } 
         
       )
        },
          RefuserPost($id){
       
           axios.post('http://localhost:8000/api/auth/RefuserPost/'+ $id ,{
             etat:2    
             } ).then(response => {
               console.log(response);
              
               if(response.status == 200){
                      this.$toast.success(" success Poste saved.", {
                          position : "top-right"

                  });
            
                  
               }
          }).catch(
         error =>{
             this.$toast.error(" error Poste not saved.", {
                          position : "top-right"
                          
                  });
                  
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