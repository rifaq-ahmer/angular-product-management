import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
@Output() seacrh = new EventEmitter<string>()
text = ""
  onSearch(){
    console.log("Search Button Clicked");
    this.seacrh.emit(this.text)
  }
}  