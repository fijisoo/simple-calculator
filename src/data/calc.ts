import { BasicAlignment } from '@/types/Align.types';
import { BackgroundColor } from '@/types/Colors.types';
import { CalcOperations } from '@/types/Calc.types';

const calcKeys = [
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: CalcOperations.DIVISION,
        class: ['keyButton-border-top'],
    },
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: CalcOperations.MULTIPLICATION,
        class: ['keyButton-border-top'],
    },
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: CalcOperations.SUBTRACTION,
        class: ['keyButton-border-top'],
    },
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: CalcOperations.ADDITION,
        class: ['keyButton-border-top'],
    },
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: CalcOperations.EQUAL,
        class: ['keyButton-border-top'],
    },
];

export {
    calcKeys,
};
