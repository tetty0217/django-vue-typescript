import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.config.productionTip = false;

new Vue({
  // delimiters: ["<<",">>"],
  components: {
    HelloWorld,
  },
  data: {
    name: 'tetty',
  },
}).$mount('#app');
