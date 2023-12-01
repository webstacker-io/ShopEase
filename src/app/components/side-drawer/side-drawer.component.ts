import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss']
})
export class SideDrawerComponent implements OnInit {
  @Output() toggleSideDrawer = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeDrawer(){
    this.toggleSideDrawer.emit(false);
  }

}
