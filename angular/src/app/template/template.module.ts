import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './template.component';
import { I18nModule } from '../shared/i18n.module';
import { ThemesModule } from '../shared/themes/themes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
    declarations: [
        TemplateComponent,
    ],
    imports: [
        CommonModule,
        TemplateRoutingModule,
        ThemesModule,
        HttpClientModule,
        I18nModule,
        FlexLayoutModule,
        MatSelectModule,
        MatDialogModule,
        NgxPermissionsModule.forChild(),
        ComponentsModule
    ],
})
export class TemplateModule {
}
