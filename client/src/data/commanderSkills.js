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
            "Increases infantry units' attack by #1. When troops are garrisoned, infantry units' defense is increased by #2 and health by #3.",
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
            "Increases all damage dealt by #1. When launching a normal attack against a target inflicted with an additional damage effect, there is a #2 chance of inflicting Silence for 2 seconds. This effect triggers once every 7 seconds.",
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
    {
      id: 13,
      skills: [
        {
          title: "King of Sparta",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Troops led by this commander gain #1 increased health for 3 seconds. Deals direct damage to up to 3 targets in a fan-shaped area (Damage Factor #2). If the current target is affected by Silence or attack reduction effects, it takes an extra 50% damage.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            [200, 300, 400, 500, 600],
          ],
        },
        {
          title: "Three Hundred Spartans",
          expertise: false,
          type: "passive",
          description:
            "When troops led by this commander consist only of infantry units, they gain #1 increased defense and gain rage #2 faster.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["5%", "7%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "Honorable Sacrifice",
          expertise: false,
          type: "passive",
          description:
            "When troops led by this commander are reduced to 50% of units remaining. incoming attacks have a chance to activate a shield which can absorb a large amount of damage (Damage Factor #1) for 3 seconds. As the shield is activated, all infantry units led by this commander also gain #2 increased attack for 3 seconds.",
          details: [
            [600, 650, 700, 750, 800],
            ["3%", "6%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "Son of the Lion",
          expertise: false,
          type: "passive",
          description:
            "While on the map, each attack has a 25% chance to grant troops led by this commander #1 increased damage for 5 seconds. This effect can stack up to 4 times.",
          details: [["5%", "6%", "7%", "8%", "10%"]],
        },
        {
          title: "Battle of Thermopylae",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "When troops led by this commander are reduced to 10% of units remaining, troops deal 400% increased damage and take 50% less damage for 10 seconds. This effect can only trigger once per hour after leaving your city.",
        },
      ],
    },
    {
      id: 14,
      skills: [
        {
          title: "Balanced Strategy",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals skill damage to the current target (Damage Factor #1) and troops led by this commander gain a shield for 3 seconds which can absorb a large amount of damage (Damage Factor #2).",
          details: [
            [700, 800, 900, 1100, 1300],
            [200, 250, 300, 400, 500],
          ],
        },
        {
          title: "Ruler of Palenque",
          expertise: false,
          type: "passive",
          description:
            "Infantry units led by this commander gain #1 increased health and #2 increased march speed. When this commander launches a rally attack, all damage dealt is increased by #3.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["3%", "6%", "9%", "12%", "15%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Divine Sovereignty",
          expertise: false,
          type: "passive",
          description:
            "When attacking strongholds or cities, infantry units led by this commander gain #1 increased attack; when attacked, troops also have a #2 chance of dispelling any currently active Slow, Poison, Exhaust, and other weakening effects (debuffs that weaken target's attack, defense, health and/or healing effects). This skill can trigger once every 10 seconds.",
          details: [
            ["20%", "25%", "30%", "35%", "40%"],
            ["5%", "8%", "11%", "15%", "20%"],
          ],
        },
        {
          title: "Holy Tree's Blessings",
          expertise: false,
          type: "passive",
          description:
            "Reduces all damage taken by #1. While on the map, gains extra damage reduction when surrounded (Damage Reduction = number of surrounding enemies x #2, maximum 6 enemies).",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Mayan Strength",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Troops led by this commander deal 20% increased counterattack damage and take 5% less damage from all sources for 3 seconds after using an active skill. This effect can trigger at most once every 5 seconds.",
        },
      ],
    },
    {
      id: 15,
      skills: [
        {
          title: "Unmatched Strength",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to up to 3 targets in a forward-facing fan-shaped area (Damage Factor #1). Damage dealt to deach target is reduced by 15% for each additional target. Successfully hit targets also suffer #2 reduced health for 3 seconds.",
          details: [
            [1500, 1600, 1700, 1800, 2000],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "All-Conquering",
          expertise: false,
          type: "passive",
          description:
            "Increases infantry units' attack by #1 and their march speed by #2. They also gain #3 increased march speed outside of alliance territory.",
          details: [
            ["20%", "25%", "30%", "35%", "40%"],
            ["3%", "6%", "9%", "12%", "15%"],
            ["2%", "4%", "6%", "8%", "10%"],
          ],
        },
        {
          title: "Strategic Pressure",
          expertise: false,
          type: "passive",
          description:
            "Increases infantry units' health by #1 when attacking troops, and grants each attack a 10% chance of dealing continuous additional damage for 3 seconds (Damage Factor #2). This effect triggers once every 8 seconds.",
          details: [
            ["10%", "12%", "14%", "16%", "20%"],
            [250, 300, 350, 400, 500],
          ],
        },
        {
          title: "Testudo Formation",
          expertise: false,
          type: "passive",
          description:
            "When troops on the map take skill damage, there is a 50% chance of reducing that damage by #1 and forming a shield that covers up to 3 allied troops for 3 seconds (Damage Factor #2). This effect triggers once every 8 seconds.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            [250, 300, 350, 400, 500],
          ],
        },
        {
          title: "Fiery Rage",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Increases skill damage dealt by 10%. When the target is Silenced, rage grows 30% faster.",
        },
      ],
    },
    {
      id: 16,
      skills: [
        {
          title: "Queen of Palmyra",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Heals the nearby allied troop with the lowest percentage of units remaining (Healing Factor #1, can heal troops led by this commander) and then heals their own troops on the next turn (Healing Factor #2). Troops healed by this skill gain #3 increased health for 2 seconds.",
          details: [
            [100, 150, 200, 250, 300],
            [500, 650, 800, 950, 1100],
            ["20%", "25%", "30%", "35%", "40%"],
          ],
        },
        {
          title: "Unmatched Beauty",
          expertise: false,
          type: "passive",
          description:
            "While this commander is leading the garrison of your own city or a stronghold, troops led by this commander take #1 reduced damage from normal attack, and deal #2 increased normal attack damage.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["3%", "6%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "Conqueror's Ambition",
          expertise: false,
          type: "passive",
          description:
            "Infantry units led by this commander gain #1 increased health and #2 increased attack. All troops led by this commander deal #3 more damage to rallied troops.",
          details: [
            ["10%", "12%", "14%", "16%", "20%"],
            ["10%", "12%", "14%", "16%", "20%"],
            ["2%", "4%", "6%", "8%", "10%"],
          ],
        },
        {
          title: "Pluralistic Reign",
          expertise: false,
          type: "passive",
          description:
            "While this commander is leading the garrison of your own city or a stronghold, the attacks of troops led by this commander have a 10% chance to deal extra damage per second to the target troop (Damage Factor #1) for 3 seconds. This skill's damage per seconds effect can trigger once every 5 seconds.",
          details: [[300, 350, 400, 500, 600]],
        },
        {
          title: "Ascending Augusta",
          expertise: true,
          note: "Enhance Queen of Palmyra",
          type: "active",
          description:
            "Heals the nearby allied troop (two allied troops while leading the garrison of your own city or a stronghold) with the lowest percentage of units remaining (Healing Factor 300, can heal troops led by this commander), and then heals their own troops on the next turn (Healing Factor 1100). Troops healed by this skill gain 50% increased health and 30% increased damage for 2 seconds.",
        },
      ],
    },
    {
      // tariq
      id: 33,
      skills: [
        {
          title: "Victory or Death",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to a target (Damage Factor #1). If this commander's troop is surrounded, this skill deals additional damage to the target (Damage Factor #2).",
          details: [
            [1400, 1600, 1800, 2000, 2200],
            [150, 180, 210, 250, 300],
          ],
        },
        {
          title: "Bane of the Visigoths",
          expertise: false,
          type: "passive",
          description:
            "Infantry units led by this commander gain #1 increased attack and deal #2 more damage to cavalry. Infantry also gain #2 increased march speed outside of alliance territory.",
          details: [
            ["20%", "25%", "30%", "35%", "40%"],
            ["2%", "4%", "6%", "8%", "10%"],
          ],
        },
        {
          title: "Gate Crasher",
          expertise: false,
          type: "passive",
          description:
            "When attacking cities or strongholds, infantry units led by this commander gain #1 increased defense, and each normal attack has a 30% chance to reduce the target's attack by #1 for the next 3 seconds. This effect can trigger once every 8 seconds.",
          details: [["10%", "15%", "20%", "25%", "30%"]],
        },
        {
          title: "Battle of Guadalete",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander deal #1 increased damage, and have a 10% chance to reduce the target's rage by #2 for 3 seconds. This effect can trigger once every 8 seconds.",
          details: [
            ["5%", "7%", "9%", "12%", "15%"],
            [40, 50, 60, 70, 80],
          ],
        },
        {
          title: "Keen Berber Blade",
          expertise: true,
          note: "Enhance Victory or Death",
          type: "active",
          description:
            "Deals direct damage to a target (Damage Factor 2500). If this commander's troop is surrounded, this skill deals additional direct damage to the target (Damage Factor = 300 x number of surrounding enemies, capped at 900).",
        },
      ],
    },
    {
      //sargon
      id: 34,
      skills: [
        {
          title: "Sar Kissatim",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "For the next 5 seconds, normal attacks have a #1 chance to deal direct damage to the target (Damage Factor #2).",
          details: [
            ["50%", "60%", "70%", "80%", "100%"],
            [250, 300, 350, 400, 500],
          ],
        },
        {
          title: "Standing Army",
          expertise: false,
          type: "passive",
          description:
            "Infantry led by this commander gain #1 increased attack and #2 increased health. When dealing skill damage, this commander's troop has a #3 chance to inflict a stack of the Awed effect on the target troop, which increases the skill damage taken by the target by 3% for 10 seconds (maximum of 10 stacks).",
          details: [
            ["5%", "6%", "7%", "8%", "10%"],
            ["10%", "12%", "14%", "16%", "20%"],
            ["50%", "60%", "70%", "80%", "100%"],
          ],
        },
        {
          title: "Conqueror of Sumer",
          expertise: false,
          type: "passive",
          description:
            "Infantry units led by this commander gain #1 increased march speed. They also deal #2 more damage when attacking troops. Normal attacks have a 10% chance to increase all damage dealt by this commander's troop by #3 for 3 seconds. This effect can trigger once every 8 seconds.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Anu's Fury",
          expertise: false,
          type: "passive",
          description:
            "Increases infantry units' defense by #1 when in the field. When a target troop has received 10 stacks of the Awed effect, all stacks will be removed and the target troop will be dealt damage (Damage Factor #2). In addition, this commander's troop will receive a shield that lasts for 5 seconds (Shield Factor #3).",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            [500, 600, 700, 800, 1000],
            [150, 180, 210, 250, 300],
          ],
        },
        {
          title: "Enlil's Blessings",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Reduces the skill damage taken by this commander's troop by 15%. When their troop is hit with a normal attack, it has a 50% chance to inflict 2 stacks of the Awed effect on an enemy target. If this skill is triggered when this commander's troop gains a shield, it will inflict an extra 1 stack of Awed. This skill can be triggered once every 8 seconds.",
        },
      ],
    },
  ],
  cavalry: [
    {
      id: 17,
      skills: [
        {
          title: "King of the Huns",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "For the next 4 seconds, the normal attacks and counterattacks of troops led by this commander deal #1 increased damage, and normal attacks have a 50% chance to reduce the target's attack by #2 for 2 seconds (can trigger once every 2 seconds).",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["20%", "25%", "30%", "40%", "50%"],
          ],
        },
        {
          title: "The Siege of Constantinople",
          expertise: false,
          type: "passive",
          description:
            "When attacking strongholds or cities, troops led by this commander deal #1 increased damage, and have a 10% chance each turn to reduce enemy garrison troops' defense by #2 for 3 seconds.",
          details: [
            ["1%", "2%", "3%", "4%", "5%"],
            ["5%", "10%", "15%", "20%", "25%"],
          ],
        },
        {
          title: "Honoria",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander take #1 less skill damage, and deal 30% reduced skill damage. At the same time, cavalry units gain #2 increased march speed and #3 increased attack.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["3%", "6%", "9%", "12%", "15%"],
            ["20%", "25%", "30%", "35%", "40%"],
          ],
        },
        {
          title: "Battle of the Catalaunian Plains",
          expertise: false,
          type: "passive",
          description:
            "When troops led by this commander consist only of cavalry, their normal attacks have a chance to increase all damage dealt for 2 turns: has a 25% chance to increase by #1, and a 25% chance to increase by #2",
          details: [
            ["25%", "30%", "35%", "40%", "50%"],
            ["50%", "60%", "70%", "80%", "100%"],
          ],
        },
        {
          title: "The Scourge of God",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Troops led by Attila are immune to all Silence effects. When an enemy has less than 50% of units remaining, normal attacks against it deal 20% increased damage. After leaving battle, march speed is increased by 50% for 3 seconds.",
        },
      ],
    },
    {
      id: 18,
      skills: [
        {
          title: "Battle Hungry",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "For the next 3 seconds, normal attacks have a #1 chance to deal direct damage to the target (Damage Factor #2) and reduce their rage by 20.",
          details: [
            ["80%", "85%", "90%", "95%", "100%"],
            [500, 550, 600, 650, 700],
          ],
        },
        {
          title: "Seigneur's Sympathy",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander gain #1 increased attack and #2 health, and also gain a further #3 march speed and #4 reduced damage from all sources if outside alliance territory.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Fabian Strategy",
          expertise: false,
          type: "passive",
          description:
            "When attacking cities or strongholds, troops led by this commander deal #1 increased damage. Cavalry units led by this commander gain a 1 % damage boost for 15 seconds per 10 seconds in battle. This effect can stack up to 5 times.",
          details: [["2%", "4%", "6%", "8%", "10%"]],
        },
        {
          title: "The Eagle of Brittany",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander gain #1 increased defense. Troops led by this commander gain a 10% chance to heal (Healing Factor #2) for 3 seconds when attacked. This effect can trigger at most once every 5 seconds.",
          details: [
            ["10%", "12%", "14%", "16%", "20%"],
            [100, 130, 160, 200, 250],
          ],
        },
        {
          title: "Royal Constable",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Troops led by this commander take 5% reduced skill damage, and deal skill damage to the attacker upon taking skill damage (Damage Factor #1). This effect can trigger at most once every 5 seconds.",
        },
      ],
    },
    {
      id: 19,
      skills: [
        {
          title: "Hidden Moon",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Troops led by this commander gain #1 increased damage for 3 seconds. At the same time, they gain 1 stack of Blessed for 10 seconds. Blessed can stack up to 3 times.",
          details: [["20%", "25%", "30%", "35%", "40%"]],
        },
        {
          title: "Royal Elephant Brigade",
          expertise: false,
          type: "passive",
          description:
            "When attacking cities or strongholds, troops led by this commander take #1 reduced damage, and gain a stack of Blessed after using the Hidden Moon skill.",
          details: [["2%", "4%", "6%", "8%", "10%"]],
        },
        {
          title: "Arthashastra",
          expertise: false,
          type: "passive",
          description:
            "When all this commander's troops are cavalry, health is increased by #1 and each attack has a 50% chance to add a stack of Exhaust to the target, reducing their health and defense by #2. Each stack lasts 5 seconds, and can stack up to 3 times.",
          details: [
            ["4%", "8%", "12%", "16%", "20%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Self-control",
          expertise: false,
          type: "passive",
          description:
            "Damage taken from cavalry is reduced by #1. After using an active skill, all troops' march speed is increased by #2 for 3 seconds. Meanwhile, all stacks of Blessing are removed, and damage is dealt to the target based on the number of stacks removed (Damage Factor = number of stacks x #3).",
          details: [
            ["1%", "2%", "3%", "4%", "5%"],
            ["5%", "10%", "15%", "20%", "25%"],
            [300, 350, 400, 450, 500],
          ],
        },
        {
          title: "Maurya's Might",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "The Blessed effect can stack up to 4 times. While in alliance territory, each attack has a 50% chance to gain one stack of Blessed. Outside of alliance territory, each attack has a 50% chance to gain two stacks of Blessed. this effect can only trigger once every 5 seconds.",
        },
      ],
    },
    {
      id: 20,
      skills: [
        {
          title: "Might of the Pious",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the current target (Damage Factor #1), and troops led by this commander deal #2 increased damage for next 3 seconds.",
          details: [
            [900, 1000, 1100, 1300, 1500],
            ["5%", "8%", "11%", "15%", "20%"],
          ],
        },
        {
          title: "Oath of Loyalty",
          expertise: false,
          type: "passive",
          description:
            "While on the map, cavalry units gain #1 increased defense and #2 increased march speed. While commanding the garrison of a stronghold or your own city, cavalry units gain #3 increased defense and #4 increased health.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["5%", "7%", "9%", "12%", "15%"],
            ["4%", "8%", "12%", "16%", "20%"],
            ["4%", "8%", "12%", "16%", "20%"],
          ],
        },
        {
          title: "Holy Blessing",
          expertise: false,
          type: "passive",
          description:
            "Skill damage taken is reduced by #1. While commanding the garrison of a stronghold or your own city, cavalry units deal #2 increased damage to archers, but take 5% increased damage from infantry.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Blade of Dodging",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased skill damage. When they take skill damage, they gain #2 rage per second for 3 seconds. This effect can trigger at most once every 8 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            [10, 20, 30, 40, 50],
          ],
        },
        {
          title: "Holy Lord of Poland",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Troops led by this commander deal 10% increased damage to rallied troops. When the active skill is used, damage taken is reduced by 10% for 4 seconds.",
        },
      ],
    },
    {
      id: 21,
      skills: [
        {
          title: "One-Eyed Knight",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals skill damage to the target troop (Damage Factor #1). When this commander's troop has fewer than 50% units remaining, this skill deals additional skill damage (Damage Factor #2).",
          details: [
            [1400, 1600, 1800, 2000, 2200],
            [100, 130, 160, 200, 250],
          ],
        },
        {
          title: "Sword Held High",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander gain #1 attack. When troops are garrisoned, cavalry units' defense is increased by #2 and skill damage dealt is increased by #3.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["3%", "6%", "9%", "12%", "15%"],
            ["2%", "4%", "6%", "8%", "10%"],
          ],
        },
        {
          title: "Unbowed",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander take #1 less normal attack damage. When troops are garrisoned and take skill damage, they have a #2 chance to remove all normal buffs (strengthens attak, defense, health, and/or healing effects) from the attacker. This dispel effect can trigger once every 8 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["10%", "15%", "20%", "30%", "50%"],
          ],
        },
        {
          title: "Battle of Grundwald",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units have #1 more health. When launching a normal attack, they have a 10% chance of gaining a buff that increases their normal attack damage dealt by #2 for 3 seconds. This effect can trigger once every 8 seconds.",
          details: [
            ["5%", "8%", "11%", "15%", "20%"],
            ["5%", "8%", "11%", "15%", "20%"],
          ],
        },
        {
          title: "Cry of Bohemia",
          expertise: true,
          note: "Enhance One-Eyed Knight",
          type: "active",
          description:
            "Deals skill damage to the target (Damage Factor 2400). When this commander's troop has fewer than 50% units remaining, this skill deals additional skill damage to up to 3 surrounding troops within radius (Damage Factor 300).",
        },
      ],
    },
    {
      id: 22,
      skills: [
        {
          title: "Sacred Banner",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals skill damage to up to 3 targets in a forward-facing fan-shaped area (Damage Factor #1); damage taken by targeted troops reduces by 15% per additional target. The commander's troop and 2 surrounding friendly troops also deal #2 more damage for seconds, gaining #3 additional rage per second.",
          details: [
            [1000, 1200, 1400, 1600, 2000],
            ["1%", "2%", "3%", "4%", "5%"],
            [3, 6, 10, 15, 20],
          ],
        },
        {
          title: "Hundred-Year Dawn",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander gain #1 attack, and #2 march speed. Outside of alliance territory, cavalry units' march speed is increased by an extra #3, and all units deal #4 more normal attack damage.",
          details: [
            ["5%", "8%", "11%", "15%", "20%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Return of the Saint",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander deal #1 more damage when attacking troops. When using skills, troops led by this commander gain a buff that increases normal attack damage dealt by #2 for 1 seconds. This effect can trigger once every 5 seconds.",
          details: [
            ["1%", "2%", "3%", "4%", "5%"],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "The Blessed",
          expertise: false,
          type: "passive",
          description:
            "While on the map, cavalry units led by this commander have #1 more health, and when the secondary commander of their troop uses an active skill, they have a #2 chance to cast Sacred Banner. This effect can trigger once every 10 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["50%", "60%", "70%", "80%", "100%"],
          ],
        },
        {
          title: "Unyielding Martyr",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Troops led by this commander deal 5% more counterattack damage. When the target troop has more than 30% units remaining, troops led by this commander deal 5% more damage.",
        },
      ],
    },
    {
      id: 23,
      skills: [
        {
          title: "Hero of Peipus",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the target (Damage Factor #1) and inflicts a defense reduction debuff that lasts 3 seconds (Defense Reduction = number of enemies surrounding the target x #2, maximum 3 enemies).",
          details: [
            [1500, 1700, 1900, 2100, 2300],
            ["5%", "7%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "Expeditionary",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander gain #1 increased attack and #2 increased march speed. They also gain #3 increased health outside of alliance territory.",
          details: [
            ["10%", "12%", "14%", "16%", "20%"],
            ["4%", "8%", "12%", "16%", "20%"],
            ["10%", "12%", "14%", "16%", "20%"],
          ],
        },
        {
          title: "Guard of the Republic",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander gain #1 increased defense. Troops led by this commander deal #2 increased damage to, and take #3 reduced damage from, surrounded targets.",
          details: [
            ["10%", "12%", "14%", "16%", "20%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Knight of Iron",
          expertise: false,
          type: "passive",
          description:
            "When troops led by this commander consist only of cavalry, skill damage is increased by #1; skill damage is increased by an extra #2 for 4 seconds upon casting an active skill. This effect can trigger at most once every 5 seconds.",
          details: [
            ["5%", "10%", "15%", "20%", "25%"],
            ["15%", "20%", "25%", "30%", "35%"],
          ],
        },
        {
          title: "Winter's Storm",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Troops led by this commander deal 5% increased normal attack damage, and gain a 10% chance to increase the health of cavalry units by 30% for 3 seconds when attacked. This effect can trigger at most once every 5 seconds.",
        },
      ],
    },
    {
      id: 24,
      skills: [
        {
          title: "Fierce as the Fire",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Takeda Shingen inflicts a Burn effect on the target for 4 seconds, giving all normal attacks against the target a 50% chance to deal extra #1 damage (extra damage can trigger once every 2 seconds).",
          details: [["20%", "25%", "30%", "40%", "50%"]],
        },
        {
          title: "Swift as the Wind ",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander gains #1 increased attack; troops' normal attacks have a 10% chance to increase march speed by #2 for 3 seconds.",
          details: [
            ["10%", "15%", "20%", "30%", "40%"],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Gentle as the Forest",
          expertise: false,
          type: "passive",
          description:
            "For 4 seconds after using Fierce as the Fire, heals a portion of slightly wounded units every second (Healing Factor #1). When troops led by this commander consist only of cavalry, they gain #2 increased defense.",
          details: [
            [30, 60, 90, 120, 150],
            ["20%", "25%", "30%", "35%", "40%"],
          ],
        },
        {
          title: "Immovable as the Mountain",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander take #1 reduced skill damage, and have a 10% chance, when attakced, to reduce all incoming normal attack and counterattack damage by #2 for 3 seconds.",
          details: [
            ["1%", "2%", "3%", "4%", "5%"],
            ["5%", "10%", "15%", "20%", "25%"],
          ],
        },
        {
          title: "Koshu-ryu Gungaku",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Deals 30% increased normal attack damage to targets with the Burn effect.",
        },
      ],
    },
    {
      id: 25,
      skills: [
        {
          title: "Hidden Bloodline",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deal damage to up to 3 targets in a forward-facing rectangle area (Damage Factor #1). Damage dealt to each target is reduced by 15% for each additional target after the first. Attacked troops' extra skill damage from buffs cannot take effect, and their march speed is reduced by #2 for 3 seconds.",
          details: [
            [900, 1000, 1100, 1300, 1500],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Charge of Hastings",
          expertise: false,
          type: "passive",
          description:
            "All cavalry units led by this commander gain #1 increased attack and #2 increased march speed. When outside of alliance territory, troops led by this commander deal #3 increased damage.",
          details: [
            ["10%", "12%", "14%", "16%", "20%"],
            ["3%", "6%", "9%", "12%", "15%"],
            ["2%", "4%", "6%", "8%", "10%"],
          ],
        },
        {
          title: "Norman Conquest",
          expertise: false,
          type: "passive",
          description:
            "While on the map, cavalry units led by this commander gain #1 attack, and normal attacks have a 10% chance to inflict direct damage to the target (Damage Factor #2). If the target is surrounded, it will take extra damage (Damage Factor = number of surrounding enemies x #3, maximum 5 enemies).",
          details: [
            ["10%", "12%", "14%", "16%", "20%"],
            [600, 650, 700, 750, 800],
            [40, 50, 60, 70, 80],
          ],
        },
        {
          title: "Scourge of the North",
          expertise: false,
          type: "passive",
          description:
            "When Hidden Bloodline hits a target, this commander's troops gain #1 increased defense for 3 seconds. When Hidden Bloodline hits two or more targets, all this commander's troops and nearby allied troops gain #1 increased defense and 50 rage per second for 3 seconds.",
          details: [["10%", "12%", "14%", "16%", "20%"]],
        },
        {
          title: "Judgement Day",
          expertise: true,
          note: "Enhance Norman Conquest",
          type: "passive",
          description:
            "While on the map, cavalry units led by this commander gain 30% attack, and normal attacks have a 10% chance to inflict direct damage to the target (Damage Factor 1000). If the target is surrounded, it will take extra damage (Damage Factor = number of surrounding enemies x 100, maximum 5 enemies).",
        },
      ],
    },
    {
      id: 26,
      skills: [
        {
          title: "Warlord's Courage",
          expertise: false,
          type: "active",
          rageReq: 900,
          description:
            "Deals direct damage to up to 3 targets in a forward-facing fan-shaped area (Damage Factor #1). Damage dealt to each target is reduced by 25% for each additional target. Successfully hit targets also suffer #2 reduced defense for 3 seconds.",
          details: [
            [900, 1100, 1300, 1500, 1700],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Snow-hooved Stallion",
          expertise: false,
          type: "passive",
          description:
            "Cavalry units led by this commander gain #1 increased attack and #2 increased march speed. When attacked, they have a 20% chance to gain #3 march speed for 3 seconds. This effect can trigger once every 5 seconds.",
          details: [
            ["20%", "25%", "30%", "35%", "40%"],
            ["3%", "6%", "9%", "12%", "15%"],
            ["5%", "10%", "15%", "20%", "25%"],
          ],
        },
        {
          title: "Conqueror of All",
          expertise: false,
          type: "passive",
          description:
            "While attacking strongholds or Governors' cities, troops led by this commander gain #1 increased damage, and normal attacks have a 10% chance to deal additional direct damage (Damage Factor #2), which can trigger at most once every 3 seconds.",
          details: [
            ["1%", "2%", "3%", "4%", "5%"],
            [200, 250, 300, 250, 400],
          ],
        },
        {
          title: "Forceful Spearhead",
          expertise: false,
          type: "passive",
          description:
            "While on the map, active skill cost is reduced by #1 reeage. After Xiang Yu has used his active skill, his troops will gain a stack of cavalry damage + #2 and march speed -10% for 10 seconds. Another stack is gained if they are being surrounded. This effect can stack up to 6 times.",
          details: [
            [10, 20, 30, 40, 50],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "Unbeatable Warlord",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Troops led by this commander deal an extra 10% skill damage. When troops have gained a rage buff for more than 1 turn, their skill damage will increase by 10% for 3 seconds. This effect can trigger at most once every 5 seconds.",
        },
      ],
    },
  ],
  leadership: [
    {
      id: 27,
      skills: [
        {
          title: "Land of the Prickly",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the current target (Damage Factor #1), and reduces their counterattack damage by #2 for 4 seconds.",
          details: [
            [600, 800, 1000, 1200, 1400],
            ["3%", "6%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "Flower War",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander deal #1 increased damage to barbarians. Both commanders gain #2 increased experience. Attacks against barbarians have a 10% chance to reduce the target's health by #3 for 3 seconds. This effect can trigger at most once every 3 seconds.",
          details: [
            ["10%", "20%", "30%", "40%", "50%"],
            ["5%", "10%", "15%", "20%", "25%"],
            ["20%", "25%", "30%", "40%", "50%"],
          ],
        },
        {
          title: "Jaguar Warrior",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased march speed and #2 increased attack. When performing a normal attack against a target inflicted with a reduced health debuff, troops led by this commander get healed (Healing Factor #3). This effect can trigger at most once every 5 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["5%", "8%", "11%", "15%", "20%"],
            [300, 400, 500, 600, 700],
          ],
        },
        {
          title: "Triple Alliance",
          expertise: false,
          type: "passive",
          description:
            "When this commander launches a rally attack, the troop capacity of rallied troops is increased by #1. When troops led by this commander take skill damage, they will deal direct damage to the attacker (Damage Factor #2). This effect can trigger at most once every 5 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            [300, 350, 400, 500, 600],
          ],
        },
        {
          title: "Worship the Divine",
          expertise: true,
          note: "Enhance Triple Alliance",
          type: "passive",
          description:
            "When this commander launches a rally attack, the troop capacity of rallied troops is increased by 10%. When troops led by this commander take skill damage, they will deal direct damage to the attacker (Damage Factor 800). This effect can trigger at most once every 4 seconds.",
        },
      ],
    },
    {
      id: 28,
      skills: [
        {
          title: "Magnificent Sultan",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the target (Damage Factor #1), and when the target has less than 50% rage, decreases their defense and health by #2 for 2 seconds.",
          details: [
            [900, 1000, 1100, 1200, 1300],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Annexation",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased attack and defense. Damage taken from all sources is reduced by #2 outside of alliance territory.",
          details: [
            ["3%", "6%", "9%", "12%", "15%"],
            ["2%", "4%", "6%", "8%", "10%"],
          ],
        },
        {
          title: "The Siege of Vienna",
          expertise: false,
          type: "passive",
          description:
            "Attacks have a 10% chance of reducing the normal attack damage and skill damage of target troops by #1 for 3 seconds when attacking cities or strongholds. Cooldown: 5 seconds.",
          details: [["5%", "8%", "11%", "15%", "20%"]],
        },
        {
          title: "Janissary",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander deal #1 increased normal attack damage. If at least 2 different unit types are present, troops also gain #2 increased skill damage for 3 seconds upon suffering skill damage. Cooldown: 5 seconds.",
          details: [
            ["1%", "2%", "3%", "4%", "5%"],
            ["20%", "25%", "30%", "40%", "50%"],
          ],
        },
        {
          title: "Master of Europe",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "When the commander has over 70% rage, normal attacks by troops led by this commander inflict additional skill damage to the target (Damage Factor 200) but grants the target 50 extra rage.",
        },
      ],
    },
    {
      id: 29,
      skills: [
        {
          title: "Byzantine Empress",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to up to 5 targets in a circular area of effect (Damage Factor #1). Damage dealt to each target is reduced by 15% for each additional target.",
          details: [[600, 800, 1000, 1200, 1400]],
        },
        {
          title: "Keeper of Secrets",
          expertise: false,
          type: "passive",
          description:
            "While this commander is leading the garrison of your own city or a stronghold, all troops led by this commander gain #1 increased defense and take #1 reduced damage from rallied troops.",
          details: [["2%", "4%", "6%", "8%", "10%"]],
        },
        {
          title: "Co-Ruler",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased attack. While more than 50% of units remain, troops deal extra #1 damage.",
          details: [["2%", "4%", "6%", "8%", "10%"]],
        },
        {
          title: "Royal Power",
          expertise: false,
          type: "passive",
          description:
            "While this commander is leading the garrison of your own city or a stronghold, all incoming attacks have a 10% chance to increase the damage of garrision troops by #1 for 3 seconds.",
          details: [["10%", "15%", "20%", "30%", "40%"]],
        },
        {
          title: "Honor to the Last",
          expertise: true,
          note: "Enhance Byzantine Empress",
          type: "active",
          description:
            "Immediately removes all Control, Slow-down, Poison, Exhaust, Burn and other debuffs from troops led by this commander. At the same time, deals direct damage to up to 5 targets in a circular area of effect (Damage Factor 1700). Damage dealt to each target is reduced by 15% for each additional target.",
        },
      ],
    },
    {
      id: 30,
      skills: [
        {
          title: "Trajan's Column",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "Deals direct damage to the current target (Damage Factor #1). Troops led by this commander and nearby allied troops gain #2 increased skill damage for 3 seconds, and #3 rage per second. However, incoming damage is increased by 25% for 3 seconds.",
          details: [
            [100, 150, 200, 250, 300],
            ["10%", "13%", "16%", "20%", "25%"],
            [(15, 20, 25, 30, 40)],
          ],
        },
        {
          title: "Expanding Borders",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased defense. Health is increased by #1 while outside of alliance territory.",
          details: [["5%", "8%", "11%", "15%", "20%"]],
        },
        {
          title: "Great Expeditions",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased troop capacity. When troops led by this commander consist of 3 or more different unit types, they will deal additional direct damage to the current target when the active skill is used (Damage Factor #2), and increase damage dealt to the target by #3 for 3 seconds.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            [100, 150, 200, 250, 300],
            ["5%", "8%", "11%", "15%", "20%"],
          ],
        },
        {
          title: "Battle of Tapae",
          expertise: false,
          type: "passive",
          description:
            "While on the map, normal attacks will grant troops a stack of #1 increased defense for 10 seconds, with the duration resetting each time a new stack is gained. Stacks up to 10 times. This effect can trigger at most once eveery 8 seconds.",
          details: [["2%", "3%", "4%", "5%", "6%"]],
        },
        {
          title: "Five Good Emperors",
          expertise: true,
          note: "Enhance Trajan's Column",
          type: "active",
          description:
            "Deals direct damage to the current target (Damage Factor 400). Troops led by this commander and nearby allied troops gain 30% increased skill damage for 3 seconds, and 50 rage per second. However, incoming damage is increased by 25% for 3 seconds.",
        },
      ],
    },
    {
      id: 31,
      skills: [
        {
          title: "Duke of Loyalty and Warfare",
          expertise: false,
          type: "active",
          rageReq: 1000,
          description:
            "While on the map, deals direct damage to a target (Damage Factor #1). While part of the garrison of a stronghold or your own city, deals direct damage to up to 3 targets in a fan-shaped area (Damage Factor #2). Damage dealt to each target is reduced by 15% for each additional target. On the map or in a garrison, when dealing damage, inflicts a speed reduction effect on the targets, reducting their march speed by #3 for 3 seconds.",
          details: [
            [1000, 1200, 1400, 1700, 2000],
            [600, 800, 1000, 1200, 1400],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Battle of Myeongnyang",
          expertise: false,
          type: "passive",
          description:
            "When battling within your alliance's territory, or while serving as garrison commander of a stronghold or your own city, normal attacks have a 10% chance to grant troops led by this commander #1 increased defense and #2 increased damage for 3 seconds.",
          details: [
            ["5%", "8%", "11%", "15%", "20%"],
            ["5%", "7%", "9%", "12%", "15%"],
          ],
        },
        {
          title: "Geobukseon",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased defense. When fewer than 50% of units remain, troops deal #2 increased damage.",
          details: [
            ["10%", "15%", "20%", "25%", "30%"],
            ["5%", "8%", "11%", "15%", "20%"],
          ],
        },
        {
          title: "Winged Formation",
          expertise: false,
          type: "passive",
          description:
            "While this commander is leading the garrison of you won city or a stronghold, all troops led by this commander gain #1 increased attack, and have a 10% chance to activate a shield when attacked which can absorb a large amount of damage (Damage Factor #2) and grant troops #3 increased counterattack damage for 3 seconds.",
          details: [
            ["5%", "8%", "11%", "15%", "20%"],
            [300, 350, 400, 450, 500],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Broken Moon",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "When troops led by this commander consist of 2 or more different unit types, they gain 20% increased attack and 20% increased defense.",
        },
      ],
    },
    {
      id: 32,
      skills: [
        {
          title: "Dragonfly Cutter",
          expertise: false,
          type: "active",
          rageReq: 1350,
          description:
            "Deals direct damage to up to 3 targets in a forward-facing fan-shaped area (Damaga Factor #1, or #2 as a secondary commander). Damage dealt to each target is reduced by 15% for each additional target.",
          details: [
            [1500, 1700, 1900, 2200, 2500],
            [750, 850, 950, 1100, 1250],
          ],
        },
        {
          title: "Samurai of the East",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased march speed and extra #2 increased attack plus #3 when attacking troops.",
          details: [
            ["3%", "6%", "10%", "15%", "20%"],
            ["2%", "4%", "6%", "8%", "10%"],
            ["10%", "15%", "20%", "25%", "30%"],
          ],
        },
        {
          title: "Samurai Among Samurai",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander take #1 reduced damage. An active skill cast will cause the target to suffer damage over time (Damage Factor #2) and #3 reduced march speed for 2 seconds. This effect can trigger at most once every 5 seconds.",
          details: [
            ["1%", "2%", "3%", "4%", "5%"],
            [100, 120, 140, 160, 200],
            ["20%", "25%", "30%", "40%", "50%"],
          ],
        },
        {
          title: "Tokugawa Heavenly King",
          expertise: false,
          type: "passive",
          description:
            "Troops led by this commander gain #1 increased troop capacity, and deal #2 increased skill damage per 8% (or 5% with 2 or more different unit types) units lost; the skill damage bonus cannot exceed 60%.",
          details: [
            ["2%", "4%", "6%", "8%", "10%"],
            ["1%", "2%", "3%", "4%", "5%"],
          ],
        },
        {
          title: "The Undefeated",
          expertise: true,
          note: "New Skill",
          type: "passive",
          description:
            "Whenever receiving a normal attack on the map, troops led by this commander take 30% less damage from this attack. But this effect can trigger up to 57 times per hour after leaving your city.",
        },
      ],
    },
  ],
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
