/*
 {
      id: ,
      skills: [
        {
          title: "S",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "",
          details: [
            [1100, 1300, 1500, 1700, 2000],
            [550, 650, 750, 850, 1000],
          ],
        },
        {
          title: "",
          expertise: false,
          type: "passive",
          description:
            "",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["3%", "6%", "9%", "12%", "15%"],
            ["3%", "6%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "",
          expertise: false,
          type: "passive",
          description:
            "",
          details: [
            ["5%", "8%", "11%", "15%", "20%"],
            [5, 6, 7, 8, 10],
          ],
        },
        {
          title: "",
          expertise: false,
          type: "passive",
          description:
            "",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["50%", "60%", "70%", "80%", "100%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "",
          expertise: true,
          note: "",
          type: "",
          description:
            "While on the map, troops led by this commander have a 40% chance to take 50% less skill damage and deal skill damage to up to 3 enemy targets in a fan-shaped area (Damage Factor = number of special Sacrifice buffs x 50). Damage from this attack is reduced by 15% per additional target. This ability can trigger once every 3 seconds.",
        },
      ],
    },
*/

const skillsData = {
  archer: [
    {
      id: 1,
      skills: [
        {
          title: "The Immortals",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the current target (Damage Factor #1), and causes them to take #2 increased additional damage for 3 seconds.",
          details: [
            [600, 800, 1000, 1200, 1400],
            ["10%", "12%", "14%", "16%", "20%"],
          ],
        },
        {
          title: "Battle of Thymbra",
          expertise: false,
          type: "passive",
          description:
            "Archer units led by this commander gain #1 increased march speed and #2 increased attack.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Persian Bow",
          expertise: false,
          type: "passive",
          description:
            "When troops led by this commander consist only of archers, their normal attacks gain a 10% chance to deal additional damage over time for 3 seconds (Damage Factor #1). While the damage over time is in effect, the target deals #2 reduced skill damage. This effect can trigger at most once every 5 seconds.",
          details: [
            [100, 130, 160, 200, 250],
            ["20%", "25%", "30%", "35%", "40%"],
          ],
        },
        {
          title: "The Cyrus Cylinder",
          expertise: false,
          type: "passive",
          description:
            "When attacked on the map, troops led by this commander have a 10% chance to deal damage over time in a circular area of effect to up to 3 targets for 2 seconds (Damage Factor #1). This effect can trigger at most once every 5 seconds.",
          details: [[150, 180, 210, 250, 300]],
        },
        {
          title: "King of the World",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "After using an active skill, archer units led by this commander gain 20% increased attack and 20% increased defense for 3 seconds, and gain an extra 50 rage per second. This effect can trigger at most once every 5 seconds.",
        },
      ],
    },
    {
      id: 2,
      skills: [
        {
          title: "Ceremony of Karnak",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "For the next 2 seconds, the target takes additional damage per second (Damage Factor #1), and reduces its defense by #2 for the next 2 seconds.",
          details: [
            [500, 550, 600, 700, 800],
            ["5%", "10%", "15%", "20%", "25%"],
          ],
        },
        {
          title: "The Poem of Pentaur",
          expertise: false,
          type: "passive",
          description:
            "While on the map, archer units led by this commander gain #1 increased attack.",
          details: [["20%", "25%", "30%", "35%", "40%"]],
        },
        {
          title: "Army of Amun",
          expertise: false,
          type: "passive",
          description:
            "When troops led by this commander consist only of archers, they take #1 less skill damage, and when attacked, they have a 10% chance to gain #2 attack and #3 march speed for 3 secodns.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["20%", "25%", "30%", "35%", "40%"],
            ["20%", "25%", "30%", "35%", "40%"],
          ],
        },
        {
          title: "Nefertari's Companionship",
          expertise: false,
          type: "passive",
          description:
            "The normal attacks of troops led by this commander have a 10% chance to heal a portion of slightly wounded units (Healing Factor #1) and grant troops #2 increased defense for 3 seconds.",
          details: [
            [200, 300, 350, 400, 500],
            ["20%", "25%", "30%", "35%", "40%"],
          ],
        },
        {
          title: "King of Kings",
          expertise: true,
          note: "Enhance Ceremony of Karnak",
          type: "active",
          description:
            "[Enhancement to Ceremony of Karnak] For the next 2 seconds, the target takes additional damage per second (Damage Factor 1000), and reduces its defense by 30%. Meanwhile it is inflicted with a heal immune effect for 2 seconds.",
        },
      ],
    },
    {
      id: 3,
      skills: [
        {
          title: "Glorious Arrows",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the current target (Damage Factor #1), and troops led by this commander deal #2 increased damage for next 3 seconds.",
          details: [
            [900, 1000, 1100, 1200, 1300],
            ["10%", "12%", "14%", "17%", "20%"],
          ],
        },
        {
          title: "Line Breaker",
          expertise: false,
          type: "passive",
          description:
            "Archers led by this commander gain #1 increased attack, deal extra #2 damage to infantry units, but take 5% extra damage from cavalry.",
          details: [
            ["20%", "25%", "30%", "35%", "40%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Resilience of Ta-Seti",
          expertise: false,
          type: "passive",
          description:
            "Archers gain #1 increased defense and their attacks have a #2 chance of dispelling all ongoing attack enhancements on targets when this commander is serving as garrison commander. This dispel can trigger at most once every 10 seconds.",
          details: [
            ["10%", "12%", "14%", "17%", "20%"],
            ["2%", "4%", "6%", "8%", "10%"],
          ],
        },
        {
          title: "A Kandake's Wrath",
          expertise: false,
          type: "passive",
          description:
            "Upon taking skill damage, deals direct damage (Damage Factor #1) to up to 3 enemies in a forward-facing fan-shaped area; if this commander is serving as garrison commander, troops also have a 50% chance to deal another round of damage (Damage Factor #2), plus a 20% chance of a third round (Damage Factor #3). Damage dealt to each target is reduced by 15% for each additional target. This skill can trigger at most once every 10 seconds.",
          details: [
            [400, 500, 600, 700, 800],
            [300, 350, 400, 450, 500],
            [200, 250, 300, 350, 400],
          ],
        },
        {
          title: "Nubian Willpower",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Troops led by this commander are immune to Silence. Active skills reduce the target's rage by 100 per seconds for 2 seconds. This skill can trigger at most once every 10 seconds.",
        },
      ],
    },
    {
      id: 4,
      skills: [
        {
          title: "Roar of the Lion",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the current target (Damage Factor #1), and reduces their health by #2 for 3 seconds.",
          details: [
            [900, 1000, 1100, 1300, 1500],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Bowman of Uruk",
          expertise: false,
          type: "passive",
          description:
            "Archers led by this commander gain #1 increased health and deal #2 increased damage to enemy troops that have fewer than 50% of units remaining.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["10%", "12%", "14%", "17%", "20%"],
          ],
        },
        {
          title: "A King's Right",
          expertise: false,
          type: "passive",
          description:
            "Archers led by this commander gain #1 increased attack when attacking cities or strongholds, and gain a #2 attack bonus every 6 seconds. The bonus lasts 10 seconds and stacks up to 6 times.",
          details: [
            ["10%", "12%", "14%", "17%", "20%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Enkidu's Path",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander take #1 less damage from normal attacks. Their attacks have a 30% chance of inflicting a Blood Craving debuff on targets afflicted troops suffer damage when healed (Damage Factor #2). This debuff lasts 3 seconds and can trigger at most once every 5 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            [300, 350, 400, 450, 500],
          ],
        },
        {
          title: "Demigod",
          expertise: true,
          note: "Enhance Enkidu's Path",
          type: "passive",
          description:
            "Troops led by this commander take 15% less damage from normal attacks. Their attacks have a 30% chance of inflicting a Blood Craving debuff on targets afflicted troops suffer damage when healed (Damage Factor 700) and take 15% increased skill damage. This debuff lasts 4 seconds and can trigger at most once every 5 seconds.",
        },
      ],
    },
    {
      id: 5,
      skills: [
        {
          title: "Battle of Salamis",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals damage to troops led by this commander (Damage Factor 300) alongside direct damage in a forward-facing fan-shaped area to up to 3 targets (Damage Factor #1). Damage dealt to each target is reduced by 15% for each additional target.",
          details: [[800, 1000, 1100, 1500, 1800]],
        },
        {
          title: "Bow and Mount",
          expertise: false,
          type: "passive",
          description:
            "Archer units led by this commander gain #1 increased defense and #2 increased health.",
          details: [
            ["5%", "8%", "11%", "15%", "20%"],
            ["5%", "8%", "11%", "15%", "20%"],
          ],
        },
        {
          title: "Ally of Xerxes",
          expertise: false,
          type: "passive",
          description:
            "While this commander is leading the garrison of your own city or a stronghold, all incoming normal attacks deal #1 reduced damage. At the same time, garrison troops' normal attacks have a 10% chance to Disarm (disables the normal attacks of the target) their target for 1 seconds.",
          details: [["2%", "4%", "6%", "8%", "10%"]],
        },
        {
          title: "Queen of Caria",
          expertise: false,
          type: "passive",
          description:
            "When this commander's rage meter reaches 80%, there is a 50% chance to Silence her troops for 3 seconds and at the same time grant her troops #1 increased damage for 5 seconds.",
          details: [["25%", "30%", "35%", "40%", "50%"]],
        },
        {
          title: "Rules of Survival",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Normal attacks have a 10% chance to deal additional damage per second (Damage Factor 400) and cause the target to deal extra 15% skill damage for 3 seconds.",
        },
      ],
    },
    {
      id: 6,
      skills: [
        {
          title: "Babylonian",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to up to 5 targets in a forward-facing fan-shaped area (Damage Factor #1). Damage dealt to each target is reduced by 15% for each additional target.",
          details: [[700, 900, 1100, 1300, 1500]],
        },
        {
          title: "Chaldean Archers",
          expertise: false,
          type: "passive",
          description:
            "Archer units led by this commander gain #1 increased defense and #2 increased march speed.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["3%", "6%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "Blessing of Marduk",
          expertise: false,
          type: "passive",
          description:
            "When this commander leads a rally attack, counterattack damage is increased by #1, and incoming attacks have a 10% chance to deal direct damage to the attacker (Damage Factor #2) and reduce their march speed by #3 for 3 seconds. Cooldown: 5 seconds.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            [300, 400, 500, 650, 800],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Destroyer of Carchemish",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander deal #1 increased damage, and each normal attack has a 10% chance to reduce the target's rage by #2. This effect can trigger once every 3 seconds.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            [20, 40, 60, 80, 100],
          ],
        },
        {
          title: "King of Babylon",
          expertise: true,
          note: "Enhance Babylonian",
          type: "active",
          description:
            "Deals direct damage to up to 5 targets in a forward-facing fan-shaped area (Damage Factor 1500). Damage dealt to each target is reduced by 15% for each additional target. At the same time, deals additional damage to the current target (Damage Factor 500).",
        },
      ],
    },
    {
      id: 7,
      skills: [
        {
          title: "Revenge of the Iceni",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the current target (Damage Factor #1), and increases their skill damage taken by #2 and reduces their march speed by 30% for 3 seconds.",
          details: [
            [1500, 1700, 1900, 2100, 2300],
            ["15%", "20%", "25%", "30%", "35%"],
          ],
        },
        {
          title: "Unending Struggle",
          expertise: false,
          type: "passive",
          description:
            "Increases archer units' attack by #1 and their march speed by #2. In troops led by Boudica, archer units gain #3 increased defense when the troop has fewer than 80% of its units remaining.",
          details: [
            ["15%", "18%", "21%", "25%", "30%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["15%", "18%", "21%", "25%", "30%"],
          ],
        },
        {
          title: "Blessing of the Forest",
          expertise: false,
          type: "passive",
          description:
            "Reduces skill damage taken by troops by #1 while on the map. When taking skill damage on the map, damage for the troop's next normal attack has a 50% chance to increase by #2, and a 25% chance to increase by #3 (both increases can trigger independently once every 7 seconds).",
          details: [
            ["10%", "13%", "16%", "20%", "25%"],
            ["5%", "10%", "15%", "20%", "25%"],
            ["20%", "25%", "30%", "40%", "50%"],
          ],
        },
        {
          title: "Shield of the Ancestors",
          expertise: false,
          type: "passive",
          description:
            "When attacking troops, troops receive healing (Damage Factor #1) after using active skills, and archers deal #2 increased damage to infantry. The healing effect can trigger once every 7 seconds.",
          details: [
            ["1%", "2%", "3%", "4%", "5%"],
            [400, 500, 600, 700, 800],
          ],
        },
        {
          title: "Rage of the Iceni",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Increases damage dealt by archers by 10%. When under control effects (silence, disarm, and heal immune), the troop has a 80% chance to dispel them.",
        },
      ],
    },
    {
      id: 8,
      skills: [
        {
          title: "Divine Right",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the current target (Damage Factor #1), and reduces troops' skill damage taken by #2 for 5 seconds.",
          details: [
            [1500, 1700, 1900, 2100, 2300],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Welsh Longbows",
          expertise: false,
          type: "passive",
          description:
            "Increases archer units' attack by #1 and their defense by #2. They also gain #3 increased march speed outside of alliance territory.",
          details: [
            ["10%", "12%", "14%", "16%", "20%"],
            ["10%", "12%", "14%", "16%", "20%"],
            ["5%", "8%", "11%", "15%", "20%"],
          ],
        },
        {
          title: "Road to Empire",
          expertise: false,
          type: "passive",
          description:
            "When attacking strongholds and governors' cities, troops deal #1 more counterattack damage, and have a 10% chance to increase skill damage taken by the target by #2 for 3 seconds. This effect triggers once every 5 seconds.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Battle of Agincourt",
          expertise: false,
          type: "passive",
          description:
            "Archers led by this commander deal #1 more damage. When attacked, there is a 10% chance to deal direct damage to the target (Damage Factor #2). This effect triggers once every 5 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            [400, 500, 600, 700, 800],
          ],
        },
        {
          title: "Hundred Years' War",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "When a troop's rage reaches 70%, they deal 30% more normal attack damage; otherwise, they take 20% less normal attack damage.",
        },
      ],
    },
  ],
  infantry: [
    {
      id: 9,
      skills: [
        {
          title: "Courageous",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage (Damage Factor #1) to the target. If the targe has been reduced to 30% or less units remaining, deals an additional damage (Damage Factor #2).",
          details: [
            [900, 1100, 1300, 1500, 1700],
            [100, 150, 200, 250, 300],
          ],
        },
        {
          title: "Byeolmuban",
          expertise: false,
          type: "passive",
          description:
            "Infantry units led by this commander gain #1 increased attack. They deal #2 increased damage against cavalry, but take 5% more damage from archers.",
          details: [
            ["20%", "25%", "30%", "35%", "40%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Stalwart",
          expertise: false,
          type: "passive",
          description:
            "While on the map, troops led by this commander have a 40% chance to take #1 less skill damage. This damage reduction effect can trigger once every 4 seconds.",
          details: [["20%", "25%", "30%", "40%", "50%"]],
        },
        {
          title: "Sacrifice",
          expertise: false,
          type: "passive",
          description:
            "If troops led by this commander consist only of infantry units, they gain #1 increased march speed with a #2 chance of dealing #3 increased skill damage for 8 seconds when attacking. This effect can trigger once every 4 seconds and can be stacked up to 8 times.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["50%", "60%", "70%", "80%", "100%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Vow to the Death",
          expertise: true,
          note: "Enhance Stalwart",
          type: "passive",
          description:
            "While on the map, troops led by this commander have a 40% chance to take 50% less skill damage and deal skill damage to up to 3 enemy targets in a fan-shaped area (Damage Factor = number of special Sacrifice buffs x 50). Damage from this attack is reduced by 15% per additional target. This ability can trigger once every 3 seconds.",
        },
      ],
    },
    {
      id: 10,
      skills: [
        {
          title: "Spear of the Empire",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage (Damage Factor #1) to the target. If the target has been reduced to 50% or fewer units remaining, deals continuous additional damage for 3 seconds (Damage Factor #2).",
          details: [
            [1500, 1700, 1900, 2100, 2300],
            [50, 70, 90, 120, 150],
          ],
        },
        {
          title: "Shield of Eagles",
          expertise: false,
          type: "passive",
          description:
            "Increases infantry units' attack by #1. When troops are garrisoned, infantry units' defense is increased by #2 and health by #3",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["3%", "6%", "9%", "12%", "15%"],
            ["3%", "6%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "Defense of Gaul",
          expertise: false,
          type: "passive",
          description:
            "Increases troops' counterattack damage dealt by #1. When troops are garrisoned, normal attacks inflict a debuff on the target that increases the damage they take from infantry by 1% for 15 seconds, stacking up to #2 times. This effect triggers once every 10 seconds.",
          details: [
            ["5%", "8%", "11%", "15%", "20%"],
            [5, 6, 7, 8, 10],
          ],
        },
        {
          title: "Victory at Chalons",
          expertise: false,
          type: "passive",
          description:
            "Increases all damage dealt by (#1)%. When launching a normal attack against a target inflicted with an additional damage effect, there is a #2 chance of inflicting Silence for 2 seconds. This effect triggers once every 7 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["20%", "40%", "60%", "80%", "100%"],
          ],
        },
        {
          title: "Song of the Nibelungs",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Decreases normal attack damage taken by 10%. When using an active skill, there is a 30% chance of inflicting 2 stacks of a debuff on the target troop. Each stack increases their damage taken from infantry by 1% for 15 seconds, stacking up to 10 times. This effect triggers once every 10 seconds.\nThis debuff counts towards Defense of Gaul's stack count and vice-versa.",
        },
      ],
    },
    {
      id: 11,
      skills: [
        {
          title: "Saint of War",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to up to 3 enemies in a forward-facing fan-shaped area (Damage Factor #1; if secondary commander, Damage Factor #2). Damage dealt to each target is reduced by 15% for each additional target. At the same time, all targets are Silenced for 3 seconds.",
          details: [
            [1100, 1300, 1500, 1700, 2000],
            [550, 650, 750, 850, 1000],
          ],
        },
        {
          title: "Five Tiger Generals",
          expertise: false,
          type: "passive",
          description:
            "When attacking strongholds and cities, troops led by this commander deal #1 increased normal attack damage, and their normal attacks have a 10% chance to reduce the target's attack by #2 for 3 seconds.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "The Slaying of Hua Xiong",
          expertise: false,
          type: "passive",
          description:
            "Infantry units led by this commander gain #1 increased attack and #2 increased march speed. Upon leaving battle, this commander heals a portion of slightly wounded units (Healing Factor #3).",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["3%", "6%", "9%", "12%", "15%"],
            [500, 600, 700, 800, 1000],
          ],
        },
        {
          title: "Green Dragon Crescent Blade",
          expertise: false,
          type: "passive",
          description:
            "When the skill Saint of War hits exactly one enemy, it has a 50% chance to deal an additional damage (Damage Factor #1). When the skill hits two or more enemies, it has a 50% chance to deal an additional damage (Damage Factor #2) to the targeted enemy.",
          details: [
            [600, 700, 800, 900, 1000],
            [800, 900, 1000, 1200, 1400],
          ],
        },
        {
          title: "Lone Rider",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Whenever Guan Yu gains a shield, he also increases his skill damage by 15% for 3 seconds. Whenever Guan Yu Leaves a structure, he increases his march speed by 100% for 3 seconds.",
        },
      ],
    },
    {
      id: 12,
      skills: [
        {
          title: "Berserker",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "If not surrounded, troops led by this commander deal direct damage to the current target (Damage Factor #1). If surrounded, troops deal direct damage to up to 3 target troops within a circular area of effect (Damage Factor #2). Damage dealt to each target is reduced by 15% for each additional target. After using this skill, troops gain #3 increased damage for 2 seconds.",
          details: [
            [600, 700, 800, 1000, 1200],
            [600, 900, 1100, 1300, 1500],
            ["10%", "12%", "14%", "16%", "20%"],
          ],
        },
        {
          title: "Viking Battleaxe",
          expertise: false,
          type: "passive",
          description:
            "When attacking strongholds and cities, infantry units led by this commander gain #1 increased attack and whenever they take damage, they have a 10% chance to reduce that damage by #2. This damage reduction effect can trigger once every 5 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Varangian Guard",
          expertise: false,
          type: "passive",
          description:
            "Infantry units led by this commander gain #1 increased attack and #2 increased march speed. When this commander uses their active skill, all infantry units under their command gain #3 more attack, but lose 5% defense (This effect lasts 8 seconds, and can stack up to 15 times).",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Stamford Bridge",
          expertise: false,
          type: "passive",
          description:
            "When troops led by this commander are on the map and use their normal attack, this commander has a #1 chance to cast their active skill and grant their troops immunity to all defense reduction effects for 3 seconds. This skill can trigger once every 5 seconds.",
          details: [["5%", "8%", "11%", "15%", "20%"]],
        },
        {
          title: "Valhalla",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Counterattack damage dealt on the map is increased by 20%. If surrounded, counterattack damage dealt is further increased (Bonus Damage = number of surrounding enemies x 2%, maximum 10 enemies).",
        },
      ],
    },
  ],
  cavalry: [],
};

const commanderSkills = (troopType, commanderId, langMode = null) => {
  if (typeof troopType !== "string" || !commanderId) return;
  const found = skillsData[troopType].find(
    (a) => String(a.id) === String(commanderId)
  );
  if (!found) return;
  const skills = found.skills;
  return skills;
};

export default commanderSkills;
