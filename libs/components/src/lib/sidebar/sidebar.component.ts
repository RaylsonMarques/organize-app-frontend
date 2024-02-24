import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'organize-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

  /**************** MÉTODOS PÚBLICOS ****************/
  ngOnInit(): void {}

  /**************** MÉTODOS PRIVADOS ****************/
}
