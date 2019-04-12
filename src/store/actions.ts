import { Commit, Dispatch } from 'vuex/types/index';
import { StateStructure } from './initState';
import { CalcOperations } from '@/types/Calc.types';
import { zero, empty } from '@/utils/Calc.values';

interface CalcActionsinterface {
    commit: Commit;
    dispatch: Dispatch;
    state: StateStructure;
}

const resolveCalcClick = (methodName: string, otherAction: boolean = false) => {
    return ({ dispatch, state, commit }: CalcActionsinterface, ...args: any) => {
        if (state.clearAfterEqual) {
            commit('clearCalcData');
        }
        if (otherAction) {
            dispatch(methodName, ...args);
        } else {
            commit(methodName, ...args);
        }
    };
};

const resolveOperation = ({ commit, state }: CalcActionsinterface, operation: CalcOperations) => {
    const isEqual: boolean = operation === CalcOperations.EQUAL;
    const isActiveNumberEmpty: boolean = !state.activeNumber;

    const numberToAdd: string = isActiveNumberEmpty ? zero : state.activeNumber;
    const activeNumberToSet: string = isEqual ? zero : empty;
    commit('addOperations', operation);
    commit('addNumber', numberToAdd);
    commit('setActiveNumber', activeNumberToSet);
    if (isEqual) {
        commit('setAfterEqual', true);
    }
};

export {
    resolveCalcClick,
    resolveOperation,
};

