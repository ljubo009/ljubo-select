import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LjuboSelectComponent } from './ljubo-select.component';
import { LSelectListComponent } from './l-select-list/l-select-list.component';
import { LSelectInputComponent } from './l-select-input/l-select-input.component';
import {FormsModule} from '@angular/forms';
import { LSelectedComponent } from './l-selected/l-selected.component';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LjuboSelectComponent, LSelectListComponent, LSelectInputComponent, LSelectedComponent, SearchPipePipe],
  exports: [LjuboSelectComponent]
})
export class LjuboSelectModule { }
