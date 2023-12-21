import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-killerspin',
  templateUrl: './killerspin.component.html',
  styleUrls: ['./killerspin.component.scss']
})
export class KillerspinComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "Killerspin";

  brandDescription="Killerspin, fueled by a mission to ignite passion for table tennis worldwide, electrifies the courts with a vibrant mix of high-performance equipment, innovative training tools, and an infectious community spirit. From award-winning blades engineered for explosive power and exquisite control, to grippy rubbers maximizing spin and precision, Killerspin caters to every player's style and ambition, welcoming beginners with open arms and inspiring seasoned competitors to push their limits. More than just gear, Killerspin champions inclusivity and accessibility, fostering a supportive and dynamic environment where passion for the game thrives, making it the go-to brand for all who dare to dream big and unleash their inner table tennis champion.";

  rubbers=[
    {
      "title": "Jet 80",
      "description": "High-performance offensive rubber with grippy topsheet and hard sponge for explosive power and aggressive play.",
      "speed": "Very High",
      "spin": "High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Jet Black",
      "description": "Balanced offensive rubber with tacky topsheet and medium-hard sponge for dynamic topspin and strong loops with high control.",
      "speed": "High",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Jet 60",
      "description": "All-round rubber with tacky topsheet and medium sponge for good balance of speed, spin, and control for various styles.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "High",
      "hardness": "Medium"
    },
    {
      "title": "Jet Azure",
      "description": "Spin-oriented rubber with extremely tacky topsheet and medium-hard sponge for exceptional spin generation and high friction.",
      "speed": "Medium-High",
      "spin": "Very High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Jet 40",
      "description": "Entry-level rubber with good grip and control, ideal for beginners and recreational players.",
      "speed": "Medium",
      "spin": "Medium",
      "control": "High",
      "hardness": "Medium-Soft"
    },
    {
      "title": "Shield",
      "description": "Pimpled long pips rubber with high control and deceptive chop possibilities, ideal for defensive strategies.",
      "speed": "Low",
      "spin": "Low-Medium",
      "control": "Very High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Hurricane",
      "description": "High-performance offensive rubber with built-in tensor technology for increased speed and dynamics.",
      "speed": "Very High",
      "spin": "High",
      "control": "Medium-High",
      "hardness": "Hard"
    },
    {
      "title": "Tornado",
      "description": "Spin-oriented offensive rubber with built-in tensor technology for exceptional spin generation and aggressive play.",
      "speed": "High",
      "spin": "Very High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Viper",
      "description": "Speed-oriented offensive rubber with built-in tensor technology for maximum power and aggressive play.",
      "speed": "Very High",
      "spin": "High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Ultra Sticky",
      "description": "Limited edition tacky rubber with exceptional grip and spin for advanced offensive players.",
      "speed": "High",
      "spin": "Very High",
      "control": "High-Very High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Dynaryx",
      "description": "High-performance offensive rubber with a unique hybrid topsheet for powerful topspin and excellent control.",
      "speed": "High",
      "spin": "High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Evolution",
      "description": "Balanced all-round rubber with a blend of natural and synthetic rubber for consistent control and good feeling.",
      "speed": "Medium",
      "spin": "High",
      "control": "High",
      "hardness": "Medium"
    },
    {
      "title": "Attack Plus",
      "description": "Speed-oriented offensive rubber with grippy topsheet and hard sponge for maximum power and aggressive play.",
      "speed": "Very High",
      "spin": "High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Spin Deluxe",
      "description": "Spin-oriented all-round rubber with tacky topsheet and medium-hard sponge for excellent spin generation and control.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Combo X",
      "description": "Versatile all-round rubber with a combination of speed, spin, and control, suitable for various playing styles.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "High",
      "hardness": "Medium"
    },
    {
      "title": "Attack Plus",
      "description": "Speed-oriented offensive rubber with grippy topsheet and hard sponge for maximum power and aggressive play.",
      "speed": "Very High",
      "spin": "High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Spin Deluxe",
      "description": "Spin-oriented all-round rubber with tacky topsheet and medium-hard sponge for excellent spin generation and control.",
      "speed": "Medium-High",
      "spin": "High-Very High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Combo X",
      "description": "Versatile all-round rubber with a combination of speed, spin, and control, suitable for various playing styles.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "High",
      "hardness": "Medium"
    }
  ];
  

  blades = [{
    "title": "Viper Pro Carbon",
    "description": "High-performance offensive blade with carbon layers for explosive power, dynamic speed, and precise control.",
    "speed": "Very High",
    "control": "High",
    "stiffness": "Stiff",
    "hardness": "Hard",
    "consistency": "High",
    "weight": 92,
    "plies": "5+2 (Limba outer, Hinoki inner, Carbon layers)",
    "material": "Limba, Hinoki, Carbon"
  },
  {
    "title": "Jet 800",
    "description": "Balanced offensive blade with five plies for a blend of speed, spin, and control, suitable for various styles.",
    "speed": "Medium-High",
    "control": "High-Very High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 88,
    "plies": "5 (Limba outer, Ayous inner)",
    "material": "Limba, Ayous"
  },
  {
    "title": "Shark",
    "description": "Speed-oriented offensive blade with limba outer ply for aggressive topspin and powerful play.",
    "speed": "High",
    "control": "High",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": 90,
    "plies": "5 (Limba outer, Kiri inner)",
    "material": "Limba, Kiri"
  },
  {
    "title": "Hurricane Pro",
    "description": "High-performance offensive blade with built-in tensor technology for increased speed and dynamics.",
    "speed": "Very High",
    "control": "Medium-High",
    "stiffness": "Stiff",
    "hardness": "Hard",
    "consistency": "High",
    "weight": 94,
    "plies": "5+2 (Limba outer, Ayous inner, Tensor layer)",
    "material": "Limba, Ayous, Tensor"
  },
  {
    "title": "Tornado Pro",
    "description": "Spin-oriented offensive blade with built-in tensor technology for exceptional spin generation and aggressive play.",
    "speed": "High",
    "control": "High",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": 92,
    "plies": "5+2 (Limba outer, Ayous inner, Tensor layer)",
    "material": "Limba, Ayous, Tensor"
  },
  {
    "title": "Shield Defense",
    "description": "Defensive blade with thick plies and large sweet spot for excellent control and defensive strategies.",
    "speed": "Low-Medium",
    "control": "Very High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 86,
    "plies": "7 (Cypress outer, Ayous inner)",
    "material": "Cypress, Ayous"
  },
  {
    "title": "Evolution XT",
    "description": "Five-ply all-round blade with limba outer ply for consistent control, good feeling, and versatility.",
    "speed": "Medium",
    "control": "High-Very High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 88,
    "plies": "5 (Limba outer, Ayous inner)",
    "material": "Limba, Ayous"
  },
  {
    "title": "DYN aryx",
    "description": "Offensive blade with unique hybrid construction for powerful topspin and excellent control.",
    "speed": "High",
    "control": "High",
    "stiffness": "Stiff",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 90,
    "plies": "5+2 (Limba outer, Kiri inner, Carbon/Synthetic layers)",
    "material": "Limba, Kiri, Carbon/Synthetic"
  },
  {
    "title": "Special Edition",
    "description": "Limited edition offensive blade with limba outer ply and Hinoki inner ply for exceptional feel and explosive power.",
    "speed": "High-Very High",
    "control": "High",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": 90,
    "plies": "5 (Limba outer, Hinoki inner)",
    "material": "Limba, Hinoki"
  },
  {
    "title": "Killerspin K9 Elite",
    "description": "Five-ply all-round blade for beginners and recreational players, offering good balance and control.",
    "speed": "Medium",
    "control": "High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 84,
    "plies": "5 (Cypress outer, Ayous inner)",
    "material": "Cypress, Ayous"
  }
];

  balls = [
    {
      "title": "40+ 3-Star Training Balls (White)",
      "description": "Regulation 40+ plastic balls for training and practice."
    },
    {
      "title": "40+ 3-Star Training Balls (Orange)",
      "description": "High-visibility orange 40+ plastic balls for training and practice."
    },
    {
      "title": "NoNoise Quiet Ping Pong Balls (Yellow)",
      "description": "Reduced noise 40+ plastic balls for quieter play, ideal for home or office use."
    },
    {
      "title": "4-Star Killerspin Competition Balls (White)",
      "description": "Premium 40+ plastic balls designed for tournament-level play and optimal performance."
    }
   ];
   

  topRubbers= [
    {
      "title": "Jet 80",
      "description": "High-performance offensive rubber for explosive power and aggressive play."
    },
    {
      "title": "Spin Deluxe",
      "description": "Spin-oriented all-round rubber for exceptional spin generation and control."
    },
    {
      "title": "Evolution",
      "description": "Balanced all-round rubber for consistent control and good feeling for various styles."
    }
  ];

  topBlades = [
    {
      "title": "Viper Pro Carbon",
      "description": "High-performance offensive blade with carbon layers for explosive power and precise control."
    },
    {
      "title": "Evolution XT",
      "description": "Versatile all-round blade with limba outer ply for consistent control and good feeling for various styles."
    },
    {
      "title": "Jet 800",
      "description": "Balanced offensive blade with five plies for a blend of speed, spin, and control, suitable for various styles."
    }
  ];
}
