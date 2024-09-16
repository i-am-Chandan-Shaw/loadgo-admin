import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  activeTabIndex = 1
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const storedTabIndex = localStorage.getItem('activeTabIndex');
    this.activeTabIndex = storedTabIndex ? +storedTabIndex : 1;
    this.onTabChange(this.activeTabIndex);
  }


  selectTab(index: number) {
    this.activeTabIndex = index;
    this.onTabChange(index);
    localStorage.setItem('activeTabIndex', index.toString()); // Store the active tab index
  }



  onTabChange(tabIndex: number) {
    switch (tabIndex) {
      case 0:
        this.router.navigate(['/overview']);
        break;
      case 1:
        this.router.navigate(['/driver']);
        break;
      case 2:
        this.router.navigate(['/user']);
        break;
      case 3:
        this.router.navigate(['/trip']);
        break;
      default:
        this.router.navigate(['/overview']);
        break;
    }
  }
}
