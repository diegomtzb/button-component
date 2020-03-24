import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
message = 'Click on a button';
  textBtnConfig = {
    styles: {
      position: 'relative',
      width: '150px',
      height: '60px',
      'background-color': 'red',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      borderRadius: '10px',
      marginTop: '30px'
    },
    text: 'Click Here'
  };

  imgBtnConfig = {
    styles: {
      position: 'relative',
      width: '300px',
      height: 'auto'
    },
    src: 'https://images-na.ssl-images-amazon.com/images/I/41n0S5fHOLL._AC_SY355_.jpg'
  };
  
  onClickEventReceived(event: string) {
    this.message = event;
  }
}