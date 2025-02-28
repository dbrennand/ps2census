export enum Faction {
  NC = '2',
  TR = '3',
  VS = '1',
  NSO = '4',
}

export enum Loadout {
  Infiltrator,
  LightAssault,
  Medic,
  Engineer,
  HeavyAssault,
  MAX,
}

export const factionMap = new Map<string, Faction>([
  ['1', Faction.VS],
  ['2', Faction.NC],
  ['3', Faction.TR],
]);

export const loadoutFactionMap = new Map<string, Faction>([
  ['1', Faction.NC],
  ['3', Faction.NC],
  ['4', Faction.NC],
  ['5', Faction.NC],
  ['6', Faction.NC],
  ['7', Faction.NC],
  ['8', Faction.TR],
  ['10', Faction.TR],
  ['11', Faction.TR],
  ['12', Faction.TR],
  ['13', Faction.TR],
  ['14', Faction.TR],
  ['15', Faction.VS],
  ['17', Faction.VS],
  ['18', Faction.VS],
  ['19', Faction.VS],
  ['20', Faction.VS],
  ['21', Faction.VS],
  ['28', Faction.NSO],
  ['29', Faction.NSO],
  ['30', Faction.NSO],
  ['31', Faction.NSO],
  ['32', Faction.NSO],
  ['45', Faction.NSO],
]);

export const loadoutTypeMap = new Map<string, Loadout>([
  ['1', Loadout.Infiltrator],
  ['3', Loadout.LightAssault],
  ['4', Loadout.Medic],
  ['5', Loadout.Engineer],
  ['6', Loadout.HeavyAssault],
  ['7', Loadout.MAX],
  ['8', Loadout.Infiltrator],
  ['10', Loadout.LightAssault],
  ['11', Loadout.Medic],
  ['12', Loadout.Engineer],
  ['13', Loadout.HeavyAssault],
  ['14', Loadout.MAX],
  ['15', Loadout.Infiltrator],
  ['17', Loadout.LightAssault],
  ['18', Loadout.Medic],
  ['19', Loadout.Engineer],
  ['20', Loadout.HeavyAssault],
  ['21', Loadout.MAX],
  ['28', Loadout.Infiltrator],
  ['29', Loadout.LightAssault],
  ['30', Loadout.Medic],
  ['31', Loadout.Engineer],
  ['32', Loadout.HeavyAssault],
  ['45', Loadout.MAX],
]);

export const endpointsToId = new Map<string, string>([
  // PC
  ['EventServerEndpoint_Connery_1', '1'],
  ['EventServerEndpoint_Miller_10', '10'],
  ['EventServerEndpoint_Cobalt_13', '13'],
  ['EventServerEndpoint_Emerald_17', '17'],
  ['EventServerEndpoint_Jaeger_19', '19'],
  ['EventServerEndpoint_SolTech_40', '40'],
  // PS4eu
  ['EventServerEndpoint_2000_Ceres', '2000'],
  // PS4us, what the f*ck
  [
    'EventServerEndpoint_1000_Genudine_1001_Palos_1002_Crux_1003_Searhus_1004_Xelas',
    '1000',
  ],
]);
