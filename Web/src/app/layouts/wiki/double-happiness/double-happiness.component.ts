import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-double-happiness',
  templateUrl: './double-happiness.component.html',
  styleUrls: ['./double-happiness.component.scss']
})
export class DoubleHappinessComponent {
  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  rubbers = [
    {
      "title": "DHS Hurricane 3",
      "description": "Pips-in rubber with tackiness and high friction, suitable for imparting heavy rotation and control. Favored by offensive players.",
      "speed": 8,
      "spin": 9,
      "control": 9,
      "hardness": 39
    },
    {
      "title": "DHS Hurricane 3 Neo",
      "description": "Pips-in rubber with built-in energy and high-level reaction, suitable for aggressive players aiming for fast and consistent shots.",
      "speed": 9,
      "spin": 9,
      "control": 8.5,
      "hardness": 39
    },
    {
      "title": "DHS Hurricane 8",
      "description": "Pips-in rubber with built-in energy and high-level reaction, suitable for generating powerful and spinny shots.",
      "speed": 9,
      "spin": 9.5,
      "control": 8,
      "hardness": 40
    },
    {
      "title": "DHS Hurricane 3-50",
      "description": "Pips-in rubber with high-level reaction and high friction, suitable for intermediate players seeking improvement.",
      "speed": 8.5,
      "spin": 9,
      "control": 9,
      "hardness": 32
    },
    {
      "title": "DHS Skyline 3",
      "description": "Pips-in rubber with tackiness and high friction, suitable for imparting heavy rotation and control.",
      "speed": 8,
      "spin": 9,
      "control": 9,
      "hardness": 39
    },
    {
      "title": "DHS Skyline 3 Neo",
      "description": "Pips-in rubber with built-in energy and high-level reaction, suitable for aggressive players aiming for fast and consistent shots.",
      "speed": 9,
      "spin": 9,
      "control": 8.5,
      "hardness": 39
    },
    {
      "title": "DHS Skyline 3-60",
      "description": "Pips-in rubber with high-level reaction and high friction, suitable for intermediate players seeking improvement.",
      "speed": 8.5,
      "spin": 9,
      "control": 9,
      "hardness": 33
    },
    {
      "title": "DHS Gold Arc 8",
      "description": "Pips-in rubber with high-level reaction and spin, suitable for offensive players aiming to generate powerful and spinny shots.",
      "speed": 9.5,
      "spin": 9.5,
      "control": 8,
      "hardness": 47.5
    },
    {
      "title": "DHS Tin Arc 3",
      "description": "Pips-in rubber with high-level reaction and spin, suitable for offensive players aiming to generate powerful and spinny shots.",
      "speed": 8.5,
      "spin": 9,
      "control": 8.5,
      "hardness": 35
    },
    {
      "title": "DHS Tin Arc 5",
      "description": "Pips-in rubber with high-level reaction and spin, suitable for offensive players aiming to generate powerful and spinny shots.",
      "speed": 9,
      "spin": 9.5,
      "control": 8,
      "hardness": 37
    },
    {
      "title": "DHS G888",
      "description": "Pips-in rubber with tackiness and high friction, suitable for offensive players aiming to impart heavy rotation and control.",
      "speed": 8,
      "spin": 9,
      "control": 9,
      "hardness": 38
    },
    {
      "title": "DHS G666",
      "description": "Pips-in rubber with tackiness and high friction, suitable for defensive players aiming to reduce the effect of the opponent’s spin.",
      "speed": 7.5,
      "spin": 9,
      "control": 9,
      "hardness": 41
    },
    {
      "title": "DHS PF4",
      "description": "Pips-in rubber with tackiness and high friction, suitable for defensive players aiming to reduce the effect of the opponent’s spin.",
      "speed": 7,
      "spin": 9,
      "control": 9,
      "hardness": 38
    },
    {
      "title": "DHS Sharping",
      "description": "Pips-out rubber with built-in energy and high-level reaction, suitable for attacking players aiming to produce fast and direct shots.",
      "speed": 9,
      "spin": 8.5,
      "control": 8,
      "hardness": 32
    },
    {
      "title": "DHS Cloud & Fog 3",
      "description": "Long pimpled rubber with or without sponge, suitable for players aiming to cause changes to the spin and speed of the ball.",
      "speed": 6.5,
      "spin": 3.5,
      "control": 8.5,
      "hardness": 25
    }
  ];

  blades = [
    {
      "title": "DHS Hurricane Long 5",
      "description": "Shakehand blade for power top spin attacking players with a carbon-knit sheet between wood layers for high bounce and a fast feel.",
      "speed": 10,
      "control": 6.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": 90,
      "plies": 5,
      "material": "TAMCA 5000 carbon"
    },
    {
      "title": "DHS Hurricane 301",
      "description": "Shakehand blade for aggressive players aiming for fast and consistent shots with an arylate-carbon layer for a powerful and stable feel.",
      "speed": 9.5,
      "control": 7.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": 90,
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "DHS Hurricane Long 5X",
      "description": "Shakehand blade for offensive players seeking powerful and spinny shots with super zylon-carbon for a hard and sharp feel.",
      "speed": 9.5,
      "control": 7.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": 90,
      "plies": 5,
      "material": "SZLC super zylon-carbon"
    },
    {
      "title": "DHS Power G7",
      "description": "Shakehand blade for all-around players offering a low bounce and balanced feel with a solid wood construction.",
      "speed": 8.5,
      "control": 8.5,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": 90,
      "plies": 7,
      "material": "Natural wood"
    },
    {
      "title": "DHS Bo Carbon B2X",
      "description": "Shakehand blade for attacking players aiming for fast and direct shots with balsa-carbon material for a light and sharp feel.",
      "speed": 8.5,
      "control": 8,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": 80,
      "plies": 5,
      "material": "Balsa-carbon"
    },
    {
      "title": "DHS Bo Carbon",
      "description": "Shakehand blade for attacking players aiming for fast and direct shots with carbon material for a hard and sharp feel.",
      "speed": 8.5,
      "control": 8,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": 85,
      "plies": 5,
      "material": "Carbon"
    },
    {
      "title": "DHS Hurricane 301X",
      "description": "Shakehand blade for offensive players seeking fast and consistent shots with arylate-carbon material for a powerful and stable feel.",
      "speed": 9,
      "control": 8,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": 90,
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "DHS Hurricane King II",
      "description": "Shakehand blade for offensive players aiming for powerful and spinny shots with arylate-carbon material for a soft and elastic feel.",
      "speed": 9,
      "control": 8.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": 90,
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "DHS Hurricane Hao II Ch.Pen",
      "description": "Chinese penhold blade for offensive players aiming for powerful and spinny shots with arylate-carbon material for a soft and elastic feel.",
      "speed": 9,
      "control": 8.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": 85,
      "plies": 5,
      "material": "ALC arylate-carbon"
    },
    {
      "title": "DHS Hurricane Hao III",
      "description": "Shakehand blade for offensive players aiming for fast and consistent shots with arylate-carbon material for a powerful and stable feel.",
      "speed": 9,
      "control": 8.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": 90,
      "plies": 5,
      "material": "ALC arylate-carbon"
    }
  ];
  
  balls = [
    {
      "title": "DHS D40+ 3*** ITTF",
      "description": "ITTF approved 3-star balls for match play with high bounce, reaction, consistent roundness and weight. Official balls of the 2021 World Table Tennis Championships Finals."
    },
    {
      "title": "DHS DJ40+ 3*** WTT ITTF",
      "description": "ITTF approved 3-star balls for match play with high bounce, reaction, consistent roundness and weight. Official balls of World Table Tennis events."
    },
    {
      "title": "DHS D40+ 1*",
      "description": "Training balls for practice and multi-ball play with low bounce, reaction, variable roundness and weight. Suitable for beginners and intermediate players."
    },
    {
      "title": "DHS DJ40+ 3*** Tokyo ITTF",
      "description": "ITTF approved 3-star balls for match play with high bounce, reaction, consistent roundness and weight. Official balls of the Tokyo 2020 Olympic Games."
    },
    {
      "title": "DHS D40+ Outdoor",
      "description": "Outdoor balls for recreational play with high bounce, reaction, consistent roundness and weight. Suitable for various weather conditions."
    },
    {
      "title": "DHS D40+ 2**",
      "description": "2-star balls for practice and multi-ball play with medium bounce, reaction, consistent roundness and weight. Suitable for advanced and professional players."
    },
    {
      "title": "DHS Cloud & Fog 3",
      "description": "Long pimpled balls for defensive play with low bounce, reaction, variable roundness and weight. Suitable for players aiming to change the spin and speed of the ball."
    }
  ];
  
}
