import { StateStructure } from './initState';
import { CalcOperations, CalcActionsInterface } from '@/types/Calc.types';
import { zero, empty } from '@/utils/Calc.values';
import { getFinalNumber } from '@/utils/Calc.utils';

const resolveKeyboardClick = () => {
    return ({ state, commit }: CalcActionsInterface, ...args: any) => {
        if (state.clearAfterEqual) {
            commit('clearCalcData');
        }
        commit('updateActiveNumber', ...args);
    };
};

const resolveCalcClick = () => {
    return ({ dispatch, state, commit }: CalcActionsInterface, ...args: any) => {
        if (state.hasError) { return; }
        const stateCopy: StateStructure = { ...state };

        if (state.clearAfterEqual) {
            const resolvedActive: string = state.activeNumber;
            commit('clearCalcData');
            commit('addNumber', resolvedActive);
        }

        if (!stateCopy.clearAfterEqual) {
            const isActiveNumberEmpty: boolean = !stateCopy.activeNumber;
            const numberToAdd: string = isActiveNumberEmpty ? zero : stateCopy.activeNumber;
            commit('addNumber', numberToAdd);
        }

        dispatch('resolveOperationFn', ...args);
    };
};

const resolveOperation = ({ commit, state }: CalcActionsInterface, operation: CalcOperations) => {
    const isEqual: boolean = operation === CalcOperations.EQUAL;
    if (isEqual) {
        commit('setAfterEqual', true);
    }
    const activeNumberToSet: string = isEqual
        ? getFinalNumber(state.allNumbers, state.allOperations, state.caclApproach)
        : empty;

    commit('addOperations', operation);
    commit('setActiveNumber', activeNumberToSet);
};

export {
    resolveKeyboardClick,
    resolveCalcClick,
    resolveOperation,
};

