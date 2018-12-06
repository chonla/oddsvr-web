import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vr } from '../../models/vr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-vr',
  templateUrl: './new-vr.component.html',
  styleUrls: ['./new-vr.component.scss']
})
export class NewVrComponent implements OnInit {

  public vrForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewVrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vr,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.vrForm = this.fb.group(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.vrForm.value);
  }

}
