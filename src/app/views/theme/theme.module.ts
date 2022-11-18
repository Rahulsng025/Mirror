// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RecordingsComponent } from './recordings/recordings.component';
import { SettingsComponent } from './settings/settings.component';
// import { MaterialModule } from '../../shared/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';

import {MatButtonModule} from '@angular/material/button';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    // MaterialModule
    MatFormFieldModule,MatButtonModule,
    MatSelectModule,ReactiveFormsModule,MatTabsModule,MatDatepickerModule,MatNativeDateModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    RecordingsComponent,
    SettingsComponent
  ]
})
export class ThemeModule { }
