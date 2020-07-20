import { baseOperations } from '../baseTypes';
import { lang } from '../types/lang';
import { requestFactory } from '../utils/Helpers';

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

export type query = {
    character_id: string
}

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

export const request = requestFactory<query, typeData[], baseOperations, never>('character');
