import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    character_id: string,
    name: {
        first: string,
        first_lower: string,
    },
    faction_id: string,
    head_id: string,
    title_id: string,
    times: {
        creation: string,
        creation_date: string,
        last_save: string,
        last_save_date: string,
        last_login: string,
        last_login_date: string,
        login_count: string,
        minutes_played: string,
    },
    certs: {
        earned_points: string,
        gifted_points: string,
        spent_points: string,
        available_points: string,
        percent_to_next: string,
    },
    battle_rank: {
        percent_to_next: string,
        value: string,
    },
    profile_id: string,
    daily_ribbon: {
        count: string,
        time: string,
        date: string,
    },
    prestige_level: string,
    items: {
        item_id: string,
        item_type_id: string,
        item_category_id: string,
        is_vehicle_weapon: string,
        name: lang,
        description: lang,
        faction_id: string,
        max_stack_size: string,
        image_set_id: string,
        image_id: string,
        image_path: string,
        is_default_attachment: string,
        item_id_merged: string,
    }[],
    stats: {
        stat: {
            stat_name: string,
            profile_id: string,
            value_forever: string,
            value_monthly: string,
            value_weekly: string,
            value_daily: string,
            value_one_life_max: string,
            last_save: string,
            last_save_date: string,
        }[],
        weapon_stat: {
            stat_name: string,
            item_id: string,
            vehicle_id: string,
            value: string,
            last_save: string,
            last_save_date: string,
        }[],
        stat_history: {
            stat_name: string,
            all_time: string,
            one_life_max: string,
            day: {
                d01: string,
                d02: string,
                d03: string,
                d04: string,
                d05: string,
                d06: string,
                d07: string,
                d08: string,
                d09: string,
                d10: string,
                d11: string,
                d12: string,
                d13: string,
                d14: string,
                d15: string,
                d16: string,
                d17: string,
                d18: string,
                d19: string,
                d20: string,
                d21: string,
                d22: string,
                d23: string,
                d24: string,
                d25: string,
                d26: string,
                d27: string,
                d28: string,
                d29: string,
                d30: string,
                d31: string,
            },
            month: {
                m01: string,
                m02: string,
                m03: string,
                m04: string,
                m05: string,
                m06: string,
                m07: string,
                m08: string,
                m09: string,
                m10: string,
                m11: string,
                m12: string,
            },
            week: {
                w01: string,
                w02: string,
                w03: string,
                w04: string,
                w05: string,
                w06: string,
                w07: string,
                w08: string,
                w09: string,
                w10: string,
                w11: string,
                w12: string,
                w13: string,
            },
            last_save: string,
            last_save_date: string,
        }[],
        stat_by_faction: {
            stat_name: string,
            profile_id: string,
            value_forever_vs: string,
            value_forever_nc: string,
            value_forever_tr: string,
            value_monthly_vs: string,
            value_monthly_nc: string,
            value_monthly_tr: string,
            value_weekly_vs: string,
            value_weekly_nc: string,
            value_weekly_tr: string,
            value_daily_vs: string,
            value_daily_nc: string,
            value_daily_tr: string,
            value_one_life_max_vs: string,
            value_one_life_max_nc: string,
            value_one_life_max_tr: string,
            last_save: string,
            last_save_date: string,
        }[],
        weapon_stat_by_faction: {
            stat_name: string,
            item_id: string,
            vehicle_id: string,
            value_vs: string,
            value_nc: string,
            value_tr: string,
            last_save: string,
            last_save_date: string,
        }[],
    },
    online_status: string,
    profile: {
        profile_type_id: string,
        profile_type_description: string,
        faction_id: string,
        name: lang,
        description: lang,
        image_set_id: string,
        image_id: string,
        image_path: string,
        movement_speed: string,
        backpedal_speed_modifier: string,
        sprint_speed_modifier: string,
        strafe_speed_modifier: string,
    },
    name_merged: string,
    friend_list: {
        character_id: string,
        last_login_time: string,
        online: string,
    }[],
    world_id: string,
    faction: {
        name: lang,
        image_set_id: string,
        image_id: string,
        image_path: string,
        code_tag: string,
        user_selectable: string,
    },
    currency: {
        currency_id: string,
        currency_name: string,
        quantity: string,
        prestige_currency: string,
    },
};

export type query = Partial<typeData>

export type resolve =
    'item'
    | 'item_full'
    | 'profile'
    | 'faction'
    | 'stat'
    | 'stat_by_faction'
    | 'weapon_stat'
    | 'weapon_stat_by_faction'
    | 'stat_history'
    | 'online_status'
    | 'friends'
    | 'world'
    | 'outfit'
    | 'outfit_member'
    | 'outfit_member_extended'
    | 'currency';

export const request = requestFactory<operations, query, typeData[], commands, resolve>('character');

