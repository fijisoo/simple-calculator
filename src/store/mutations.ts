import { StateStructure } from './initState';

const dot: string = '.';
const zero: string = '0';

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

const clearCalcData = (state: StateStructure) => {
    state.activeNumber = '' as string;
    state.allNumbers = [] as string[];
};

export {
    updateActiveNumber,
    clearCalcData,
};
