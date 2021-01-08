import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms/terms.component';
import { SupportComponent } from './support/support.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { I18nModule } from 'src/app/shared/i18n.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PrivacyComponent } from './privacy/privacy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroSeguradoComponent } from './cadastro-segurado/cadastro-segurado.component';
import { MatRadioModule } from '@angular/material/radio';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPermissionsModule } from "ngx-permissions";


@NgModule({
    declarations: [
        TermsComponent,
        SupportComponent,
        UserPolicyComponent,
        FaqComponent,
        LoginComponent,
        PrivacyComponent,
        CadastroSeguradoComponent,
        TelaInicioComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        PublicRoutingModule,
        I18nModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        NgxPermissionsModule.forChild(),
        ReactiveFormsModule,
        FormsModule,
        MatRadioModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [],
    providers: [],
})
export class PublicModule { }
