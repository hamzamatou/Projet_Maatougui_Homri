import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  searchValue:string='';
  ngOnInit(): void {
    const storedSearchValue = localStorage.getItem("search");
    if (storedSearchValue) {
      this.searchValue = storedSearchValue;
    }
  }

  onSearch() {
    localStorage.setItem("search", this.searchValue);
    console.log("Searching for:", this.searchValue);
  }
  isSidebarVisible=false;
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log(this.isSidebarVisible) // Toggle the sidebar visibility
  }
}

