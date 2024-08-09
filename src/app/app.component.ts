import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-image-crud';

  selectedFile: File = null;

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    // Logic to upload the file
    console.log(this.selectedFile);
  }
}
