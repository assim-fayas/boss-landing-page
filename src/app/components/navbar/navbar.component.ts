import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

onScrolled:boolean=false

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = document.querySelector('.nav') as HTMLElement;
    if (window.scrollY > element.clientHeight) {
   this.onScrolled=true
   console.log("scrolledd true");
   
    } else {
      this.onScrolled=false
      console.log("scrolledd falseee");
    }
  }

}
