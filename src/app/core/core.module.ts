import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './../shared/material/material.module';

import { AuthService } from '../shared/services/auth/auth.service';
import { HighlightBorderDirective } from '../shared/directives/highlight-border/highlight-border.directive';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { NoDataComponent } from './no-data/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AuthService,
    HighlightBorderDirective,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    LoadMoreComponent,
    NoDataComponent
  ],
  exports: [
    MaterialModule,
    AuthService,
    HighlightBorderDirective,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    LoadMoreComponent,
    NoDataComponent
  ]
})
export class CoreModule { }
