import { defineCensusType } from '../get';

export type charactersDirectiveData = {
    character_id: string,
    directive_tree_id: string,
    directive_id: string,
    completion_time: string,
    completion_time_date: string,
};

export type charactersDirectiveQuery = Partial<charactersDirectiveData>

export default defineCensusType<charactersDirectiveQuery, charactersDirectiveData[]>('characters_directive');
