import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pms';
  spinner:boolean=false;

  spinnerStatus(status :boolean){
    this.spinner=status;
  }
}
