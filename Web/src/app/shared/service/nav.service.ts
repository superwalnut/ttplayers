import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
   type?: string;
   icon?:string;
	badgeType?: string;
	badgeValue?: string;
   active?: boolean;
   megaMenu?: boolean;
   megaMenuType?: string; // small, medium, large
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() {   }

  MENUITEMS: Menu[] = [
	 {
			title: 'Players', type: 'link', path: '/players',
    },
    {
			title: 'Events', type: 'link', path:'/events',
    },
    {
         title: 'Create Account', type:'link', path:'/register'
    }
   //  {
	// 		title: 'Pages', type: 'sub', children: [
   //          { path: '/404', title: '404',  type: 'link' },
   //          { path: '/page/faq', title: 'FAQ',  type: 'link' },
   //          { path: '/page/typography', title: 'Typography',  type: 'link' },
   //          { path: '/maintenance', title: 'Maintenance',  type: 'link' },
   //          { path: '/page/about-us', title: 'About-us',  type: 'link' },

   //       { title: 'Team',  type: 'sub', children: [
   //             { path: '/page/team', title: 'Team',  type: 'link' },
   //             { path: '/page/team-grid', title: 'Team Grid',  type: 'link' },
   //             { path: '/page/team-list', title: 'Team List',  type: 'link' }]
   //       },
   //       { title: 'Comming Soon',  type: 'sub', children: [
         
   //          { path: '/commingsoon1', title: 'Comming Soon1',  type: 'link' },
   //          { path: '/commingsoon2', title: 'Comming Soon2',  type: 'link' }]
   //       }]
   //  },
   //  { 
   //    title: 'Elements',  megaMenu: true, megaMenuType: 'small',  type: 'sub', children: [
   //      { title: 'Elements1',  type: 'sub', children: [
   //          { path: '/elements/alerts', title: 'Alerts',  type: 'link', icon:'alert' },
   //          { path: '/elements/accordion', title: 'Accordion',  type: 'link', icon:'layout-accordion-merged' },
   //          { path: '/elements/boxshadow', title: 'Box Shadow',  type: 'link', icon:'layers' }, 
   //          { path: '/elements/button', title: 'Buttons',  type: 'link', icon:'write' }, 
   //          { path: '/elements/contact', title: 'Contact',  type: 'link', icon:'map-alt' },]
   //      },
   //      { title: 'Elements2',  type: 'sub', children: [
   //          { path: '/elements/event-schedule', title: 'Event-Schedule',  type: 'link', icon:'list' },
   //          { path: '/elements/gallery', title: 'Gallery',  type: 'link', icon:'gallery' },
   //          { path: '/elements/pricing', title: 'Pricing',  type: 'link', icon:'money' },
   //          { path: '/elements/counter', title: 'Counter',  type: 'link', icon:'time' },
   //          { path: '/elements/count-down', title: 'Countdown',  type: 'link', icon:'alarm-clock' }]
   //      },
   //      { title: 'Elements3',  type: 'sub', children: [
   //        { path: '/elements/progressbar', title: 'Progress Bar',  type: 'link', icon:'bar-chart' },
   //        { path: '/elements/testimonial', title: 'Testimonial',  type: 'link', icon:'thought' },
   //        { path: '/elements/video', title: 'Video',  type: 'link', icon:'video-camera' },
   //        { path: '/elements/service', title: 'Service',  type: 'link', icon:'headphone' },
   //        { path: '/elements/subscribe', title: 'Subscribe',  type: 'link', icon:'share-alt' }]
   //      }
   //    ]
   //  },   
   //  { 
   //    title: 'Shop',  megaMenu: true, megaMenuType: 'large',  type: 'sub', children: [
   //     { title: 'Shop Categories',  type: 'link', children: [
   //        { path: '/shop/collection-left-sidebar/all', title: 'Left Sidebar',  type: 'link' },
   //        { path: '/shop/collection-left-sidebar-two-grid/all', title: 'Two Grid',  type: 'link' },
   //        { path: '/shop/collection-left-sidebar-three-grid/all', title: 'Three Grid',  type: 'link' },
   //        { path: '/shop/collection-right-sidebar/all', title: 'Right Sidebar',  type: 'link' },
   //        { path: '/shop/collection-right-sidebar-two-grid/all', title: 'Two Grid',  type: 'link' },
   //        { path: '/shop/collection-right-sidebar-three-grid/all', title: 'Three Grid',  type: 'link' }]
   //     },
   //     { title: 'Shop Categories',  type: 'link', children: [
   //       { path: '/shop/collection-no-sidebar/all', title: 'No Sidebar',  type: 'link' },
   //       { path: '/shop/collection-no-sidebar-two-grid/all', title: 'Two Grid',  type: 'link' },
   //       { path: '/shop/collection-no-sidebar-three-grid/all', title: 'Three Grid',  type: 'link' },
   //       { path: '/shop/metro/all', title: 'Category Metro',  type: 'link' }]
   //     },
   //     { title: 'Product Pages',  type: 'link', children: [
   //        { path: '/shop/no-sidebar/1', title: 'No Sidebar',  type: 'link' },
   //        { path: '/shop/left-sidebar/2', title: 'Left Sidebar',  type: 'link' },
   //        { path: '/shop/right-sidebar/3', title: 'Right Sidebar',  type: 'link' },
   //        { path: '/shop/three-grid/1', title: 'Three Grid',  type: 'link' },
   //        { path: '/shop/three-grid-left-sidebar/2', title: 'Three Grid Left',  type: 'link' },
   //        { path: '/shop/three-grid-right-sidebar/3', title: 'Three Grid Right',  type: 'link' }]
   //     },
   //     { title: 'Product Pages',  type: 'link', children: [
   //        { path: '/shop/accordian/1', title: 'Accordian',  type: 'link' },
   //        { path: '/shop/bundle/1', title: 'Bundle',  type: 'link' },
   //        { path: '/shop/image-swatch/1', title: 'Image Swatch',  type: 'link' },
   //        { path: '/shop/image-outside/1', title: 'Image Outside',  type: 'link' },
   //        { path: '/shop/image-sticky/1', title: 'Image Sticky',  type: 'link' }]
   //     },
   //     { title: 'Shop Pages',  type: 'link', children: [
   //      { path: '/shop/cart', title: 'Cart',  type: 'link' },
   //      { path: '/shop/checkout', title: 'Checkout',  type: 'link' },
   //      { path: '/shop/compare', title: 'Comapre',  type: 'link' },
   //      { path: '/shop/signup', title: 'Signup',  type: 'link' },
   //      { path: '/shop/login', title: 'Login',  type: 'link' },
   //      { path: '/shop/wishlist', title: 'Wishlist',  type: 'link' }]
   //    }
   //    ]
   //  }
   ]
  
  	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   
}
