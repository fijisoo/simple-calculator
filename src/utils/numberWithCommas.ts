const getNumberWithCommas = (startNumber: number|string): string => {
    const zero: string = '0';
    if (!startNumber) { return zero; }
    const numberString: string = String(startNumber);
    const [full, decimal] = numberString.split('.') as [string, string];
    const fullWithCommas: string =
    full
        .split('')
        .reverse()
        .reduce((acc: string, currentNumber: string, currentIndex: number): string => {
          const insertComma = currentIndex !== 0 && currentIndex % 3 === 0;
          return insertComma ? `${currentNumber},${acc}` : `${currentNumber}${acc}`;
      },
    '');
    const decimalWithDot: string = decimal ? `.${decimal}` : '';
    return fullWithCommas
        ? fullWithCommas + decimalWithDot
        : zero + (decimalWithDot || '.');
};

export {
    getNumberWithCommas,
};
