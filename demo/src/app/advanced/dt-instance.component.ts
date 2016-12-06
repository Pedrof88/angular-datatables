import { Component, ViewChild, OnInit } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'dt-instance',
  templateUrl: 'dt-instance.component.html'
})
export class DtInstanceComponent implements OnInit {
  // @ViewChild(DataTableDirective)
  private datatableElement1: DataTableDirective;
  private datatableElement2: DataTableDirective;

  dtOptions1: any = {};
  dtOptions2: any = {};

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then(dtInstance => console.log(dtInstance));
  }

  ngOnInit(): void {
    let columns = [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }];
    this.dtOptions1 = {
      ajax: 'data.json',
      displayLength: 2,
      paginationType: 'full_numbers',
      columns: columns
    };
    this.dtOptions2 = {
      ajax: 'data1.json',
      columns: columns
    };
  }
}
