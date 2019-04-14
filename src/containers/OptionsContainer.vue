<template>
  <div :class="OptionsClasses">
    <Button v-bind='OptionsProps' @click.native='clearCalcData'>AC</Button>
    <Button v-bind='OptionsProps' @click.native='saveSumToFile(activeNumber)'>SAVE</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import Button from '@/components/Button.vue';
import { BackgroundColor } from '@/types/Colors.types';
import { BasicAlignment } from '@/types/Align.types';
import { saveSumToFile } from '@/service/index';

@Component({
  components: {
    Button,
  },
})
export default class CalcContainer extends Vue {
    @State('activeNumber')
    private activeNumber!: string;

    @Mutation('clearCalcData')
    private clearCalcData!: () => void;

    private saveSumToFile = saveSumToFile;

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
