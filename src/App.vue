<template>
  <AppLayout>
    <ModalApproachContainer />
    <ModalSumTableContainer />
    <CalculatorLayout>
      <CurrentCalcFlowContainer />
      <CurrentNumberDisplayContainer />
      <OptionsContainer />
      <CalcContainer />
      <KeyboardContainer />
    </CalculatorLayout>
  </AppLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppLayout from '@/layouts/AppLayout.vue';
import ModalApproachContainer from '@/containers/ModalApproachContainer.vue';
import ModalSumTableContainer from '@/containers/ModalSumTableContainer.vue';
import CalculatorLayout from '@/layouts/CalculatorLayout.vue';
import CurrentCalcFlowContainer from '@/containers/CurrentCalcFlowContainer.vue';
import CurrentNumberDisplayContainer from '@/containers/CurrentNumberDisplayContainer.vue';
import OptionsContainer from '@/containers/OptionsContainer.vue';
import CalcContainer from '@/containers/CalcContainer.vue';
import KeyboardContainer from '@/containers/KeyboardContainer.vue';

@Component({
  components: {
    AppLayout,
    CalculatorLayout,
    CurrentCalcFlowContainer,
    CurrentNumberDisplayContainer,
    OptionsContainer,
    CalcContainer,
    KeyboardContainer,
    ModalApproachContainer,
    ModalSumTableContainer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  html, body {
    padding: 0;
    margin: 0;
  }
</style>
