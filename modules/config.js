export const ageSystem = {
    abilitiesSettings: {}
};

// Ability set for "main" - core AGE System games
ageSystem.abilitiesSettings.main = {
    "acc": "age-system.acc",
    "comm": "age-system.comm",
    "cons": "age-system.cons",
    "dex": "age-system.dex",
    "fight": "age-system.fight",
    "int": "age-system.int",
    "per": "age-system.per",
    "str": "age-system.str",
    "will": "age-system.will",
};

// Ability set for "dage" - Dragon Age games
ageSystem.abilitiesSettings.dage = {
    "comm": "age-system.comm",
    "cons": "age-system.cons",
    "cunn": "age-system.cunn",
    "dex": "age-system.dex",
    "magic": "age-system.magic",
    "per": "age-system.per",
    "str": "age-system.str",
    "will": "age-system.will",
};

ageSystem.actionsToCast = {
    noAction: "age-system.noAction",
    minorAction: "age-system.minorAction",
    majorAction: "age-system.majorAction",
    oneMinute: "age-system.oneMinute",
    fiveMinutes: "age-system.fiveMinutes",
    tenMinutes: "age-system.tenMinutes",
    twentyMinutes: "age-system.twentyMinutes",
    oneHour: "age-system.oneHour",
    fourHours: "age-system.fourHours",
    twelveHours: "age-system.twelveHours"
};

ageSystem.reloadDuration = {
    noAction: "age-system.noAction",
    minorAction: "age-system.minorAction",
    majorAction: "age-system.majorAction",
    d6minor: "age-system.d6minor"
};

ageSystem.fatigueConditions = {
    noFatigue: "age-system.noFatigue",
    winded: "age-system.winded",
    fatigued: "age-system.fatigued",
    exhausted: "age-system.exhausted",
    dying: "age-system.dying"
};

// Conditions
ageSystem.conditions = [
    {
        name: "age-system.conditions.blinded",
        desc: "age-system.conditions.blindedDesc",
        id: "blinded"
    },
    {
        name: "age-system.conditions.deafened",
        desc: "age-system.conditions.deafenedDesc",
        id: "deafened"
    },
    {
        name: "age-system.conditions.exhausted",
        desc: "age-system.conditions.exhaustedDesc",
        id: "exhausted"
    },
    {
        name: "age-system.conditions.fatigued",
        desc: "age-system.conditions.fatiguedDesc",
        id: "fatigued"
    },
    {
        name: "age-system.conditions.freefalling",
        desc: "age-system.conditions.freefallingDesc",
        id: "freefalling"
    },
    {
        name: "age-system.conditions.helpless",
        desc: "age-system.conditions.helplessDesc",
        id: "helpless"
    },
    {
        name: "age-system.conditions.hindered",
        desc: "age-system.conditions.hinderedDesc",
        id: "hindered"
    },
    {
        name: "age-system.conditions.prone",
        desc: "age-system.conditions.proneDesc",
        id: "prone"
    },
    {
        name: "age-system.conditions.restrained",
        desc: "age-system.conditions.restrainedDesc",
        id: "restrained"
    },
    {
        name: "age-system.conditions.injured",
        desc: "age-system.conditions.injuredDesc",
        id: "injured",
    },
    {
        name: "age-system.conditions.wounded",
        desc: "age-system.conditions.woundedDesc",
        id: "wounded"
    },
    {
        name: "age-system.conditions.unconscious",
        desc: "age-system.conditions.unconsciousDesc",
        id: "unconscious"
    },
    {
        name: "age-system.conditions.dying",
        desc: "age-system.conditions.dyingDesc",
        id: "dying"
    }
];

ageSystem.damageType = {
    stun: "age-system.stun",
    wound: "age-system.wound"
};
ageSystem.damageSource = {
    impact: "age-system.impact",
    ballistic: "age-system.ballistic",
    penetrating: "age-system.penetrating"
    // piercing: "age-system.piercing"
};
ageSystem.rof = {
    none: "age-system.rof.none",
    singleShot: "age-system.rof.singleShot",
    semiAuto: "age-system.rof.semiAuto",
    fullAuto: "age-system.rof.fullAuto"
};

ageSystem.bonusTypes = {
    itemDamage: "age-system.bonus.itemAtkBns",
    actorDamage: "age-system.bonus.itemDmgBns",
    itemActivation: "age-system.bonus.generalDmgBns",
    acc: "age-system.bonus.charAblBns",
    comm: "age-system.bonus.charAblBns",
    cons: "age-system.bonus.charAblBns",
    cun: "age-system.bonus.charAblBns",
    dex: "age-system.bonus.charAblBns",
    fight: "age-system.bonus.charAblBns",
    int: "age-system.bonus.charAblBns",
    magic: "age-system.bonus.charAblBns",
    per: "age-system.bonus.charAblBns",
    str: "age-system.bonus.charAblBns",
    will: "age-system.bonus.charAblBns",
    focus: "age-system.bonus.focusValueBns",
    defense: "age-system.bonus.totalDefenseBns",
    impactArmor: "age-system.bonus.impactArmorBns",
    ballisticArmor: "age-system.bonus.ballisticArmorBns",
    defendMnv: "age-system.bonus.defendMnvBns",
    guardupMnv: "age-system.bonus.guardupMnvBns",
    allOutAtk: "age-system.bonus.allOutAtkBns",
    maxHealth: "age-system.bonus.maxHealthBns",
    maxConviction: "age-system.bonus.maxConvictionBns",
    maxPowerPoints: "age-system.bonus.maxPowerPointsBns",
    powerForce: "age-system.bonus.powerForceBns",
    aimMnv: "age-system.bonus.aimMnvBns",
    armorPenalty: "age-system.bonus.armorPenaltyBns"
};
    
// Vehicle parameters
ageSystem.velocityCategory = {
    velStandard: {colDmg: "1d6", sideDmg: "1d3"},
    velFast:  {colDmg: "2d6", sideDmg: "1d6"},
    velVeryFast:  {colDmg: "4d6", sideDmg: "2d6"},
    velExtreme:  {colDmg: "6d6", sideDmg: "3d6"}
};

// Spacehip sizes
ageSystem.spaceshipSize = {
    tiny: 1,
    small: 2,
    medium: 3,
    large: 4,
    huge: 5,
    gigantic: 6,
    colossal: 7,
    titanic: 8
};

// Spaceship hull by size
ageSystem.spaceshipHull = [
    "1",
    "1d3",
    "1d6",
    "2d6",
    "3d6",
    "4d6",
    "5d6",
    "6d6"
];

// Spaceship crew by size
ageSystem.spaceshipCrew = [
    {min: 1, typ: 2},
    {min: 1, typ: 2},
    {min: 2, typ: 4},
    {min: 4, typ: 16},
    {min: 16, typ: 64},
    {min: 64, typ: 512},
    {min: 256, typ: 2048},
    {min: 1024, typ: 8192}
];

// Spaceship crew competece
ageSystem.spaceshipCrewCompetence = {
    incompetent: 0,
    poor: 1,
    average: 2,
    capable: 3,
    skilled: 4,
    elite: 5
};

// Spaceship Features
ageSystem.featuresType = [
    "sensorMod", "maneuverSizeStep", "juiceMod", "special",
    "hullPlating", "hullMod",/* "rollable", */"weapon" // Maybe in the future I can add the rollable feature...
];

const itemIconPath = "systems/age-system/resources/imgs/item-icon/";
ageSystem.itemIcons = {
    "equipment": `${itemIconPath}briefcase.svg`,
    "stunts": `${itemIconPath}split-cross.svg`,
    "talent": `${itemIconPath}skills.svg`,
    "power": `${itemIconPath}embrassed-energy.svg`,
    "honorifics": `${itemIconPath}rank-3.svg`,
    "relationship": `${itemIconPath}player-next.svg`,
    "membership": `${itemIconPath}backup.svg`,
    "weapon": `${itemIconPath}fist.svg`,
    "focus": `${itemIconPath}gift-of-knowledge.svg`,
    "shipfeatures": `${itemIconPath}processor.svg`
};

const actorIconPath = "systems/age-system/resources/imgs/actor-icon/";
ageSystem.actorIcons = {
    "vehicle": `${actorIconPath}chariot.svg`,
    "char": `${actorIconPath}sensousness.svg`,
    "spaceship": `${actorIconPath}rocket.svg`,
}

const uiElementsPath = "systems/age-system/resources/imgs/ui-elements/";
ageSystem.uiElements = {
    ageRoller: `${uiElementsPath}cube.svg`
}

const AGEstatusEffectsPath = "systems/age-system/resources/imgs/effects/";
ageSystem.AGEstatusEffects = [
    {
        icon: `${AGEstatusEffectsPath}number.png`,
        id: `num0`,
        label: `0`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-1.png`,
        id: `num1`,
        label: `1`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-2.png`,
        id: `num2`,
        label: `2`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-3.png`,
        id: `num3`,
        label: `3`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-4.png`,
        id: `num4`,
        label: `4`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-5.png`,
        id: `num5`,
        label: `5`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-6.png`,
        id: `num6`,
        label: `6`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-7.png`,
        id: `num7`,
        label: `7`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-8.png`,
        id: `num8`,
        label: `8`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}number-9.png`,
        id: `num9`,
        label: `9`,
        flags: {
            "age-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}cancel.png`,
        id: `dead`,
        label: `EFFECT.StatusDead`,
        flags: {
            "age-system": {
                type: "core"
            }
        }
    },
    {
        icon: `${AGEstatusEffectsPath}liberty-wing.png`,
        id: `flying`,
        label: `EFFECT.StatusFlying`,
        flags: {
            "age-system": {
                type: "misc"
            }
        }
    },
    {
        label: "age-system.conditions.blinded",
        id: "blinded",
        icon: "icons/svg/blind.svg",
        flags: {
            "age-system": {
                type: "conditions",
                name: "blinded",
            }
        }
    },
    {
        label: "age-system.conditions.deafened",
        id: "deafened",
        icon: "icons/svg/deaf.svg",
        flags: {
            "age-system": {
                type: "conditions",
                name: "deafened",
            }
        }
    },
    {
        label: "age-system.conditions.dying",
        id: "dying",
        icon: "icons/svg/skull.svg",
        flags: {
            "age-system": {
                type: "conditions",
                name: "dying"
            }
        }
    },
    {
        label: "age-system.conditions.exhausted",
        id: "exhausted",
        icon: "icons/magic/unholy/strike-body-explode-disintegrate.webp",
        flags: {
            "age-system": {
                type: "conditions",
                name: "exhausted"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: 1,
            value: "0.5"
        }]
    },
    {
        label: "age-system.conditions.fatigued",
        id: "fatigued",
        icon: "icons/magic/unholy/strike-body-life-soul-purple.webp",
        flags: {
            "age-system": {
                type: "conditions",
                name: "fatigued"
            }
        }
    },
    {
        label: "age-system.conditions.freefalling",
        id: "freefalling",
        icon: "icons/magic/air/air-pressure-shield-blue.webp",
        flags: {
            "age-system": {
                type: "conditions",
                name: "freefalling"
            }
        }
    },
    {
        label: "age-system.conditions.helpless",
        id: "helpless",
        icon: "icons/magic/control/sihouette-hold-beam-green.webp",
        flags: {
            "age-system": {
                type: "conditions",
                name: "helpless"
            }
        }
    },
    {
        label: "age-system.conditions.hindered",
        id: "hindered",
        icon: "icons/magic/control/debuff-chains-shackles-movement-blue.webp",
        flags: {
            "age-system": {
                type: "conditions",
                name: "hindered"
            }
        }
    },
    {
        label: "age-system.conditions.injured",
        id: "injured",
        icon: "icons/skills/wounds/injury-face-impact-orange.webp",
        flags: {
            "age-system": {
                type: "conditions",
                name: "injured"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: 1,
            value: "0.5"
        },
        {
            key: "data.testMod",
            mode: 2,
            value: "-1"
        }]
    },
    {
        label: "age-system.conditions.prone",
        id: "prone",
        icon: "icons/svg/falling.svg",
        flags: {
            "age-system": {
                type: "conditions",
                name: "prone"
            }
        }
    },
    {
        label: "age-system.conditions.restrained",
        id: "restrained",
        icon: "icons/magic/control/debuff-chains-shackles-movement-purple.webp",
        flags: {
            "age-system": {
                type: "conditions",
                name: "restrained"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: 5,
            value: "0"
        }]
    },
    {
        label: "age-system.conditions.unconscious",
        id: "unconscious",
        icon: "icons/svg/unconscious.svg",
        flags: {
            "age-system": {
                type: "conditions",
                name: "unconscious"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: 5,
            value: "0"
        }]
    },
    {
        label: "age-system.conditions.wounded",
        id: "wounded",
        icon: "icons/skills/wounds/injury-triple-slash-bleed.webp",
        flags: {
            "age-system": {
                type: "conditions",
                name: "wounded"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: 1,
            value: "0.5"
        },
        {
            key: "data.testMod",
            mode: 2,
            value: "-2"
        }]
    }
    
];

ageSystem.ageEffectsKeys = {
    "actorTest": {label: "age-system.bonus.actorTest", mask: "data.testMod"},
    "actorDamage": {label: "age-system.bonus.actorDamage", mask: "data.dmgMod"},
    "acc": {label: "age-system.bonus.acc", mask: "data.abilities.acc.total"},
    "comm": {label: "age-system.bonus.comm", mask: "data.abilities.comm.total"},
    "cons": {label: "age-system.bonus.cons", mask:"data.abilities.cons.total"},
    "cunn": {label: "age-system.bonus.cunn", mask: "data.abilities.cunn.total"},
    "dex": {label: "age-system.bonus.dex", mask: "data.abilities.dex.total"},
    "fight": {label: "age-system.bonus.fight", mask: "data.abilities.fight.total"},
    "int": {label: "age-system.bonus.int", mask: "data.abilities.int.total"},
    "magic": {label: "age-system.bonus.magic", mask: "data.abilities.magic.total"},
    "per": {label: "age-system.bonus.per", mask: "data.abilities.per.total"},
    "str": {label: "age-system.bonus.str", mask: "data.abilities.str.total"},
    "will": {label: "age-system.bonus.will", mask: "data.abilities.total"},
    "defense": {label: "age-system.bonus.defense", mask: "data.defense.total"},
    "impactArmor": {label: "age-system.bonus.impactArmor", mask: "data.armor.impact"},
    "ballisticArmor": {label: "age-system.bonus.ballisticArmor", mask: "data.armor.ballistic"},
    "defendMnv": {label: "age-system.bonus.defendMnv", mask: "data.defend.total"},
    "guardupMnv": {label: "age-system.bonus.guardupMnv", mask: "data.guardUp.total"},
    "allOutAtk": {label: "age-system.bonus.allOutAtkMnv", mask: "data.allOutAttack.total"},
    "maxHealth": {label: "age-system.bonus.maxHealth", mask: "data.health.max"},
    "maxConviction": {label: "age-system.bonus.maxConviction", mask: "data.conviction.max"},
    "maxPowerPoints": {label: "age-system.bonus.maxPowerPoints", mask: "data.powerPoints.max"},
    "aimMnv": {label: "age-system.bonus.aimMnv", mask: "data.aim.total"},
    "armorPenalty": {label: "age-system.bonus.armorPenalty", mask: "data.armor.penalty"},
    "speed": {label: "age-system.bonus.speed", mask: "data.speed.total"},
    "toughness": {label: "age-system.bonus.toughness", mask: "data.armor.toughness.total"},
}

ageSystem.itemEffectsKeys = {
    "powerForce": {label: "age-system.bonus.powerForceBns", mask: ""},
    "focus": {label: "age-system.bonus.focusValueBns", mask: ""},
    "itemDamage": {label: "age-system.bonus.itemAtkBns", mask: ""},
    "itemActivation": {label: "age-system.bonus.generalDmgBns", mask: ""}
}

// Age Tracker & Roller Initial Positions
ageSystem.ageTrackerPos = {xPos: "260px", yPos: "69px"};
ageSystem.ageRollerPos = {xPos: "800px", yPos: "10px"};

// Initializing variable to load focus Compendiaum
ageSystem.focus = [];