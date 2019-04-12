interface StateStructure {
    allNumbers: string[];
    allOperations: string[];
    activeNumber: string;
}

const initState: StateStructure = {
    allNumbers: [],
    allOperations: [],
    activeNumber: '',
};

export {
    StateStructure,
    initState,
};

