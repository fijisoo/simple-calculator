import Vue from 'vue';
import Vuex from 'vuex';
import { initState, StateStructure } from './initState';
import {
  updateActiveNumber,
  clearCalcData,
  addOperations,
  addNumber,
  setActiveNumber,
  setAfterEqual,
} from './mutations';
import { resolveOperation as resolveOperationFn, resolveCalcClick } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: initState as StateStructure,
  mutations: {
    updateActiveNumber,
    clearCalcData,
    addOperations,
    addNumber,
    setActiveNumber,
    setAfterEqual,
  },
  actions: {
    updateActiveNumber: resolveCalcClick('updateActiveNumber'),
    resolveOperation: resolveCalcClick('resolveOperationFn', true),
    resolveOperationFn,
  },
});
