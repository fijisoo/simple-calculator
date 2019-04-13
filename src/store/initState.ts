import { CalcOperations, CalcApproach } from '@/types/Calc.types';

interface StateStructure {
    allNumbers: string[];
    allOperations: CalcOperations[];
    activeNumber: string;
    clearAfterEqual: boolean;
    hasError: boolean;
    calcApproach: CalcApproach;
    approachModal: boolean;
}

const initState: StateStructure = {
    allNumbers: [],
    allOperations: [],
    activeNumber: '',
    clearAfterEqual: false,
    hasError: false,
    calcApproach: CalcApproach.VANILLA,
    approachModal: false,
};

export {
    StateStructure,
    initState,
};

