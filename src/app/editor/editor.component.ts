import { HtmlEditorService, ImageService, LinkService, QuickToolbarService, QuickToolbarSettingsModel, TableService, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService]
})
export class EditorComponent implements OnInit {

  htmlContent = 'Hi, I'm Shreya!';
  finalText = '';

  tools: object = {
    type: 'MultiRow ',
    items: [
      'Undo', 'Redo', '|',
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'SubScript', 'SuperScript', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateTable', 'CreateLink',
      'Image', '|', 'ClearFormat', '|', 'FullScreen'
    ]
  };

  quickToolbarSettings: QuickToolbarSettingsModel = {
    table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
