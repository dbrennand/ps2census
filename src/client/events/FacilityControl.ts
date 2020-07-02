import BaseEvent from './BaseEvent';
import { FacilityControl as FacilityControlData } from '../utils/PS2Events';

export default class FacilityControl extends BaseEvent implements FacilityControlData {
    public readonly duration_held: string;
    public readonly event_name: 'FacilityControl';
    public readonly facility_id: string;
    public readonly new_faction_id: string;
    public readonly old_faction_id: string;
    public readonly outfit_id: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `FacilityControl:${this.world_id}:${this.zone_id}:${this.timestamp}:${this.facility_id}`;
    }
}
