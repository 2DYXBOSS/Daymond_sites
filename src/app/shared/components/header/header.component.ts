import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  isDropdownOpen = false;
  isSocialDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isSocialDropdownOpen = false; // Ferme l'autre dropdown si ouvert
  }

  toggleSocialDropdown() {
    this.isSocialDropdownOpen = !this.isSocialDropdownOpen;
    this.isDropdownOpen = false; // Ferme l'autre dropdown si ouvert
  }

  selectedNav: string | null = null; // Pour stocker l'élément sélectionné

  selectNav(nav: string) {
    this.selectedNav = nav; // Met à jour l'élément sélectionné

    if (nav !== 'Social Media') {
      this.isSocialDropdownOpen = false;
      this.isDropdownOpen = false;
    }
  }

  @Input()currentRoute!: string;

}
