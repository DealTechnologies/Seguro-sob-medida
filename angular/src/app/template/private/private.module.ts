import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivateRoutingModule } from './private-routing.module';
import { I18nModule } from 'src/app/shared/i18n.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StopPropagationModule } from 'ngx-stop-propagation';
import { ComponentsModule } from '../../shared/components/components.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UserComponent } from './settings/user/user.component';
import { PrivacyComponent } from './settings/privacy/privacy.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { NewUserComponent } from './new-user/new-user.component';
import { TelaSeguradoraComponent } from './tela-seguradora/tela-seguradora.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HomeComponent,
    NotificationsComponent,
    ProfileComponent,
    SettingsComponent,
    UserComponent,
    PrivacyComponent,
    NewUserComponent,
    TelaSeguradoraComponent,
  ],
  imports: [
    CommonModule,
    PickerModule,
    PrivateRoutingModule,
    I18nModule,
    FlexLayoutModule,
    NgxSkeletonLoaderModule,
    StopPropagationModule,
    ComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    NgxPermissionsModule.forChild(),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule

  ],
  exports: [],
  providers: [],
})
export class PrivateModule {
}
