import { StateStructure } from './initState';
import { CalcOperations, CalcApproach } from '@/types/Calc.types';
import { dot, zero } from '@/utils/Calc.values';

const updateActiveNumber = (state: StateStructure, newDigit: string) => {
    const isDot: boolean = newDigit === dot;
    const isZero: boolean = newDigit === zero;

    const onlyZeroOrNothing: boolean = state.activeNumber === zero || !state.activeNumber;
    const hasDot: boolean = state.activeNumber.includes(dot);

    const tooManyDots: boolean = isDot && hasDot;
    const updateZeroToZero: boolean = isZero && onlyZeroOrNothing;

    if ( tooManyDots || updateZeroToZero) { return; }
    state.activeNumber = state.activeNumber + newDigit;
};

const setActiveNumber = (state: StateStructure, newActiveNumber: string) => {
    state.activeNumber = newActiveNumber;
};

const addOperations = (state: StateStructure, operation: CalcOperations) => {
    state.allOperations = [ ...state.allOperations, operation ];
};

const addNumber = (state: StateStructure, newNumber: string) => {
    state.allNumbers = [ ...state.allNumbers, newNumber ];
};

const setAfterEqual = (state: StateStructure, newValue: boolean) => {
    state.clearAfterEqual = newValue;
};

const setHasError = (state: StateStructure, error: boolean) => {
    state.hasError = error;
};

const toggleApproachModal = (state: StateStructure) => {
    state.approachModal = !state.approachModal;
};

const setApproach = (state: StateStructure, newApporach: CalcApproach) => {
    state.calcApproach = newApporach;
};

const clearCalcData = (state: StateStructure) => {
    state.activeNumber = '' as string;
    state.allNumbers = [] as string[];
    state.allOperations = [] as CalcOperations[];
    state.clearAfterEqual = false;
    state.hasError = false;
};

export {
    updateActiveNumber,
    clearCalcData,
    addOperations,
    addNumber,
    setActiveNumber,
    setAfterEqual,
    setHasError,
    toggleApproachModal,
    setApproach,
};
