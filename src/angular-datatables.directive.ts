/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */

import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import Datatable = DataTables.DataTable;

@Directive({
  selector: '[datatable]'
})
export class DataTableDirective implements OnInit {
  /**
   * The DataTable option you pass to configure your table.
   */
  @Input()
  dtOptions: DataTables.Settings;

  /**
   * The DataTable instance built by the jQuery library [DataTables](datatables.net).
   *
   * It's possible to execute the [DataTables APIs](https://datatables.net/reference/api/) with
   * this variable.
   */
  dtInstance: Promise<DataTables.DataTable>;

  constructor(@Inject(ElementRef) private el: ElementRef) {
    this.dtOptions = $.extend(true, {}, $.fn.DataTable.defaults);
  }

  ngOnInit(): any {
    this.dtInstance = new Promise((resolve, reject) => {
      Promise.resolve(this.dtOptions).then(dtOptions => {
        let $elem = jQuery(this.el.nativeElement);
        let dt = $elem.DataTable(dtOptions);
        resolve(dt);
      });
    });
  }
}
