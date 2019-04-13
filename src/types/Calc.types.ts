import { Commit, Dispatch } from 'vuex/types/index';
import { StateStructure } from '@/store/initState';

interface CalcActionsInterface {
    commit: Commit;
    dispatch: Dispatch;
    state: StateStructure;
}


interface ComplexStructInterface {
    index: number;
    value: string|number;
    operation: CalcOperations;
}

interface ResolvedComplexStructInterface {
    startPos: number;
    amountOfPos: number;
    value: string;
    operation: CalcOperations;
}

enum CalcOperations {
    ADDITION = '+',
    SUBTRACTION = '-',
    DIVISION = '÷',
    MULTIPLICATION = 'x',
    EQUAL = '=',
}

enum CalcApproach {
    VANILLA = 'VANILLA',
    DEPENDENCY = 'DEPENDENCY',
}

export {
    CalcActionsInterface,
    ComplexStructInterface,
    ResolvedComplexStructInterface,
    CalcOperations,
    CalcApproach,
};
