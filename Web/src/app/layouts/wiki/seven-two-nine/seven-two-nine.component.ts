import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-two-nine',
  templateUrl: './seven-two-nine.component.html',
  styleUrls: ['./seven-two-nine.component.scss']
})
export class SevenTwoNineComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "729";

  brandDescription="Forged in the crucible of Chinese table tennis excellence, 729 brings decades of dedication and innovation to the court. From their world-renowned, grippy rubbers that unleash devastating spin and explosive power, to their meticulously crafted blades known for unmatched feel and control, 729 empowers players of all levels to unlock their full potential. Whether dominating in pro competitions or honing skills at the local club, 729's relentless pursuit of performance fuels champions and ignites passion in every stroke.";

  rubbers=[
    {
      "title": "Friendship Super 729 FX",
      "description": "High-performance rubber with tacky topsheet and medium-hard sponge for aggressive topspin and strong loops.",
      "speed": "High",
      "spin": "High",
      "control": "Medium-High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "729 Focus III",
      "description": "Spin-oriented rubber with tacky topsheet and hard sponge for exceptional spin generation and powerful play.",
      "speed": "High-Very High",
      "spin": "Very High",
      "control": "Medium",
      "hardness": "Hard"
    },
    {
      "title": "Battle 2/3 Series",
      "description": "Professional-grade rubbers with various topsheet and sponge combinations for aggressive play and dynamic speed.",
      "speed": "High-Very High",
      "spin": "High-Very High",
      "control": "Medium-Low",
      "hardness": "Hard"
    },
    {
      "title": "Jet Series (Jet 80, Jet 60, etc.)",
      "description": "Balanced offensive rubbers with grippy topsheets and varying sponge hardness for versatile offensive styles.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "High",
      "hardness": "Medium-Hard (Varies by model)"
    },
    {
      "title": "Faster",
      "description": "Speed-oriented rubber with grippy topsheet and hard sponge for maximum power and aggressive play.",
      "speed": "Very High",
      "spin": "High",
      "control": "Low",
      "hardness": "Hard"
    },
    {
      "title": "729 FX",
      "description": "Popular all-round rubber with tacky topsheet and medium sponge for good balance of speed, spin, and control.",
      "speed": "Medium",
      "spin": "High",
      "control": "High",
      "hardness": "Medium"
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
      "title": "Evolution",
      "description": "Balanced all-round rubber with natural and synthetic rubber blend for consistent control and good feeling.",
      "speed": "Medium",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium"
    },
    {
      "title": "729 5",
      "description": "Five-ply all-round rubber with classic Chinese feel and balanced performance.",
      "speed": "Medium",
      "spin": "High",
      "control": "High-Very High",
      "hardness": "Medium"
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
      "title": "Shield",
      "description": "Popular long pips rubber with high control and deceptive chop possibilities.",
      "speed": "Low",
      "spin": "Low-Medium",
      "control": "Very High",
      "hardness": "Medium"
    },
    {
      "title": "Spin Guard",
      "description": "Grippy long pips rubber with good control and ability to create spin variations.",
      "speed": "Medium-Low",
      "spin": "Medium-High",
      "control": "High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Anti-Spin",
      "description": "Classic anti-spin rubber for exceptional control and disruption of opponent's spin.",
      "speed": "Very Low",
      "spin": "Low",
      "control": "Very High",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Friendship Cream",
      "description": "Beginner-friendly rubber with good grip and control for recreational play.",
      "speed": "Low-Medium",
      "spin": "Medium",
      "control": "High",
      "hardness": "Soft-Medium"
    },
    {
      "title": "Sky Wing",
      "description": "High-throw pips rubber with unique playing characteristics for advanced players.",
      "speed": "Medium-High",
      "spin": "High",
      "control": "Medium",
      "hardness": "Medium-Hard"
    }
  ];

  blades = [
    {
      "title": "729 Aramid Carbon Blade V-6",
      "description": "High-performance offensive blade with aramid carbon layers for explosive power and dynamic strokes.",
      "speed": "High",
      "control": "Medium-High",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 92,
      "plies": "5+2 (Limba outer, Ayous inner, Aramid Carbon layers)",
      "material": "Limba, Ayous, Aramid Carbon"
    },
    {
      "title": "729 3K Carbon Blade F-1",
      "description": "Professional-grade offensive blade with 3K carbon layers for maximum speed and precision.",
      "speed": "Very High",
      "control": "Medium",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": 94,
      "plies": "5+2 (Limba outer, Ayous inner, 3K Carbon layers)",
      "material": "Limba, Ayous, 3K Carbon"
    },
    {
      "title": "729 Carbon Blade Z-2",
      "description": "Balanced offensive blade with carbon layers for a blend of speed, spin, and control.",
      "speed": "High",
      "control": "High",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 88,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Limba, Ayous, Carbon"
    },
    {
      "title": "729 Professional Wood Blade C-2",
      "description": "Classic all-round blade with five plies for consistent control and good feeling.",
      "speed": "Medium",
      "control": "High-Very High",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 86,
      "plies": "5 (Limba outer, Ayous inner)",
      "material": "Limba, Ayous"
    },
    {
      "title": "729 Blue Arylate Carbon Blade",
      "description": "Speed-oriented offensive blade with arylate carbon layers for powerful topspin and aggressive play.",
      "speed": "High-Very High",
      "control": "Medium",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": 90,
      "plies": "5+2 (Limba outer, Ayous inner, Arylate Carbon layers)",
      "material": "Limba, Ayous, Arylate Carbon"
    },
    {
      "title": "729 Defensive Blade W-1",
      "description": "Defensive blade with thick plies and large sweet spot for excellent control and defensive strategies.",
      "speed": "Low-Medium",
      "control": "Very High",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 88,
      "plies": "7 (Cypress outer, Ayous inner)",
      "material": "Cypress, Ayous"
    },
    {
      "title": "729 Yellow Arylate Carbon Blade",
      "description": "Balanced offensive blade with arylate carbon layers for a combination of speed, spin, and control.",
      "speed": "High",
      "control": "High",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 88,
      "plies": "5+2 (Limba outer, Ayous inner, Arylate Carbon layers)",
      "material": "Limba, Ayous, Arylate Carbon"
    },
    {
      "title": "729 White Ash Blade",
      "description": "Classic all-round blade with five ash plies for consistent control and good feeling.",
      "speed": "Medium",
      "control": "High-Very High",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 86,
      "plies": "5 (Ash outer, Ayous inner)",
      "material": "Ash, Ayous"
    },
    {
      "title": "729 Hurricane Pro Blade",
      "description": "High-performance offensive blade with built-in tensor technology for increased speed and dynamics.",
      "speed": "Very High",
      "control": "Medium-High",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": 94,
      "plies": "5+2 (Limba outer, Ayous inner, Tensor layer)",
      "material": "Limba, Ayous, Tensor"
    },
    {
      "title": "729 Tornado Pro Blade",
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
      "title": "729 Z9 Plus Blade",
      "description": "Professional-grade offensive blade with unique composition for explosive power and precise control.",
      "speed": "Very High",
      "control": "Medium",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": 90,
      "plies": "7 (Special composition with carbon and other materials)",
      "material": "Special composite, including carbon"
    },
    {
      "title": "729 Master II Blade",
      "description": "Balanced all-round blade with limba top ply for consistent control and good feeling.",
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
      "title": "729 Yinhe Moon Pro Blade",
      "description": "High-performance offensive blade with limba outer ply and hinoki inner ply for exceptional feel and explosive power.",
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
      "title": "729 Yinhe Mars Pro Blade",
      "description": "Speed-oriented offensive blade with limba outer ply and kiri inner ply for aggressive topspin and powerful play.",
      "speed": "Very High",
      "control": "Medium-High",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": 92,
      "plies": "5 (Limba outer, Kiri inner)",
      "material": "Limba, Kiri"
    },
    {
      "title": "729 Super Spin Blade",
      "description": "Spin-oriented all-round blade with tacky topsheet and medium sponge for excellent spin generation and control.",
      "speed": "Medium",
      "control": "High-Very High",
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 88,
      "plies": "5 (Cypress outer, Ayous inner, Tacky topsheet, Medium sponge)",
      "material": "Cypress, Ayous, Tacky rubber, Medium sponge"
    }
  ];

  balls = [
    {
      "title": "729 40+ 3*** Seamless Training Ball",
      "description": "Seamless ball for consistent bounce and durability, ITTF approved for training and competition."
    },
    {
      "title": "729 40+ 3*** National Edition Ball",
      "description": "High-quality ball with precise bounce and spin characteristics, selected for Chinese national competitions."
    },
    {
      "title": "729 40+ 3*** ABS Training Ball",
      "description": "ABS plastic ball for a consistent bounce and longer lifespan, ideal for training and practice sessions."
    }
  ];

  topRubbers= [
    {
      "title": "Friendship Super 729 FX",
      "description": "High-performance rubber with tacky topsheet for aggressive topspin and strong loops."
    },
    {
      "title": "729 Focus III",
      "description": "Spin-oriented rubber with grippy topsheet for exceptional spin generation and powerful play."
    },
    {
      "title": "729 Evolution",
      "description": "Balanced all-round rubber for consistent control and good feeling for various styles."
    }
  ];

  topBlades = [
    {
      "title": "729 Aramid Carbon Blade V-6",
      "description": "High-performance offensive blade with carbon layers for explosive power and aggressive play."
    },
    {
      "title": "729 Yinhe Moon Pro Blade",
      "description": "Spin-oriented offensive blade with limba and hinoki plies for exceptional feel and spin generation."
    },
    {
      "title": "729 Evolution Pro Blade",
      "description": "Balanced all-round blade with limba outer ply and carbon layers for versatility and consistent control."
    }
  ];
    
}
