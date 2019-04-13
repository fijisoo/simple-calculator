<template>
  <div :class="CalcClasses">
    <Button
        v-for="({ value, ...props}, index) in calcKeys" 
        :key='index'
        v-bind='props'
        @click.native='resolveOperation(value)'
    >
        {{ value }}
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import Button from '@/components/Button.vue';
import { calcKeys } from '@/data/calc';
import { CalcOperations } from '@/types/Calc.types';

@Component({
  components: {
    Button,
  },
})
export default class CalcContainer extends Vue {
    private calcKeys = calcKeys;
    @Action('resolveOperation')
    private resolveOperation!: (operation: CalcOperations) => void;

    get CalcClasses() {
        return [
            'calc-container',
        ];
    }
}
</script>

<style lang="scss">
  @import '@/styles/KeyButtons.scss';
  .calc-container {
    @include keyButtonGrid(4, 4, 9, 4,
    '',
    20% repeat(4, 19.92%));
  }
</style>
