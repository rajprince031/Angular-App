import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imageUrl = '../assets/BL_logo_square_png.png';
  userName : string="";
  onClick(){
    console.log("Button clicked");
    window.open("https://www.bridgeLabz.com",'_blank');
  }
}
