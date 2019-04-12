<template>
  <div :class="currentCalcFlowClasses">
    <Flex :class='flexWrapperClass' contentHorizontalAlign='flexEnd' contentVerticalAlign='flexEnd'>
      <Typography textWeight='light' textColor='grey' textSize='xsmall'>{{currentFlowValues}}</Typography>
    </Flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import Typography from '@/components/Typography.vue';
import Flex from '@/components/Flex.vue';

@Component({
  components: {
    Typography,
    Flex,
  },
})
export default class CurrentCalcFlowContainer extends Vue {
    @State('allNumbers')
    private allNumbers!: string[];

    @State('allOperations')
    private allOperations!: string[];

    private flexWrapperClass: string = 'current-calc-flow-flex-wrapp';

    get currentCalcFlowClasses(): string[] {
        return [
          'current-calc-flow-container',
          'number-display-wrapper-padding',
        ];
    }

    get currentFlowValues(): string {
      return this.allNumbers.reduce(
        (acc: string, currentNumber: string, currentIndex: number): string => {
          return `${acc} ${currentNumber} ${this.allOperations[currentIndex] || ''}`;
        }
      , '');
    }
}
</script>

<style lang="scss">
    @import '@/styles/variables/Colors.variables.scss';
    @import '@/styles/NumberDisplay.scss';
    @import '@/styles/TextFlow.scss';

    .current-calc-flow-container {
      display: grid;
      grid-area: 1/1/1/5;
      background-color: $greyishBlue;
    }

    .current-calc-flow-flex-wrapp {
      @include getEllipsis();
    }
</style>
