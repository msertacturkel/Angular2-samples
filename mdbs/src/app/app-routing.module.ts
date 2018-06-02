import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CockpitComponent} from './cockpit/cockpit.component';
import {GraphComponent} from './graph/graph.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: CockpitComponent},
  {path: 'graph', component: GraphComponent},
  {path: 'cockpit', component: CockpitComponent},
  {path: '**', component: CockpitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, GraphComponent, CockpitComponent];
