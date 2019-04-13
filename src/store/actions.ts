import { StateStructure } from './initState';
import { CalcOperations, CalcActionsInterface } from '@/types/Calc.types';
import { zero, empty } from '@/utils/Calc.values';
import { hasDividingByZero, getFinalNumber } from '@/utils/Calc.utils';

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

const resolveOperation = ({ dispatch, commit, state }: CalcActionsInterface, operation: CalcOperations) => {
    const isEqual: boolean = operation === CalcOperations.EQUAL;
    let activeNumberToSet: string;
    commit('addOperations', operation);
    if (isEqual) {
        commit('setAfterEqual', true);
        const dividingByZero: boolean = hasDividingByZero(state.allNumbers, state.allOperations);
        if (dividingByZero) {
            dispatch('handleError');
            return;
        }
        activeNumberToSet = getFinalNumber(state.allNumbers, state.allOperations, state.caclApproach);
    } else {
        activeNumberToSet = empty;
    }
    commit('setActiveNumber', activeNumberToSet);
};

const handleError = ({ commit, state }: CalcActionsInterface) => {
    commit('setHasError', true);
    commit('setAfterEqual', true);
};

export {
    resolveKeyboardClick,
    resolveCalcClick,
    resolveOperation,
    handleError,
};

