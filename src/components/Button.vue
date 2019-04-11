<template>
    <div @click="onClick" :class="buttonClasses">
        <Typography textWeight='light' textSize='small' :textColor="textColor">
            <slot />
        </Typography>
    </div>   
</template>

<script lang="ts">
    import Typography from '@/components/Typography.vue';
    import { BackgroundColor, TextColor } from '@/types/Colors.types.ts';
    import { BasicAlignment, VerticalAlign, HorizontalAlign } from '@/types/Align.types.ts';
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            Typography,
        },
    })
    export default class Button extends Vue {
        @Prop({
            default: BackgroundColor.LIGHT_RED,
        }) private bgColor?: BackgroundColor;

        @Prop({
            default: TextColor.WHITE,
        }) private textColor?: TextColor;

        @Prop({
            default: BasicAlignment.FLEX_START,
        }) private contentVerticalAlign?: VerticalAlign;

        @Prop({
            default: BasicAlignment.FLEX_START,
        }) private contentHorizontalAlign?: HorizontalAlign;

        @Prop({
            type: Function,
            default: () => { return; },
        }) private onClick!: () => void;


        get buttonClasses() {
            return [
                'btn',
                `bg--${this.bgColor}`,
                `flex-align--${this.contentVerticalAlign}`,
                `flex-justify--${this.contentHorizontalAlign}`,
            ];
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/BgColors.scss';
    @import '@/styles/FlexAlign.scss';
    .btn {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>


