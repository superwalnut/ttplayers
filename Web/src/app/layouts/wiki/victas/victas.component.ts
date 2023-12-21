import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-victas',
  templateUrl: './victas.component.html',
  styleUrls: ['./victas.component.scss']
})
export class VictasComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "Victas";

  brandDescription=" Victas is a Japanese table tennis brand that has been making blades and rubbers for over 80 years, formerly known as Yamato Takkyu Inc. Victas has a Wide variety of blades and rubbers catering to different playing styles and levels. Popular all-round blades like the V>15 Extra and Koji Matsushita Special. Offensive blades like the ZX Gear EX and Ventus series for powerful attack. Defensive blades like the Fire Fall SC and Curl P1V for exceptional control. High-quality rubbers like the Ventus series, VO> series, and Curl series offering various combinations of spin, speed, and control.";

  rubbers=[
    {
      "title": "Ventus Extra",
      "description": "High-performance, all-round rubber with excellent spin, speed, and control. Ideal for aggressive topspin play.",
      "speed": "9.5",
      "spin": "10",
      "control": "9.5",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Ventus Prime",
      "description": "Powerful offensive rubber with tacky topsheet for maximum spin and bite. Great for aggressive loops and smashes.",
      "speed": "10",
      "spin": "10.5",
      "control": "8.5",
      "hardness": "Hard"
    },
    {
      "title": "Ventus Spirit",
      "description": "Balanced offensive rubber with medium hardness for good control and spin variation. Suited for versatile offensive play.",
      "speed": "9",
      "spin": "9.5",
      "control": "9",
      "hardness": "Medium"
    },
    {
      "title": "Ventus Light",
      "description": "Lightweight offensive rubber with high elasticity for explosive speed and dynamic play. Recommended for fast attacks and counters.",
      "speed": "10.5",
      "spin": "9.5",
      "control": "8",
      "hardness": "Medium"
    },
    {
      "title": "Ventus Grip",
      "description": "Spin-oriented rubber with grippy topsheet for superior control and precision. Ideal for creating heavy spin on serves and loops.",
      "speed": "9",
      "spin": "10",
      "control": "9.5",
      "hardness": "Medium-Hard"
    },
    {
      "title": "VO>15 Extra",
      "description": "Classic all-round rubber with tacky topsheet and medium sponge for excellent balance of speed, spin, and control. Suitable for a wide range of playing styles.",
      "speed": "9",
      "spin": "9.5",
      "control": "9.5",
      "hardness": "Medium"
    },
    {
      "title": "VO>17",
      "description": "Spin-focused offensive rubber with hard sponge and tacky topsheet for maximum spin generation and control. Great for aggressive topspin and counter-looping.",
      "speed": "10",
      "spin": "10.5",
      "control": "8.5",
      "hardness": "Hard"
    },
    {
      "title": "VO>9",
      "description": "Lightweight offensive rubber with high elasticity for dynamic play and fast attacks. Offers good balance of speed and spin.",
      "speed": "9.5",
      "spin": "9",
      "control": "9",
      "hardness": "Medium"
    },
    {
      "title": "Curl P1V",
      "description": "High-control defensive rubber with soft sponge and grippy topsheet for excellent blocking and receiving abilities. Ideal for absorbing powerful shots and counter-attacking.",
      "speed": "7.5",
      "spin": "8.5",
      "control": "10",
      "hardness": "Soft"
    },
    {
      "title": "Curl P2V",
      "description": "Defensive rubber with tacky topsheet and medium sponge for high spin and control during defensive play. Offers good balance for blocking and countering.",
      "speed": "8",
      "spin": "9",
      "control": "9.5",
      "hardness": "Medium"
    },
    {
      "title": "Spin Art",
      "description": "Unique rubber with special surface texture for exceptional spin generation on serves and loops. Ideal for players who prioritize spin and deception.",
      "speed": "8.5",
      "spin": "10",
      "control": "8.5",
      "hardness": "Medium-Hard"
    },
    {
      "title": "D.Tecs",
      "description": "Long pimples rubber with large pips for disruptive play and unpredictable spin variations. Enables effective blocking and counter-attacking against aggressive opponents.",
      "speed": "8",
      "spin": "8.5",
      "control": "9",
      "hardness": "Medium"
    },
    {
      "title": "High Energy",
      "description": "Speed-oriented rubber with hard sponge for explosive power and fast attacks. Recommended for players who prioritize speed and direct play.",
      "speed": "10.5",
      "spin": "9",
      "control": "8",
      "hardness": "Hard"
    },
    {
      "title": "Spectol",
      "description": "Offensive rubber with grippy topsheet and medium sponge for good spin and control during attacking play. Offers a balance of power and precision.",
      "speed": "9.5",
      "spin": "9",
      "control": "8.5",
      "hardness": "Medium"
    },
    {
      "title": "Spin Drive",
      "description": "All-round rubber with tacky topsheet and medium sponge for excellent spin generation and control. Suitable for players who prioritize spin and precision in their game.",
      "speed": "8.5",
      "spin": "9.5",
      "control": "9",
      "hardness": "Medium"
    }
  ];  

  blades = [
    {
      "title": "Koji Matsushita Special",
      "description": "Powerful 7-ply blade favored by Koji Matsushita for its explosive speed and offensive capabilities.",
      "speed": "9.5",
      "control": "8.5",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": "90g",
      "plies": "7",
      "material": "Ayous, Kiri, Hinoki, Limba"
    },
    {
      "title": "ZX Gear EX",
      "description": "Highly versatile 5+2 ply blade with carbon layers for excellent balance of speed, spin, and control. Great for advanced players.",
      "speed": "9",
      "control": "9",
      "stiffness": "Medium-Stiff",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "88g",
      "plies": "5+2",
      "material": "Ayous, Kiri, Limba, Carbon"
    },
    {
      "title": "Ventus Gear Carbon",
      "description": "5+2 ply offensive blade with carbon for powerful topspin and smashes. Offers good control despite its speed.",
      "speed": "10",
      "control": "8.5",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": "87g",
      "plies": "5+2",
      "material": "Ayous, Kiri, Limba, Carbon"
    },
    {
      "title": "V>15 Extra",
      "description": "Classic 5-ply offensive blade with Limba outer plies for excellent power and touch. A popular choice for all-around offensive players.",
      "speed": "9",
      "control": "9",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "85g",
      "plies": "5",
      "material": "Ayous, Limba"
    },
    {
      "title": "Dignics 05",
      "description": "High-performance 5-ply blade with limba outer plies and inner carbon layers. Designed for professional-level players seeking maximum spin and precision.",
      "speed": "10",
      "control": "9.5",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": "88g",
      "plies": "5",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "Victas V>17",
      "description": "5-ply offensive blade with carbon layers and a hard feel for explosive attacks and strong counters.",
      "speed": "10.5",
      "control": "8",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": "86g",
      "plies": "5",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "D.Tecs Offensive",
      "description": "5-ply blade with Limba outer plies and soft inner plies for excellent offensive capabilities while maintaining good control.",
      "speed": "9",
      "control": "9",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "88g",
      "plies": "5",
      "material": "Ayous, Limba"
    },
    {
      "title": "V>11 Extra",
      "description": "Balanced 5-ply blade with limba outer plies offering a well-rounded mix of speed, spin, and control for various playing styles.",
      "speed": "9",
      "control": "9",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "85g",
      "plies": "5",
      "material": "Ayous, Limba",
    },
    {
      "title": "Victas Theo Xu",
      "description": "5-ply all-round blade with Hinoki outer plies for a touchy and balanced feel. Suitable for players seeking control and precision.",
      "speed": "8.5",
      "control": "9.5",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "87g",
      "plies": "5",
      "material": "Ayous, Hinoki",
    },
    {
      "title": "Victas Spin Art Blade",
      "description": "Unique 5-ply blade with a special surface texture designed to enhance spin generation. Great for players who prioritize deception and control.",
      "speed": "8.5",
      "control": "9",
      "stiffness": "Medium-Stiff",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "86g",
      "plies": "5",
      "material": "Ayous, Kiri, Limba",
    },
    {
      "title": "Spectol Carbon",
      "description": "5+2 ply blade with carbon layers and Limba outer plies for a balance of offensive power and precise control. Perfect for dynamic all-round play.",
      "speed": "9.5",
      "control": "8.5",
      "stiffness": "Stiff",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "88g",
      "plies": "5+2",
      "material": "Ayous, Kiri, Limba, Carbon",
    },
    {
      "title": "Curl P1V",
      "description": "Soft 7-ply defensive blade with focus on excellent control and blocking abilities. Ideal for absorbing powerful shots and counter-attacking.",
      "speed": "7.5",
      "control": "10",
      "stiffness": "Soft",
      "hardness": "Soft",
      "consistency": "High",
      "weight": "88g",
      "plies": "7",
      "material": "Ayous, Kiri, Limba"
    },
    {
      "title": "Curl P2V",
      "description": "5-ply defensive blade with tacky topsheet and medium sponge for high spin and control during defensive play. Offers good balance for blocking and countering.",
      "speed": "8",
      "control": "9.5",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "87g",
      "plies": "5",
      "material": "Ayous, Limba"
    },
    {
      "title": "Victor Fiber P1V",
      "description": "Unique 5-ply defensive blade with carbon layers and special inner plies for exceptional control and touch when receiving and blocking.",
      "speed": "8.5",
      "control": "10",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "89g",
      "plies": "5",
      "material": "Ayous, Kiri, Limba, Carbon"
    },
    {
      "title": "Koji Matsushita Wood Special",
      "description": "Classic 5-ply blade preferred by Koji Matsushita for its traditional feel and well-balanced performance.",
      "speed": "9",
      "control": "9",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "86g",
      "plies": "5",
      "material": "Ayous, Kiri, Limba"
    },
    {
      "title": "Dignics 03",
      "description": "5-ply blade with Hinoki outer plies and inner carbon layers for a high-performance offensive option with excellent touch and feel.",
      "speed": "9.5",
      "control": "9",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": "88g",
      "plies": "5",
      "material": "Ayous, Hinoki, Carbon"
    },
    {
      "title": "High Energy",
      "description": "5-ply blade with a hard sponge for explosive speed and direct attacks. Recommended for players who prioritize speed and power over control.",
      "speed": "10.5",
      "control": "8",
      "stiffness": "Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": "85g",
      "plies": "5",
      "material": "Ayous, Limba"
    }
  ];
  

  balls = [
    {
      "title": "Victas 40+",
      "description": "Premium 3-star seamless ball with consistent bounce and superior durability. Ideal for training and competition."
    },
    {
      "title": "Victas 3-Star Premium",
      "description": "High-quality training ball with reliable bounce and even flight trajectory. Suitable for beginners and experienced players."
    },
    {
      "title": "Victas 3-Star",
      "description": "Affordable 3-star ball with ITTF approval for recreational play and practice sessions."
    }
  ];  

  topRubbers= [
    {
      "title": "Ventus Extra",
      "description": "High-performance all-round rubber offering excellent balance of speed, spin, and control."
    },
    {
      "title": "Dignics 05",
      "description": "Professional-level offensive rubber with limba outer plies and carbon layers."
    },
    {
      "title": "Spin Art",
      "description": "Unique rubber with special surface texture for exceptional spin generation."
    }
  ];  

  topBlades = [
    {
      "title": "Ventus Gear Carbon",
      "description": "5+2 ply offensive blade with carbon layers for powerful topspin and smashes."
    },
    {
      "title": "V>11 Extra",
      "description": "Balanced 5-ply blade with limba outer plies offering a well-rounded mix of speed, spin, and control."
    },
    {
      "title": "Dignics 05",
      "description": "High-performance 5-ply blade with limba outer plies and inner carbon layers."
    }
  ];

}
