import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver } from 'src/app/shared/models/interface';

@Component({
  selector: 'app-view-edit-driver',
  templateUrl: './view-edit-driver.component.html',
  styleUrls: ['./view-edit-driver.component.scss']
})
export class ViewEditDriverComponent implements OnInit {
  @Input() selectedDriver: Driver | undefined
  @Input() visibility = true;
  readOnly = true
  @Output() toggleNewAuditModalVisibility = new EventEmitter();
  activeStatus = [
    { name: 'Active', value: 'active' },
    { name: 'Inactive', value: 'inactive' },
  ];

  selectedStatus = this.activeStatus[0]


  closeDialog = false;
  constructor(

  ) { }

  ngOnInit(): void {
    if (this.selectedDriver?.isActive) {
      this.selectedStatus = this.activeStatus[0]
    } else {
      this.selectedStatus = this.activeStatus[1]
    }

  }

  updateData() {
    this.closeModal()

  }
  closeModal() {
    this.visibility = false;
    this.toggleNewAuditModalVisibility.emit(false);
  }


}
