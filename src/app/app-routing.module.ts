import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent} from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CyclesComponent } from './cycles/cycles.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cycles', component: CyclesComponent},
  { path: '', redirectTo: '/cycles', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
