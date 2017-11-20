import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private lista = [{naziv: 'test 1', id: 1}, {naziv: 'test 2', id: 2}, {naziv: 'test 3', id: 3}];
  private selData = null;
  private searchP = ['naziv'];
  title = 'app';
  constructor() {

  }
  selectI(evt) {
    const that = this;
    console.log('ODABRAN JE...', evt, this.selData);
  }
  restPoziv() {
    const that = this;
    return function (){
      return new Promise((resolve, reject) => {
        setTimeout( () => {
          console.log(that.title);
          resolve([{naziv: 'test 4', id: 4}, {naziv: 'test 5', id: 5}]);
        }, 1000);
      });
    };
  }
}
