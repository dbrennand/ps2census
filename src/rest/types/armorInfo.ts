import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    armor_info_id: string,
    armor_facing_id: string,
    armor_percent: string,
    description: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('armorInfo');

