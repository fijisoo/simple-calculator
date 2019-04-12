import { CalcOperations } from '@/types/Calc.types';

interface StateStructure {
    allNumbers: string[];
    allOperations: CalcOperations[];
    activeNumber: string;
    clearAfterEqual: boolean;
}

const initState: StateStructure = {
    allNumbers: [],
    allOperations: [],
    activeNumber: '',
    clearAfterEqual: false,
};

export {
    StateStructure,
    initState,
};

