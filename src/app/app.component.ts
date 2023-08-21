import { Component } from '@angular/core';
import { HomeFacade } from './+state/home.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-advanced';

  constructor(private homeFacade: HomeFacade) {
  }

  ngOnInit(): void {
    this.homeFacade.loadTables();
  }
}
