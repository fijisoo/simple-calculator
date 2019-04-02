<template>
    <div :class="`btn bg--${bgColor}`" />
</template>

<script lang="ts">
    import { BackgroundColor, TextColor } from '@/types/Colors.types.ts';
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {
        @Prop({
            default: BackgroundColor.LIGHT_RED
        }) bgColor?: BackgroundColor

        @Prop({
            default: TextColor.WHITE
        }) textColor?: TextColor
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/BgColors.scss';
    .btn {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>


