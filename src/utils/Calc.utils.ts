import Big from 'big.js';
import {
    CalcOperations,
    CalcApproach,
    ComplexStructInterface,
    ResolvedComplexStructInterface,
} from '@/types/Calc.types';
import { zero } from './Calc.values';

const simpleOperations = [CalcOperations.ADDITION, CalcOperations.SUBTRACTION, CalcOperations.EQUAL];
const complexOperations = [CalcOperations.DIVISION, CalcOperations.MULTIPLICATION];

const hasDividingByZero = (numbers: string[], operations: CalcOperations[]) => {
    interface SimpleMapping {
        value: string;
        index: number;
    }
    const zerosWithIndexes = numbers.reduce(
        (acc, value: string, index: number): SimpleMapping[] => {
            const isZero: boolean = value === zero;
            return isZero
                ? [ ...acc, { value, index } ]
                : acc;
        }
    , [] as SimpleMapping[]);

    return zerosWithIndexes.some(
        (zeroObj: SimpleMapping) => {
            const previousOpIsDevision: boolean = operations[zeroObj.index - 1] === CalcOperations.DIVISION;
            return previousOpIsDevision;
        },
    );
};

const getFinalNumber = (numbers: string[], operations: CalcOperations[], approach: CalcApproach): string => {
    const numbersArray = [ ...numbers ];
    const operationsArray = [ ...operations ];

    const ComplexStructsMap: ComplexStructInterface[][] = getComplexStructsMap(numbers, operations);
    ComplexStructsMap
        .map((complexStructArray: ComplexStructInterface[]) => resolveComplexStruct(complexStructArray, approach))
        .reverse()
        .map((resolvedStruct: ResolvedComplexStructInterface) => {
            numbersArray.splice(resolvedStruct.startPos, resolvedStruct.amountOfPos, resolvedStruct.value);
            operationsArray.splice(resolvedStruct.startPos, resolvedStruct.amountOfPos, resolvedStruct.operation);
        });
    return String(resolveSimpleStruct(numbersArray, operationsArray, approach));
};

const getComplexStructsMap = (numbers: string[], operations: CalcOperations[]) => {
    const ComplexStructsMap: ComplexStructInterface[][] = [];
    operations.reduce(
        (acc: ComplexStructInterface[], operation: CalcOperations, opIndex: number): ComplexStructInterface[] => {
            const isComplex: boolean = complexOperations.includes(operation);
            const prevIsComplex = complexOperations.includes(operations[opIndex - 1]);

            const complexStruct: ComplexStructInterface = { index: opIndex, value: numbers[opIndex], operation };
            if (!isComplex && prevIsComplex) {
                ComplexStructsMap.push([ ...acc, complexStruct ]);
                return [];
            } else if (isComplex) {
                return [ ...acc, complexStruct ];
            } else {
                return acc;
            }
    }, [] as ComplexStructInterface[]);
    return ComplexStructsMap;
};

const resolveComplexStruct = (complexStructArray: ComplexStructInterface[], approach: CalcApproach) => {
    const [firstComplexStruct, ...restComplexStructs] = complexStructArray;

    const reducedComplexStructs =
    restComplexStructs.reduce(
        (accStruct: ComplexStructInterface, actualStruct: ComplexStructInterface): ComplexStructInterface => {
            const newValue: number = calc(
                Number(accStruct.value),
                Number(actualStruct.value),
                accStruct.operation,
                approach,
            );
            return { value: newValue, operation: actualStruct.operation, index: actualStruct.index };
        },
    firstComplexStruct);
    return {
        startPos: firstComplexStruct.index,
        amountOfPos: reducedComplexStructs.index - firstComplexStruct.index + 1,
        value: String(reducedComplexStructs.value),
        operation: reducedComplexStructs.operation,
    };
};

const resolveSimpleStruct = (numbers: string[], operations: CalcOperations[], approach: CalcApproach): number => {
    const [firstNumber, ...restOfNumbers] = numbers;
    return restOfNumbers.reduce(
        (acc, value, numIndex): number => calc(acc, Number(value), operations[numIndex], approach)
    , Number(firstNumber));
};

const calc = (firstNumber: number, secondNumber: number, operation: CalcOperations, approach: CalcApproach): number => {
    return approach === CalcApproach.VANILLA
        ? calcVanilla(firstNumber, secondNumber, operation)
        : calcDependency(firstNumber, secondNumber, operation);
};

const calcVanilla = (firstNumber: number, secondNumber: number, operation: CalcOperations): number => {
    switch (operation) {
        case CalcOperations.ADDITION:
          return firstNumber + secondNumber;
          break;
        case CalcOperations.SUBTRACTION:
          return firstNumber - secondNumber;
          break;
        case CalcOperations.MULTIPLICATION:
          return firstNumber * secondNumber;
          break;
        case CalcOperations.DIVISION:
          return firstNumber / secondNumber;
          break;
        default:
          return firstNumber;
    }
};

const calcDependency = (firstNumber: number, secondNumber: number, operation: CalcOperations): number => {
    const bigFirstNumber = new Big(firstNumber);
    switch (operation) {
        case CalcOperations.ADDITION:
            return Number(bigFirstNumber.plus(secondNumber).toString());
            break;
        case CalcOperations.SUBTRACTION:
            return Number(bigFirstNumber.minus(secondNumber).toString());
            break;
        case CalcOperations.MULTIPLICATION:
            return Number(bigFirstNumber.times(secondNumber).toString());
            break;
        case CalcOperations.DIVISION:
            return Number(bigFirstNumber.div(secondNumber).toString());
            break;
        default:
          return firstNumber;
    }
};

export {
    hasDividingByZero,
    getFinalNumber,
};

