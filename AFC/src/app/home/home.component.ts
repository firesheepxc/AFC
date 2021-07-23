import { Component, OnInit } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { items: MegaMenuItem[] = [];
  ngOnInit(){
    this.items = [
      {
          label: '申請一覧', icon: 'pi pi-fw pi-user-edit'
      },
      {
          label: '承認一覧', icon: 'pi pi-fw pi-id-card'
      },
      {
          label: '来局日確認', icon: 'pi pi-fw pi-calendar',
          
      }
  ]
  }
}
