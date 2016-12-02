/// <reference types="jquery.datatables" />
/// <reference types="core-js" />
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
import { ElementRef, OnInit } from '@angular/core';
export declare class DataTableDirective implements OnInit {
    private el;
    /**
     * The DataTable option you pass to configure your table.
     */
    dtOptions: DataTables.Settings;
    /**
     * The DataTable instance built by the jQuery library [DataTables](datatables.net).
     *
     * It's possible to execute the [DataTables APIs](https://datatables.net/reference/api/) with
     * this variable.
     */
    dtInstance: Promise<DataTables.DataTable>;
    constructor(el: ElementRef);
    ngOnInit(): any;
}
