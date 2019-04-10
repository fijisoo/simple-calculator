<template>
  <div :class="currentNumberDisplayClasses">
    <Flex :class='currentNumberFlexWrapperClass' contentHorizontalAlign='flexEnd'>
      <Typography :style="currentNumberStyle">{{currentNumber}}</Typography>
    </Flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Typography from '@/components/Typography.vue';
import Flex from '@/components/Flex.vue';
import { BackgroundColor } from '@/types/Colors.types';
import { BasicAlignment } from '@/types/Align.types';

interface CurrentNumberStyle {
  fontSize: string;
}

@Component({
  components: {
    Typography,
    Flex,
  },
})
export default class CurrentNumberDisplayContainer extends Vue {
    // Fallback before connecting to Vuex
    private number = '1';
    private fontSizeBase: number = 6;
    private fontSizeDivider: number = 14;
    private minFontSize: number = 2.5;
    private currentNumberFlexWrapperClass: string = 'currentNumberFlexWrapper';

    get currentNumberDisplayClasses(): [string] {
        return ['current-number-display-container'];
    }

    get currentNumber(): string {
      const numberString: string = String(this.number);
      const [full, decimal] = numberString.split('.') as [string, string];
      const fullWithCommas: string =
      full
          .split('')
          .reverse()
          .reduce((acc: string, currentNumber: string, currentIndex: number): string => {
            const insertComma = currentIndex !== 0 && currentIndex % 3 === 0;
            return insertComma ? `${currentNumber},${acc}` : `${currentNumber}${acc}`;
        },
      '');
      return fullWithCommas + (decimal ? `.${decimal}` : '');
    }

    get currentNumberStyle(): CurrentNumberStyle {
      return {
        fontSize: `${this.dynamicFontSize}vmax`,
      };
    }

    get dynamicFontSize(): number {
      const numberSize: number = String(this.number).length;
      const calculatedFontSize: number = this.fontSizeBase - Number(numberSize / this.fontSizeDivider);
      return (calculatedFontSize < this.minFontSize)
        ? this.minFontSize
        : calculatedFontSize;
    }
}
</script>

<style lang="scss">
    @import '@/styles/variables/Colors.variables.scss';
    .current-number-display-container {
      display: grid;
      grid-area: 2/1/4/5;
      background-color: $greyishBlue;
    }

    .currentNumberFlexWrapper {
      word-break: break-word;
    }
</style>
