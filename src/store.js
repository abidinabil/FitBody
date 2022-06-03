import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

const store = createStore({
  state: {
    loggedIn: false,
    loggedUser: false,
    loggedAdmin:false,
 
    user: null,
    token: null,
  },
  plugins: [new VuexPersistence().plugin],
  mutations: {
    SET_user(state, payload) {
      state.user = payload;
    },
    SET_token(state, payload) {
      state.token = payload;
    },
    SET_loggedIn(state, payload) {
      state.loggedIn = payload;
    },
    SET_loggedAdmin(state, payload) {
      state.loggedAdmin = payload;
    },
    SET_loggedUser(state, payload) {
      state.loggedUser = payload;
    },
  
    SET_cv(state, payload) {
      state.cvRegisterAction = payload;
    },
  },
  actions: {
    performLoginAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/login", {
            email: payload.email,
            password: payload.password,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            if(res.data.user.role == 'user'){
             
              commit("SET_loggedUser",true);
              commit("SET_loggedAdmin", false);
            }else if(res.data.user.role == 'admin'){
              
              commit("SET_loggedUser",false);
              commit("SET_loggedAdmin", true);
            }
           
           
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performRegisterCoach({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/register", {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            role: payload.role,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performRegisterUser({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/register", {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            role: payload.role,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performLogoutAction({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/logout", {
            token: state.token,
          })

          .then((res) => {
            commit("SET_token", null);
            commit("SET_user", null);
            commit("SET_loggedIn", false);
            commit("SET_loggedAdmin", false);
               commit("SET_loggedUser", false);
          
         
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    
   
  },
  getters: {
    get_loggedIn(state) {
      return state.loggedIn;
    },
    get_loggedAdmin(state) {
      return state.loggedAdmin;
    },
    get_loggedUser(state) {
      return state.loggedUser;
    },
  
    get_user(state) {
      return state.user;
    },
  },
});
export default store;
