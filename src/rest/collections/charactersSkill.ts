import { requestFactory } from '../utils/requestHelpers';

export { characterSkill as charactersSkillFormat } from '../formats/characterSkill';

export type charactersSkillQuery = Partial<{
    character_id: string,
    last_save: string,
    last_save_date: string,
    skill_id: string
}>;

export const charactersSkill = requestFactory('characters_skill');
