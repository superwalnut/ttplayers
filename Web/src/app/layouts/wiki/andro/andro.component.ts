import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-andro',
  templateUrl: './andro.component.html',
  styleUrls: ['./andro.component.scss']
})
export class AndroComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "Andro";

  brandDescription="Andro, a powerhouse in the table tennis world for over 60 years, hails from Germany with a passion for innovation and precision. Renowned for its high-quality blades meticulously crafted from exotic woods and cutting-edge material, Andro caters to every player's style, from explosive attackers wielding lightning-fast blades to versatile all-rounders seeking control and finesse. Their signature rubbers, formulated in-house with advanced polymers and innovative technologies, boast exceptional grip, spin, and feel, empowering players to unleash their full potential on the court. Whether you're a seasoned competitor or a passionate newcomer, Andro's dedication to performance and craftsmanship offers the tools to elevate your game and experience the true thrill of table tennis.";

  rubbers=[
    {
      "title": "Rasanter C53 & C48",
      "description": "Offensive rubbers with counterspin design for neutralizing incoming topspin and generating aggressive counter-rotation.",
      "speed": "High",
      "spin": "Very High",
      "control": "Medium",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Rasanter S",
      "description": "High-performance offensive rubber with excellent grip and elasticity for powerful topspin and offensive play.",
      "speed": "High",
      "spin": "Very High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Rasanter R",
      "description": "Balanced offensive rubber combining speed, spin, and control for versatile play with excellent feeling.",
      "speed": "High",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium"
    },
    {
      "title": "Rasanter V",
      "description": "High-tension offensive rubber with grippy topsheet and hard sponge for explosive shots and powerful counters.",
      "speed": "Very High",
      "spin": "High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Hexer Pro",
      "description": "Offensive rubber with tacky topsheet and medium-hard sponge for dynamic topspin and strong loops.",
      "speed": "High",
      "spin": "Very High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Hexer PowerGrip",
      "description": "Speed-oriented offensive rubber with grippy topsheet and hard sponge for explosive shots and powerful counters.",
      "speed": "Very High",
      "spin": "High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Hexer Edge",
      "description": "Balanced offensive rubber with grippy topsheet and medium-hard sponge for excellent spin and control with high speed.",
      "speed": "High",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Hexer Grip",
      "description": "All-round rubber with tacky topsheet and medium-soft sponge for good control, spin, and feeling for various playing styles.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium-Soft"
    },
    {
      "title": "SpinDwell",
      "description": "Spin-oriented rubber with extremely tacky topsheet and medium-hard sponge for exceptional spin generation and high friction.",
      "speed": "Medium-High",
      "spin": "Very High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Plasma",
      "description": "Offensive rubber with grippy topsheet and hard sponge for explosive power and aggressive play with good control.",
      "speed": "High",
      "spin": "High",
      "control": "Medium-High",
      "hardness": "Hard"
    },
    {
      "title": "Roxon Pro",
      "description": "High-performance offensive rubber with tacky topsheet and medium-hard sponge for dynamic topspin and strong loops with high resilience.",
      "speed": "High",
      "spin": "Very High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Roxon Soft",
      "description": "Balanced offensive rubber with tacky topsheet and soft sponge for excellent spin and control with good feeling.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Soft"
    },
    {
      "title": "Impuls Speed",
      "description": "Speed-oriented offensive rubber with grippy topsheet and hard sponge for explosive power and aggressive play.",
      "speed": "Very High",
      "spin": "High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Shifter",
      "description": "Dynamic all-round rubber with grippy topsheet and medium-hard sponge for versatile play with good speed, spin, and control.",
      "speed": "High",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Hexer Tensor",
      "description": "High-performance offensive rubber with built-in tensor technology for increased speed and dynamics.",
      "speed": "Very High",
      "spin": "Very High",
      "control": "Medium-High",
      "hardness": "Hard"
    },
    {
      "title": "Rasanter R Tensor",
      "description": "High-performance offensive rubber with built-in tensor technology for increased speed and dynamics, offering a slightly softer feel than the Rasanter R.",
      "speed": "High",
      "spin": "High-Very High",
      "control": "High-Very High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Rasanter R42",
      "description": "Offensive rubber with a thinner topsheet and softer sponge compared to the Rasanter R, providing lighter weight and increased ball feeling.",
      "speed": "High",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium-Hard"
    }

  ];
  

  blades = [{
    "title": "Kinetic Supreme",
    "description": "High-performance offensive blade with limba outer ply and Hinoki inner ply for explosive power and exceptional feel.",
    "speed": "High",
    "control": "High-Very High",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": 92,
    "plies": "5+2 (Limba outer, Hinoki inner, Carbon layers)",
    "material": "Limba, Hinoki, Carbon"
  },
  {
    "title": "Rasantec Force",
    "description": "Balanced offensive blade with carbon layers and limba outer ply for a blend of speed, spin, and control.",
    "speed": "High",
    "control": "High-Very High",
    "stiffness": "Medium-Stiff",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 90,
    "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
    "material": "Limba, Ayous, Carbon"
  },
  {
    "title": "Hexer Pro Carbon",
    "description": "Dynamic offensive blade with carbon layers and limba outer ply for powerful topspin and aggressive play.",
    "speed": "High-Very High",
    "control": "High",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": 94,
    "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
    "material": "Limba, Ayous, Carbon"
  },
  {
    "title": "Shifter",
    "description": "Versatile all-round blade with carbon layers and limba outer ply for a balance of speed, spin, and control for various styles.",
    "speed": "High",
    "control": "High-Very High",
    "stiffness": "Medium-Stiff",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 88,
    "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
    "material": "Limba, Ayous, Carbon"
  },
  {
    "title": "T-Fiber Core",
    "description": "Lightweight and fast all-round blade with carbon and T-Fiber core for agility and dynamic play.",
    "speed": "High",
    "control": "High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 84,
    "plies": "5+2 (Limba outer, Ayous inner, Carbon, T-Fiber core)",
    "material": "Limba, Ayous, Carbon, T-Fiber"
  },
  {
    "title": "Kinetic ALC",
    "description": "High-performance offensive blade with Arylate-Carbon layers for explosive power and precise control.",
    "speed": "High-Very High",
    "control": "High-Very High",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": 95,
    "plies": "5+2 (Limba outer, Ayous inner, Arylate-Carbon layers)",
    "material": "Limba, Ayous, Arylate-Carbon"
  },
  {
    "title": "Roxon 500",
    "description": "Balanced offensive blade with limba outer ply and balsa core for excellent feel, control, and touch.",
    "speed": "Medium-High",
    "control": "High-Very High",
    "stiffness": "Medium",
    "hardness": "Soft",
    "consistency": "High",
    "weight": 86,
    "plies": "5+2 (Limba outer, Balsa core, Ayous inner)",
    "material": "Limba, Balsa, Ayous"
  },
  {
    "title": "Impuls Speed",
    "description": "Speed-oriented offensive blade with carbon layers for maximum power and aggressive play.",
    "speed": "Very High",
    "control": "Medium",
    "stiffness": "Very Stiff",
    "hardness": "Hard",
    "consistency": "High",
    "weight": 96,
    "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
    "material": "Limba, Ayous, Carbon"
  },
  {
    "title": "Topspin Evolution",
    "description": "Classic all-round blade with limba outer ply and Ayous inner ply for consistent control, spin, and feeling.",
    "speed": "Medium",
    "control": "High-Very High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 88,
    "plies": "5+2 (Limba outer, Ayous inner)",
    "material": "Limba, Ayous"
  },
  {
    "title": "Kinetik Control",
    "description": "Balanced all-round blade with limba outer ply and Kiri inner ply for a combination of speed, control, and large sweet spot.",
    "speed": "Medium",
    "control": "High-Very High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 86,
    "plies": "5+2 (Limba outer, Kiri inner)",
    "material": "Limba, Kiri"
  },
  {
    "title": "Roxon 700",
    "description": "Offensive blade with limba outer ply and Ayous inner ply for powerful topspins and aggressive play.",
    "speed": "High",
    "control": "High",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": 90,
    "plies": "5+2 (Limba outer, Ayous inner)",
    "material": "Limba, Ayous"
  },
  {
    "title": "Kinetic Spin",
    "description": "Spin-oriented all-round blade with limba outer ply and Kiri inner ply for excellent spin generation and control.",
    "speed": "Medium-High",
    "control": "High-Very High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 86,
    "plies": "5+2 (Limba outer, Kiri inner)",
    "material": "Limba, Kiri"
  },
  {
    "title": "Impuls Allround",
    "description": "Versatile all-round blade with limba outer ply and Ayous inner ply for a balance of speed, control, and feeling for various styles.",
    "speed": "Medium-High",
    "control": "High-Very High",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": 88,
    "plies": "5+2 (Limba outer, Ayous inner)",
    "material": "Limba, Ayous"
  }
]

  balls = [
    {
      "title": "Speedball 3S 40+",
      "description": "3-star seamless ball with consistent bounce and spin, ideal for training and competition."
    },
    {
      "title": "Trainingball 40+",
      "description": "Durable training ball with good bounce and spin, suitable for regular practice sessions."
    },
    {
      "title": "Multiball 40+",
      "description": "Set of 72 training balls for efficient practice routines and multi-ball drills."
    },
    {
      "title": "Basicball 40+",
      "description": "Entry-level ball offering a good balance of bounce and spin at an affordable price."
    }
   ];
   

  topRubbers= [
    {
      "title": "Rasanter R",
      "description": "Balanced offensive rubber combining speed, spin, and control for versatile play with excellent feeling."
    },
    {
      "title": "Hexer Pro",
      "description": "Offensive rubber with tacky topsheet and medium-hard sponge for dynamic topspin and strong loops."
    },
    {
      "title": "Rasanter C53 & C48",
      "description": "Offensive rubbers with counterspin design for neutralizing incoming topspin and generating aggressive counter-rotation."
    }
  ];
  

  topBlades = [
    {
      "title": "Kinetic Supreme",
      "description": "High-performance offensive blade with limba outer ply and Hinoki inner ply for explosive power and exceptional feel."
    },
    {
      "title": "Rasantec Force",
      "description": "Balanced offensive blade with carbon layers and limba outer ply for a blend of speed, spin, and control."
    },
    {
      "title": "Hexer Pro Carbon",
      "description": "Dynamic offensive blade with carbon layers and limba outer ply for powerful topspin and aggressive play."
    }
  ];
  
}
