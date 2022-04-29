<template>
  <navbar-view />
  <div >
     <v-carousel hide-delimiters  cycle     height="730">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
     
    >
    <h1>{{item.Text}}</h1>
    
    </v-carousel-item>
  </v-carousel>
  </div><br><br>
   <v-container>
        <br><br><br>
        
        <v-row>
            
        <v-col cols="12" md="6" lg="6">
            <br><br><br>
            <span style="background-color: black; color:white; font-size:20px ;" > HOW IT WORKS</span> <br>
            <h1  style="color:#212121">Reach new heights <br> with my trainings <br> right now...</h1>
        </v-col>
        <v-col cols="12" md="6" lg="6">
              <v-img  class="bg-white" width="600px"  height="500px"  :aspect-ratio="1"  src="https://images.pexels.com/photos/2417487/pexels-photo-2417487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                   cover   > </v-img>
        </v-col>
            <v-col cols="12" md="6" lg="6">
            <br><br><br>
            <v-img  class="bg-white" width="600px"  height="650px"  style="margin-top:-200px" :aspect-ratio="1"  src="https://tiboinshape.com/shop/modules/jscomposer/uploads/IMG_1516.jpg" 
                   cover   > </v-img>
        </v-col>
        <v-col cols="12" md="6" lg="6">
            <h1 class="stroke">01 </h1> <h6 style="margin-left:60px">step</h6>   
            <div style="margin-left:250px ; margin-top:-200px">    
             <p>Choose your Training</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis quasi enim perspiciatis <br> molestias nulla non. Molestias magnam dolores, repellendus hic esse <br> fugiat dolor eos doloremque est aperiam. Deserunt, quisquam?</p>
            </div>   
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="6" lg="6">
             <h1 class="stroke">02 </h1> <h6 style="margin-left:60px">step</h6>   
            <div style="margin-left:250px ; margin-top:-270px" >    
             <p>Start The Work Anywhere</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis quasi enim perspiciatis <br> molestias nulla non. Molestias magnam dolores, repellendus hic esse <br> fugiat dolor eos doloremque est aperiam. Deserunt, quisquam?</span>
            </div>   
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" md="6" lg="6">
              <v-img  class="work"  width="600px"  height="650px"  style="margin-top:-200px" :aspect-ratio="1"  src="https://tiboinshape.com/shop/modules/jscomposer/uploads/SHAKER001.jpg" 
                   cover   > </v-img>
        </v-col>
        <v-col cols="12" md="6" lg="6">
            <div style="margin-top:-180px">
               <h3 style="color:black ; font-size:50px">... and transform <br> your body, feel, and <br> recharge yourself.</h3> </div> 
            
        </v-col>
        
        </v-row>
    </v-container> <br><br><br>
  
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  components: { NavbarView },
  data() {
    return{
        items: [
            {
            src: 'https://images.pexels.com/photos/4348627/pexels-photo-4348627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
           {
            src: 'https://images.pexels.com/photos/3839058/pexels-photo-3839058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
             {
            src: 'https://images.pexels.com/photos/3799268/pexels-photo-3799268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            src: 'https://images.pexels.com/photos/8860983/pexels-photo-8860983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            Text:"test"
          },
         
        
       
        ],
    }
  },
}
</script>