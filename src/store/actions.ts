import { Commit, Dispatch } from 'vuex/types/index';
import { StateStructure } from './initState';
import { CalcOperations, CalcApproach } from '@/types/Calc.types';
import { zero, empty } from '@/utils/Calc.values';
import { getFinalNumber } from '@/utils/Calc.utils';

interface CalcActionsinterface {
    commit: Commit;
    dispatch: Dispatch;
    state: StateStructure;
}

const resolveKeyboardClick = () => {
    return ({ state, commit }: CalcActionsinterface, ...args: any) => {
        if (state.clearAfterEqual) {
            commit('clearCalcData');
        }
        commit('updateActiveNumber', ...args);
    };
};

const resolveCalcClick = () => {
    return ({ dispatch, state, commit }: CalcActionsinterface, ...args: any) => {
        if (state.clearAfterEqual) {
            const resolvedActive: string = state.activeNumber;
            commit('clearCalcData');
            commit('addNumber', resolvedActive);
        }
        dispatch('resolveOperationFn', ...args);
    };
};

const resolveOperation = ({ commit, state }: CalcActionsinterface, operation: CalcOperations) => {
    const isEqual: boolean = operation === CalcOperations.EQUAL;
    const isActiveNumberEmpty: boolean = !state.activeNumber;

    const numberToAdd: string = isActiveNumberEmpty ? zero : state.activeNumber;
    commit('addOperations', operation);
    commit('addNumber', numberToAdd);
    if (isEqual) {
        commit('setAfterEqual', true);
    }
    const activeNumberToSet: string = isEqual
    ? getFinalNumber(state.allNumbers, state.allOperations, CalcApproach.VANILLA)
    : empty;
    commit('setActiveNumber', activeNumberToSet);
};

export {
    resolveKeyboardClick,
    resolveCalcClick,
    resolveOperation,
};

