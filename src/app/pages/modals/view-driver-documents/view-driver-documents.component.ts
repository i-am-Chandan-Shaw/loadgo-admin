import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Driver } from 'src/app/shared/models/interface';


@Component({
  selector: 'app-view-driver-documents',
  templateUrl: './view-driver-documents.component.html',
  styleUrls: ['./view-driver-documents.component.scss']
})
export class ViewDriverDocumentsComponent {
  @Input() selectedDriver: Driver | undefined
  @Input() visibility = true;
  @Input() readOnly = false
  @Output() toggleNewAuditModalVisibility = new EventEmitter();

  enableSave = false
  uploadedImageData: any = null;  // Store the image data (base64 or file object)
  fileName: string = '';
  driverDocumentStatus = 'Unverified'


  constructor(private messageService: MessageService) {
  }


  ngOnInit(): void {
    this.setVerifiedString()

  }

  onFileSelected(event: Event, selectedObject: Driver, key: string): void {
    const input = event.target as HTMLInputElement;
    console.log(event);


    if (input.files && input.files[0]) {
      const file: File = input.files[0];

      // Ensure the selected file is an image
      if (file.type.startsWith('image/')) {
        this.fileName = file.name;
        console.log(this.fileName);


        // Optional: If you want to convert the file to base64 (for example, for preview)
        const reader = new FileReader();
        reader.onload = () => {

          if (selectedObject && typeof reader.result === 'string')
            selectedObject[key] = reader.result;
          // This is the base64-encoded string
        };
        reader.readAsDataURL(file); // Convert image file to base64 string
      } else {
        alert('Please select a valid image file');
      }
    }
  }

  closeDialog = false;

  setVerificationStatus(value: string) {
    if (this.selectedDriver) {
      this.selectedDriver.isVerified = value;
    }

    if (value == '3') {
      this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Drivers Documents Approved' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Confirmed', detail: 'Drivers Documents Rejected' });
    }

    this.setVerifiedString()
    console.log(this.selectedDriver);

  }




  setVerifiedString() {
    if (this.selectedDriver) {
      if (this.selectedDriver.isVerified === '1') {
        this.driverDocumentStatus = 'Unverified'
      } else if (this.selectedDriver.isVerified === '2') {
        this.driverDocumentStatus = 'Pending'
      } else if (this.selectedDriver.isVerified === '3') {
        this.driverDocumentStatus = 'Approved'
      } else {
        this.driverDocumentStatus = 'Rejected'
      }
    }
  }

  closeModal() {
    this.visibility = false;
    this.toggleNewAuditModalVisibility.emit(false);
  }

}
