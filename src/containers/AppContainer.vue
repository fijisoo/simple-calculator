<template>
    <div>
        <slot />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class AppContainer extends Vue {}
</script>


<style lang="scss" scoped>
    @import '@/styles/AppContainer.variables.scss';
    @import '@/styles/CalculatorContainer.variables.scss';
    div {
        display: flex;
        width: 100%;
        height: 100vh;
        background: -webkit-linear-gradient($backgroundGradient);
        background: linear-gradient($backgroundGradient);
        justify-content: center;
        align-items: center;

        @media screen and (max-width: $calculatorMinWidth) {
            width: $calculatorMinWidth;
        }

        @media screen and (max-height: $calculatorMinHeight) {
            height: $calculatorMinHeight;
        }
    }
</style>
