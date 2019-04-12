<template>
  <div :class="keyboardClasses">
    <Button
        v-for="({ value, ...props}, index) in keyboardKeys" 
        :key='index'
        v-bind='props'
        @click.native='updateActiveNumber(value)'
    >
        {{ value }}
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import Button from '@/components/Button.vue';
import { keyboardKeys } from '@/data/keyboard';

@Component({
  components: {
    Button,
  },
})
export default class KeyboardContainer extends Vue {
    private keyboardKeys = keyboardKeys;
    @Mutation('updateActiveNumber')
    private updateActiveNumber!: (value: string) => void;

    get keyboardClasses(): string[] {
        return [
            'keyboard-container',
        ];
    }
}
</script>

<style lang="scss">
  @import '@/styles/KeyButtons.scss';
  .keyboard-container {
    @include keyButtonGrid(5, 1, 9, 4,
    repeat(3, 1fr),
    repeat(4, 24.9%));
  }

  .zero-key {
      grid-column: 2/4;
      & :first-child {
          padding: 0 20%;
      }
  }
</style>
