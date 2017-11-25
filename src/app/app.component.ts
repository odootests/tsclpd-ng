import { Component } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  in_slide_one:boolean;
  in_slide_two:boolean; 
  
  // constructor(private router: Router ) {
  //   this.router = router;
  // }

  // if (this.router.url = '/sec1' || ''){
  //   this.in_slide_one = true;
  //   this.in_slide_two = false; 
  // } elseif (routerLink='/sec2'){
  //   this.in_slide_one = false;
  //   this.in_slide_two = true; 
  // }

 
}
