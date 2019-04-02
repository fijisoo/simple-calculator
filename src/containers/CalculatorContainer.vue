<template>
    <div />
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CalculatorContainer extends Vue {}
</script>

<style lang="scss" scoped>
    @import '@/styles/CalculatorContainer.variables.scss';
    div {
        display: grid;
        grid-template-columns: $calculatorGridColumns;
        grid-template-rows: $calculatorGridRows;
        min-height: $calculatorMinHeight;
        max-height: $calculatorMaxHeight;
        min-width: $calculatorMinWidth;
        max-width: $calculatorMaxWidth;
        background: red;
    }
</style>


