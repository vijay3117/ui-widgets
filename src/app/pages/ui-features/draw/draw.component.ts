import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'ngx-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public toCanvas() {
    const index = 'download';
    const elem = document.getElementById(index.toString());
    html2canvas(elem).then(function (canvas) {
      const generatedImage = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const a = document.createElement('a');
      a.href = generatedImage;
      a.download = `${index}.png`;
      a.click();
    });
  }

}
