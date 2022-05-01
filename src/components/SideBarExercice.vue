<template>
 <v-app-bar-nav-icon @click="drawer= true"  class="bar"></v-app-bar-nav-icon>
  <div>

   <v-navigation-drawer style="margin-top:80px ; background-color:white ;" flat app v-model="drawer"  >
      <v-list-item-group  >  
        <v-list-item v-for="item in items" :key="item.text" router :to="item.route"  >
          <v-list-item-action style="padding:0.5rem">
            <v-img :src="item.img" style="width:50px"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >{{item.text}}</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
   </v-navigation-drawer>
       
    </div>
    
</template>
<script>

import PopupView from "./PopupView.vue"
export default {
    component:{PopupView ,    },
  
       data() {
        return {
            drawer: true,
             items: [
                { text: 'Biceps', img: 'https://img.icons8.com/ios-filled/2x/biceps.png' },
                { text: 'Triceps', img: 'https://img.icons8.com/ios-filled/2x/triceps.png'  },
                { text: 'Jambes', img: 'https://img.icons8.com/ios-filled/2x/quadriceps.png'  },
                { text: 'Pectoreaux', img: 'https://img.icons8.com/ios-filled/2x/chest.png' },
                { text: 'Dorceaux', img: 'https://img.icons8.com/ios-filled/2x/back-muscles.png'  },
                { text: 'Abdominaux', img: 'https://img.icons8.com/ios-glyphs/2x/sit-ups.png'  },
                {text: 'Epaule' , img:'https://img.icons8.com/ios-filled/2x/shoulders.png'}
      
           
        
      ],
        }
    },
     methods: {
   
   performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then((res) => {
          console.log(res);
          this.$router.push("/exampleView");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
    computed: {
    loggedIn() {
      return this.$store.getters.get_loggedIn;
    }
    }
}
</script>
<style>
@media only screen and (max-width: 768px) {
  .bar {
    flex-direction: column;
   margin-top: -910px;
  }
}

</style>

