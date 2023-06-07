import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.scss'],
})
export class TeamResultComponent {
  @Input() Teams: string[][] = [];
}
