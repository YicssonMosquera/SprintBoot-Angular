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
    
    
  ],
})
export class PrimeNGModule { }
