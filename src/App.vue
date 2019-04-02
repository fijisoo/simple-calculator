<template>
  <AppContainer>
    <CalculatorContainer>
      <Button />
    </CalculatorContainer>
  </AppContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppContainer from '@/containers/AppContainer.vue';
import CalculatorContainer from '@/containers/CalculatorContainer.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    AppContainer,
    CalculatorContainer,
    Button,
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
