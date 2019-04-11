<template>
  <div :class="CalcClasses">
    <Button
        v-for="({ value, ...props}, index) in calcKeys" 
        :key='index'
        v-bind='props'
    >
        {{ value }}
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import { calcKeys } from '@/data/calc';

@Component({
  components: {
    Button,
  },
})
export default class CalcContainer extends Vue {
    private calcKeys = calcKeys;
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
