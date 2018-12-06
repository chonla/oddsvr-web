import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Distance } from '../../models/distance';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-vr',
  templateUrl: './join-vr.component.html',
  styleUrls: ['./join-vr.component.scss']
})
export class JoinVrComponent implements OnInit {

  public vrForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<JoinVrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Distance,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.vrForm = this.fb.group(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.vrForm.value);
    this.dialogRef.close(this.vrForm.value);
  }
}
