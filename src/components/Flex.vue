<template>
    <div :class="flexClasses">
        <slot />
    </div>   
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Typography from '@/components/Typography.vue';
    import { BasicAlignment, VerticalAlign, HorizontalAlign } from '@/types/Align.types.ts';

    @Component
    export default class Flex extends Vue {
        @Prop({
            default: BasicAlignment.FLEX_START,
        }) private contentVerticalAlign?: VerticalAlign;

        @Prop({
            default: BasicAlignment.FLEX_START,
        }) private contentHorizontalAlign?: HorizontalAlign;

        get flexClasses() {
            return [
                'flex',
                `flex-align--${this.contentVerticalAlign}`,
                `flex-justify--${this.contentHorizontalAlign}`,
            ];
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/FlexAlign.scss';
</style>


