<template>
  <div :class="currentCalcFlowClasses">
    <Flex :class='flexWrapperClass' contentHorizontalAlign='flexEnd' contentVerticalAlign='flexEnd'>
      <Typography textColor='grey' textSize='xsmall'>{{number}}</Typography>
    </Flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Typography from '@/components/Typography.vue';
import Flex from '@/components/Flex.vue';

@Component({
  components: {
    Typography,
    Flex,
  },
})
export default class CurrentCalcFlowContainer extends Vue {
    // Fallback before connecting to Vuex
    private number = '365 x 4  =';
    private flexWrapperClass: string = 'current-calc-flow-flex-wrapp';

    get currentCalcFlowClasses(): string[] {
        return [
          'current-calc-flow-container',
          'number-display-wrapper-padding',
        ];
    }
}
</script>

<style lang="scss">
    @import '@/styles/variables/Colors.variables.scss';
    @import '@/styles/NumberDisplay.scss';
    .current-calc-flow-container {
      display: grid;
      grid-area: 1/1/1/5;
      background-color: $greyishBlue;
    }

    .current-calc-flow-flex-wrapp {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis
    }
</style>
