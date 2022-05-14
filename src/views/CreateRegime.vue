<template>
    <navbar-view />
    <div style="margin-top:30px">
        
              <v-row class="mx-16">
           <v-col cols="12" md="6">
               <!---------------------Petit Déjuner ------------->
               <p>Petit Déjuner</p>
          <v-btn to="searchAliment">Ajouter Un aliment</v-btn>
  

        <v-divider></v-divider>
        <!----------------------------Déjuner --------------------->
             <p> Déjuner</p>
                           <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >Ajouter un aliment</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
            >Opening from the bottom</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog><br>
        <v-divider></v-divider>
        <!--------------------------Dinner ----------------------->
             <p>Dinner</p>
                           <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >Ajouter un aliment</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
            >Opening from the bottom</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog><br>
        <v-divider></v-divider>
        <!----------------------Snack ------------------->
             <p>Snack</p>
                           <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >Ajouter un aliment</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
            >Opening from the bottom</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
        <v-divider></v-divider><br>
           </v-col>
           <!-------------------------Tableau --------------------------------->
           <v-col cols="12" md="6">
                  <v-table
    fixed-header
    height="400px"
    style="margin-top:100px"
  >
    <thead>
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
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
            <td>{{ item.carbs }}</td>
                <td>{{ item.fat }}</td>
                    <td>{{ item.proteine }}</td>
      </tr>
    </tbody>
  </v-table>
           </v-col>
        </v-row>
       
      
    </div>
   
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
export default {
  components: { NavbarView },
    data() {
       return{
       dialog:false,
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
}
</script>