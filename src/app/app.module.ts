import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [AppComponent, EditorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RichTextEditorModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
