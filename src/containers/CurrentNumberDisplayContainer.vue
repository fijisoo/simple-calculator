<template>
  <div :class="currentNumberDisplayClasses">
    <Flex :class='currentNumberFlexWrapperClass' contentHorizontalAlign='flexEnd'>
      <Typography textSize='xlarge'>{{currentNumber}}</Typography>
    </Flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Typography from '@/components/Typography.vue';
import Flex from '@/components/Flex.vue';
import { getNumberWithCommas } from '@/utils/numberWithCommas';

interface CurrentNumberStyle {
  fontSize: string;
}

@Component({
  components: {
    Typography,
    Flex,
  },
  computed: {
    ...mapState(['activeNumber']),
  },
})
export default class CurrentNumberDisplayContainer extends Vue {
    private activeNumber!: string;
    private currentNumberFlexWrapperClass: string = 'currentNumberFlexWrapper';

    get currentNumberDisplayClasses(): string[] {
        return [
          'current-number-display-container',
          'number-display-wrapper-padding',
        ];
    }

    get currentNumber(): string {
      return getNumberWithCommas(this.activeNumber);
    }
}
</script>

<style lang="scss">
    @import '@/styles/variables/Colors.variables.scss';
    @import '@/styles/NumberDisplay.scss';
    @import '@/styles/TextFlow.scss';

    .current-number-display-container {
      display: grid;
      grid-area: 2/1/4/5;
      background-color: $greyishBlue;
    }

    .currentNumberFlexWrapper {
      @include getEllipsis();
    }
</style>
