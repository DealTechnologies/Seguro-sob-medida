import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { SupportComponent } from './support/support.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CadastroSeguradoComponent } from './cadastro-segurado/cadastro-segurado.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cadastro-segurado', component: CadastroSeguradoComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'support', component: SupportComponent },
    { path: 'user-policy', component: UserPolicyComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'tela-inicio', component: TelaInicioComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {
}
