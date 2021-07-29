import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-plugin-home',
  templateUrl: './plugin-home.component.html',
  styleUrls: ['./plugin-home.component.scss']
})
export class PluginHomeComponent implements OnInit {

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  throwSomething() {
    this.toastr.info('just another tiny message', 'oh oh', {disableTimeOut: true})
  }
}
