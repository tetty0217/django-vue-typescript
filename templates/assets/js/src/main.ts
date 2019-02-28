import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.config.productionTip = false;

new Vue({
  components: {
    HelloWorld,
  },
}).$mount('#app');
