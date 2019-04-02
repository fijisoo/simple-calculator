<template>
    <div :class="`btn bg--${bgColor}`">
        <Typography :textColor="textColor">
            <slot />
        </Typography>
    </div>   
</template>

<script lang="ts">
    import Typography from '@/components/Typography.vue';
    import { BackgroundColor, TextColor } from '@/types/Colors.types.ts';
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            Typography
        }
    })
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


