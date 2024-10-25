import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { debounceTime, distinctUntilChanged, map, Subject } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { HelperService } from 'src/app/core/services/helper.service';
import { Driver } from 'src/app/shared/models/interface';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

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

  tableDataOriginal: Driver[] = [];  // Original table data
  tableData: Driver[] = [];          // Displayed table data
  isTooltipEnable = false;
  selectedRow: Driver | undefined;
  tableDataLoaded = false;

  // Search related properties
  searchTerm: string = '';
  searchSubject: Subject<string> = new Subject<string>();

  // Table options and settings
  tableOptions = {
    draggable: false,
    paginationLimit: 10,
    showPagination: false,
    textWrapping: false,
  };

  sorting = {
    column: 'date',
    direction: 'desc',
  };



  constructor(private apiService: ApiService, private confirmationService: ConfirmationService, private messageService: MessageService, private helper: HelperService) { }

  ngOnInit(): void {
    // Fetching all drivers
    this.apiService.getAllDrivers().subscribe(
      (res: Driver[]) => {
        this.tableDataOriginal = res;
        this.tableDataLoaded = true;
        this.tableData = this.helper.sortData(this.tableDataOriginal, 'date', this.sorting.direction);

        // Subscribe to search functionality with debouncing
        this.searchSubject.pipe(
          debounceTime(300),  // Delay of 300ms before searching
          distinctUntilChanged(),  // Only trigger search if term changes
          map((term: string) => term.toLowerCase())  // Normalize the search term
        ).subscribe(term => {
          this.tableData = this.filterTableData(term);
        });
      }
    );
  }

  // Function to handle search input changes
  onSearch(searchValue: string): void {
    this.searchSubject.next(searchValue);
  }

  // Function to filter table data based on the search term
  filterTableData(term: string): Driver[] {
    if (!term) {
      return this.tableDataOriginal; // If no term, return original data
    }
    return this.tableDataOriginal.filter(item =>
      item.driverName.toLowerCase().includes(term) ||  // Search by name
      item.phone.includes(term)  // Search by phone number
    );
  }

  // Function to sort table data based on a column
  sortTable(column: string): void {
    if (this.sorting.column === column) {
      this.sorting.direction = this.sorting.direction === 'desc' ? 'asc' : 'desc';
    } else {
      this.sorting.column = column;
      this.sorting.direction = 'desc';
    }
    this.tableData = this.helper.sortData(this.tableData, column, this.sorting.direction); // Sort the data
  }

  locate(location: { lat: string, lng: string }) {
    this.helper.openGoogleMaps(location);
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
        // Action rejected
      }
    });
  }

  // Modal visibility toggles
  isViewEditDriverVisible = false;
  openViewEditModal(item?: Driver) {
    this.selectedRow = item;
    this.isViewEditDriverVisible = !this.isViewEditDriverVisible;
  }

  isDriverDocModalOpen = false;
  openViewDocumentModal(item?: Driver) {
    this.selectedRow = item;
    this.isDriverDocModalOpen = !this.isDriverDocModalOpen;
  }



}
