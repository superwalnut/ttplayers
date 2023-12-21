import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-butterfly',
  templateUrl: './butterfly.component.html',
  styleUrls: ['./butterfly.component.scss']
})
export class ButterflyComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  rubbers = [
    {
      "title": "Dignics",
      "description": "Series of pips-in rubbers with built-in energy, high-level reaction, and high friction. Suitable for offensive players seeking powerful and spinny shots.",
      "speed": 13.5,
      "spin": 12,
      "control": 10,
      "hardness": 40
    },
    {
      "title": "Tenergy",
      "description": "Series of pips-in rubbers with built-in energy and high-level reaction. Ideal for aggressive players aiming for fast and consistent shots.",
      "speed": 13,
      "spin": 10.5,
      "control": 8.5,
      "hardness": 36
    },
    {
      "title": "Rozena",
      "description": "Pips-in rubber with high-level reaction and high friction. Suitable for intermediate players looking to improve skills and performance.",
      "speed": 13,
      "spin": 10.5,
      "control": 9,
      "hardness": 35
    },
    {
      "title": "Sriver",
      "description": "Classic pips-in rubber with control and balance. Suitable for all-round players to execute various strokes and strategies.",
      "speed": 10,
      "spin": 8,
      "control": 9.5,
      "hardness": 38
    },
    {
      "title": "Tackiness",
      "description": "Series of pips-in rubbers with tackiness and high friction. Ideal for defensive players imparting heavy rotation and control on the ball.",
      "speed": 7.5,
      "spin": 10,
      "control": 9,
      "hardness": 41
    },
    {
      "title": "Flarestorm",
      "description": "Pips-out rubber with built-in energy and high-level reaction. Suitable for attacking players producing fast and direct shots.",
      "speed": 13.5,
      "spin": 8.5,
      "control": 8,
      "hardness": 32
    },
    {
      "title": "Challenger",
      "description": "Series of pips-out rubbers with high-level reaction and spin. Suitable for players creating variations and surprises with their shots.",
      "speed": 11.5,
      "spin": 9.5,
      "control": 8.5,
      "hardness": 35
    },
    {
      "title": "Orthodox",
      "description": "Pips-out rubber without sponge. Suitable for players countering fierce attacks with lightness and less bounce.",
      "speed": 8,
      "spin": 6.5,
      "control": 9,
      "hardness": 'N/A'
    },
    {
      "title": "Feint",
      "description": "Series of long pimpled rubbers with or without sponge. Suitable for players causing changes to the spin and speed of the ball with their shots.",
      "speed": 6.5,
      "spin": 3.5,
      "control": 8.5,
      "hardness": 25
    },
    {
      "title": "Super Anti",
      "description": "Pips-in anti rubber with less friction. Suitable for players reducing the effect of the opponent’s spin with their shots.",
      "speed": 5.5,
      "spin": 3,
      "control": 8,
      "hardness": 25
    }
  ];

  blades = [
    {
      "title": "Garaydia T5000",
      "description": "Shakehand blade for power top spin attacking players. Features a carbon-knit sheet between layers of wood for a high bounce and fast, direct feel.",
      "speed": 10,
      "control": 6.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 3,
      "material": "TAMCA 5000 carbon"
    },
    {
      "title": "Zhang Jike T5000",
      "description": "Shakehand blade for aggressive players seeking fast and consistent shots. Utilizes a carbon-knit sheet between layers of wood for high bounce and stability.",
      "speed": 10,
      "control": 6.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "TAMCA 5000 carbon"
    },
    {
      "title": "Viscaria",
      "description": "Shakehand blade for offensive players looking to generate powerful, spinny shots. Features arylate-carbon for high bounce and a soft, elastic feel.",
      "speed": 9.5,
      "control": 8,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "Timo Boll T5000",
      "description": "Shakehand blade for offensive players aiming for fast and direct shots. Utilizes a carbon-knit sheet between layers of wood for high bounce and a hard, sharp feel.",
      "speed": 9.5,
      "control": 7.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "85g",
      "plies": 5,
      "material": "TAMCA 5000 carbon"
    },
    {
      "title": "Zhang Jike",
      "description": "Shakehand blade for offensive players aiming for fast and consistent shots. Features arylate-carbon for high bounce and a powerful, stable feel.",
      "speed": 9.5,
      "control": 8,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "Zhang Jike ALC",
      "description": "Shakehand blade for offensive players aiming for powerful and spinny shots. Features arylate-carbon for high bounce and a soft, elastic feel.",
      "speed": 9.5,
      "control": 8,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "Andrei Mazunov",
      "description": "Shakehand blade for attacking players aiming for fast and direct shots. Utilizes a carbon-knit sheet between layers of wood for high bounce and a hard, sharp feel.",
      "speed": 9.5,
      "control": 7.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "100g",
      "plies": 5,
      "material": "TAMCA 5000 carbon"
    },
    {
      "title": "Mizutani Jun SZLC",
      "description": "Shakehand blade for offensive players aiming for fast and consistent shots. Features super zylon-carbon for high bounce and a powerful, stable feel.",
      "speed": 9.5,
      "control": 7.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "SZLC super zylon-carbon"
    },
    {
      "title": "Timo Boll ALC",
      "description": "Shakehand blade for offensive players aiming for powerful and spinny shots. Features arylate-carbon for high bounce and a soft, elastic feel.",
      "speed": 9,
      "control": 8.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "85g",
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "Timo Boll Spirit",
      "description": "Shakehand blade for offensive players aiming for fast and consistent shots. Features arylate-carbon for high bounce and a powerful, stable feel.",
      "speed": 9,
      "control": 8.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "88g",
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "Zhang Jike SZLC",
      "description": "Shakehand blade for offensive players aiming for fast and direct shots. Features super zylon-carbon for high bounce and a hard, sharp feel.",
      "speed": 9,
      "control": 8,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "SZLC super zylon-carbon"
    },
    {
      "title": "Mizutani Jun ZLC",
      "description": "Shakehand blade for offensive players aiming to generate powerful and spinny shots. Features a layer of zylon-carbon between layers of wood for high bounce and a soft, elastic feel.",
      "speed": 9,
      "control": 8,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "ZLC zylon-carbon"
    },
    {
      "title": "Hadraw VR",
      "description": "Shakehand blade for all-around players seeking to play various strokes and strategies. Solid wood construction offers a low bounce and a natural, balanced feel.",
      "speed": 8.5,
      "control": 8.5,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "86g",
      "plies": 5,
      "material": "Natural wood"
    },
    {
      "title": "Zhang Jike ZLC",
      "description": "Shakehand blade for offensive players aiming for fast and consistent shots. Features a layer of zylon-carbon between layers of wood for high bounce and a powerful, stable feel.",
      "speed": 8.5,
      "control": 8.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "ZLC zylon-carbon"
    },
    {
      "title": "Timo Boll ZLC",
      "description": "Shakehand blade for offensive players aiming to generate powerful and spinny shots. Features a layer of zylon-carbon between layers of wood for high bounce and a soft, elastic feel.",
      "speed": 8.5,
      "control": 8.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "85g",
      "plies": 5,
      "material": "ZLC zylon-carbon"
    },
    {
      "title": "Timo Boll OFF",
      "description": "Shakehand blade for all-around players seeking to play various strokes and strategies. Solid wood construction offers a low bounce and a natural, balanced feel.",
      "speed": 8,
      "control": 9,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "85g",
      "plies": 5,
      "material": "Natural wood"
    },
    {
      "title": "Timo Boll W7",
      "description": "All-around blade for players aiming for various strokes and strategies. Solid wood construction offers low bounce and a natural, balanced feel.",
      "speed": 8,
      "control": 9,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 7,
      "material": "Natural wood"
    },
    {
      "title": "Hadraw VK",
      "description": "All-around blade for players aiming for various strokes and strategies. Solid wood construction offers low bounce and a natural, balanced feel.",
      "speed": 7.5,
      "control": 9,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "86g",
      "plies": 5,
      "material": "Natural wood"
    },
    {
      "title": "Hadraw SK",
      "description": "All-around blade for players aiming for various strokes and strategies. Solid wood construction offers low bounce and a natural, balanced feel.",
      "speed": 7.5,
      "control": 9,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "86g",
      "plies": 5,
      "material": "Natural wood"
    },
    {
      "title": "Petr Korbel",
      "description": "Offensive blade for players aiming to generate powerful and spinny shots. Solid wood construction offers low bounce and a natural, elastic feel.",
      "speed": 7.5,
      "control": 8.5,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "85g",
      "plies": 5,
      "material": "Natural wood"
    },
    {
      "title": "Primorac",
      "description": "Offensive blade for players aiming to create fast and consistent shots. Solid wood construction offers low bounce and a natural, stable feel.",
      "speed": 7.5,
      "control": 8.5,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "88g",
      "plies": 5,
      "material": "Natural wood"
    },
    {
      "title": "Balsa Carbo X5",
      "description": "Attacking blade for players aiming to produce fast and direct shots. Features carbon between balsa wood layers for high bounce and a light, sharp feel.",
      "speed": 7.5,
      "control": 8,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "80g",
      "plies": 5,
      "material": "Balsa-carbon"
    },
    {
      "title": "Balsa Carbo X3",
      "description": "Attacking blade for players aiming to produce fast and direct shots. Features carbon between balsa wood layers for high bounce and a light, sharp feel.",
      "speed": 7,
      "control": 8.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "80g",
      "plies": 5,
      "material": "Balsa-carbon"
    },
    {
      "title": "Balsa Allround 50",
      "description": "All-around blade for players aiming to play various strokes and strategies. Solid balsa wood construction offers a high bounce and a light, soft feel.",
      "speed": 6.5,
      "control": 9,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "70g",
      "plies": 5,
      "material": "Balsa wood"
    },
    {
      "title": "Balsa Allround 40",
      "description": "All-around blade for players aiming to play various strokes and strategies. Solid balsa wood construction offers a high bounce and a light, soft feel.",
      "speed": 6,
      "control": 9.5,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "70g",
      "plies": 5,
      "material": "Balsa wood"
    },
    {
      "title": "Balsa Allround 30",
      "description": "All-around blade for players aiming to play various strokes and strategies. Solid balsa wood construction offers a high bounce and a light, soft feel.",
      "speed": 5.5,
      "control": 10,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "70g",
      "plies": 5,
      "material": "Balsa wood"
    }
  ];

  balls = [
    {
      "title": "Butterfly Three-Star Ball R40+",
      "description": "ITTF approved 3-star ball designed for match play. It features a high bounce, a high level of reaction, and consistent roundness and weight. Made of plastic with seam, available in white or orange color. Official ball of the 2021 World Table Tennis Championships Finals."
    },
    {
      "title": "Butterfly Three-Star Ball A40+",
      "description": "ITTF approved 3-star ball for match play with a high bounce, a high level of reaction, and consistent roundness and weight. Made of plastic with seam, available in white or orange color. Official ball of the 2019 World Table Tennis Championships."
    },
    {
      "title": "Butterfly Training Ball 40+",
      "description": "Training ball suitable for practice and multi-ball play. Features a low bounce, a low level of reaction, and variable roundness and weight. Made of plastic with seam, available in white or orange color. Suitable for beginners and intermediate players."
    },
    {
      "title": "Butterfly Easy Training Ball",
      "description": "Training ball ideal for practice and multi-ball play. Features a low bounce, a low level of reaction, and variable roundness and weight. Made of plastic with seam, available in white or orange color. Suitable for beginners and intermediate players."
    },
    {
      "title": "Butterfly Master Quality Ball",
      "description": "High-quality training ball designed for practice and multi-ball play. Features a medium bounce, a medium level of reaction, and consistent roundness and weight. Made of plastic with seam, available in white or orange color. Suitable for advanced and professional players."
    }
  ];
}
