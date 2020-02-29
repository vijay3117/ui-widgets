import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ChartsComponent } from './charts/charts.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ngfModule } from 'angular-file';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { WidgetsComponent } from './widgets/widgets.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule, MatInputModule,
  MatFormFieldModule, MatButtonToggleModule, MatButtonModule,
  MatStepperModule,
} from '@angular/material';

import { MatSnackBarModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSelectModule} from '@angular/material/select';

import {MatTooltipModule} from '@angular/material/tooltip';
import { DrawComponent } from './draw/draw.component';
import { CanvasComponent } from './draw/canvas.component';

const components = [
  UiFeaturesComponent,
  GridComponent,
  IconsComponent,
  TypographyComponent,
  SearchComponent,
  DragDropComponent,
  HighchartsChartComponent,
];

@NgModule({
  imports: [
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatExpansionModule,
    MatMenuModule,
    NgbModule,
    MatSnackBarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    AngularFontAwesomeModule,
    FormsModule,
    ngfModule,
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    UiFeaturesRoutingModule,
    DragDropModule,
  ],
  declarations: [
    ...components,
    ChartsComponent,
    FileUploadComponent,
    WidgetsComponent,
    DrawComponent,
    CanvasComponent,
  ],
})
export class UiFeaturesModule { }
