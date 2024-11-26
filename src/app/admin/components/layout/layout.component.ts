import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgClass,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  searchValue:string='';
  private readonly router:Router=inject(Router);
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
  onDisconnect(){
    localStorage.setItem("state", "disconnected");
    this.router.navigate(['/admin']);
    }
    

}

