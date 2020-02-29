import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ChartsComponent } from './charts/charts.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { DrawComponent } from './draw/draw.component';


const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [{
    path: 'grid',
    component: GridComponent,
  }, {
    path: 'icons',
    component: IconsComponent,
  }, {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'search-fields',
    component: SearchComponent,
  },
  {
    path: 'drag-drop',
    component: DragDropComponent,
  },
  {
    path: 'charts',
    component: ChartsComponent,
  },
  {
    path: 'file-upload',
    component: FileUploadComponent,
  },
  {
    path: 'widgets',
    component: WidgetsComponent,
  },
  {
    path: 'draw',
    component: DrawComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
