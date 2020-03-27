import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(response => {
      console.log('Uploaded file.');
      const blob: any = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
      saveAs(blob, 'sample.xlsx');
    }, error => {
      console.log(error);
    });
  }

}
