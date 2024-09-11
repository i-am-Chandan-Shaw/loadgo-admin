import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Driver } from 'src/app/shared/models/interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  activeTabIndex = 0
  tableDataOriginal: Driver[] = []
  isTooltipEnable = false;
  selectedRow: undefined
  tableData = this.tableDataOriginal;
  tableOptions = {
    draggable: false,
    paginationLimit: 10,
    showPagination: false,
    textWrapping: false,
  };






  sorting = {
    column: '',
    direction: 'asc',
  }

  sortTable(column: string): void {
    if (this.sorting.column === column) {
      this.sorting.direction = this.sorting.direction === 'asc' ? 'desc' : 'asc'
    } else {
      this.sorting.column = column
      this.sorting.direction = 'asc'
    }


  }
  tableSettings = [
    {
      name: 'Name',
      isSortable: true,
      id: 'col0',
      width: '149px',
      'max-width': '149px',
      jsonKey: 'driverName',
    },
    {
      name: 'Phone No.',
      isSortable: false,
      id: 'col1',
      width: '140px',
      'max-width': '140px',
      jsonKey: 'phone',
    },
    {
      name: 'Location',
      isSortable: false,
      id: 'col2',
      width: '',
      'min-width': '',
      'max-width': '',
      jsonKey: 'currentLocation',
    },
    {
      name: 'Vehicle Name',
      isSortable: false,
      id: 'col3',
      width: '120px',
      'min-width': '',
      'max-width': '120px',
      jsonKey: 'vehicleType',
    },
    {
      name: 'Vehicle No',
      isSortable: false,
      id: 'col4',
      width: '120px',
      'min-width': '',
      'max-width': '120px',
      jsonKey: 'vehicleNo',
    },
    {
      name: 'Rating',
      isSortable: true,
      id: 'col5',
      width: '80px',
      'min-width': '',
      'max-width': '80px',
      jsonKey: 'rating',
    },
    {
      name: 'Total Trip',
      isSortable: true,
      id: 'col6',
      width: '90px',
      'min-width': '',
      'max-width': '90px',
      jsonKey: 'totalTrips',
    },
    {
      name: 'Joining Date',
      isSortable: true,
      id: 'col7',
      width: '120px',
      'min-width': '',
      'max-width': '120px',
      jsonKey: 'date',
    },
    {
      name: 'Status',
      isSortable: true,
      id: 'col8',
      width: '80px',
      'min-width': '',
      'max-width': '80px',
      jsonKey: 'isActive',
    },
    {
      name: 'Option',
      isSortable: false,
      id: 'col9',
      width: '110px',
      'min-width': '',
      'max-width': '110px',
      jsonKey: 'option',
    },

  ];


  searchByOption = [
    {
      label: 'Manufacturer',
      value: 'Manufacturer'
    },
    {
      label: 'Pharmacy Name',
      value: 'Pharmacy Name'
    },
  ]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllDrivers().subscribe(
      (res) => {
        this.tableData = res
      }
    )
  }


}
