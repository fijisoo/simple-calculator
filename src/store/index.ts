import Vue from 'vue';
import Vuex from 'vuex';
import { initState, StateStructure } from './initState';
import { updateActiveNumber, clearCalcData } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: initState as StateStructure,
  mutations: {
    updateActiveNumber,
    clearCalcData,
  },
  actions: {

  },
});
