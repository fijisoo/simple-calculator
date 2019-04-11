<template>
    <p :class="typoClasses"><slot /></p>
</template>

<script lang="ts">
    import { TextColor } from '@/types/Colors.types.ts';
    import { TextSize } from '@/types/Sizes.types.ts';
    import { TextWeight } from '@/types/Weight.types.ts';
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Typography extends Vue {
        @Prop({
            default: TextColor.WHITE,
        }) private textColor?: TextColor;

        @Prop({
            default: TextSize.MEDIUM,
        }) private textSize?: TextSize;

        @Prop({
            default: TextWeight.REGULAR,
        }) private textWeight?: TextWeight;

        get typoClasses() {
            return [
                `color--${this.textColor}`,
                `textSize--${this.textSize}`,
                `textWeight--${this.textWeight}`,
            ];
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/TextColors.scss';
    @import '@/styles/TextSizes.scss';
    @import '@/styles/TextWeight.scss';
    p {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
    }
</style>
