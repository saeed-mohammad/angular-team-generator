import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  member: string = '';
  memberList: string[] = [];
  error = '';
  numberTeam: number | '' = '';
  teams: string[][] = [];

  onInput(name: string) {
    this.member = name;
  }
  add() {
    if (!this.member) {
      this.error = 'input is empty';
      return;
    }
    this.memberList.push(this.member);
    this.member = '';
    this.error = '';
  }

  // team
  onNum(numberofTeam: string) {
    this.numberTeam = Number(numberofTeam);
  }

  generate() {
    this.error = '';
    let allMember = [...this.memberList];

    if (
      !this.numberTeam ||
      this.numberTeam <= 0 ||
      this.numberTeam == allMember.length ||
      allMember.length % this.numberTeam !== 0
    ) {
      this.error = 'not enough member';
      return;
    }

    while (allMember.length) {
      for (let i = 0; i < this.numberTeam; i++) {
        const teamIndex = Math.floor(Math.random() * allMember.length);
        const member = allMember.splice(teamIndex, 1)[0];

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.numberTeam = '';
    return this.teams;
  }

  onClear() {
    this.memberList = [];
    this.error = '';
    this.numberTeam = '';
    this.teams = [];
  }
}
