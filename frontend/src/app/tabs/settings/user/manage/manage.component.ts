import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageUsersComponent implements OnInit {
  selectedUser?: string;

  constructor() {}

  ngOnInit() {}
}
