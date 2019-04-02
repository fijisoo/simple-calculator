<template>
    <p :class="typoClasses"><slot /></p>
</template>

<script lang="ts">
    import { TextColor } from '@/types/Colors.types.ts';
    import { TextSize } from '@/types/Sizes.types.ts';
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Typography extends Vue {
        @Prop({
            default: TextColor.WHITE
        }) textColor?: TextColor

        @Prop({
            default: TextSize.MEDIUM
        }) textSize?: TextSize

        get typoClasses () {
            return [
                `color--${this.textColor}`,
                `textSize--${this.textSize}`
            ]
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/TextColors.scss';
    @import '@/styles/TextSizes.scss';
    p {
        margin: 0;
    }
</style>
