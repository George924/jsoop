import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-hello-world-app';
  clothes = [
    { name: 'Tricou', color: 'Verde', size: 'XL', imgSrc:'https://green-print.ro/3979-thickbox_default/tricou-bumbac-verde-roly-atomic-150.jpg', showImage: true},
    { name: 'Pantaloni', color: 'Rosu', size: 'L', imgSrc:'https://gomagcdn.ro/domains/medisonica.ro/files/product/large/pantaloni-rosii-unisex-621-3049.png' , showImage: true},
    { name: 'Hanorac', color: 'Albastru', size: 'XXL', imgSrc:'https://green-print.ro/4446-large_default/hanorac-albastru-royal-roly-capucha.jpg' , showImage: true},
  ];
}
