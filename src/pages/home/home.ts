import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  Ascore: number = 0;
  Bscore: number = 0;
  value: number = 0;

  constructor(public navCtrl: NavController) {

  }

  Aadd(value) {
    switch (value) {
      case 'a': this.Ascore += 3;
        break;
      case 'aa': this.Ascore += 2;
        break;
      case 'aaa': this.Ascore += 1;
        break;
      default:
    }
  }

  Badd(value) {
    switch (value) {
      case 'b': this.Bscore += 3;
        break;
      case 'bb': this.Bscore += 2;
        break;
      case 'bbb': this.Bscore += 1;
        break;
      default:
    }
  }

  clear() {
    this.Bscore = 0;
    this.Ascore = 0;
  }

}
