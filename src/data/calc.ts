import { BasicAlignment } from '@/types/Align.types';
import { BackgroundColor } from '@/types/Colors.types';

const calcKeys = [
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: '÷',
        class: ['keyButton-border-top'],
    },
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: 'x',
        class: ['keyButton-border-top'],
    },
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: '-',
        class: ['keyButton-border-top'],
    },
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: '+',
        class: ['keyButton-border-top'],
    },
    {
        contentVerticalAlign: BasicAlignment.CENTER,
        contentHorizontalAlign: BasicAlignment.CENTER,
        bgColor: BackgroundColor.LIGHT_ORANGE,
        value: '=',
        class: ['keyButton-border-top'],
    },
];

export {
    calcKeys,
};
