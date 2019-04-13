import { CalcOperations, CalcApproach } from '@/types/Calc.types';

const simpleOperations = [CalcOperations.ADDITION, CalcOperations.SUBTRACTION, CalcOperations.EQUAL];
const complexOperations = [CalcOperations.DIVISION, CalcOperations.MULTIPLICATION];

interface ComplexStruct {
    index: number;
    value: string|number;
    operation: CalcOperations;
}

interface ResolvedComplexStruct {
    startPos: number;
    amountOfPos: number;
    value: string;
    operation: CalcOperations;
}

const getFinalNumber = (numbers: string[], operations: CalcOperations[], approach: CalcApproach): string => {
    const numbersArray = [ ...numbers ];
    const operationsArray = [ ...operations ];

    const ComplexStructsMap: ComplexStruct[][] = getComplexStructsMap(numbers, operations);
    ComplexStructsMap
        .map((complexStructArray: ComplexStruct[]) => resolveComplexStruct(complexStructArray, approach))
        .reverse()
        .map((resolvedStruct: ResolvedComplexStruct) => {
            numbersArray.splice(resolvedStruct.startPos, resolvedStruct.amountOfPos, resolvedStruct.value);
            operationsArray.splice(resolvedStruct.startPos, resolvedStruct.amountOfPos, resolvedStruct.operation);
        });
    return String(resolveSimpleStruct(numbersArray, operationsArray, approach));
};

const getComplexStructsMap = (numbers: string[], operations: CalcOperations[]) => {
    const ComplexStructsMap: ComplexStruct[][] = [];
    operations.reduce(
        (acc: ComplexStruct[], operation: CalcOperations, opIndex: number): ComplexStruct[] => {
            const isComplex: boolean = complexOperations.includes(operation);
            const prevIsComplex = complexOperations.includes(operations[opIndex - 1]);

            const complexStruct: ComplexStruct = { index: opIndex, value: numbers[opIndex], operation };
            if (!isComplex && prevIsComplex) {
                ComplexStructsMap.push([ ...acc, complexStruct ]);
                return [];
            } else if (isComplex) {
                return [ ...acc, complexStruct ];
            } else {
                return acc;
            }
    }, [] as ComplexStruct[]);
    return ComplexStructsMap;
};

const resolveComplexStruct = (complexStructArray: ComplexStruct[], approach: CalcApproach) => {
    const [firstComplexStruct, ...restComplexStructs] = complexStructArray;

    const reducedComplexStructs =
    restComplexStructs.reduce(
        (accStruct: ComplexStruct, actualStruct: ComplexStruct): ComplexStruct => {
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
    return calcVanilla(firstNumber, secondNumber, operation);
};

const calcVanilla = (firstNumber: number, secondNumber: number, operation: CalcOperations) => {
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

export {
    getFinalNumber,
};

