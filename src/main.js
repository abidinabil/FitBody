import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store'
import Toaster from "@meforma/vue-toaster";
import LaravelVuePagination from 'laravel-vue-pagination';
















import { loadFonts } from './plugins/webfontloader'
export default {
  components: {
      'Pagination': LaravelVuePagination
  }
}

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueSweetalert2)
  .use(store)
  .use(Toaster)
  .use(LaravelVuePagination)
  

  
  

  .mount('#app')