import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiComponent } from './wiki/wiki.component';
import { ButterflyComponent } from './wiki/butterfly/butterfly.component';
import { AndroComponent } from './wiki/andro/andro.component';
import { CornilleauComponent } from './wiki/cornilleau/cornilleau.component';
import { DonicComponent } from './wiki/donic/donic.component';
import { DoubleHappinessComponent } from './wiki/double-happiness/double-happiness.component';
import { JoolaComponent } from './wiki/joola/joola.component';
import { KillerspinComponent } from './wiki/killerspin/killerspin.component';
import { NittakuComponent } from './wiki/nittaku/nittaku.component';
import { SevenTwoNineComponent } from './wiki/seven-two-nine/seven-two-nine.component';
import { StigaComponent } from './wiki/stiga/stiga.component';
import { TibharComponent } from './wiki/tibhar/tibhar.component';
import { VictasComponent } from './wiki/victas/victas.component';
import { XiomComponent } from './wiki/xiom/xiom.component';
import { YasakaComponent } from './wiki/yasaka/yasaka.component';

const routes: Routes = [
  {
    path: '',
    component: WikiComponent,
    data: {title:"Table Tennis Brands Rubbers, Blades and Balls"}
  },
  { path: 'butterfly', component: ButterflyComponent, data: {title:"Table Tennis Brand - Butterfly: Rubbers, Blades and Balls"}},
  { path: 'andro', component: AndroComponent, data: {title:"Table Tennis Brand - Andro: Rubbers, Blades and Balls"}},
  { path: 'cornilleau', component: CornilleauComponent, data: {title:"Table Tennis Brand - Cornilleau: Rubbers, Blades and Balls"}},
  { path: 'donic', component: DonicComponent, data: {title:"Table Tennis Brand - Donic: Rubbers, Blades and Balls"}},
  { path: 'double-happiness', component: DoubleHappinessComponent, data: {title:"Table Tennis Brand - DHS: Rubbers, Blades and Balls"}},
  { path: 'joola', component: JoolaComponent, data: {title:"Table Tennis Brand - Joola: Rubbers, Blades and Balls"}},
  { path: 'killerspin', component: KillerspinComponent, data: {title:"Table Tennis Brand - Killerspin: Rubbers, Blades and Balls"}},
  { path: 'nittaku', component: NittakuComponent, data: {title:"Table Tennis Brand - Nittaku: Rubbers, Blades and Balls"}},
  { path: '729', component: SevenTwoNineComponent, data: {title:"Table Tennis Brand - 729: Rubbers, Blades and Balls"}},
  { path: 'stiga', component: StigaComponent, data: {title:"Table Tennis Brand - Stiga: Rubbers, Blades and Balls"}},
  { path: 'tibhar', component: TibharComponent, data: {title:"Table Tennis Brand - Tibhar: Rubbers, Blades and Balls"}},
  { path: 'victas', component: VictasComponent, data: {title:"Table Tennis Brand - Victas: Rubbers, Blades and Balls"}},
  { path: 'xiom', component: XiomComponent, data: {title:"Table Tennis Brand - XIOM: Rubbers, Blades and Balls"}},
  { path: 'yasaka', component: YasakaComponent, data: {title:"Table Tennis Brand - Yasaka: Rubbers, Blades and Balls"}},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }
