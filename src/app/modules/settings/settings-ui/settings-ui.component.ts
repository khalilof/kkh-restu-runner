import { Component } from '@angular/core';
import { HomeFacade } from '../../../+state/home.facade';

@Component({
  selector: 'app-settings-ui',
  templateUrl: './settings-ui.component.html',
  styleUrls: ['./settings-ui.component.scss']
})
export class SettingsUiComponent {

  backgroundSelector$ = this.homeFacade.backgroundSelector$;
  compactMode$ = this.homeFacade.compactMode$;

  constructor(private homeFacade: HomeFacade) {
  }


  switchHandler($event: boolean, attribute: string) {
    switch (attribute) {
      case 'background':
        this.homeFacade.updateBackground($event);
        break;
      case 'compact-mode':
        this.homeFacade.updateCompactMode($event);
        break;
    }
  }
}
