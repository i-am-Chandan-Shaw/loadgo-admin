import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/core/services/api.service';
import { HelperService } from 'src/app/core/services/helper.service';
import { User } from 'src/app/shared/models/interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  tableDataOriginal: User[] = []
  isTooltipEnable = false;
  selectedRow: User | undefined
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

  tableSettings  = [
    {
      name: 'Name',
      isSortable: true,
      width: '',
      'max-width': '',
      jsonKey: 'name',
    },
    {
      name: 'Login Pin',
      isSortable: false,
      width: '100px',
      'max-width': '100px',
      jsonKey: 'loginPin',
    },
    {
      name: 'Phone No.',
      isSortable: false,
      width: '130px',
      'max-width': '130px',
      jsonKey: 'phone',
    },
    {
      name: 'Email',
      isSortable: true,
      width: '200px',
      'max-width': '200px',
      jsonKey: 'email',
    },
    {
      name: 'Invite Code',
      isSortable: false,
      width: '120px',
      'max-width': '120px',
      jsonKey: 'inviteCode',
    },
    {
      name: 'Referred By',
      isSortable: false,
      width: '150px',
      'max-width': '150px',
      jsonKey: 'referredBy',
    },
    {
      name: 'Created On',
      isSortable: true,
      width: '120px',
      'max-width': '120px',
      jsonKey: 'CreatedOn',
    },
    {
      name: 'Location',
      isSortable: false,
      width: '',
      'max-width': '',
      jsonKey: 'currentLocation',
    },
    {
      name: 'Option',
      isSortable: false,
      width: '90px',
      'max-width': '90px',
      jsonKey: 'currentLocation',
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
  openViewEditModal(item?: User) {
    this.selectedRow = item
    this.isViewEditDriverVisible = !this.isViewEditDriverVisible
  }

  // View Documents

  isDriverDocModalOpen = false
  openViewDocumentModal(item?: User) {
    this.selectedRow = item
    this.isDriverDocModalOpen = !this.isDriverDocModalOpen
  }



}
