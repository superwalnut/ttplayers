import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-yasaka',
  templateUrl: './yasaka.component.html',
  styleUrls: ['./yasaka.component.scss']
})
export class YasakaComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "Yasaka";

  brandDescription="";

  rubbers=[
    {
      "title": "Rakza PO+",
      "description": "Explosive power and spin with tacky topsheet and hard sponge. Ideal for aggressive topspin play.",
      "speed": "10",
      "spin": "10",
      "control": "7.5",
      "hardness": "Hard"
    },
    {
      "title": "Mark V H-50",
      "description": "Classic offensive rubber with grippy, high-friction topsheet and medium-hard sponge. Excellent for versatile offensive play.",
      "speed": "9.5",
      "spin": "9.5",
      "control": "8.5",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Falkenberg",
      "description": "Powerful and dynamic rubber with hard sponge and grippy topsheet. Generates explosive topspin and smashes.",
      "speed": "10",
      "spin": "9.5",
      "control": "8",
      "hardness": "Hard"
    },
    {
      "title": "Rakza 7 Soft",
      "description": "Balanced offensive rubber with soft sponge and tacky topsheet. Offers high speed and good spin with decent control.",
      "speed": "9.5",
      "spin": "9.5",
      "control": "8.5",
      "hardness": "Medium"
    },
    {
      "title": "Mark V XS",
      "description": "Versatile rubber with medium-hard sponge and tacky topsheet. Offers good balance of speed, spin, and control for all-round play.",
      "speed": "9",
      "spin": "9",
      "control": "9",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Rakza 7",
      "description": "Popular all-round rubber with medium-hard sponge and slightly tacky topsheet. Provides good balance of offensive and defensive capabilities.",
      "speed": "9",
      "spin": "9",
      "control": "9",
      "hardness": "Medium-Hard"
    },
    {
      "title": "Pryde",
      "description": "Lightweight and dynamic rubber with soft sponge and slightly tacky topsheet. Offers good feel and control for all-round play.",
      "speed": "8.5",
      "spin": "8.5",
      "control": "9",
      "hardness": "Medium"
    },
    {
      "title": "Regal",
      "description": "Balanced rubber with a medium sponge and grippy topsheet. Offers good control and spin for blocking and counter-hitting.",
      "speed": "8.5",
      "spin": "8.5",
      "control": "9.5",
      "hardness": "Medium-Hard"
    },
    {
      "title": "DragonGrip",
      "description": "Soft and spinny rubber with long pimples. Disrupts opponent's rhythm and generates unpredictable spin variations.",
      "speed": "8",
      "spin": "9.5",
      "control": "8.5",
      "hardness": "Soft"
    },
    {
      "title": "Pimple King",
      "description": "Classic defensive rubber with long pimples. Offers excellent control and ability to absorb powerful shots.",
      "speed": "7.5",
      "spin": "8",
      "control": "9.5",
      "hardness": "Soft"
    },
    {
      "title": "Mark V H-80",
      "description": "Hard and grippy rubber with medium pimples. Enables effective blocking and counter-hitting against aggressive attacks.",
      "speed": "8.5",
      "spin": "8",
      "control": "8.5",
      "hardness": "Hard"
    },
    {
      "title": "Extragripping",
      "description": "Defensive rubber with short pimples. Provides good control and ability to counter-attack with precision.",
      "speed": "8",
      "spin": "8",
      "control": "9",
      "hardness": "Medium"
    }
  ];  

  blades = [ {
    "title": "Dynasty Carbon",
    "description": "Powerful and all-round blade with carbon layers for explosive offense and precise control. Great for aggressive topspin play.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Dynasty-Carbon-blade.jpg",
    "speed": "9.5",
    "control": "9",
    "stiffness": "Stiff",
    "hardness": "Hard",
    "consistency": "High",
    "weight": "90g",
    "plies": "5+2 carbon",
    "material": "Limba, Ayous, Kiri, Carbon"
  },
  {
    "title": "Sweden Extra",
    "description": "Classic offensive blade with limba outer plies for exceptional feel and touch. Offers a balance of speed and control for versatile offensive play.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Sweden-Extra-blade.jpg",
    "speed": "9",
    "control": "9.5",
    "stiffness": "Medium-Stiff",
    "hardness": "Medium",
    "consistency": "High",
    "weight": "85g",
    "plies": "5+2 limba",
    "material": "Limba, Ayous, Kiri"
  },
  {
    "title": "Falcon",
    "description": "Lightweight and dynamic blade with a large sweet spot. Ideal for fast loops and aggressive drives.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Falcon-blade.jpg",
    "speed": "10",
    "control": "8.5",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": "80g",
    "plies": "5",
    "material": "Ayous, Spruce, Hinoki"
  },
  {
    "title": "Gatien Extra",
    "description": "Flexible and all-round blade with limba outer plies. Provides excellent feel and control for both offensive and defensive play.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Gatien-Extra-blade.jpg",
    "speed": "8.5",
    "control": "9.5",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": "88g",
    "plies": "5+2 limba",
    "material": "Limba, Ayous, Kiri"
  },
  {
    "title": "Prime",
    "description": "Powerful and dynamic blade with a stiff construction. Generates explosive topspin and smashes for aggressive players.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Prime-blade.jpg",
    "speed": "10",
    "control": "8",
    "stiffness": "Very Stiff",
    "hardness": "Hard",
    "consistency": "High",
    "weight": "95g",
    "plies": "5+2 kiri",
    "material": "Kiri, Ayous, Carbon"
  },
  {
    "title": "Mark V",
    "description": "Classic all-round blade known for its excellent balance of speed, control, and feel. Suitable for a wide range of playing styles.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Mark-V-blade.jpg",
    "speed": "8.5",
    "control": "9",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": "87g",
    "plies": "5",
    "material": "Limba, Ayous"
  },
  {
    "title": "Hinoki",
    "description": "High-quality blade crafted from hinoki wood for exceptional feel and precision. Offers good balance for offensive and defensive play.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Hinoki-blade.jpg",
    "speed": "8.5",
    "control": "9",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": "85g",
    "plies": "5",
    "material": "Hinoki, Ayous"
  },
  {
    "title": "Sweden Classic",
    "description": "Classic defensive blade with limba outer plies for excellent control and ability to absorb powerful shots.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Sweden-Classic-blade.jpg",
    "speed": "7.5",
    "control": "9.5",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": "88g",
    "plies": "5+2 limba",
    "material": "Limba, Ayous, Kiri"
  },
  {
    "title": "Yinhe",
    "description": "Lightweight and offensive blade with a large sweet spot. Offers good speed and control for attacking play.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Yinhe-blade.jpg",
    "speed": "9",
    "control": "8.5",
    "stiffness": "Stiff",
    "hardness": "Medium-Hard",
    "consistency": "High",
    "weight": "83g",
    "plies": "5",
    "material": "Ayous, Spruce, Limba"
  },
  {
    "title": "Cypress",
    "description": "Defensive blade with limba outer plies for excellent control and blocking capabilities. Ideal for absorbing powerful shots and counter-attacking.",
    "image": "https://cdn.tabletennisnow.com/wp-content/uploads/2019/04/Yasaka-Cypress-blade.jpg",
    "speed": "8",
    "control": "9.5",
    "stiffness": "Medium",
    "hardness": "Medium",
    "consistency": "High",
    "weight": "87g",
    "plies": "5+2 limba",
    "material": "Limba, Ayous, Kiri"
  }
];

  balls = [];

  topRubbers= [
    {
      "title": "Rakza PO+",
      "description": "Explosive power & spin, tacky topsheet, ideal for aggressive topspin."
    },
    {
      "title": "Mark V",
      "description": "Classic all-round rubber, good balance of speed, spin & control."
    },
    {
      "title": "Rakza 7",
      "description": "Popular all-round rubber, balanced offense & defense, slightly tacky."
    }
  ];

  topBlades = [
    {
      "title": "Dynasty Carbon",
      "description": "Powerful all-round blade with carbon layers for explosive offense and precise control. Great for aggressive topspin play."
    },
    {
      "title": "Sweden Extra",
      "description": "Classic offensive blade with limba outer plies for exceptional feel and touch. Offers a balance of speed and control for versatile offensive play."
    },
    {
      "title": "Mark V",
      "description": "Popular all-round blade known for its excellent balance of speed, control, and feel. Suitable for a wide range of playing styles."
    }
  ];
  
}
