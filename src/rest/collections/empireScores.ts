import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import empireScore from '../types/empireScore';

export type typeData = empireScore;

export type query = {
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    end_date: string,
    end_time: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    start_date: string,
    start_time: string,
    tracker_description: string,
    tracker_name: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('empire_scores');
