import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { AssignmentPage } from './assignment-page';


@NgModule({
  imports: [
    AssignmentPage,
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
})
export class AssignmentPageModule { }