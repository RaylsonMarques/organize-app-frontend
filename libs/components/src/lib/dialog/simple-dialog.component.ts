import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogData } from './simple-dialog-data';

@Component({
  selector: 'organize-dialog',
  templateUrl: 'simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss'],
})
export class SimpleDialogComponent {
  @Input()
  fecharAoClicarFora: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = !this.fecharAoClicarFora;
  }

  @Output()
  result = new EventEmitter();

  dialogResult: any;

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
