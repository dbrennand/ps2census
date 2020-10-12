import { requestFactory } from '../utils/requestHelpers';
import { character } from '../formats/character';
import { characterStatHistory } from '../formats/characterStatHistory';
import { characterEvent } from '../formats/characterEvent';

export type charactersEventFormat = characterEvent & {
    character: character & { // character/character_name
        stats: {
            stat_history: characterStatHistory[], // characters_stat_history
        },
    },
};

export type charactersEventQuery = { character_id: string } & Partial<{
    after: string,
    before: string,
    id: string,
    type: string,
}>;

// TODO: Find associated attacker* formats
export type charactersEventResolve =
    'character' //
    | 'character_name' //
    | 'characters_stat_history' //
    | 'attacker'
    | 'attacker_name'
    | 'attackers_stat_history';

export const charactersEvent = requestFactory('characters_event');
