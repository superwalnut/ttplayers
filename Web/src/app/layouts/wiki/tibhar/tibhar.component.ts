import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tibhar',
  templateUrl: './tibhar.component.html',
  styleUrls: ['./tibhar.component.scss']
})
export class TibharComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand = "Tibhar";

  brandDescription="Tibhar, a renowned German table tennis brand established in 1979, has built a legacy of quality and innovation within the sport. From its humble beginnings as a small family business to its current position as a global leader, Tibhar has consistently impressed players with its high-performance equipment and unwavering dedication to table tennis. Tibhar's impact on table tennis extends beyond just equipment. The brand sponsors major tournaments and academies, actively supporting the development of future generations of players. The Tibhar University Table Tennis Training Center in Germany offers advanced coaching and training facilities, attracting young talents from around the world.";

  rubbers=[
    {
      "title": "Evolution MX-P",
      "description": "The king of spin and power, ideal for aggressive players seeking maximum offensive firepower. Hard sponge, grippy topsheet.",
      "speed": "9/10",
      "spin": "10/10",
      "control": "8/10",
      "hardness": "45°",
      "image": "https://cdn.tabletennis11.com/img/products/555/968/TIBMXP.jpg"
    },
    {
      "title": "Evolution MX-S",
      "description": "A balance between the MX-P's raw power and spin with more control. Versatile for offensive players who prioritize precision.",
      "speed": "8.5/10",
      "spin": "9/10",
      "control": "9/10",
      "hardness": "43°",
      "image": "https://cdn.tabletennis11.com/img/products/555/969/TIBMXS.jpg"
    },
    {
      "title": "Hybrid K3",
      "description": "Built-in speed glue effect with explosive power and spin while maintaining control. Unique choice for those seeking top performance.",
      "speed": "9.5/10",
      "spin": "10/10",
      "control": "8/10",
      "hardness": "44°",
      "image": "https://www.pingpongplus.net/wp-content/uploads/2020/06/tibhar-hybrid-k3-table-tennis-rubber.jpg"
    },
    {
      "title": "Evolution EL-S",
      "description": "Spin machine for generating loops and serves. Soft sponge and tacky topsheet prioritize touch and control over raw power.",
      "speed": "8/10",
      "spin": "10/10",
      "control": "9.5/10",
      "hardness": "40°",
      "image": "https://cdn.tabletennis11.com/img/products/555/971/TIBELS.jpg"
    },
    {
      "title": "Evolution FX-S",
      "description": "Softest option in the Evolution series, focusing on maximum control and feeling. Spin-oriented for players who value touch and precision.",
      "speed": "7.5/10",
      "spin": "9/10",
      "control": "10/10",
      "hardness": "38°",
      "image": "https://cdn.tabletennis11.com/img/products/555/972/TIBFXS.jpg"
    },
    {
      "title": "Evolution MX-D",
      "description": "The all-rounder's dream, balancing speed, spin, and control for both offensive and defensive strokes. A versatile option for diverse playstyles.",
      "speed": "8/10",
      "spin": "8.5/10",
      "control": "9/10",
      "hardness": "42°",
      "image": "https://cdn.tabletennis11.com/img/products/555/970/TIBMXD.jpg"
    },
    {
      "title": "Evolution EL-D",
      "description": "Spinnier and softer MX-D, prioritizing control and feeling for all-round players who prefer a touch-oriented game.",
      "speed": "7.5/10",
      "spin": "9/10",
      "control": "9.5/10",
      "hardness": "40°",
      "image": "https://cdn.tabletennis11.com/img/products/555/973/TIBELD.jpg"
    },
    {
      "title": "Evolution FX-D",
      "description": "The soft and spinny all-rounder in the Evolution family. Prioritizes control and feeling, excelling in touch play and finesse over raw power. Perfect for players who value precision and comfort.",
      "speed": "7.5/10",
      "spin": "9/10",
      "control": "9.5/10",
      "hardness": "40°"
    },
    {
      "title": "Evolution DST",
      "description": "The defensive specialist, offering exceptional control and dwell time for precise blocking and counter-hitting. Soft sponge and grippy topsheet allow for masterful manipulation of the ball's trajectory.",
      "speed": "7/10",
      "spin": "8/10",
      "control": "9.5/10",
      "hardness": "40°"
    },
    {
      "title": "Grass D.TecS",
      "description": "A popular long pimple rubber, disrupting your opponent's rhythm and generating unpredictable spin variations. Grippy topsheet and high friction make it a master of deception and tactical play.",
      "speed": "7.5/10",
      "spin": "9/10",
      "control": "8/10",
      "hardness": "42°"
    },
    {
      "title": "Speedy Spin",
      "description": "A high-performance short pimple rubber for aggressive attacking options. Tacky topsheet and excellent speed allow for powerful smashes and drives while maintaining good control.",
      "speed": "8.5/10",
      "spin": "9/10",
      "control": "8/10",
      "hardness": "44°"
    }
  ];

  blades = [
    {
      "title": "Phenix",
      "description": "The Phenix blade offers the pinnacle of speed and control, ideal for aggressive players seeking maximum firepower and precision. Crafted with Ayous, Limba, Kiri, and Carbon material.",
      "speed": "10/10",
      "control": "9/10",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "Excellent",
      "weight": 90,
      "plies": 5,
      "material": "Ayous, Limba, Kiri, Carbon"
    },
    {
      "title": "Samsonov Premium Contact",
      "description": "The Samsonov Premium Contact blade balances speed and control exceptionally well, ideal for players who prefer a blend of stiffness and hardness. Incorporates Koto, Balsa, Kiri, and Carbon material.",
      "speed": "9.5/10",
      "control": "9/10",
      "stiffness": "Stiff",
      "hardness": "Hard",
      "consistency": "High",
      "weight": 85,
      "plies": 5,
      "material": "Koto, Balsa, Kiri, Carbon"
    },
    {
      "title": "IV L",
      "description": "The IV L blade strikes a balance between speed and control, suitable for players preferring a stiff and medium-hard feel. Composed of Hinoki, Limba, Balsa, Kiri, and Carbon material.",
      "speed": "9/10",
      "control": "9/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "Very High",
      "weight": 90,
      "plies": 7,
      "material": "Hinoki, Limba, Balsa, Kiri, Carbon"
    },
    {
      "title": "IV S",
      "description": "The IV S blade offers excellent speed and control, suited for players who prefer a slightly softer feel. Constructed using Hinoki, Limba, Balsa, Kiri, and Carbon material.",
      "speed": "8.5/10",
      "control": "9.5/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "Excellent",
      "weight": 85,
      "plies": 7,
      "material": "Hinoki, Limba, Balsa, Kiri, Carbon"
    },
    {
      "title": "Dima Ovtcharov OFF+",
      "description": "The Dima Ovtcharov OFF+ blade provides exceptional speed with good control, crafted from Hinoki, Ayous, Balsa, and Carbon material.",
      "speed": "10/10",
      "control": "8/10",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "Good",
      "weight": 88,
      "plies": 5,
      "material": "Hinoki, Ayous, Balsa, Carbon"
    },
    {
      "title": "Zoran Primorac OFF",
      "description": "The Zoran Primorac OFF blade offers high speed with excellent control, featuring a blend of Hinoki, Limba, Balsa, and Carbon material.",
      "speed": "9.5/10",
      "control": "8.5/10",
      "stiffness": "Stiff",
      "hardness": "Hard",
      "consistency": "Very High",
      "weight": 85,
      "plies": 5,
      "material": "Hinoki, Limba, Balsa, Carbon"
    },
    {
      "title": "Darker OFF",
      "description": "The Darker OFF blade balances speed and control well, perfect for offensive play with Hinoki, Limba, Balsa, Kiri, and Carbon material.",
      "speed": "9/10",
      "control": "8.5/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 88,
      "plies": 7,
      "material": "Hinoki, Limba, Balsa, Kiri, Carbon"
    },
    {
      "title": "Pure Wood OFF",
      "description": "The Pure Wood OFF blade offers great speed and control, made predominantly from Hinoki, Limba, and Balsa material.",
      "speed": "9/10",
      "control": "9/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "Excellent",
      "weight": 85,
      "plies": 5,
      "material": "Hinoki, Limba, Balsa"
    },
    {
      "title": "Power Wood",
      "description": "The Power Wood blade offers impressive speed and control, crafted from a combination of Limba, Ayous, and Balsa material.",
      "speed": "9/10",
      "control": "9/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "Excellent",
      "weight": 87,
      "plies": 5,
      "material": "Limba, Ayous, Balsa"
    },
    {
      "title": "IV L",
      "description": "The IV L blade is renowned for its balance of speed, control, and stiffness. Crafted with Hinoki, Limba, Balsa, Kiri, and Carbon material.",
      "speed": "9/10",
      "control": "9/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "Very High",
      "weight": 90,
      "plies": 7,
      "material": "Hinoki, Limba, Balsa, Kiri, Carbon"
    },
    {
      "title": "IV S",
      "description": "The IV S blade offers excellent stiffness and control with a mix of Hinoki, Limba, Balsa, Kiri, and Carbon material.",
      "speed": "8.5/10",
      "control": "9.5/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "Excellent",
      "weight": 85,
      "plies": 7,
      "material": "Hinoki, Limba, Balsa, Kiri, Carbon"
    },
    {
      "title": "Edge OFF+",
      "description": "The Edge OFF+ blade offers incredible speed and stiffness, crafted with Ayous, Limba, Balsa, and Carbon materials.",
      "speed": "10/10",
      "control": "8/10",
      "stiffness": "Very Stiff",
      "hardness": "Hard",
      "consistency": "Good",
      "weight": 88,
      "plies": 5,
      "material": "Ayous, Limba, Balsa, Carbon"
    },
    {
      "title": "Pro OFF",
      "description": "The Pro OFF blade features high speed and stiffness, designed with Hinoki, Limba, Balsa, and Carbon materials.",
      "speed": "9.5/10",
      "control": "8.5/10",
      "stiffness": "Stiff",
      "hardness": "Hard",
      "consistency": "Very High",
      "weight": 85,
      "plies": 5,
      "material": "Hinoki, Limba, Balsa, Carbon"
    },
    {
      "title": "Plus ALL+",
      "description": "The Plus ALL+ blade is a balanced choice with good stiffness, composed of Hinoki, Limba, Balsa, Kiri, and Carbon materials.",
      "speed": "8/10",
      "control": "9/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 88,
      "plies": 7,
      "material": "Hinoki, Limba, Balsa, Kiri, Carbon"
    },
    {
      "title": "Soft ALL+",
      "description": "The Soft ALL+ blade provides excellent control and consistency. Made with Hinoki, Limba, Balsa, Kiri, and Carbon materials.",
      "speed": "7.5/10",
      "control": "9.5/10",
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "Excellent",
      "weight": 85,
      "plies": 7,
      "material": "Hinoki, Limba, Balsa, Kiri, Carbon"
    }
  ];

  balls = [
    {
      "title": "JPS 3 Star (Made in Japan)",
      "description": "Premium quality balls for professional and competition use. Excellent roundness, consistency, and bounce. Available in white and orange."
    },
    {
      "title": "3 Star (Made in China)",
      "description": "High-quality balls suitable for club and advanced players. Consistent bounce and good durability. Available in white and orange."
    },
    {
      "title": "Basic 3 Star",
      "description": "Affordable celluloid balls for recreational and training use. Decent quality and bounce. Available in white and orange."
    },
    {
      "title": "40+ Star",
      "description": "Seamless plastic balls complying with the latest ITTF regulations. Consistent bounce and spin characteristics for competitive play. Available in white and orange."
    },
    {
      "title": "40+ Basic",
      "description": "Seamless plastic balls for recreational and training use. Good value for money with decent bounce and spin. Available in white and orange."
    },
    {
      "title": "Junior 40+",
      "description": "Light-weight plastic balls designed for younger players and beginners. Helps develop technique and control. Available in white and orange."
    },
    {
      "title": "Training Pro",
      "description": "Seamless plastic balls with visible seams for training purposes. Helps visualize spin and improve touch. Available in white and orange."
    },
    {
      "title": "Fun Ball",
      "description": "Soft and slow-bouncing plastic balls for children and beginners. Encourages hand-eye coordination and basic skills. Available in various colors."
    },
    {
      "title": "Match Point",
      "description": "Premium celluloid balls with numbered halves for scoring practice. Improves concentration and decision-making. Available in white."
    }
  ];

  topRubbers= [
    {
      "title": "Evolution MX-P",
      "description": "This highly versatile offensive rubber provides excellent balance between speed, spin, and control."
    },
    {
      "title": "Evolution EL-S",
      "description": "This spin-oriented rubber caters to players who prioritize control and feeling."
    },
    {
      "title": "Dynasoft",
      "description": "This classic all-rounder offers a unique combination of good speed and outstanding control."
    }
  ];

  topBlades = [
    {
      "title": "IV L",
      "description": "This highly customizable offensive blade delivers explosive power and precise control."
    },
    {
      "title": "Samsonov Premium Contact",
      "description": "This OFF+ blade with a large sweet spot provides outstanding balance for all-round play."
    },
    {
      "title": "Stratus Power Wood",
      "description": "This OFF+ blade excels in offensive play while maintaining enough control for strategic blocks and counters."
    }
  ];
  
}
