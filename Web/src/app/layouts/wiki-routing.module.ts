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
    component: WikiComponent    
  },
  { path: 'butterfly', component: ButterflyComponent},
  { path: 'andro', component: AndroComponent},
  { path: 'cornilleau', component: CornilleauComponent},
  { path: 'donic', component: DonicComponent},
  { path: 'double-happiness', component: DoubleHappinessComponent},
  { path: 'joola', component: JoolaComponent},
  { path: 'killerspin', component: KillerspinComponent},
  { path: 'nittaku', component: NittakuComponent},
  { path: '729', component: SevenTwoNineComponent},
  { path: 'stiga', component: StigaComponent},
  { path: 'tibhar', component: TibharComponent},
  { path: 'victas', component: VictasComponent},
  { path: 'xiom', component: XiomComponent},
  { path: 'yasaka', component: YasakaComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }
