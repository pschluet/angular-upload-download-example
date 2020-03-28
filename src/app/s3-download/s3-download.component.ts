import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { S3DownloadService } from '../s3-download.service';

@Component({
  selector: 'app-s3-download',
  templateUrl: './s3-download.component.html',
  styleUrls: ['./s3-download.component.css']
})
export class S3DownloadComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private s3DownloadService: S3DownloadService
  ) { }

  s3Form = this.fb.group({
    fileName: ['', Validators.required]
  });

  ngOnInit() {
  }

  downloadFile() {
    this.s3DownloadService.downloadFile(this.s3Form.controls.fileName.value).subscribe(response => {
      console.log('Downloaded file.');
      const blob: any = new Blob([response], { type: 'text/csv' });
      saveAs(blob, this.s3Form.controls.fileName.value);
    }, error => {
      console.log(error);
    });
  }

}
