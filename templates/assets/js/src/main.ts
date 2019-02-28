import Vue from 'vue';
import HomeForm from './components/HomeForm.vue';

Vue.config.productionTip = false;

new Vue({
  components: {
    HomeForm,
  },
  data: {
    name: 'tetty',
  },
}).$mount('#app');
