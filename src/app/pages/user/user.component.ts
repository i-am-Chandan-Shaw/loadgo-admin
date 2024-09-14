import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/core/services/api.service';
import { HelperService } from 'src/app/core/services/helper.service';
import { Driver } from 'src/app/shared/models/interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  tableDataOriginal: Driver[] = []
  isTooltipEnable = false;
  selectedRow: Driver | undefined
  tableDataLoaded = false
  tableData = this.tableDataOriginal;
  tableOptions = {
    draggable: false,
    paginationLimit: 10,
    showPagination: false,
    textWrapping: false,
  };
  sorting = {
    column: 'date',
    direction: 'desc',
  }

  sortTable(column: string): void {

    if (this.sorting.column === column) {
      this.sorting.direction =
        this.sorting.direction === 'desc' ? 'asc' : 'desc'
    } else {
      this.sorting.column = column
      this.sorting.direction = 'desc'
    }

    this.tableData = this.helper.sortData(this.tableData, column, this.sorting.direction) // service return sorted array
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
      width: '110px',
      'max-width': '110px',
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
      name: 'Date',
      isSortable: true,
      id: 'col7',
      width: '90px',
      'min-width': '',
      'max-width': '90px',
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

  constructor(private apiService: ApiService, private confirmationService: ConfirmationService, private messageService: MessageService, private helper: HelperService) { }

  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(
      (res) => {
        this.tableData = res;
        console.log(res);
        
        this.tableDataLoaded = true
        this.tableData = this.helper.sortData(this.tableData, 'date', this.sorting.direction)
      }
    )
  }

  locate(location: { lat: string, lng: string }) {
    this.helper.openGoogleMaps(location)
  }

  openConfirmation(event: Event) {

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record ?',
      header: 'Delete Confirmation',
      icon: 'icon icon-alert',
      acceptButtonStyleClass: "btn btn-primary",
      rejectButtonStyleClass: "btn btn-secondary",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: () => {
        // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }


  isViewEditDriverVisible = false
  openViewEditModal(item?: Driver) {
    this.selectedRow = item
    this.isViewEditDriverVisible = !this.isViewEditDriverVisible
  }

  // View Documents

  isDriverDocModalOpen = false
  openViewDocumentModal(item?: Driver) {
    this.selectedRow = item
    this.isDriverDocModalOpen = !this.isDriverDocModalOpen
  }



}
