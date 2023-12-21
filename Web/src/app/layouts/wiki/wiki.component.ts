import { Component } from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent {

  brands = [
    {
      "title": "Butterfly",
      "origin": "Japan",
      "description": "Known for high-quality blades, rubbers, balls, and tables used by professional players worldwide.",
      "link":"butterfly",
      "img": "/assets/images/wiki/butterfly-logo.png"
    },
    {
      "title": "DHS (Double Happiness)",
      "origin": "China",
      "description": "Offers a wide range of paddles, rubbers, and accessories catering to players of all levels.",
      "link":"double-happiness",
      "img": "/assets/images/wiki/dhs-logo.png"
    },
    {
      "title": "STIGA",
      "origin": "Sweden",
      "description": "Recognized for offering a variety of blades, rubbers, and tables suitable for various skill levels.",
      "link":"stiga",
      "img": "/assets/images/wiki/stiga-logo.png"
    },
    {
      "title": "Yasaka",
      "origin": "Japan",
      "description": "Provides innovative rubbers and blades suitable for diverse playing styles.",
      "link":"yasaka",
      "img": "/assets/images/wiki/yasaka-logo.png"
    },
    {
      "title": "Nittaku",
      "origin": "Japan",
      "description": "Produces premium-quality balls, rubber sheets, and blades used in international competitions.",
      "link":"nittaku",
      "img": "/assets/images/wiki/nittaku-logo.png"
    },
    {
      "title": "JOOLA",
      "origin": "Germany",
      "description": "Offers a broad range of tables, rubbers, and paddles for recreational and competitive players.",
      "link": "joola",
      "img": "/assets/images/wiki/joola-logo.png"
    },
    {
      "title": "Donic",
      "origin": "Germany",
      "description": "Provides extensive range of rubbers, blades, and accessories suitable for table tennis enthusiasts.",
      "link": "donic",
      "img": "/assets/images/wiki/donic-logo.png"
    },
    {
      "title": "Tibhar",
      "origin": "Germany",
      "description": "Popular among competitive players for its rubber sheets and accessories.",
      "link": "tibhar",
      "img": "/assets/images/wiki/tibhar-logo.png"
    },
    {
      "title": "Killerspin",
      "origin": "United States",
      "description": "Offers paddles, tables, and accessories suitable for enthusiasts with a focus on style and performance.",
      "link": "killerspin",
      "img": "/assets/images/wiki/killerspin-logo.png"
    },
    {
      "title": "Andro",
      "origin": "Germany",
      "description": "Emphasizes innovation and performance in its equipment, catering to various playing styles.",
      "link": "andro",
      "img": "/assets/images/wiki/andro-logo.png"
    },
    {
      "title": "Cornilleau",
      "origin": "France",
      "description": "Renowned for durable and high-quality tables suitable for recreational and professional use.",
      "link": "cornilleau",
      "img": "/assets/images/wiki/cornilleau-logo.png"
    },
    {
      "title": "729",
      "origin": "China",
      "description": "Offers a range of table tennis equipment catering to players of various skill levels.",
      "link": "729",
      "img": "/assets/images/wiki/729-logo.png"
    },
    {
      "title": "Xiom",
      "origin": "South Korea",
      "description": "Provides equipment including rubbers, blades, and accessories suitable for diverse playing styles.",
      "link": "xiom",
      "img": "/assets/images/wiki/xiom-logo.png"
    },
    {
      "title": "Victas",
      "origin": "Germany",
      "description": "Known for high-quality blades and rubbers with unique characteristics and performance.",
      "link": "victas",
      "img": "/assets/images/wiki/victas-logo.png"
    }
  ];
}
