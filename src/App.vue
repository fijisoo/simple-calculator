<template>
  <AppContainer>
    <CalculatorContainer>
      <OptionsContainer />
      <CalcContainer />
      <KeyboardContainer />
    </CalculatorContainer>
  </AppContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppContainer from '@/containers/AppContainer.vue';
import CalculatorContainer from '@/containers/CalculatorContainer.vue';
import OptionsContainer from '@/containers/OptionsContainer.vue';
import CalcContainer from '@/containers/CalcContainer.vue';
import KeyboardContainer from '@/containers/KeyboardContainer.vue';

@Component({
  components: {
    AppContainer,
    CalculatorContainer,
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
