import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type directiveData = {
    directive_id: string,
    directive_tree_id: string,
    directive_tier_id: string,
    objective_set_id: string,
    name: lang,
    description: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
};

export type directiveQuery = Partial<directiveData>

export default defineCensusType<directiveQuery, directiveData[]>('directive');
