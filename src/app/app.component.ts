import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShopEase';
  isDrawerOpen = false;

  openCloseDrawer(event: any){
    this.isDrawerOpen = event;
  }
}
