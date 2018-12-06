import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Vr } from '../../models/vr';
import { ActivatedRoute } from '@angular/router';
import { VrService } from '../../services/vr.service';
import { environment } from '../../../environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { JoinVrComponent } from '../join-vr/join-vr.component';
import { Distance } from 'src/app/models/distance';

@Component({
  selector: 'app-vr-info',
  templateUrl: './vr-info.component.html',
  styleUrls: ['./vr-info.component.scss']
})
export class VrInfoComponent implements OnInit {

  faSignInAlt = faSignInAlt;
  signInUrl = '';
  public run: Vr;
  public isLogin:boolean;
  private vrid: string;

  constructor(
    private route: ActivatedRoute,
    private vr: VrService,
    private auth: AuthService,
    private dialog:MatDialog) {
      this.isLogin = false;
  }

  ngOnInit() {
    this.isLogin = this.auth.isLogin()

    this.vrid = this.route.snapshot.paramMap.get('id');

    this.signInUrl = environment.urls.signInAndGoto.replace('{id}', this.vrid);

    this.vr.get(this.vrid).subscribe((data: Vr) => {
      this.run = data;
    });
  }

  joinVr() {
    let dialogRef = this.dialog.open(JoinVrComponent, {
      width: '400px',
      data: {distance: 0}
    });

    dialogRef.afterClosed().subscribe((result:Distance) => {
      if (result) {
        this.vr.join(this.vrid, result.distance).subscribe(() => {
          this.run.joined = true;
        });
      }
    });
  }

}
