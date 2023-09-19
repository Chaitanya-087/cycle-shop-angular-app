import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { CyclesComponent } from './cycles/cycles.component';
import { RestockComponent } from './restock/restock.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'cycles', component: CyclesComponent},
  {path: 'restock', component: RestockComponent},
  { path: '', redirectTo: '/cycles', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
