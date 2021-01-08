import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './template/public/login/login.component';

const routes: Routes = [

  // TEMPLATE
  { path: '', component: TemplateComponent, loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
