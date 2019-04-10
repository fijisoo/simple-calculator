<template>
    <div class='calculator'>
        <slot />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CalculatorContainer extends Vue {}
</script>

<style lang="scss" scoped>
    @import '@/styles/variables/CalculatorContainer.variables.scss';
    .calculator {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: $calculatorGridColumns;
        grid-template-rows: $calculatorGridRows;
        min-height: $calculatorMinHeight;
        max-height: $calculatorMaxHeight;
        min-width: $calculatorMinWidth;
        max-width: $calculatorMaxWidth;
    }
</style>


