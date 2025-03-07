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
  errorMessage : string="";
  onClick(){
    console.log("Button clicked");
    window.open("https://www.bridgeLabz.com",'_blank');
  }
  nameValidate(){
    if(!this.userName){
      this.errorMessage = "Name is Required";
    }else if(!/^[A-Z][a-zA-Z]{2,}/.test(this.userName)){
      this.errorMessage = "Name starts with capital letter and minimum character require is 3";
    }else{
      this.errorMessage = "";
    }
  }
}
