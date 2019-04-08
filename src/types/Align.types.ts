export enum BasicAlignment {
    START = 'start',
    FLEX_START = 'flexStart',
    FLEX_END = 'flexEnd',
    END = 'end',
    CENTER = 'center',
}

export enum JustifyContent {
    SPACE_BETWEEN = 'spaceBetween',
    SPACE_AROUND = 'spaceAround',
}

export enum AlignItems {
    BASELINE = 'baseline',
    FIRST_BASELINE = 'firstBaseline',
    LAST_BASELINE = 'lastBaseline',
}

export type HorizontalAlign = BasicAlignment | JustifyContent;
export type VerticalAlign = BasicAlignment | AlignItems;

