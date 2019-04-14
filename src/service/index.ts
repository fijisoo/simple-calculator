import { ServiceMessageResponseInterface, ServicSumTableInterface } from '@/types/Service.types';
const SERVICE_URL = 'http://localhost:8000';

const saveSumToFile = (sum: string): Promise<ServiceMessageResponseInterface> => {
    if (!sum) {
        return Promise.reject({
            message: 'Sum not provided',
        });
    }
    return fetch(`${SERVICE_URL}/SetSumToTable.php?sum=${sum}`)
        .then(() => ( { message: 'Sum added to table' } ))
        .catch(() => ( { message: 'Something gone wrong' } ));
};

const getSumTable = (): Promise<ServicSumTableInterface[]> => {
    return fetch(`${SERVICE_URL}/Calculations.php`)
        .then((response) => response.json())
        .catch(() => Promise.reject({ message: 'Something gone wrong' }));
};

export {
    saveSumToFile,
    getSumTable,
};
