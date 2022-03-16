const combineStats = function (arr) {
  try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function (component) {
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i] * component[i];
      }
    });
    return {
      reload: data[0],
      recoil: data[1],
      shudder: data[2],
      size: data[3],
      health: data[4],
      damage: data[5],
      pen: data[6],
      speed: data[7],
      maxSpeed: data[8],
      range: data[9],
      density: data[10],
      spray: data[11],
      resist: data[12],
    };
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(arr));
  }
};
const skillSet = (() => {
  let config = require("../config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4,

    shi: 5,
    atk: 6,
    hlt: 7,
    rgn: 8,
    mob: 9,
  };
  return (args) => {
    let skills = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();
const g = {
  // Gun info here
  trap: [36, 1, 0.25, 0.6, 1, 2, 1, 5, 1, 1, 1, 15, 3],
  swarm: [18, 0.25, 0.05, 0.4, 1, 2, 1, 1, 1, 1, 1, 5, 1],
  drone: [50, 0.25, 0.1, 0.6, 1, 2, 1, 2, 1, 1, 1, 0.1, 1],
  factory: [60, 1, 0.1, 0.7, 1, 2, 1, 3, 1, 1, 1, 0.1, 1],
  basic: [18, 1.4, 0.1, 1, 1, 2, 1, 4.5, 1, 1, 1, 15, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
  sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
  rifle: [0.8, 0.8, 1.5, 1, 0.8, 2, 0.9, 1, 1, 1, 1, 2, 1],
  assass: [1.65, 1, 0.25, 1, 1.15, 2, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
  hunter: [1.5, 0.7, 1, 0.95, 1, 2, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1, 1, 1, 0.9, 2, 2, 1.5, 1, 1, 1, 1.2, 1, 1.1],
  preda: [1.4, 1, 1, 0.8, 1.5, 2, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [0.4, 1, 4, 1, 1.5, 2, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
  sidewind: [1.5, 2, 1, 1, 1.5, 2, 1, 0.15, 0.5, 1, 1, 1, 1],
  snakeskin: [0.6, 1, 2, 1, 0.5, 2, 1, 1, 0.2, 0.4, 1, 5, 1],
  mach: [0.5, 0.8, 1.7, 1, 0.7, 2, 1, 1, 0.8, 1, 1, 2.5, 1],
  blaster: [1, 1.2, 1.25, 1.1, 1.5, 2, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
  chain: [1.25, 1.33, 0.8, 1, 0.8, 2, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 2, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 2, 1, 1.24, 1, 1, 1, 1, 1],
  shotgun: [8, 0.4, 1, 1.5, 1, 2, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
  flank: [1, 1.2, 1, 1, 1.02, 2, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  tri: [1, 0.9, 1, 1, 0.9, 2, 1, 0.8, 0.8, 0.6, 1, 1, 1],
  trifront: [1, 0.2, 1, 1, 1, 2, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1, 1.5, 2, 1, 0.5, 2, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  auto: /*pure*/ [1.8, 0.75, 0.5, 0.8, 0.9, 2, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25],
  five: [1.15, 1, 1, 1, 1, 2, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  autosnipe: [1, 1, 1, 1.4, 2, 2, 1, 1, 1, 1, 1, 1, 1],
  healer: [1, 1, 1, 1.4, 2, -5, 1, 1, 1, 1, 1, 1, 1],
  /**     *************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  strongslow: [1.5, 1.25, 1, 1, 100, 200, 12, 0.7, 10, 3, 1, 0.01, 100],
  pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  anni: [0.85, 1.25, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  hive: [1.5, 0.8, 1, 0.8, 0.7, 2, 1, 1, 0.6, 1, 1, 1, 1],
  arty: [1.2, 0.7, 1, 0.9, 1, 2, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  mortar: [1.2, 1, 1, 1, 1.1, 2, 1, 0.8, 0.8, 1, 1, 1, 1],
  spreadmain: [
    0.78125,
    0.25,
    0.5,
    1,
    0.5,
    2,
    1,
    1.5 / 0.78,
    0.9 / 0.78,
    1,
    1,
    1,
    1,
  ],
  spread: [1.5, 1, 0.25, 1, 1, 2, 1, 0.7, 0.7, 1, 1, 0.25, 1],
  skim: [1.33, 0.8, 0.8, 0.9, 1.35, 2, 2, 0.3, 0.3, 1, 1, 1, 1.1],
  twin: [1, 0.5, 0.9, 1, 0.9, 2, 1, 1, 1, 1, 1, 1.2, 1],
  bent: [1.1, 1, 0.8, 1, 0.9, 2, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  triple: [1.2, 0.667, 0.9, 1, 0.85, 2, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  quint: [1.5, 0.667, 0.9, 1, 1, 2, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  dual: [2, 1, 0.8, 1, 1.5, 2, 1, 1.3, 1.1, 1, 1, 1, 1.25],
  double: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.9, 2, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [1, 0.25, 1.5, 1.2, 1.35, 2, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2],
  machgun: [0.66, 0.8, 2, 1, 1, 2, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  gunner: [1.25, 0.25, 1.5, 1.1, 1, 2, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  power: [1, 1, 0.6, 1.2, 1, 2, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  nail: [0.85, 2.5, 1, 0.8, 1, 2, 1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 2, 1, 1.2, 1, 1, 1, 1, 1],
  turret: [2, 1, 1, 1, 0.8, 2, 0.7, 1, 1, 1, 0.1, 1, 1],
  healer: [2, 1, 1, 1, 0.8, 0.1, 0.7, 1, 1, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  battle: [1, 1, 1, 1, 1.25, 2, 1, 1, 0.85, 1, 1, 1, 1.1],
  bees: [1.3, 1, 1, 1.4, 1, 2, 0.5, 3, 1.5, 1, 0.25, 1, 1],
  dominator: [0.5, 0.000001, 1, 1, 10, 2, 1, 1, 1, 1, 5, 1, 1],
  carrier: [1.5, 1, 1, 1, 1, 2, 1, 1.3, 1.2, 1.2, 1, 1, 1],
  hexatrap: [1.3, 1, 1.25, 1, 1, 2, 1, 0.8, 1, 0.5, 1, 1, 1],
  block: [1.1, 2, 0.1, 1.5, 2, 2, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
  construct: [1.3, 1, 1, 0.9, 1, 2, 1, 1, 1.1, 1, 1, 1, 1],
  boomerang: [0.8, 1, 1, 1, 0.5, 2, 1, 0.75, 0.75, 1.333, 1, 1, 1],
  over: [1.25, 1, 1, 0.85, 0.7, 2, 1, 1, 0.9, 1, 2, 1, 1],
  meta: [1.333, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  weak: [2, 1, 1, 1, 0.6, 2, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
  master: [3, 1, 1, 0.7, 0.4, 2, 1, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [5, 1, 1, 1.4, 0.5, 2, 0.6, 1, 1, 1, 0.8, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 1, 2, 1, 1, 1.35, 1, 1, 1, 1],
  lowpower: [1, 1, 2, 1, 0.5, 2, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  norecoil: [1, 0.000001, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  halfrecoil: [1, 0.5, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  halfreload: [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  threequartersrof: [1.333, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 2, 1, 1.3, 1.3, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 2, 1, 0.93, 0.93, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 2, 1, 0.7, 0.7, 1, 1, 1, 1],
  halfspeed: [1, 1, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0.1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 1, 1, 1],
  fake: [1, 1, 1, 0.00001, 0.0001, 2, 1, 0.00001, 2, 0, 1, 1, 1],
  lessspread: [1, 1, 1, 1, 1, 2, 1, 0.7, 1, 1, 1, 0.000001, 1],
  fullspread: [1, 1, 1, 1, 1, 2, 1, 0.7, 1, 1, 1, 360, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  op: [0.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
  protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
  arenac: [0.2, 0.000001, 1, 1, 1e20, 1e20, 10, 10, 12, 1, 0.01, 1, 10],
  arenab: [0.2, 10, 1, 1, 1e20, 1e20, 10, 10, 12, 1, 0.01, 1, 10],
  arenarecoil: [0.1, 20, 1, 1, 1, 1, 1, 1, 0.1, 0.1, 0.01, 1, 10],
  Idrone: [1, 0.000001, 1, 2, 1000, 1000, 100, 1, 1, 1, 5, 1, 5],
  killerbullet: [
    0.2, 0.000001, 1, 1, 1e200, 1e22220, 10, 10, 12, 1, 0.01, 1, 10,
  ],
};
const dfltskl = 9;

// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6,
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  necro: 7,
  trap: 8,
};
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5,
};

exports.infinitusminion = {
  PARENT: [exports.minion],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 1,
    SPEED: 10,
    ACCELERATION: 10,
    HEALTH: 100,
    SHIELD: 5,
    DAMAGE: 5,
    RESIST: 5,
    PENETRATION: 5,
    DENSITY: 5,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.op]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sidewind2 = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  CONTROLLERS: ["onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: 20,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0],
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.sidewind,
          g.op,
          g.op,
          g.op,
          g.op,
          g.lessreload,
          g.lessreload,
          g.lessreload,
          g.lessreload,
          g.lessspread,
        ]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.rangerkill = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.op,
          g.op,
          g.op,
          g.op,
          g.halfspeed,
          g.halfspeed,
          g.lessreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.flatter = {
  PARENT: [exports.genericTank],
  LABEL: "Flatter",
  SHAPE: 0,
  GUNS: [
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [7, 20, 1, 16, 0, 1, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.op,
          g.op,
          g.op,
          g.anni,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
        STAT_CLACULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.moddedinfinitustriplet = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  CONTROLLERS: ["onlyAcceptInArc"],
  BODY: {
    FOV: 4,
  },
  LABEL: "Infinitus Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.op,
          g.op,
          g.lessreload,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.op,
          g.op,
          g.lessreload,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.op,
          g.op,
          g.lessreload,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.op,
          g.op,
          g.lessreload,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.op,
          g.op,
          g.lessreload,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 10, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.moddedinfinituscarrier = {
  PARENT: [exports.genericTank],

  CONTROLLERS: ["onlyAcceptInArc"],
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3,
  },
  LABEL: "Infinitus Carrier",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.carrier,
          g.op,
          g.op,
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.op,
          g.op,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.carrier,
          g.op,
          g.op,
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.op,
          g.op,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.carrier,
          g.op,
          g.op,
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.op,
          g.op,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.op,
          g.op,
          g.lessreload,
          g.halfspeed,
          g.halfspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.moddedinfinitusbullet = {
  PARENT: [exports.missile],
  LABEL: "missle",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.op,
          g.lessreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.op,
          g.lessreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.op,
          g.lessreload,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.moddedinfinitusmissilelauncher = {
  PARENT: [exports.genericTank],
  LABEL: " missile launcher",
  CONTROLLERS: ["onlyAcceptInArc"],
  GUNS: [
    {
      POSITION: [18, 3, 5.6, 5, 0, 0, 0],
    },
    {
      POSITION: [16, 4, 5.6, 5, 0, 0, 0],
    },
    {
      POSITION: [14, 3, 5.6, 5, 0, 0, 0],
    },
    {
      POSITION: [12, 2, 5.6, 5, 0, 0, 0],
    },
    {
      POSITION: [15, 16, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.power,
          g.mach,
          g.arty,
          g.skim,
          g.anni,
          g.lessreload,
          g.op,
          g.op,
          g.op,
          g.anni,
          g.op,
          g.op,
          g.halfspeed,
          g.halfspeed,
          g.lessspread,
          g.lessspread,
          g.halfspeed,
          g.halfspeed,
          g.halfspeed,
          g.halfspeed,
          g.lessreload,
          g.lessreload,
          g.lessreload,
          g.lessreload,
          g.lessreload,
          g.lessreload,
        ]),
        TYPE: exports.moddedinfinitusbullet,
      },
    },
  ],
};
exports.infinitusredistributorlayer = (() => {
  let a = 360 / 6;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Infinitus layer",
    COLOR: 9,
    SHAPE: 3,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [15, 9, 0, a, 180, 0],
        TYPE: exports.sniperkill,
      },
      {
        POSITION: [15, 9, 0, a * 3, 180, 0],
        TYPE: exports.sniperkill,
      },
      {
        POSITION: [15, 9, 0, a * 5, 180, 0],
        TYPE: exports.sniperkill,
      },
    ],
  };
})();
exports.infinitusrangerlayer = (() => {
  let a = 360 / 10;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Infinitus layer",
    COLOR: 6,
    SHAPE: 5,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [6, 9, 0, a, 180, 0],
        TYPE: exports.rangerkill,
      },
      {
        POSITION: [6, 9, 0, a * 3, 180, 0],
        TYPE: exports.rangerkill,
      },
      {
        POSITION: [6, 9, 0, a * 5, 180, 0],
        TYPE: exports.rangerkill,
      },
      {
        POSITION: [6, 9, 0, a * 7, 180, 0],
        TYPE: exports.rangerkill,
      },
      {
        POSITION: [6, 9, 0, a * 9, 180, 0],
        TYPE: exports.rangerkill,
      },
    ],
  };
})();
exports.infinitusflatterlayer = (() => {
  let a = 360 / 14;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Infinitus layer",
    COLOR: 9,
    SHAPE: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [6, 9, 0, a, 180, 0],
        TYPE: exports.flatter,
      },
      {
        POSITION: [6, 9, 0, a * 3, 180, 0],
        TYPE: exports.flatter,
      },
      {
        POSITION: [6, 9, 0, a * 5, 180, 0],
        TYPE: exports.flatter,
      },
      {
        POSITION: [6, 9, 0, a * 7, 180, 0],
        TYPE: exports.flatter,
      },
      {
        POSITION: [6, 9, 0, a * 9, 180, 0],
        TYPE: exports.flatter,
      },
      {
        POSITION: [6, 9, 0, a * 11, 180, 0],
        TYPE: exports.flatter,
      },
      {
        POSITION: [6, 9, 0, a * 13, 180, 0],
        TYPE: exports.flatter,
      },
    ],
  };
})();
exports.infinitussidewind = (() => {
  let a = 360 / 18;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Infinitus Layer",
    COLOR: 6,
    SHAPE: 9,
    SIZE: 30,
    BODY: { FOV: 3 },
    CONTROLLERS: ["reversespin"],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 10, 0, a, 190, 0],
        TYPE: exports.sidewind2,
      },
      {
        POSITION: [7, 10, 0, a * 3, 190, 0],
        TYPE: exports.sidewind2,
      },
      {
        POSITION: [7, 10, 0, a * 5, 190, 0],
        TYPE: exports.sidewind2,
      },
      {
        POSITION: [7, 10, 0, a * 7, 190, 0],
        TYPE: exports.sidewind2,
      },
      {
        POSITION: [7, 10, 0, a * 9, 190, 0],
        TYPE: exports.sidewind2,
      },
      {
        POSITION: [7, 10, 0, a * 11, 190, 0],
        TYPE: exports.sidewind2,
      },
      {
        POSITION: [7, 10, 0, a * 13, 190, 0],
        TYPE: exports.sidewind2,
      },
      {
        POSITION: [7, 10, 0, a * 15, 190, 0],
        TYPE: exports.sidewind2,
      },
      {
        POSITION: [7, 10, 0, a * 17, 190, 0],
        TYPE: exports.sidewind2,
      },
    ],
  };
})();
exports.infinitusfactorylayer = (() => {
  let a = 360 / 26;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Infinitus minion",
    SHAPE: 13,
    COLOR: 9,
    GUNS: [
      {
        POSITION: [12, 10, 0.6, 0, 0, a, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 3, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 7, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 9, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 11, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 13, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 15, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 17, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 19, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 21, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 23, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [12, 10, 0.6, 0, 0, a * 25, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
          TYPE: exports.infinitusminion,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
        },
      },
    ],
  };
})();
exports.infinitustripletlayer = (() => {
  let a = 360 / 30;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Infinitus layer",
    COLOR: 6,
    SHAPE: 15,
    SIZE: 30,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [3.6, 10, 0, a, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 3, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 5, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 7, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 9, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 11, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 13, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 15, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 17, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 19, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 21, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 23, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 25, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 27, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
      {
        POSITION: [3.6, 10, 0, a * 29, 180, 0],
        TYPE: exports.moddedinfinitustriplet,
      },
    ],
  };
})();
exports.infinituscarrierlayer = (() => {
  let a = 360 / 34;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Infinitus layer",
    COLOR: 9,
    SHAPE: 17,
    SIZE: 50,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [3, 10, 0, a, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 3, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 5, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 7, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 9, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 11, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 13, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 15, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 17, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 19, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 21, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 23, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 25, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 27, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 29, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 31, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
      {
        POSITION: [3, 10, 0, a * 33, 180, 0],
        TYPE: exports.moddedinfinituscarrier,
      },
    ],
  };
})();
exports.infinitusmissilelayer = (() => {
  let a = 360 / 38;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Infinitus layer",
    COLOR: 6,
    SHAPE: 19,
    SIZE: 70,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [3.7, 9.5, 0, a, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 3, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 5, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 7, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 9, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 11, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 13, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 15, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 17, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 19, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 21, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 23, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 25, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 27, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 29, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 31, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 33, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 35, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
      {
        POSITION: [3.7, 9.5, 0, a * 37, 180, 0],
        TYPE: exports.moddedinfinitusmissilelauncher,
      },
    ],
  };
})();
exports.Infinitus = (() => {
  let a = 360 / 42;
  return {
    PARENT: [exports.miniboss],
    LABEL: "Infinitus",
    NAME: "Infinitus",
    SHAPE: 21,
    VALUE: 100000000000,
    SIZE: 500,
    COLOR: 9,
    BODY: bossStats({
      health: 15000,
      speed: 2,
      regen: 100,
      FOV: 8,
      COLOR: 12,
    }),
    TURRETS: [
      {
        POSITION: [3, 9.5, 0, a, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 3, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 5, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 7, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 9, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 11, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 13, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 15, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 17, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 19, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 21, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 23, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 25, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 27, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 29, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 31, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 33, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 35, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 37, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 39, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [3, 9.5, 0, a * 41, 180, 0],
        TYPE: exports.construct,
      },
      {
        POSITION: [16, 0, 0, 0, 0, 1],
        TYPE: exports.infinitusmissilelayer,
      },
      {
        POSITION: [13, 0, 0, 0, 0, 1],
        TYPE: exports.infinituscarrierlayer,
      },
      {
        POSITION: [9.5, 0, 0, 0, 0, 1],
        TYPE: exports.infinitustripletlayer,
      },
      {
        POSITION: [7, 0, 0, 0, 0, 1],
        TYPE: exports.infinitusfactorylayer,
      },
      {
        POSITION: [5, 0, 0, 0, 0, 1],
        TYPE: exports.infinitussidewind,
      },
      {
        POSITION: [4, 0, 0, 0, 0, 1],
        TYPE: exports.infinitusflatterlayer,
      },
      {
        POSITION: [3, 0, 0, 0, 0, 1],
        TYPE: exports.infinitusrangerlayer,
      },
      {
        POSITION: [1.7, 0, 0, 0, 0, 1],
        TYPE: exports.infinitusredistributorlayer,
      },
    ],
  };
})();
