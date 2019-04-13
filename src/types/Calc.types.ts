const ADDITION = 'ADDITION';
const SUBTRACTION = 'SUBTRACTION';
const DIVISION = 'DIVISION';
const MULTIPLICATION = 'MULTIPLICATION';
const EQUAL = 'EQUAL';

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
    CalcOperations,
    CalcApproach,
};
