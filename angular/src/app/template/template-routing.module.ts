import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';
import { HomeComponent } from './private/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { TermsComponent } from './public/terms/terms.component';


const routes: Routes = [
  // PRIVATE
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
  // PUBLIC
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
