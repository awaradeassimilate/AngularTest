import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularTest';
  jsonData: any;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.appService.getJSON().subscribe(res => {
      this.jsonData = res;
      console.log(res)
    })
  }
}



