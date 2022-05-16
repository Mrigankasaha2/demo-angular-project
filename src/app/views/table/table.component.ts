import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiconnectorService } from 'src/app/services/apiconnector.service';
import { jsondata } from 'src/app/models/jsondatamodel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  responseData: jsondata[];
  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  dataSource = new MatTableDataSource<jsondata>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private service: ApiconnectorService) {
    this.responseData = [];
  }

  ngOnInit(): void {
    this.service.getPostData().subscribe(
      (response) => {
        this.responseData = response;
        this.dataSource = new MatTableDataSource<jsondata>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (errorMessage) => {
        console.error(errorMessage);
      }
    );
  }
}
