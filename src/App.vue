<template>
  <AppLayout>
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
