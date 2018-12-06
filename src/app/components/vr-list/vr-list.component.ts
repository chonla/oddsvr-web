import { Component, OnInit } from '@angular/core';
import { faPlus, faLink } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { NewVrComponent } from '../new-vr/new-vr.component';
import { VrService } from 'src/app/services/vr.service';
import { Vr, VrCreation } from 'src/app/models/vr';

@Component({
  selector: 'app-vr-list',
  templateUrl: './vr-list.component.html',
  styleUrls: ['./vr-list.component.scss']
})
export class VrListComponent implements OnInit {
  faPlus = faPlus;
  faLink = faLink;
  vrs: Vr[];

  constructor(private dialog:MatDialog, private vr: VrService) {
  }

  ngOnInit() {
    this.refreshMyVr();
  }

  refreshMyVr() {
    this.vr.mine().subscribe((data) => {
      this.vrs = data;
    });
  }

  newVr() {
    let dialogRef = this.dialog.open(NewVrComponent, {
      width: '400px',
      data: {name: '',from_date: '', to_date: '', distance: 0}
    });

    dialogRef.afterClosed().subscribe((result:VrCreation) => {
      if (result) {
        this.vr.create(result).subscribe(() => {
          this.refreshMyVr();
        });
      }
    });
  }

}
