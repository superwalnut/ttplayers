import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-donic',
  templateUrl: './donic.component.html',
  styleUrls: ['./donic.component.scss']
})
export class DonicComponent {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToElement(selector:string): void {
    this.viewportScroller.scrollToAnchor(selector);
  }

  brand="Donic";

  brandDescription="Step into the world of high-precision smashes and lightning-fast rallies with Donic, a leading table tennis brand renowned for its innovative spirit and unwavering commitment to quality. For over 25 years, Donic has been synonymous with excellence, crafting equipment that empowers players of all levels to create success on the court. Imagine wielding a blade honed to perfection, its every layer meticulously chosen for explosive power and pinpoint control. Donic's blades, like the legendary Waldner series, are testaments to their dedication to cutting-edge technology, featuring technologies like Senso and Dotec for unparalleled feel and responsiveness. And let's not forget the rubbers, meticulously engineered to grip the ball with surgical precision, generating spin that would leave your opponents bewildered. But Donic is more than just equipment; it's a community. Endorsed by table tennis legends like Jan-Ove Waldner and Jörgen Persson, Donic embodies the passion and dedication that burns at the heart of the sport. So, whether you're a seasoned competitor or just starting your ping pong journey, Donic has the tools and the inspiration to help you unleash your inner champion.";

  rubbers=[
    {
      "title": "BlueGrip Pro V1",
      "description": "High-performance offensive rubber with grippy topsheet and high elasticity sponge for maximum spin and power. Ideal for professional players seeking explosive attacks and precise control.",
      "speed": 10.5,
      "spin": 10.5,
      "control": 9.5,
      "hardness": "Medium-Hard"
    },
    {
      "title": "Bluestorm Z2 Max",
      "description": "High-tension offensive rubber with grippy topsheet and medium-hard sponge for powerful topspin and strong throws. Suitable for advanced players who prioritize aggressive play.",
      "speed": 10,
      "spin": 10,
      "control": 9,
      "hardness": "Medium-Hard"
    },
    {
      "title": "Acuda S1",
      "description": "Balanced offensive rubber with grippy topsheet and soft sponge for excellent touch and spin control. Offers versatility for various playing styles and skill levels.",
      "speed": 9.5,
      "spin": 9.5,
      "control": 9.5,
      "hardness": "Soft"
    },
    {
      "title": "Ovtcharov Desto II",
      "description": "Offensive rubber with tacky topsheet and medium-hard sponge designed for dynamic topspin play. Features good balance between speed and control, suitable for advanced attackers.",
      "speed": 10,
      "spin": 10,
      "control": 9,
      "hardness": "Medium-Hard"
    },
    {
      "title": "Weltmeister",
      "description": "Classic all-round rubber with tacky topsheet and medium sponge for excellent control and feeling. Offers consistency and reliability for players of all levels.",
      "speed": 8.5,
      "spin": 9,
      "control": 9.5,
      "hardness": "Medium"
    },
    {
      "title": "SpinLord M",
      "description": "Offensive rubber with extremely tacky topsheet and medium-hard sponge for exceptional spin generation and high friction. Requires advanced technique but rewards with top-level spin variations.",
      "speed": 9.5,
      "spin": 10.5,
      "control": 9,
      "hardness": "Medium-Hard"
    },
    {
      "title": "Coppa X1 Turbo",
      "description": "Speed-oriented offensive rubber with grippy topsheet and hard sponge for explosive shots and powerful counters. Ideal for advanced players who prioritize speed and aggressive attacks.",
      "speed": 11,
      "spin": 9.5,
      "control": 8.5,
      "hardness": "Hard"
    },
    {
      "title": "VariSpin D1 Pro",
      "description": "Balanced all-round rubber with grippy topsheet and medium sponge for good versatility and spin control. Offers a blend of speed and control, suitable for players of various styles.",
      "speed": 9,
      "spin": 9,
      "control": 9.5,
      "hardness": "Medium"
    },
    {
      "title": "Doppelfisch A1",
      "description": "Offensive rubber with tacky topsheet and medium-hard sponge for powerful topspin and strong loops. Features a balance between spin and speed, ideal for attacking players.",
      "speed": 10,
      "spin": 10,
      "control": 9,
      "hardness": "Medium-Hard"
    },
    {
      "title": "Elara Pro",
      "description": "Soft offensive rubber with tacky topsheet and medium-soft sponge for excellent control and feeling. Offers high dwell time for spin manipulation and delicate touch shots.",
      "speed": 9,
      "spin": 9.5,
      "control": 9.5,
      "hardness": "Medium-Soft"
    }
  ];
  

  blades = [
    {
      "title": "Waldner Black Devil WB",
      "description": "High-performance offensive blade with a large sweet spot and stiff feel. Designed for aggressive play with excellent power and spin capabilities.",
      "speed": 10.5,
      "control": 9,
      "stiffness": "Stiff",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 92,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "Ovtcharov Carbon",
      "description": "Offensive blade with a carbon layer for explosive power and a medium-hard feel for precise control. Suitable for advanced players seeking a balance of speed and aggression.",
      "speed": 10,
      "control": 9.5,
      "stiffness": "Medium-Hard",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 90,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layer)",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "E*-S 7 Carbon",
      "description": "High-performance all-round blade with a 7-ply construction and carbon layers for a blend of speed, control, and feeling. Ideal for players seeking versatility and adaptability.",
      "speed": 9.5,
      "control": 9.5,
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 88,
      "plies": "7 (Limba outer, Kiri inner, Carbon layers)",
      "material": "Kiri, Limba, Carbon"
    },
    {
      "title": "Blue Fire M",
      "description": "Balanced offensive blade with a medium-hard feel and good elasticity for powerful shots with spin. Offers stability and control for versatile playing styles.",
      "speed": 9.5,
      "control": 9.5,
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 87,
      "plies": "5+2 (Limba outer, Ayous inner)",
      "material": "Ayous, Limba"
    },
    {
      "title": "Waldner Senso V1",
      "description": "Classic all-round blade with a limba outer ply and soft feel for excellent touch and control. Provides consistency and precision for players of all levels.",
      "speed": 8.5,
      "control": 9.5,
      "stiffness": "Soft",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 85,
      "plies": "5+2 (Limba outer, Ayous inner)",
      "material": "Ayous, Limba"
    },
    {
      "title": "Original Waldner",
      "description": "Legendary 5-ply all-round blade with a limba outer ply and balsa core for exceptional feeling and control. Favored by Timo Boll for its balance and classic performance.",
      "speed": 8.5,
      "control": 9.5,
      "stiffness": "Soft",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 84,
      "plies": "5 (Limba outer, Balsa core, Ayous inner)",
      "material": "Ayous, Balsa, Limba"
    },
    {
      "title": "Waldner Senso Carbon",
      "description": "All-round blade with a limba outer ply and carbon layers for added speed and stability. Offers a blend of control and power for offensive and defensive play.",
      "speed": 9,
      "control": 9,
      "stiffness": "Medium",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 88,
      "plies": "5+2 (Limba outer, Ayous inner, Carbon layers)",
      "material": "Ayous, Limba, Carbon"
    },
    {
      "title": "E*-S",
      "description": "Balanced all-round blade with a 5-ply construction and limba outer ply for excellent touch and control. Offers consistency and reliability for players of all levels.",
      "speed": 8.5,
      "control": 9.5,
      "stiffness": "Soft",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 86,
      "plies": "5 (Limba outer, Ayous inner)",
      "material": "Ayous, Limba"
    },
    {
      "title": "Appelgren Allround Classic",
      "description": "Classic all-round blade with a limba outer ply and medium-soft feel for excellent control and feeling. A popular choice for players seeking consistency and precision.",
      "speed": 8.5,
      "control": 9.5,
      "stiffness": "Soft",
      "hardness": "Medium",
      "consistency": "High",
      "weight": 86,
      "plies": "5 (Limba outer, Ayous inner)",
      "material": "Ayous, Limba"
    },
    {
      "title": "Blue Fire M+",
      "description": "Offensive blade with a medium-hard feel and more stiffness than the Blue Fire M for increased power and speed. Suitable for advanced players who prioritize offensive play.",
      "speed": 10,
      "control": 9,
      "stiffness": "Medium-Hard",
      "hardness": "Medium-Hard",
      "consistency": "High",
      "weight": 90,
      "plies": "5+2 (Limba outer, Ayous inner)",
      "material": "Ayous, Limba"
    }
  ];
  

  balls = [
    {
      "title": "Donic P40+***",
      "description": "Top-quality 3-star ball for competition and training. Consistent bounce, roundness, and durability.",
      "image": "https://www.donic.com/media/image/4f/54/54/P40_3Sterne_Ball_weiss_40mm_4er_Pack_DONIC_4f545415135ab54afc154a754456729f.jpg"
    },
    {
      "title": "Donic Coach P40+**",
      "description": "Durable 2-star training ball with good bounce and roundness. Excellent value for practice and club play.",
      "image": "https://www.donic.com/media/image/15/e5/a9/Coach_4er_40mm_2_Sterne_DONIC_15e5a94e15654254afc154a754456729f.jpg"
    },
    {
      "title": "Donic Jade 40+",
      "description": "Recreational ball for fun and casual play. Good bounce and durability at an affordable price.",
      "image": "https://racketsandstrings.com/product/donic-jade-table-tennis-ball-12-pack"
    },
    {
      "title": "Donic Schildkröt 3-Star***",
      "description": "Competition-grade ball with consistent bounce and roundness. Manufactured by Schildkröt, a Donic brand.",
      "image": "https://www.donic.com/media/image/59/4a/54/Schildkrot_3_Sterne_4er_Pack_DONIC_594a544a15654254afc154a754456729f.jpg"
    },
    {
      "title": "Donic Schildkröt 40+ Training*",
      "description": "Durable training ball with good bounce and roundness, ideal for practice and club play. Manufactured by Schildkröt.",
      "image": "https://www.donic.com/media/image/95/a5/4a/Schildkrot_Trainingsball_4er_Pack_DONIC_95a54a4a15654254afc154a754456729f.jpg"
    }
   ];
   

  topRubbers= [
    {
      "title": "BlueGrip Pro V1",
      "description": "High-performance offensive rubber with excellent spin and power for aggressive play."
    },
    {
      "title": "Acuda S1",
      "description": "Balanced all-round rubber offering versatility, control, and spin for various styles."
    },
    {
      "title": "Weltmeister",
      "description": "Classic all-round rubber with consistent control and feeling for players of all levels."
    }
  ];
  

  topBlades = [
    {
      "title": "Waldner Black Devil WB",
      "description": "High-performance offensive blade for explosive power and spin capabilities."
    },
    {
      "title": "Ovtcharov Carbon",
      "description": "Balanced offensive blade combining speed, control, and precise feel for advanced players."
    },
    {
      "title": "Waldner Senso V1",
      "description": "Classic all-round blade with limba outer ply for excellent touch, control, and consistency."
    }
  ];
  
}
