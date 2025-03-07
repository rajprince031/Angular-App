import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imageUrl = '../assets/BL_logo_square_png.png';
  onClick(){
    console.log("Button clicked");
    window.open("https://www.bridgeLabz.com",'_blank');
  }
}
