import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css',
})
export class PortifolioComponent {
  isClicked: boolean = false;

  imgSrc: string = '';

  open(mainImage: string) {
    this.isClicked = true;
    this.imgSrc = 'assets/imgs ang/' + mainImage;
  }
  close() {
    this.isClicked = false;
  }
}
