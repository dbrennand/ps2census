import { defineCensusType } from '../get';

export type abilityTypeData = {
    ability_type_id: string,
};

export type abilityTypeQuery = Partial<abilityTypeData>

export default defineCensusType<abilityTypeQuery, abilityTypeData[]>('ability_type');
