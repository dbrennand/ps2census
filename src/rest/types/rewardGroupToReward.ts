import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    reward_group_id: string,
    reward_id: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('rewardGroupToReward');

