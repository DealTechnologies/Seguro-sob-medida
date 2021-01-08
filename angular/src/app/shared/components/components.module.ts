import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { I18nModule } from '../i18n.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StopPropagationModule } from 'ngx-stop-propagation';
import { CardPostComponent } from './card-post/card-post.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { SkeletonPostCardComponent } from './skeleton-post-card/skeleton-post-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserListComponent } from './user-list/user-list.component';
import { SkeletonUserListComponent } from './skeleton-user-list/skeleton-user-list.component';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ModalRespostaComponent } from './modal-resposta/modal-resposta.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ModalSolicitacaoComponent } from './modal-solicitacao/modal-solicitacao.component';
import { ModalAdicionarInfoComponent } from './modal-adicionar-info/modal-adicionar-info.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    CardPostComponent,
    SkeletonPostCardComponent,
    UserListComponent,
    SkeletonUserListComponent,
    ModalRespostaComponent,
    ModalSolicitacaoComponent,
    ModalAdicionarInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    FlexLayoutModule,
    PickerModule,
    StopPropagationModule,
    NgxSkeletonLoaderModule,
    NgxPermissionsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [
    SideMenuComponent,
    CardPostComponent,
    SkeletonPostCardComponent,
    UserListComponent
  ]
})
export class ComponentsModule {
}
