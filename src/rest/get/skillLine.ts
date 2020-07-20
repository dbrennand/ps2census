import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type skillLineData = {
    skill_line_id: string,
    skill_points: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type skillLineQuery = Partial<skillLineData>

export default defineCensusType<skillLineQuery, skillLineData[]>('skill_line');
