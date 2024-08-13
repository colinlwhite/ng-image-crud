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

  //selectedFile: File = null;
  selectedFile?: File;
  imageUrl?: string;

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
  
      reader.readAsDataURL(file);
    }
  }
  

  onUpload() {
    // Logic to upload the file
    console.log(this.selectedFile);
  }
}
