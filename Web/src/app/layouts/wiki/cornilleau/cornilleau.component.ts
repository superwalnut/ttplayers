import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cornilleau',
  templateUrl: './cornilleau.component.html',
  styleUrls: ['./cornilleau.component.scss']
})
export class CornilleauComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "Cornilleau";

  brandDescription="Forged in the crucible of French innovation, Cornilleau brings over 50 years of passion and precision to the table tennis court. From their iconic, foldable Ping Pong tables that champion outdoor play, to their meticulously crafted blades and performance rubbers, Cornilleau empowers players of all levels to unlock their full potential. Whether mastering finesse in a competitive match or igniting fun under the summer sun, Cornilleau's unwavering dedication to quality and inclusivity makes every rally a celebration of the game.";

  rubbers=[
    {
      "title": "Target Pro GT S39",
      "description": "High-performance offensive rubber with grippy topsheet for exceptional spin and explosive power.",
      "speed": "Very High",
      "spin": "Very High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Target Pro GT H47",
      "description": "Spin-oriented offensive rubber with tacky topsheet for maximum spin generation and control.",
      "speed": "High",
      "spin": "Very High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Target Pro GT H42",
      "description": "Balanced offensive rubber with tacky topsheet for a blend of speed, spin, and control.",
      "speed": "High",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium"
    },
    {
      "title": "Drive Spin Hybrid",
      "description": "All-round offensive rubber with hybrid topsheet for good spin and control with decent speed.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "High",
      "hardness": "Medium"
    },
    {
      "title": "Drive Max Spin",
      "description": "Spin-oriented all-round rubber with tacky topsheet for excellent spin generation and control.",
      "speed": "Medium",
      "spin": "Very High",
      "control": "High",
      "hardness": "Medium"
    },
    {
      "title": "Drive Max Control",
      "description": "Control-oriented all-round rubber with tacky topsheet for consistent play and good feeling.",
      "speed": "Medium",
      "spin": "High",
      "control": "Very High",
      "hardness": "Medium-Soft"
    },
    {
      "title": "Pilot Spin Soft",
      "description": "Spin-oriented offensive rubber with soft sponge for extra feeling and spin potential.",
      "speed": "High",
      "spin": "Very High",
      "control": "Medium",
      "hardness": "Soft"
    },
    {
      "title": "Pilot All+ Grip",
      "description": "Balanced all-round rubber with grippy topsheet for good all-around performance.",
      "speed": "Medium",
      "spin": "High",
      "control": "High",
      "hardness": "Medium"
    },
    {
      "title": "Pilot All+ Control",
      "description": "Control-oriented all-round rubber with larger sponge for excellent stability and control.",
      "speed": "Medium-Low",
      "spin": "Medium-High",
      "control": "Very High",
      "hardness": "Medium-Soft"
    },
    {
      "title": "Aero Soft Spin",
      "description": "Spin-oriented beginner-friendly rubber with soft sponge for easy control and spin development.",
      "speed": "Low-Medium",
      "spin": "High",
      "control": "Very High",
      "hardness": "Soft"
    },
    {
      "title": "Aero Spin",
      "description": "Balanced beginner-friendly rubber with medium sponge for good all-around performance and spin.",
      "speed": "Medium",
      "spin": "Medium-High",
      "control": "High",
      "hardness": "Medium"
    },
    {
      "title": "Aero Control",
      "description": "Control-oriented beginner-friendly rubber with large sponge for excellent stability and control.",
      "speed": "Low-Medium",
      "spin": "Medium",
      "control": "Very High",
      "hardness": "Medium-Soft"
    },
    {
      "title": "Friendship Cream Xtra",
      "description": "Extra grippy and soft beginner-friendly rubber for maximum control and easy learning.",
      "speed": "Low",
      "spin": "Medium",
      "control": "Very High",
      "hardness": "Soft"
    },
    {
      "title": "Friendship Soft",
      "description": "Super soft and flexible beginner-friendly rubber for exceptional control and touch sensitivity.",
      "speed": "Very Low",
      "spin": "Low-Medium",
      "control": "Very High",
      "hardness": "Extra Soft"
    },
    {
      "title": "Friendship Grip",
      "description": "Grippy and slightly harder beginner-friendly rubber for improved control and feeling.",
      "speed": "Low-Medium",
      "spin": "Medium",
      "control": "High",
      "hardness": "Soft"
    },
    {
      "title": "Aero Control",
      "description": "Control-oriented beginner-friendly rubber with large sponge for excellent stability and control.",
      "speed": "Low-Medium",
      "spin": "Medium",
      "control": "Very High",
      "hardness": "Medium-Soft"
    },
    {
      "title": "Friendship Cream Xtra",
      "description": "Extra grippy and soft beginner-friendly rubber for maximum control and easy learning.",
      "speed": "Low",
      "spin": "Medium",
      "control": "Very High",
      "hardness": "Soft"
    },
    {
      "title": "Friendship Soft",
      "description": "Super soft and flexible beginner-friendly rubber for exceptional control and touch sensitivity.",
      "speed": "Very Low",
      "spin": "Low-Medium",
      "control": "Very High",
      "hardness": "Extra Soft"
    },
    {
      "title": "Friendship Grip",
      "description": "Grippy and slightly harder beginner-friendly rubber for improved control and feeling.",
      "speed": "Low-Medium",
      "spin": "Medium",
      "control": "High",
      "hardness": "Soft"
    }
  ];


  blades = [
    {
      "title": "Tactics",
      "description": "Lightweight and balanced all-round blade for good control and feeling.",
      "speed": "Medium",
      "control": "High",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "75g",
      "plies": "5 (Linden outer, Ayous inner)",
      "material": "Linden, Ayous"
    },
    {
      "title": "Tactics Plus",
      "description": "Slightly faster and stiffer version of Tactics for more offensive play.",
      "speed": "Medium-High",
      "control": "High",
      "stiffness": "Medium-Stiff",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "80g",
      "plies": "5 (Linden outer, Ayous inner)",
      "material": "Linden, Ayous"
    },
    {
      "title": "Hybrid",
      "description": "Unique hybrid composition for a blend of speed, spin, and control.",
      "speed": "High",
      "control": "High",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": "85g",
      "plies": "5 (Linden outer, Ayous inner, Carbon layers)",
      "material": "Linden, Ayous, Carbon"
    },
    {
      "title": "Aeropong",
      "description": "Ultra-lightweight blade specifically designed for outdoor table tennis.",
      "speed": "Medium",
      "control": "High",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": "65g",
      "plies": "5 (Balsa outer, Ayous inner)",
      "material": "Balsa, Ayous"
    },
    {
      "title": "Feng 75",
      "description": "Professional offensive blade with limba outer ply for explosive power.",
      "speed": "Very High",
      "control": "Medium-High",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": "90g",
      "plies": "5 (Limba outer, Ayous inner)",
      "material": "Limba, Ayous"
    },
    {
      "title": "Feng 75 Carbon",
      "description": "Even faster and stiffer version of Feng 75 with carbon layers for aggressive play.",
      "speed": "Very High",
      "control": "High",
      "stiffness": "Very Stiff",
      "hardness": "Hard-Very Hard",
      "consistency": "High",
      "weight": "95g",
      "plies": "5 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Limba, Ayous, Carbon"
    },
    {
      "title": "Deko",
      "description": "All-round blade with carbon layers for a balance of speed, spin, and control.",
      "speed": "High",
      "control": "High",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": "88g",
      "plies": "5 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Limba, Ayous, Carbon"
    },
    {
      "title": "Response",
      "description": "Control-oriented blade with large sweet spot for consistent play.",
      "speed": "Medium-High",
      "control": "Very High",
      "stiffness": "Medium-Stiff",
      "hardness": "Medium",
      "consistency": "Very High",
      "weight": "80g",
      "plies": "5 (Limba outer, Ayous inner)",
      "material": "Limba, Ayous"
    },
    {
      "title": "Dynamix",
      "description": "Spin-oriented blade with tacky topsheet for excellent spin generation.",
      "speed": "Medium-High",
      "control": "High",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": "85g",
      "plies": "5 (Limba outer, Ayous inner, Balsa/Kiri core)",
      "material": "Limba, Ayous, Balsa/Kiri"
    },
    {
      "title": "Pro Control",
      "description": "Professional-grade control blade for maximum precision and consistency.",
      "speed": "Low-Medium",
      "control": "Very High",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "Very High",
      "weight": "82g",
      "plies": "7 (Limba outer, Ayous inner)",
      "material": "Limba, Ayous"
    }
  ];
  

  balls = [
    {
      "title": "Nexeo",
      "description": "Premium 3-star ball for professional competitions and demanding players. Exceptional bounce, roundness, and durability."
    },
    {
      "title": "3-Star Pro Training",
      "description": "High-quality 3-star ball for training and tournaments. Excellent bounce, spin, and control."
    },
    {
      "title": "Sport+",
      "description": "Durable 2-star ball for recreational play and practice. Good bounce and spin performance at a budget-friendly price."
    },
    {
      "title": "Sport Outdoor",
      "description": "Specially designed 2-star ball for outdoor table tennis. Resistant to wind and weather conditions for outdoor play."
    },
    {
      "title": "Softbat",
      "description": "1-star ball with reduced speed and bounce for beginners and casual players. Ideal for learning the basics and developing skills."
    },
    {
      "title": "Funbat",
      "description": "Extra-large 44mm ball for fun and games. Perfect for family entertainment and non-competitive play."
    }
   ];
   

  topRubbers= [
    {
      "title": "Target Pro GT H47",
      "description": "Spin-focused offensive rubber with maximum spin generation and control."
    },
    {
      "title": "Drive Spin Hybrid",
      "description": "Versatile all-round rubber offering good spin, control, and decent speed."
    },
    {
      "title": "Pilot Spin Soft",
      "description": "Spin-oriented rubber with soft sponge for easy control and spin development."
    }
  ];  

  topBlades = [
    {
      "title": "Tactics",
      "description": "Lightweight and balanced all-round blade for good control and feeling.",
      "image": "https://cornilleau.com/wp-content/uploads/2019/08/tactics-cornilleau-palette-de-ping-pong.jpg"
    },
    {
      "title": "Feng 75",
      "description": "Professional offensive blade with limba outer ply for explosive power.",
      "image": "https://cornilleau.com/wp-content/uploads/2019/08/feng-75-cornilleau-palette-de-ping-pong.jpg"
    },
    {
      "title": "Deko",
      "description": "All-round blade with carbon layers for a balance of speed, spin, and control.",
      "image": "https://cornilleau.com/wp-content/uploads/2019/08/deko-cornilleau-palette-de-ping-pong.jpg"
    }
  ];
  
}
