import Vue from 'vue';
import Vuex from 'vuex';
import {HomeState} from './modules/home';

Vue.use(Vuex);

export interface State {
  msg: HomeState;
}

export default new Vuex.Store<State>({});
