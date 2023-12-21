import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stiga',
  templateUrl: './stiga.component.html',
  styleUrls: ['./stiga.component.scss']
})
export class StigaComponent {
  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  rubbers = [
    {
      "title": "Airoc Astro M",
      "description": "Pips-in rubber with built-in energy, high-level reaction, and high friction. Suitable for offensive players who want powerful and spinny shots. Medium-hard sponge, grippy top sheet.",
      "speed": 9.0,
      "spin": 8.6,
      "control": 8.6,
      "hardness": 47
    },
    {
      "title": "Airoc Astro S",
      "description": "Pips-in rubber with built-in energy, high-level reaction, and high friction. Suitable for aggressive players who want fast and consistent shots. Soft sponge, grippy top sheet.",
      "speed": 8.9,
      "spin": 9.0,
      "control": 9.0,
      "hardness": 42
    },
    {
      "title": "Airoc M",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for offensive players who want powerful and spinny shots. Medium-hard sponge, tacky top sheet.",
      "speed": 8.8,
      "spin": 9.0,
      "control": 8.8,
      "hardness": 47
    },
    {
      "title": "Airoc S",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for aggressive players who want fast and consistent shots. Soft sponge, tacky top sheet.",
      "speed": 8.5,
      "spin": 9.0,
      "control": 9.1,
      "hardness": 42
    },
    {
      "title": "Boost TC",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for attacking players who want fast and direct shots. Medium-hard sponge, non-tacky top sheet.",
      "speed": 8.7,
      "spin": 8.4,
      "control": 8.7,
      "hardness": 45
    },
    {
      "title": "Boost TP",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for offensive players who want powerful and spinny shots. Medium-hard sponge, non-tacky top sheet.",
      "speed": 8.9,
      "spin": 8.8,
      "control": 8.9,
      "hardness": 45
    },
    {
      "title": "Boost TS",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for offensive players who want powerful and spinny shots. Soft sponge, non-tacky top sheet.",
      "speed": 8.8,
      "spin": 8.9,
      "control": 8.9,
      "hardness": 42
    },
    {
      "title": "Boost TX",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for attacking players who want fast and direct shots. Medium-hard sponge, non-tacky top sheet.",
      "speed": 9.3,
      "spin": 9.0,
      "control": 9.3,
      "hardness": 45
    },
    {
      "title": "Calibra LT",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players who want powerful and spinny shots. Medium-hard sponge, non-tacky top sheet.",
      "speed": 9.3,
      "spin": 9.1,
      "control": 9.3,
      "hardness": 47
    },
    {
      "title": "Calibra LT Plus",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for attacking players who want fast and direct shots. Hard sponge, non-tacky top sheet.",
      "speed": 9.5,
      "spin": 9.1,
      "control": 9.3,
      "hardness": 50
    },
    {
      "title": "Calibra LT Sound",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players who want powerful and spinny shots. Soft sponge, non-tacky top sheet. Produces a sound effect when hitting the ball.",
      "speed": 9.1,
      "spin": 8.7,
      "control": 8.7,
      "hardness": 37
    },
    {
      "title": "Calibra LT Spin",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players who want powerful and spinny shots. Medium-hard sponge, non-tacky top sheet. Special surface treatment for increased grip.",
      "speed": 9.1,
      "spin": 9.1,
      "control": 9.2,
      "hardness": 47
    },
    {
      "title": "Calibra Tour H",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for attacking players who want fast and direct shots. Hard sponge, non-tacky top sheet. Nano-composite technology for durability and elasticity.",
      "speed": 9.2,
      "spin": 8.1,
      "control": 8.2,
      "hardness": 47
    },
    {
      "title": "Calibra Tour M",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players who want powerful and spinny shots. Medium-hard sponge, non-tacky top sheet. Nano-composite technology for durability and elasticity.",
      "speed": 9.2,
      "spin": 8.6,
      "control": 8.9,
      "hardness": 45
    },
    {
      "title": "Calibra Tour S",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players who want powerful and spinny shots. Soft sponge, non-tacky top sheet. Nano-composite technology for durability and elasticity.",
      "speed": 8.7,
      "spin": 8.3,
      "control": 8.3,
      "hardness": 42
    },
    {
      "title": "DNA Dragon Grip",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Hard sponge, semi-tacky top sheet. Special rubber formula for increased grip and durability.",
      "speed": 8.4,
      "spin": 9.1,
      "control": 8.7,
      "hardness": 55
    },
    {
      "title": "DNA Future M",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for intermediate players aiming to improve skills and performance. Medium-soft sponge, non-tacky top sheet. Special rubber formula for increased grip and durability.",
      "speed": 7.0,
      "spin": 6.0,
      "control": 7.0,
      "hardness": 40
    },
    {
      "title": "DNA Hybrid H",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players looking for powerful and spinny shots. Hard sponge, non-tacky top sheet. Hybrid technology combining German and Japanese rubbers' best features.",
      "speed": 9.5,
      "spin": 9.5,
      "control": 8.5,
      "hardness": 50
    },
    {
      "title": "DNA Hybrid M",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Medium-hard sponge, non-tacky top sheet. Hybrid technology combining German and Japanese rubbers' best features.",
      "speed": 9.0,
      "spin": 9.0,
      "control": 9.0,
      "hardness": 47
    },
    {
      "title": "DNA Hybrid XH",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for attacking players aiming for fast and direct shots. Very hard sponge, non-tacky top sheet. Hybrid technology combining German and Japanese rubbers' best features.",
      "speed": 9.5,
      "spin": 9.5,
      "control": 8.5,
      "hardness": 53
    },
    {
      "title": "DNA Platinum H",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Hard sponge, non-tacky top sheet. Platinum technology to increase speed and elasticity.",
      "speed": 9.2,
      "spin": 8.9,
      "control": 8.9,
      "hardness": 50
    },
    {
      "title": "DNA Platinum M",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Medium-hard sponge, non-tacky top sheet. Platinum technology to increase speed and elasticity.",
      "speed": 8.9,
      "spin": 8.8,
      "control": 8.7,
      "hardness": 47
    },
    {
      "title": "DNA Platinum S",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Soft sponge, non-tacky top sheet. Platinum technology to increase speed and elasticity.",
      "speed": 8.5,
      "spin": 8.9,
      "control": 7.0,
      "hardness": 42
    },
    {
      "title": "DNA Platinum XH",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for attacking players aiming for fast and direct shots. Very hard sponge, non-tacky top sheet. Platinum technology to increase speed and elasticity.",
      "speed": 9.6,
      "spin": 9.4,
      "control": 9.4,
      "hardness": 53
    },
    {
      "title": "DNA Pro H",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Hard sponge, non-tacky top sheet. Pro technology to increase durability and consistency.",
      "speed": 8.8,
      "spin": 8.6,
      "control": 8.4,
      "hardness": 50
    },
    {
      "title": "DNA Pro M",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Medium-hard sponge, non-tacky top sheet. Pro technology to increase durability and consistency.",
      "speed": 8.8,
      "spin": 8.9,
      "control": 8.9,
      "hardness": 47
    },
    {
      "title": "DNA Pro S",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Soft sponge, non-tacky top sheet. Pro technology to increase durability and consistency.",
      "speed": 8.5,
      "spin": 8.8,
      "control": 8.6,
      "hardness": 42
    },
    {
      "title": "Genesis II M",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for offensive players seeking powerful and spinny shots. Medium-hard sponge, tacky top sheet. Hybrid technology combining Chinese and European rubbers' best features.",
      "speed": 8.3,
      "spin": 8.9,
      "control": 8.3,
      "hardness": 47
    },
    {
      "title": "Genesis II S",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for aggressive players seeking fast and consistent shots. Soft sponge, tacky top sheet. Hybrid technology combining Chinese and European rubbers' best features.",
      "speed": 8.8,
      "spin": 9.0,
      "control": 8.4,
      "hardness": 42
    },
    {
      "title": "Genesis M",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for offensive players seeking powerful and spinny shots. Medium-hard sponge, tacky top sheet. Hybrid technology combining Chinese and European rubbers' best features.",
      "speed": 8.8,
      "spin": 8.9,
      "control": 8.7,
      "hardness": 47
    },
    {
      "title": "Genesis S",
      "description": "Pips-in rubber with built-in energy and high-level reaction. Suitable for aggressive players seeking fast and consistent shots. Soft sponge, tacky top sheet. Hybrid technology combining Chinese and European rubbers' best features.",
      "speed": 8.6,
      "spin": 9.0,
      "control": 8.8,
      "hardness": 42
    },
    {
      "title": "Mantra Control",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for all-around players aiming to play various strokes and strategies. Soft sponge, non-tacky top sheet. Mantra technology to increase grip and elasticity.",
      "speed": 8.0,
      "spin": 8.0,
      "control": 9.0,
      "hardness": 40
    },
    {
      "title": "Mantra H",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Hard sponge, non-tacky top sheet. Mantra technology to increase grip and elasticity.",
      "speed": 9.4,
      "spin": 9.1,
      "control": 9.2,
      "hardness": 47
    },
    {
      "title": "Mantra M",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Medium-hard sponge, non-tacky top sheet. Mantra technology to increase grip and elasticity.",
      "speed": 9.1,
      "spin": 9.0,
      "control": 9.1,
      "hardness": 45
    },
    {
      "title": "Mantra PRO H",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Hard sponge, non-tacky top sheet. Mantra technology to increase durability and consistency.",
      "speed": 9.0,
      "spin": 9.0,
      "control": 8.8,
      "hardness": 47
    },
    {
      "title": "Mantra PRO M",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Medium-hard sponge, non-tacky top sheet. Mantra technology to increase durability and consistency.",
      "speed": 9.0,
      "spin": 9.2,
      "control": 8.7,
      "hardness": 45
    },
    {
      "title": "Mantra PRO XH",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Very hard sponge, non-tacky top sheet. Mantra technology to increase durability and consistency.",
      "speed": 10.0,
      "spin": 10.0,
      "control": 9.7,
      "hardness": 50
    },
    {
      "title": "Mantra S",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Soft sponge, non-tacky top sheet. Mantra technology to increase durability and consistency.",
      "speed": 8.7,
      "spin": 9.0,
      "control": 9.0,
      "hardness": 42
    },
    {
      "title": "Mantra Sound",
      "description": "Pips-in rubber with high-level reaction and spin. Suitable for offensive players seeking powerful and spinny shots. Soft sponge, non-tacky top sheet. Mantra technology to increase grip and elasticity.",
      "speed": 8.5,
      "spin": 8.5,
      "control": 9.0,
      "hardness": 37
    }
  ];

  blades = [
    {
      "title": "Carbonado",
      "description": "Blades with high-level reaction and speed, moderate control, high stiffness, moderate hardness, excellent consistency, weighing 90g, with 5 plies made of TAMCA 5000 carbon.",
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
      "title": "Cybershape",
      "description": "Innovative blades with a unique shape and design, good speed, control, stiffness, hardness, excellent consistency, weighing 85g, with 5 plies made of wood, carbon, arylate-carbon.",
      "speed": 9.2,
      "control": 8.6,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "85g",
      "plies": 5,
      "material": "Wood, carbon, arylate-carbon"
  },
  {
      "title": "Inspira",
      "description": "High-performance blades with built-in energy, high-speed, good control, high stiffness, moderate hardness, excellent consistency, weighing 90g, with 5 plies made of wood, carbon, hybrid carbon.",
      "speed": 9.5,
      "control": 8.5,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "Wood, carbon, hybrid carbon"
  },
  {
    "title": "Nostalgic",
    "description": "Classic blades with a natural and balanced feel, moderate speed and control, low stiffness, low hardness, excellent consistency, weighing 90g, with 5 or 7 plies made of natural wood.",
    "speed": 8.5,
    "control": 8.5,
    "stiffness": 7.8,
    "hardness": 6.8,
    "consistency": 9.5,
    "weight": "90g",
    "plies": "5 or 7",
    "material": "Natural wood"
  },
  {
      "title": "Infinity",
      "description": "All-round blades with a low bounce and a natural and elastic feel, moderate speed and control, low stiffness, low hardness, excellent consistency, weighing 85g, with 5 plies made of natural wood.",
      "speed": 8.5,
      "control": 8.5,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "85g",
      "plies": 5,
      "material": "Natural wood"
  },
  {
    "title": "Energy",
    "description": "All-round blades with a low bounce and a natural and balanced feel, offering good speed and control, low stiffness, low hardness, excellent consistency, weighing 80g, with 5 plies made of natural wood.",
    "speed": 8.7,
    "control": 8.7,
    "stiffness": 7.8,
    "hardness": 6.8,
    "consistency": 9.5,
    "weight": "80g",
    "plies": 5,
    "material": "Natural wood"
  },
  {
      "title": "Hurricane",
      "description": "Offensive blades with a high bounce, powerful and stable feel, good speed and control, medium stiffness, moderate hardness, excellent consistency, weighing 90g, with 5 plies made of ALC arylate-carbon.",
      "speed": 9.5,
      "control": 7.5,
      "stiffness": 8.8,
      "hardness": 7.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "ALC arylate-carbon"
  },  
  {
    "title": "Clipper",
    "description": "Offensive blades with a high bounce, hard and sharp feel, offering excellent speed and control, high stiffness, moderate hardness, excellent consistency, weighing 95g, with 7 plies made of natural wood.",
    "speed": 9.3,
    "control": 9.3,
    "stiffness": 9.8,
    "hardness": 8.8,
    "consistency": 9.5,
    "weight": "95g",
    "plies": 7,
    "material": "Natural wood"
  },
  {
      "title": "DNA",
      "description": "Offensive blades with high-level reaction and spin, suitable for generating powerful and spinny shots, offering good speed and control, high stiffness, moderate hardness, excellent consistency, weighing 90g, with 5 plies made of wood, carbon, and platinum.",
      "speed": 9.1,
      "control": 9.0,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "Wood, carbon, platinum"
  },
  {
    "title": "Genesis",
    "description": "Offensive blades with built-in energy and high-level reaction, suitable for generating powerful and spinny shots, offering good speed and control, moderate stiffness, moderate hardness, excellent consistency, weighing 85g, with 5 plies of hybrid material.",
    "speed": 8.8,
    "control": 8.9,
    "stiffness": 8.8,
    "hardness": 7.8,
    "consistency": 9.5,
    "weight": "85g",
    "plies": 5,
    "material": "Hybrid material"
  },
  {
      "title": "Mantra",
      "description": "Offensive blades with high-level reaction and spin, suitable for generating powerful and spinny shots, offering good speed and control, high stiffness, moderate hardness, excellent consistency, weighing 90g, with 5 plies made of wood, carbon, and mantra.",
      "speed": 9.1,
      "control": 9.0,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "Wood, carbon, mantra"
  },
  {
      "title": "Legacy",
      "description": "Offensive blades with high-level reaction and spin, suitable for generating powerful and spinny shots, offering good speed and control, high stiffness, moderate hardness, excellent consistency, weighing 90g, with 5 plies of carbon.",
      "speed": 9.0,
      "control": 8.8,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "90g",
      "plies": 5,
      "material": "Carbon"
  },
  {
      "title": "Defensive",
      "description": "Defensive blades with a low bounce, natural and soft feel, suitable for defensive players reducing the effect of opponent’s spin, offering moderate speed and excellent control, moderate stiffness, low hardness, excellent consistency, weighing 80g, with 5 plies of natural wood.",
      "speed": 7.5,
      "control": 9.0,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "80g",
      "plies": 5,
      "material": "Natural wood"
  },
  {
      "title": "Balsa",
      "description": "Lightweight blades with a high bounce, light and sharp feel, suitable for attacking players producing fast and direct shots, offering good speed and control, high stiffness, moderate hardness, excellent consistency, weighing 80g, with 5 plies of balsa-carbon.",
      "speed": 8.5,
      "control": 8.0,
      "stiffness": 9.8,
      "hardness": 8.8,
      "consistency": 9.5,
      "weight": "80g",
      "plies": 5,
      "material": "Balsa-carbon"
  },
  {
      "title": "Allround",
      "description": "All-round blades with a low bounce, natural and balanced feel, suitable for all-around players, offering moderate speed and excellent control, moderate stiffness, low hardness, excellent consistency, weighing 80g, with 5 plies of natural wood.",
      "speed": 8.0,
      "control": 9.0,
      "stiffness": 7.8,
      "hardness": 6.8,
      "consistency": 9.5,
      "weight": "80g",
      "plies": 5,
      "material": "Natural wood"
  }
];

balls = [
  {
      "title": "Stiga Perform 40+",
      "description": "ITTF approved 3-star balls for match play."
  },
  {
      "title": "Stiga Winner 40+",
      "description": "3-star balls for practice and multi-ball play."
  },
  {
      "title": "Stiga Cup 40+",
      "description": "1-star balls for practice and multi-ball play, suitable for beginners and intermediate players."
  },
  {
      "title": "Stiga Joy 40",
      "description": "Fun balls for recreational play, suitable for playing with friends and family."
  },
  {
      "title": "Stiga Seasons Outdoor",
      "description": "Outdoor balls suitable for various weather conditions."
  }
];


}
