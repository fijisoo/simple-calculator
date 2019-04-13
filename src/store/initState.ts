import { CalcOperations, CalcApproach } from '@/types/Calc.types';

interface StateStructure {
    allNumbers: string[];
    allOperations: CalcOperations[];
    activeNumber: string;
    clearAfterEqual: boolean;
    hasError: boolean;
    caclApproach: CalcApproach;
}

const initState: StateStructure = {
    allNumbers: [],
    allOperations: [],
    activeNumber: '',
    clearAfterEqual: false,
    hasError: false,
    caclApproach: CalcApproach.VANILLA,
};

export {
    StateStructure,
    initState,
};

