import { Component, OnInit } from '@angular/core';
import { AthleteService } from 'src/app/services/athlete.service';
import { Athlete } from 'src/app/models/athlete';
import { faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { faStrava } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  me: Athlete;
  faSignOutAlt = faSignOutAlt;
  faHome = faHome;
  faStrava = faStrava;

  constructor(private athlete: AthleteService) {
  }

  ngOnInit() {
    this.athlete.me().subscribe(d => {
      this.me = d;
    });
  }

}
