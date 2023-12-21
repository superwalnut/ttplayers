import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nittaku',
  templateUrl: './nittaku.component.html',
  styleUrls: ['./nittaku.component.scss']
})
export class NittakuComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "Nittaku";

  brandDescription="Nittaku, pronounced 'nee-tah-koo' is another renowned Japanese table tennis brand with a rich history and dedication to the sport. Founded in 1947 by Kiyoshi Kanoh, it has established itself as a major player in the industry, known for its high-quality blades, rubbers, and commitment to precision manufacturing.";

  rubbers=[
    {
      "title": "Fastarc S-1",
      "description": "Unleash explosive topspin and smashes with this grippy, elastic beast.",
      "speed": "10",
      "spin": "10",
      "control": "9",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Fastarc G-1",
      "description": "Generate raw power and dominate rallies with this hard-sponge dynamo.",
      "speed": "10",
      "spin": "9.5",
      "control": "8.5",
      "hardness": "Hard"
    },
    {
      "title": "Hurricane Pro 3 Turbo",
      "description": "Spin your way to victory with this tacky legend - the pro's secret weapon.",
      "speed": "9.5",
      "spin": "10",
      "control": "8.5",
      "hardness": "Hard"
    },
    {
      "title": "FineSpeed",
      "description": "Master any style with this balanced blend of speed, spin, and control.",
      "speed": "9",
      "spin": "9",
      "control": "9",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Moristo SP",
      "description": "Embrace touch and spin artistry with this soft sponge and tacky charm.",
      "speed": "8.5",
      "spin": "10",
      "control": "9.5",
      "hardness": "Soft"
    },
    {
      "title": "Flyatt Spin",
      "description": "Attack and defend with agility thanks to this dynamic, lightweight wonder.",
      "speed": "9.5",
      "spin": "9",
      "control": "9",
      "hardness": "Medium"
    },
    {
      "title": "Moristo DF",
      "description": "Feel every nuance of the game with this control-focused defensive sponge.",
      "speed": "8",
      "spin": "8.5",
      "control": "9.5",
      "hardness": "Soft"
    },
    {
      "title": "SpinDwell",
      "description": "Disrupt your opponent's rhythm and create spin chaos with these unpredictable long pimples.",
      "speed": "8",
      "spin": "9.5",
      "control": "8.5",
      "hardness": "Medium"
    },
    {
      "title": "Siger PK50",
      "description": "Absorb powerful shots and counter with precision with this medium-pimple defensive shield.",
      "speed": "8.5",
      "spin": "8",
      "control": "9",
      "hardness": "Medium-Hard"
    }
  ];

  blades = [
    {
      "title": "Hina Hayata H2",
      "description": "Large sweet spot, powerful and stable.",
      "speed": "OFF+",
      "control": "10",
      "stiffness": "9",
      "hardness": "Very Stiff",
      "consistency": "Hard",
      "weight": "5",
      "plies": "Ayous, Limba, Kiri, Carbon",
      "material": "Ayous, Limba, Kiri, Carbon"
    },
    {
      "title": "Ma Long Carbon 2",
      "description": "Lightweight, balanced for offensive play.",
      "speed": "OFF+",
      "control": "9.5",
      "stiffness": "9",
      "hardness": "Stiff",
      "consistency": "Hard",
      "weight": "5",
      "plies": "Limba, Kiri, Balsa, Carbon",
      "material": "Limba, Kiri, Balsa, Carbon"
    },
    {
      "title": "Ma Long Carbon 3",
      "description": "Inner carbon layer for additional feel.",
      "speed": "OFF+",
      "control": "9.5",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Hard",
      "weight": "7",
      "plies": "Hinoki, Limba, Kiri, Balsa, Carbon",
      "material": "Hinoki, Limba, Kiri, Balsa, Carbon"
    },
    {
      "title": "Mima Ito Carbon",
      "description": "Powerful yet controllable for all-round play.",
      "speed": "OFF+",
      "control": "9",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "7",
      "plies": "Hinoki, Ayous, Balsa, Carbon",
      "material": "Hinoki, Ayous, Balsa, Carbon"
    },
    {
      "title": "Violin Carbon",
      "description": "Crisp feel, excellent for topspin and drives.",
      "speed": "OFF+",
      "control": "9",
      "stiffness": "9",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Spruce, Ayous, Kiri, Carbon",
      "material": "Spruce, Ayous, Kiri, Carbon"
    },
    {
      "title": "Violin",
      "description": "High elasticity, powerful yet flexible.",
      "speed": "OFF",
      "control": "9",
      "stiffness": "9",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Spruce, Ayous, Kiri",
      "material": "Spruce, Ayous, Kiri"
    },
    {
      "title": "Kasumi Basic",
      "description": "Lightweight, suitable for developing technique.",
      "speed": "OFF-",
      "control": "8.5",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Ayous, Balsa",
      "material": "Hinoki, Ayous, Balsa"
    },
    {
      "title": "Acoustic",
      "description": "Excellent feel and touch, good for all-round play.",
      "speed": "OFF-",
      "control": "8.5",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Kiri, Balsa, Ayous",
      "material": "Hinoki, Kiri, Balsa, Ayous"
    },
    {
      "title": "Acoustic Carbon (Outer Type)",
      "description": "Outer carbon layer for increased speed and power.",
      "speed": "OFF+",
      "control": "9",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Kiri, Balsa, Ayous, Carbon",
      "material": "Hinoki, Kiri, Balsa, Ayous, Carbon"
    },
    {
      "title": "Acoustic Carbon Inner",
      "description": "Inner carbon layer for more control and feel.",
      "speed": "OFF+",
      "control": "9",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Kiri, Balsa, Ayous, Carbon",
      "material": "Hinoki, Kiri, Balsa, Ayous, Carbon"
    },
    {
      "title": "Acoustic C (Chines Penhold)",
      "description": "Designed for penhold grip, excellent balance.",
      "speed": "OFF",
      "control": "8.5",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Kiri, Balsa, Ayous",
      "material": "Hinoki, Kiri, Balsa, Ayous"
    },
    {
      "title": "Acoustic Pro ALC",
      "description": "ALC layer for enhanced speed and spin.",
      "speed": "OFF+",
      "control": "9.5",
      "stiffness": "9",
      "hardness": "Very Stiff",
      "consistency": "Hard",
      "weight": "5",
      "plies": "Hinoki, Limba, Balsa, Carbon, ALC",
      "material": "Hinoki, Limba, Balsa, Carbon, ALC"
    },
    {
      "title": "Septear V",
      "description": "Large sweet spot, good for attacking play.",
      "speed": "OFF+",
      "control": "9.5",
      "stiffness": "9",
      "hardness": "Very Stiff",
      "consistency": "Hard",
      "weight": "7",
      "plies": "Hinoki, Limba, Kiri, Balsa, Carbon",
      "material": "Hinoki, Limba, Kiri, Balsa, Carbon"
    },
    {
      "title": "Acoustic Carbon Special",
      "description": "Inner carbon layer for balance between speed and control.",
      "speed": "OFF+",
      "control": "9.5",
      "stiffness": "9.5",
      "hardness": "Very Stiff",
      "consistency": "Hard",
      "weight": "7",
      "plies": "Hinoki, Limba, Kiri, Balsa, Carbon",
      "material": "Hinoki, Limba, Kiri, Balsa, Carbon"
    },
    {
      "title": "Septear",
      "description": "Powerful and flexible, good for topspin and drives.",
      "speed": "OFF",
      "control": "9",
      "stiffness": "9",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Ayous, Balsa, Kiri",
      "material": "Hinoki, Ayous, Balsa, Kiri"
    },
    {
      "title": "Septear X",
      "description": "Powerful and fast, suitable for aggressive play.",
      "speed": "OFF",
      "control": "9",
      "stiffness": "9",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Limba, Ayous, Balsa, Kiri",
      "material": "Limba, Ayous, Balsa, Kiri"
    },
    {
      "title": "Acoustic",
      "description": "Excellent feel and touch, good for all-round play.",
      "speed": "OFF-",
      "control": "8.5",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Kiri, Balsa, Ayous",
      "material": "Hinoki, Kiri, Balsa, Ayous"
    },
    {
      "title": "Septear Special",
      "description": "More control than Septear, good for all-round play.",
      "speed": "OFF-",
      "control": "8.5",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Ayous, Balsa, Kiri",
      "material": "Hinoki, Ayous, Balsa, Kiri"
    },
    {
      "title": "Acoustic II",
      "description": "Excellent feel and balance, suitable for various styles.",
      "speed": "OFF-",
      "control": "8.5",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "Hinoki, Kiri, Balsa, Ayous",
      "material": "Hinoki, Kiri, Balsa, Ayous"
    },
    {
      "title": "Septear Plus",
      "description": "",
      "speed": "OFF-",
      "control": "8.5",
      "stiffness": "9.5",
      "hardness": "Stiff",
      "consistency": "Medium-Hard",
      "weight": "5",
      "plies": "",
      "material": ""
    }
  ];

  balls = [
    {
      "title": "Nittaku Premium 3 Star 40+ Ball",
      "description": "ITTF-approved premium plastic ball known for consistent bounce, roundness, and durability. Available in white and orange."
    },
    {
      "title": "Nittaku 3 Star 40+ Ball",
      "description": "High-quality plastic ball offering reliable bounce and good value for money. Available in white and orange."
    },
    {
      "title": "Nittaku Basic 3 Star Ball",
      "description": "Affordable plastic ball suitable for recreational play and training. Decent bounce and performance. Available in white and orange."
    },
    {
      "title": "Nittaku 38mm 3 Star Ball",
      "description": "Slightly smaller (38mm) plastic ball for youth and beginner training. Encourages proper technique development. Available in white and orange."
    },
    {
      "title": "Nittaku JPS 3 Star Ball (Made in Japan)",
      "description": "Premium celluloid ball crafted in Japan with exceptional roundness, consistency, and bounce. Preferred by professional players. Available in white and orange."
    },
    {
      "title": "Nittaku 3 Star Ball (Made in China)",
      "description": "High-quality celluloid ball offering consistent bounce and good value for money. Suitable for club and advanced players. Available in white and orange."
    },
    {
      "title": "Nittaku Basic Celluloid Ball",
      "description": "Affordable celluloid ball for recreational and training use. Decent performance and feel. Available in white and orange."
    },
    {
      "title": "Nittaku Training Pro Ball",
      "description": "Seamless plastic ball with visible seams for training purposes. Helps visualize spin and improve touch. Available in white and orange."
    },
    {
      "title": "Nittaku Fun Ball",
      "description": "Soft and slow-bouncing plastic ball ideal for children and beginners. Encourages hand-eye coordination and basic skills. Available in various colors."
    },
    {
      "title": "Nittaku Match Point Ball",
      "description": "Premium celluloid ball with numbered halves for scoring practice. Improves concentration and decision-making. Available in white."
    }
  ];
  

  topRubbers= [
    {
      "title": "Fastarc S-1",
      "description": "This grippy, elastic beast unleashes explosive topspin and smashes for offensive players seeking maximum power and spin potential."
    },
    {
      "title": "Hurricane Pro 3 Turbo",
      "description": "A legend among tacky rubbers, the Hurricane Pro 3 Turbo delivers exceptional spin and control thanks to its aggressive topsheet and hard sponge."
    },
    {
      "title": "FineSpeed",
      "description": "For all-round players seeking a balanced blend of speed, spin, and control, the FineSpeed shines. "
    }
  ];

  topBlades = [
    {
      "title": "Acoustic",
      "description": "The legendary Acoustic is a timeless all-round masterpiece."
    },
    {
      "title": "Violin",
      "description": "The Violin is a popular choice for offensive players seeking a balance between speed and control."
    },
    {
      "title": "Septear",
      "description": "The Septear offers raw power and offensive capabilities."
    }
  ];
  
}
