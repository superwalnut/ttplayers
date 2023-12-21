import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-joola',
  templateUrl: './joola.component.html',
  styleUrls: ['./joola.component.scss']
})
export class JoolaComponent {
  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brandDescription = "JOOLA is a renowned brand in the world of table tennis, offering a wide range of high-quality equipment including tables, rackets, rubbers, balls, and accessories. Known for their innovation and performance-driven products, JOOLA caters to players of all levels, from beginners to professionals, with gear designed to enhance gameplay and elevate the table tennis experience.";

  rubbers = [
    {
      "title": "Rhyzer",
      "description": "Pips-in rubbers suitable for offensive players. Various sponge hardness and thickness options. Non-tacky top sheet.",
      "speed": "8.5-9.5",
      "spin": "9-11",
      "control": "3.5-7.5",
      "hardness": "43-50"
    },
    {
      "title": "Rhyzm",
      "description": "Pips-in rubbers for generating powerful and spinny shots. Various sponge hardness and thickness options. Non-tacky top sheet.",
      "speed": "6.5-8.5",
      "spin": "7.5-9",
      "control": "5-10",
      "hardness": "37.5-48"
    },
    {
      "title": "Maxxx",
      "description": "Pips-in rubbers for generating powerful and spinny shots. Various sponge hardness and thickness options. Non-tacky top sheet. Tensity technology for increased grip and elasticity.",
      "speed": "6.5-8.5",
      "spin": "7.5-8.5",
      "control": "5-8.5",
      "hardness": "42.5-50"
    },
    {
      "title": "X-Plode",
      "description": "Pips-in rubbers for producing fast and direct shots. Various sponge hardness and thickness options. Non-tacky top sheet. Momentum technology for increased speed and consistency.",
      "speed": "4.5-7.5",
      "spin": "7.5",
      "control": "4.5-8",
      "hardness": "4-8.5"
    },
    {
      "title": "Samba",
      "description": "Pips-in rubbers for all-around players. Soft sponge, non-tacky top sheet. Momentum technology for increased speed and consistency.",
      "speed": "3.5-4",
      "spin": "7-7.5",
      "control": "7.5-9.5",
      "hardness": "8.5-9"
    },
    {
      "title": "Energy",
      "description": "Pips-in rubbers for all-around players. Soft sponge, non-tacky top sheet. Balance technology for increased control and durability.",
      "speed": "3.5-5",
      "spin": "5-7.5",
      "control": "7.5-9",
      "hardness": "6-9"
    },
    {
      "title": "Mambo",
      "description": "Pips-in rubbers for all-around players. Medium sponge, non-tacky top sheet. Balance technology for increased control and durability.",
      "speed": "4",
      "spin": "7",
      "control": "7",
      "hardness": "7"
    },
    {
      "title": "Zack",
      "description": "Pips-in rubbers for all-around players. Medium sponge, non-tacky top sheet. Momentum technology for increased speed and consistency.",
      "speed": "4",
      "spin": "6",
      "control": "6.5",
      "hardness": "6"
    },
    {
      "title": "Axxess",
      "description": "Pips-in rubbers for intermediate players. Medium sponge, non-tacky top sheet. Balance technology for increased control and durability.",
      "speed": "3.5",
      "spin": "5",
      "control": "7.5",
      "hardness": "6"
    },
    {
      "title": "Tango",
      "description": "Pips-out rubbers for defensive players. Soft sponge, tacky top sheet. Balance technology for increased control and durability.",
      "speed": "7-7.5",
      "spin": "9",
      "control": "8-8.5",
      "hardness": "8.5"
    },
    {
      "title": "Express",
      "description": "Pips-out rubbers for defensive players. Soft sponge, non-tacky top sheet. Ultra technology for increased speed and elasticity.",
      "speed": "7.5",
      "spin": "9",
      "control": "8",
      "hardness": "8"
    },
    {
      "title": "CWX",
      "description": "Long pimpled rubbers for defensive players. Hard top sheet. Momentum technology for increased speed and consistency.",
      "speed": "3",
      "spin": "9",
      "control": "6",
      "hardness": "9"
    }
  ];

  blades = [
    {
      "title": "Vyzaryz Hybrid",
      "description": "Blade designed for balanced play.",
      "speed": "5",
      "control": "4.5",
      "stiffness": "3",
      "hardness": "2.5",
      "consistency": "?",
      "weight": "?",
      "plies": "5+2",
      "material": "Koto, Super PBO-c, PBO-c"
    },
    {
      "title": "Vyzaryz Trinity",
      "description": "Blade focused on well-rounded performance.",
      "speed": "4",
      "control": "4.5",
      "stiffness": "3.5",
      "hardness": "2.5",
      "consistency": "?",
      "weight": "?",
      "plies": "5+2",
      "material": "Limba, X3"
    },
    {
      "title": "Vyzaryz Freeze",
      "description": "Blade emphasizing control and stability.",
      "speed": "4.5",
      "control": "4",
      "stiffness": "3.5",
      "hardness": "2",
      "consistency": "?",
      "weight": "?",
      "plies": "5+2",
      "material": "Limba, ARY-c"
    },
    {
      "title": "Vyzaryz Freeze HRD",
      "description": "Blade offering controlled and hard hitting play.",
      "speed": "5",
      "control": "3.5",
      "stiffness": "4",
      "hardness": "1.5",
      "consistency": "?",
      "weight": "?",
      "plies": "5+2",
      "material": "Koto, ARY-c"
    },
    {
      "title": "Rossi Emotion PBO-c",
      "description": "Blade designed for versatile play.",
      "speed": "4",
      "control": "4",
      "stiffness": "4.5",
      "hardness": "3",
      "consistency": "2.5",
      "weight": "?",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Energon Super PBO-c",
      "description": "Blade offering controlled and consistent performance.",
      "speed": "4.5",
      "control": "4",
      "stiffness": "4",
      "hardness": "3",
      "consistency": "2",
      "weight": "?",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Nobilis PBO-c",
      "description": "Blade focused on precision and control.",
      "speed": "4",
      "control": "4.5",
      "stiffness": "4",
      "hardness": "3",
      "consistency": "2",
      "weight": "?",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Zelebro PBO-c",
      "description": "Blade offering controlled and hard-hitting play.",
      "speed": "4.5",
      "control": "3.5",
      "stiffness": "4",
      "hardness": "4",
      "consistency": "1.5",
      "weight": "?",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Rossi Emotion",
      "description": "Blade designed for versatile play.",
      "speed": "4",
      "control": "4.5",
      "stiffness": "4",
      "hardness": "3.5",
      "consistency": "2",
      "weight": "85 g",
      "plies": "5+2",
      "material": "Hinoki, 3K-c"
    },
    {
      "title": "Xylo 7",
      "description": "Blade known for balanced performance.",
      "speed": "3.5",
      "control": "4",
      "stiffness": "4",
      "hardness": "3",
      "consistency": "?",
      "weight": "90 g",
      "plies": "7",
      "material": "Limba"
    },
    {
      "title": "Xylo 5",
      "description": "Blade emphasizing control and consistency.",
      "speed": "3",
      "control": "4.5",
      "stiffness": "4.5",
      "hardness": "3",
      "consistency": "2.5",
      "weight": "85 g",
      "plies": "5",
      "material": "Hinoki"
    },
    {
      "title": "Santoru 3K-c",
      "description": "Blade offering controlled and hard-hitting play.",
      "speed": "5",
      "control": "3",
      "stiffness": "3",
      "hardness": "4.5",
      "consistency": "1.5",
      "weight": "90 g",
      "plies": "3+2",
      "material": "Hinoki, 3K-c"
    },
    {
      "title": "Santoru KL-c Inner",
      "description": "Blade focused on controlled and consistent performance.",
      "speed": "5",
      "control": "3.5",
      "stiffness": "3.5",
      "hardness": "4",
      "consistency": "2",
      "weight": "85 g",
      "plies": "5+2",
      "material": "Hinoki, KL-c"
    },
    {
      "title": "Fever",
      "description": "A blade with balanced speed and control.",
      "speed": "3.5",
      "control": "4.5",
      "stiffness": "3",
      "hardness": "3",
      "consistency": "?",
      "weight": "85 g",
      "plies": "5",
      "material": "Limba"
    },
    {
      "title": "Falcon Fast",
      "description": "A fast blade designed for offensive play.",
      "speed": "4",
      "control": "4",
      "stiffness": "3.5",
      "hardness": "3",
      "consistency": "?",
      "weight": "90 g",
      "plies": "7",
      "material": "Limba"
    },
    {
      "title": "Falcon Medium",
      "description": "A medium-speed blade suitable for versatile play.",
      "speed": "3.5",
      "control": "4.5",
      "stiffness": "3.5",
      "hardness": "3",
      "consistency": "?",
      "weight": "85 g",
      "plies": "7",
      "material": "Limba"
    },
    {
      "title": "Falcon Slow",
      "description": "A slower blade offering great control.",
      "speed": "3",
      "control": "5",
      "stiffness": "3",
      "hardness": "3.5",
      "consistency": "?",
      "weight": "80 g",
      "plies": "7",
      "material": "Limba"
    },
    {
      "title": "Eagle Fast",
      "description": "A fast blade suitable for attacking play.",
      "speed": "4",
      "control": "4",
      "stiffness": "3.5",
      "hardness": "3",
      "consistency": "?",
      "weight": "90 g",
      "plies": "7",
      "material": "Limba"
    },
    {
      "title": "Eagle Medium",
      "description": "A medium-speed blade for balanced gameplay.",
      "speed": "3.5",
      "control": "4.5",
      "stiffness": "3.5",
      "hardness": "3",
      "consistency": "?",
      "weight": "85 g",
      "plies": "7",
      "material": "Limba"
    },
    {
      "title": "Eagle Speed",
      "description": "A speedy blade offering good control.",
      "speed": "3",
      "control": "5",
      "stiffness": "3",
      "hardness": "3.5",
      "consistency": "?",
      "weight": "80 g",
      "plies": "7",
      "material": "Limba"
    },
    {
      "title": "Eagle Carbon",
      "description": "A blade with carbon reinforcement for added speed and power.",
      "speed": "4.5",
      "control": "3.5",
      "stiffness": "4",
      "hardness": "2",
      "consistency": "?",
      "weight": "85 g",
      "plies": "5+2",
      "material": "Limba, 3K-c"
    },
    {
      "title": "Rhyzer",
      "description": "A blade designed for progressive gameplay.",
      "speed": "2.5",
      "control": "4.5",
      "stiffness": "3",
      "hardness": "3.5",
      "consistency": "?",
      "weight": "80 g",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Rhyzer Pro",
      "description": "A professional-grade blade for progressive players.",
      "speed": "3",
      "control": "4",
      "stiffness": "3.5",
      "hardness": "3",
      "consistency": "?",
      "weight": "85 g",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Rhyzer SL",
      "description": "A blade offering speed and control for progressive gameplay.",
      "speed": "3.5",
      "control": "3.5",
      "stiffness": "4",
      "hardness": "2.5",
      "consistency": "?",
      "weight": "90 g",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Rhyzer KL",
      "description": "A blade emphasizing speed and hardness for progressive players.",
      "speed": "4",
      "control": "3",
      "stiffness": "4.5",
      "hardness": "2",
      "consistency": "?",
      "weight": "85 g",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Rhyzer KL-C",
      "description": "A blade with increased speed and stiffness for progressive gameplay.",
      "speed": "4.5",
      "control": "2.5",
      "stiffness": "5",
      "hardness": "1.5",
      "consistency": "?",
      "weight": "90 g",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Rhyzer KL-C Inner",
      "description": "An inner carbon blade offering progressive speed and control.",
      "speed": "4",
      "control": "3",
      "stiffness": "4.5",
      "hardness": "2",
      "consistency": "?",
      "weight": "85 g",
      "plies": "?",
      "material": "?"
    },
    {
      "title": "Chen Defender",
      "description": "A defensive blade for precision-oriented players.",
      "speed": "1.5",
      "control": "5",
      "stiffness": "2.5",
      "hardness": "4",
      "consistency": "?",
      "weight": "85 g",
      "plies": "5",
      "material": "Koto"
    },
    {
      "title": "Chen Weixing",
      "description": "A blade emphasizing control and precision in gameplay.",
      "speed": "2",
      "control": "4.5",
      "stiffness": "3",
      "hardness": "3.5",
      "consistency": "?",
      "weight": "90 g",
      "plies": "5",
      "material": "Limba"
    },
    {
      "title": "Toni Hold White Spot",
      "description": "A blade with precision and lightweight design for finesse players.",
      "speed": "1",
      "control": "5",
      "stiffness": "2",
      "hardness": "4.5",
      "consistency": "?",
      "weight": "100 g",
      "plies": "5",
      "material": "Balsa"
    },
    {
      "title": "Tezzo",
      "description": "A versatile blade with a balanced mix of speed and control.",
      "speed": "3.5",
      "control": "4",
      "stiffness": "3.5",
      "hardness": "3",
      "consistency": "?",
      "weight": "75 g",
      "plies": "5+2",
      "material": "Balsa, Carbon"
    },
    {
      "title": "Tezzo Light",
      "description": "A lightweight blade designed for enhanced control and maneuverability.",
      "speed": "3",
      "control": "4.5",
      "stiffness": "3",
      "hardness": "3.5",
      "consistency": "?",
      "weight": "70 g",
      "plies": "5+2",
      "material": "Balsa, Carbon"
    },
    {
      "title": "Tezzo Light Plus",
      "description": "A slightly heavier version of Tezzo Light, offering a good balance of speed and control.",
      "speed": "3.5",
      "control": "4",
      "stiffness": "3.5",
      "hardness": "3",
      "consistency": "?",
      "weight": "75 g",
      "plies": "5+2",
      "material": "Balsa, Carbon"
    },
    {
      "title": "Tezzo Plus",
      "description": "A blade with increased speed and stiffness, suitable for attacking players.",
      "speed": "4",
      "control": "3.5",
      "stiffness": "4",
      "hardness": "2.5",
      "consistency": "?",
      "weight": "80 g",
      "plies": "5+2",
      "material": "Balsa, Carbon"
    }
  ];
  
  balls=[
    {
      "title": "Joola Prime 3-Star ABS",
      "description": "Official competition balls made of high-quality ABS material with a seamless design. Durable, consistent, and ideal for professional players and tournaments."
    },
    {
      "title": "Joola Flash 3-Star",
      "description": "Competition balls made of celluloid-free material with a seamless design. Fast, precise, and suitable for high-level play and training."
    },
    {
      "title": "Joola Tournament 3-Star",
      "description": "Competition balls made of celluloid-free material with a seam. Reliable, round, and characterized by good bounce characteristics."
    },
    {
      "title": "Joola Magic ABS 2-Star",
      "description": "Training balls made of ABS material with a seamless design. Economical, robust, and offering a uniform bounce and flight behavior."
    },
    {
      "title": "Joola Training 1-Star",
      "description": "Basic training balls made of celluloid-free material with a seam. Affordable, durable, and suitable for practice and recreational play."
    },
    {
      "title": "Joola Flip 40+",
      "description": "Outdoor balls made of plastic material with a seam. Weather-resistant, wind-stable, and featuring a bright color for easy visibility."
    },
    {
      "title": "Joola Primo",
      "description": "Pickleball balls made of plastic material with 40 holes. Well-balanced, stable, and suitable for outdoor pickleball play."
    },
    {
      "title": "Joola Heleus",
      "description": "Pickleball balls made of plastic material with 26 holes. USAPA approved, premium quality, and designed for tournaments and open play."
    }
  ];
  
  topRubbers = [
    {
      title:"Energy Green Power",
      description : "A soft and tacky rubber that creates a lot of spin and a high arc, ideal for defensive or passive players.",
      img: ""
    },
    {
      title:"Energy X-Tra",
      description : "Gives more speed and a lower arc, ideal for offensive or active players.",
      img: ""
    },
    {
      title:"X-Plode",
      description : "A hard and grippy rubber that generates a lot of speed and power.",
      img: ""
    }
  ];

  topBlades = [
    {
      title:"Rossi Emotion",
      description : "Offering a balanced combination of speed, spin, and control.",
      img: ""
    },
    {
      title:"Fever",
      description : "Providing great stability and consistency for all-round players.",
      img: ""
    },
    {
      title:"Vyzaryz Trinity",
      description : "Featuring the latest Hyper Bounce and Advanced Traction Surface technologies.",
      img: ""
    },
  ];
}
