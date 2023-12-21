import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-xiom',
  templateUrl: './xiom.component.html',
  styleUrls: ['./xiom.component.scss']
})
export class XiomComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "XIOM";

  brandDescription="Xiom is originally from South Korea!  It emerged in 2007 from the legacy of Champion Co., Ltd., Born from champion lineage and fueled by tech-driven innovation, Xiom isn't just a table tennis brand – it's a modern pioneer crafting weapons for both offensive masters and defensive tacticians. With their signature Carbo Black sponge technology unlocking spin and power, Xiom equips players of all levels to rewrite the narrative of the game, one stroke at a time.";

  rubbers=[
    {
      "title": "Omega VII Pro",
      "description": "High-performance offensive rubber with Mu-Tensor sponge for explosive power and maximum spin. Ideal for professional players seeking ultimate control and precision.",
      "speed": "10.5",
      "spin": "10",
      "control": "9.5",
      "hardness": "Hard"
    },
    {
      "title": "Omega VII",
      "description": "Powerful offensive rubber with Mu-Tensor sponge offering excellent balance of speed, spin, and control. Suitable for advanced players prioritizing both attack and consistency.",
      "speed": "10",
      "spin": "9.5",
      "control": "9",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Vega Pro",
      "description": "High-spin offensive rubber with Mu-Tensor sponge designed for aggressive play. Features a grippy topsheet for exceptional spin generation and control during powerful shots.",
      "speed": "10",
      "spin": "10",
      "control": "8.5",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Vega X",
      "description": "Offensive rubber with Mu-Tensor sponge offering a good balance of speed, spin, and control. Suitable for advanced players seeking a versatile option for both attacking and counter-attacking.",
      "speed": "9.5",
      "spin": "9",
      "control": "9",
      "hardness": "Medium"
    },
    {
      "title": "Vega Pro Hybird",
      "description": "Offensive rubber with Mu-Tensor sponge and built-in hybrid topsheet for an extra layer of spin and control. Ideal for players seeking maximum spin variations and deception.",
      "speed": "10",
      "spin": "10.5",
      "control": "8",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Vega X Hybird",
      "description": "Versatile rubber with Mu-Tensor sponge and built-in hybrid topsheet offering a balance of speed, spin, and control. Suitable for advanced players seeking a flexible option for various playing styles.",
      "speed": "9.5",
      "spin": "9.5",
      "control": "8.5",
      "hardness": "Medium"
    },
    {
      "title": "Vega Elite",
      "description": "Professional-level offensive rubber with Mu-Tensor sponge and tacky topsheet for exceptional spin and control. Demanding stiffness, ideal for experienced players with strong technique.",
      "speed": "10",
      "spin": "10",
      "control": "8.5",
      "hardness": "Hard"
    },
    {
      "title": "Vega Pro Light",
      "description": "Lightweight offensive rubber with Mu-Tensor sponge offering a balance of speed, spin, and control. Suitable for players seeking a lighter option for increased maneuverability.",
      "speed": "9.5",
      "spin": "9",
      "control": "9",
      "hardness": "Medium"
    },
    {
      "title": "Vega X Soft",
      "description": "Soft offensive rubber with Mu-Tensor sponge providing good spin and control with a forgiving feel. Ideal for players seeking a balance of power and touch.",
      "speed": "9",
      "spin": "9",
      "control": "9.5",
      "hardness": "Soft"
    },
    {
      "title": "Spin Serve",
      "description": "Unique rubber with special surface texture designed for maximizing spin generation on serves. Ideal for players who prioritize deception and surprise tactics.",
      "speed": "9",
      "spin": "10.5",
      "control": "8.5",
      "hardness": "Medium"
    },
    {
      "title": "MUSA",
      "description": "All-round rubber with Mu-Tensor sponge offering a well-balanced mix of speed, spin, and control. Suitable for players seeking versatility and adaptability to various playing styles.",
      "speed": "9",
      "spin": "9",
      "control": "9",
      "hardness": "Medium"
    },
    {
      "title": "ZOSMA",
      "description": "Defensive rubber with tacky topsheet and soft sponge for excellent control and blocking abilities. Ideal for players seeking to absorb powerful shots and counter-attack.",
      "speed": "8",
      "spin": "8.5",
      "control": "10",
      "hardness": "Soft"
    },
    {
      "title": "V14",
      "description": "Limited-edition offensive rubber with unique surface texture and Mu-Tensor sponge for exceptional spin and control. Developed in collaboration with Ma Long.",
      "speed": "10.5",
      "spin": "10.5",
      "control": "9",
      "hardness": "Medium-Hard"
    }
  ];  

  blades = [
    {
      "title": "Ice Cream AZXi",
      "description": "High-performance offensive blade with a large sweet spot and crisp feel. Designed for aggressive play with excellent power and spin capabilities.",
      "speed": 9.5,
      "control": 9,
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 88,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "Ice Cream AZXi Special",
      "description": "Offensive blade with a medium-sized sweet spot and slightly softer feel compared to the AZXi. Offers a balance of speed and control for versatile play.",
      "speed": 9,
      "control": 9.5,
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 87,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "Ice Cream AZXi Square",
      "description": "Square-shaped offensive blade with a large sweet spot and unique feel. Provides excellent control and stability for precise shot placement.",
      "speed": 9,
      "control": 9.5,
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 89,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "Hugo Calderano Force Pro",
      "description": "Signature blade of Hugo Calderano, designed for aggressive offensive players. Features a carbon layer for explosive power and a medium-hard feel for precise control.",
      "speed": 10,
      "control": 9,
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 89,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "Hugo Calderano Force",
      "description": "Offensive blade with a slightly softer feel compared to the Force Pro. Offers a balance of speed and control, suitable for players seeking versatility in their attacks.",
      "speed": 9.5,
      "control": 9.5,
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 88,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "Vega Pro",
      "description": "7-ply offensive blade with a medium-hard feel and good balance. Provides a stable platform for powerful shots with a sense of control.",
      "speed": 9.5,
      "control": 9,
      "stiffness": "Medium-Hard",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 90,
      "plies": "7 (Limba outer, Ayous inner)",
      "material": "Ayous, Limba"
    },
    {
      "title": "Vega Europe",
      "description": "5-ply all-round blade with a softer feel and emphasis on control. Offers good touch and feel, suitable for players who prioritize consistency and placement over raw power.",
      "speed": 8.5,
      "control": 9.5,
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 85,
      "plies": "5 (Limba outer, Ayous inner)",
      "material": "Ayous, Limba"
    },
    {
      "title": "Stradivarius",
      "description": "5-ply all-wood blade with a classic feel and balanced performance. Offers good control and touch, suitable for players who enjoy a traditional wooden blade experience.",
      "speed": 8.5,
      "control": 9.5,
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 88,
      "plies": "5 (Limba outer, Kiri inner)",
      "material": "Kiri, Limba"
    },
    {
      "title": "Feel ZX2",
      "description": "Defensive blade with a soft feel and excellent control. Designed for players who prefer blocking and counter-attacking with high levels of precision.",
      "speed": 7.5,
      "control": 10,
      "stiffness": "Soft",
      "hardness": "Soft",
      "consistency": "High",
      "weight": 83,
      "plies": "5 (Limba outer, Kiri inner)",
      "material": "Kiri, Limba"
    },
    {
      "title": "Solo",
      "description": "Unique 1-ply blade offering exceptional touch and feel. Requires advanced technique and control, but rewards players with exceptional finesse and ball placement.",
      "speed": 7,
      "control": 10,
      "stiffness": "Soft",
      "hardness": "Soft",
      "consistency": "Medium",
      "weight": 75,
      "plies": "1 (Limba)",
      "material": "Limba"
    }
  ];

  balls = [
    {
      "title": "SENSA ABS 100 Pack",
      "description": "Selected ABS training ball with a slightly softer feel, ideal for long practice sessions and multi-ball training."
    },
    {
      "title": "V 3*** ITTF (seamless)",
      "description": "ITTF approved / high-end ABS competition ball. 100."
    },
    {
      "title": "V 6 / V 3 Pack ITTF",
      "description": "ITTF approved / high-end ABS competition ball. 100."
    },
    {
      "title": "OZA ABS 100 Pack ITTF (seam)",
      "description": "ITTF approved / Classic ABS ball with a seam, for a familiar feel."
    },
    {
      "title": "SUPER TRAINING 12 Pack",
      "description": "ABS Plastic Practice Ball / Strong sense of hitting. 40mm."
    },
    {
      "title": "LARGE BALL 6 Pack",
      "description": "44mm ABS training ball for beginners and recreational play."
    }
   ];
   

  topRubbers= [
    {
      "title": "Omega VII Pro",
      "description": "Ideal for professional players seeking ultimate control and precision."
    },
    {
      "title": "Vega Pro",
      "description": "High-spin offensive rubber with Mu-Tensor sponge designed for aggressive play."
    },
    {
      "title": "MUSA",
      "description": "All-round rubber with Mu-Tensor sponge offering a well-balanced mix of speed, spin, and control."
    }
  ]
  

  topBlades = [
    {
      "title": "Vega Pro",
      "description": "7-ply offensive blade with a medium-hard feel and good balance. ",
    },
    {
      "title": "Ice Cream AZXi",
      "description": "High-performance offensive blade with a large sweet spot and crisp feel.",
    },
    {
      "title": "Hugo Calderano Force Pro",
      "description": "Signature blade of Hugo Calderano, designed for aggressive offensive players.",
    }
  ];

}
