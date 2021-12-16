import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PRIMENG
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {PaginatorModule} from 'primeng/paginator';
import {FileUploadModule} from 'primeng/fileupload';
import { KnobModule } from "primeng/knob";
import {TreeModule} from 'primeng/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    ButtonModule,
    CheckboxModule,
    PaginatorModule,
    FileUploadModule,
    KnobModule,
    TreeModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule
    
    
  ],
  exports:[
    CommonModule,
    TableModule,
    ToastModule,
    ButtonModule,
    CheckboxModule,
    PaginatorModule,
    FileUploadModule,
    KnobModule,
    TreeModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule
    
    
  ],
})
export class PrimeNGModule { }
