import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ThemeDirective} from './theme.directive';
import { ThemeService } from './theme.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ThemeDirective],
  providers: [ThemeService],
  exports:      [ThemeDirective],
})
export class ThemesModule { }
