import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 public dockBasicItems: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {

    this.dockBasicItems = [
      {
        label: 'Finder',
        icon: "assets/showcase/images/dock/finder.svg"
      },
      {
        label: 'App Store',
        icon: "assets/showcase/images/dock/appstore.svg"
      },
      {
        label: 'Photos',
        icon: "assets/showcase/images/dock/photos.svg"
      },
      {
        label: 'Trash',
        icon: "assets/showcase/images/dock/trash.png"
      }
    ];
  }

}
