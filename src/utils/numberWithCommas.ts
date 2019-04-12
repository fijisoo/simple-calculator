import { dot, zero } from '@/utils/Calc.values';

const getNumberWithCommas = (startNumber: number|string): string => {
    const isEmpty: boolean = !startNumber;
    const isZero: boolean = startNumber === zero;
    const isDot: boolean = startNumber === dot;
    if (isEmpty || isZero) { return zero; }
    if (isDot) { return zero + dot; }

    const numberString: string = String(startNumber);
    const hasDot: boolean = numberString.includes(dot);
    const [full, decimal = ''] = numberString.split('.') as [string, string];

    const fullWithCommas: string =
    full
        .split('')
        .reverse()
        .reduce((acc: string, currentNumber: string, currentIndex: number): string => {
          const insertComma = currentIndex !== 0 && currentIndex % 3 === 0;
          return insertComma ? `${currentNumber},${acc}` : `${currentNumber}${acc}`;
      },
    '') || zero;

    return fullWithCommas + (hasDot ? dot : '') + decimal;
};

export {
    getNumberWithCommas,
};
