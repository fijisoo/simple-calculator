<template>
  <div :class="OptionsClasses">
    <Button v-bind='OptionsProps'>AC</Button>
    <Button v-bind='OptionsProps'>SAVE</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import { BackgroundColor } from '@/types/Colors.types';
import { BasicAlignment } from '@/types/Align.types';

@Component({
  components: {
    Button,
  },
})
export default class CalcContainer extends Vue {
    get OptionsClasses() {
        return [
            'options-container',
        ];
    }

    get OptionsProps() {
        return {
            bgColor: BackgroundColor.DARK_RED,
            contentVerticalAlign: BasicAlignment.CENTER,
            contentHorizontalAlign: BasicAlignment.CENTER,
        };
    }
}
</script>

<style lang="scss">
    @import '@/styles/KeyButtons.scss';
    .options-container {
        @include keyButtonGrid(4, 1, 4, 4, 1fr 2fr);
    }
</style>
