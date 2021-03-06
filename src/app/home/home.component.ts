import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  throwSomething() {
    this.toastr.info('just another tiny message', 'oh oh', {disableTimeOut: true})
  }
}
