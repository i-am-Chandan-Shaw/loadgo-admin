import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  activeTabIndex = 0
  tableDataOriginal = [
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 583738828",
      "ndc": "2460-1357-03",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "3.0",
      "unitsReady": "0",
      "unitsDispensed": "300",
      "packagePrice": "$32.50",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 1083738828",
      "ndc": "9751-8642-04",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "4.0",
      "unitsReady": "50",
      "unitsDispensed": "350",
      "packagePrice": "$40.00",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 2083738828",
      "ndc": "8620-7531-05",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "2.5",
      "unitsReady": "200",
      "unitsDispensed": "50",
      "packagePrice": "$45.00",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 10mg O83738828",
      "ndc": "9753-1842-30",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "2.5",
      "unitsReady": "150",
      "unitsDispensed": "100",
      "packagePrice": "$90.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 20mg O83738828",
      "ndc": "8642-0731-15",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.60",
      "unitsReady": "40",
      "unitsDispensed": "20",
      "packagePrice": "$120.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 40mg O83738828",
      "ndc": "0591-0405-01",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.8",
      "unitsReady": "50",
      "unitsDispensed": "30",
      "packagePrice": "$180.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Pfizer CentreOne",
      "productName": "Hydrocortisone Tab 583738828",
      "ndc": "6420-8731-40",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.15",
      "unitsReady": "10",
      "unitsDispensed": "5",
      "packagePrice": "$80.00",
      "lastOrderedDate": "02/10/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "02/13/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 583738828",
      "ndc": "2460-1357-03",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "3.0",
      "unitsReady": "0",
      "unitsDispensed": "300",
      "packagePrice": "$32.50",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 1083738828",
      "ndc": "9751-8642-04",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "4.0",
      "unitsReady": "50",
      "unitsDispensed": "350",
      "packagePrice": "$40.00",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 2083738828",
      "ndc": "8620-7531-05",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "2.5",
      "unitsReady": "200",
      "unitsDispensed": "50",
      "packagePrice": "$45.00",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 10mg O83738828",
      "ndc": "9753-1842-30",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "2.5",
      "unitsReady": "150",
      "unitsDispensed": "100",
      "packagePrice": "$90.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 20mg O83738828",
      "ndc": "8642-0731-15",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.60",
      "unitsReady": "40",
      "unitsDispensed": "20",
      "packagePrice": "$120.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 40mg O83738828",
      "ndc": "0591-0405-01",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.8",
      "unitsReady": "50",
      "unitsDispensed": "30",
      "packagePrice": "$180.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Pfizer CentreOne",
      "productName": "Hydrocortisone Tab 583738828",
      "ndc": "6420-8731-40",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.15",
      "unitsReady": "10",
      "unitsDispensed": "5",
      "packagePrice": "$80.00",
      "lastOrderedDate": "02/10/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "02/13/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 583738828",
      "ndc": "2460-1357-03",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "3.0",
      "unitsReady": "0",
      "unitsDispensed": "300",
      "packagePrice": "$32.50",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 1083738828",
      "ndc": "9751-8642-04",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "4.0",
      "unitsReady": "50",
      "unitsDispensed": "350",
      "packagePrice": "$40.00",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 2083738828",
      "ndc": "8620-7531-05",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "2.5",
      "unitsReady": "200",
      "unitsDispensed": "50",
      "packagePrice": "$45.00",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 10mg O83738828",
      "ndc": "9753-1842-30",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "2.5",
      "unitsReady": "150",
      "unitsDispensed": "100",
      "packagePrice": "$90.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 20mg O83738828",
      "ndc": "8642-0731-15",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.60",
      "unitsReady": "40",
      "unitsDispensed": "20",
      "packagePrice": "$120.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 40mg O83738828",
      "ndc": "0591-0405-01",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.8",
      "unitsReady": "50",
      "unitsDispensed": "30",
      "packagePrice": "$180.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Pfizer CentreOne",
      "productName": "Hydrocortisone Tab 583738828",
      "ndc": "6420-8731-40",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.15",
      "unitsReady": "10",
      "unitsDispensed": "5",
      "packagePrice": "$80.00",
      "lastOrderedDate": "02/10/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "02/13/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 583738828",
      "ndc": "2460-1357-03",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "3.0",
      "unitsReady": "0",
      "unitsDispensed": "300",
      "packagePrice": "$32.50",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 1083738828",
      "ndc": "9751-8642-04",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "4.0",
      "unitsReady": "50",
      "unitsDispensed": "350",
      "packagePrice": "$40.00",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Alvogen",
      "productName": "Amphet/Dextr Tab 2083738828",
      "ndc": "8620-7531-05",
      "brand": "Generic",
      "packageSize": "100",
      "activeAccumulator": "2.5",
      "unitsReady": "200",
      "unitsDispensed": "50",
      "packagePrice": "$45.00",
      "lastOrderedDate": "05/15/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/20/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 10mg O83738828",
      "ndc": "9753-1842-30",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "2.5",
      "unitsReady": "150",
      "unitsDispensed": "100",
      "packagePrice": "$90.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "Ready to Order",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": true
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 20mg O83738828",
      "ndc": "8642-0731-15",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.60",
      "unitsReady": "40",
      "unitsDispensed": "20",
      "packagePrice": "$120.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Lupin Ltd",
      "productName": "Lisinopril Tab 40mg O83738828",
      "ndc": "0591-0405-01",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.8",
      "unitsReady": "50",
      "unitsDispensed": "30",
      "packagePrice": "$180.00",
      "lastOrderedDate": "05/01/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "05/02/2024",
      "placeOrderEnabled": false
    },
    {
      "pharmacyName": "Onsite Pharmacy",
      "manufacturer": "Pfizer CentreOne",
      "productName": "Hydrocortisone Tab 583738828",
      "ndc": "6420-8731-40",
      "brand": "Brand",
      "packageSize": "100",
      "activeAccumulator": "0.15",
      "unitsReady": "10",
      "unitsDispensed": "5",
      "packagePrice": "$80.00",
      "lastOrderedDate": "02/10/2024",
      "accumulationLevel": "In Stock",
      "updatedPackagePriceDate": "02/13/2024",
      "placeOrderEnabled": false
    }
  ]
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
      name: 'Pharmacy Name',
      isSortable: true,
      id: 'col0',
      width: '149px',
      'max-width': '149px',
      jsonKey: 'pharmacyName',
    },
    {
      name: 'Manufacturer',
      isSortable: true,
      id: 'col1',
      width: '140px',
      'max-width': '140px',
      jsonKey: 'manufacturer',
    },
    {
      name: 'Product Name',
      isSortable: true,
      id: 'col2',
      width: '',
      'min-width': '',
      'max-width': '',
      jsonKey: 'productName',
    },
    {
      name: 'NDC',
      isSortable: true,
      id: 'col3',
      width: '96px',
      'min-width': '',
      'max-width': '96px',
      jsonKey: 'ndc',
    },
    {
      name: 'Brand/Generic',
      isSortable: true,
      id: 'col4',
      width: '120px',
      'min-width': '',
      'max-width': '120px',
      jsonKey: 'brand',
    },
    {
      name: 'Package Size',
      isSortable: true,
      id: 'col5',
      width: '80px',
      'min-width': '',
      'max-width': '80px',
      jsonKey: 'packageSize',
    },
    {
      name: 'Active Accumulator',
      isSortable: true,
      id: 'col6',
      width: '110px',
      'min-width': '',
      'max-width': '110px',
      jsonKey: 'activeAccumulator',
    },
    {
      name: 'Units Ready for Pick Up',
      isSortable: true,
      id: 'col7',
      width: '110px',
      'max-width': '110px',
      jsonKey: 'unitsReady',
    },
    {
      name: 'Units Dispensed',
      isSortable: true,
      id: 'col8',
      width: '96px',
      'max-width': '96px',
      jsonKey: 'unitsDispensed',
    },
    {
      name: 'Package Price',
      isSortable: true,
      id: 'col9',
      width: '90px',
      'min-width': '',
      'max-width': '90px',
      jsonKey: 'packagePrice',
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

  constructor() { }

  ngOnInit(): void {
   
  }


}
