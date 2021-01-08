import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-resposta',
  templateUrl: './modal-resposta.component.html',
  styleUrls: ['./modal-resposta.component.scss']
})
export class ModalRespostaComponent implements OnInit {

  position = 0;
  rate;
  showButton: boolean = true;

  constructor(private matDialogService: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public questions: []) {
  }

  ngOnInit(): void {
    console.log(this.questions);
  }

  onClickNext(): void {
    if (this.position === this.questions.length) {
      this.matDialogService.close(this.questions);
    }
    this.position++;
  }

  onClickBack(): void {
    if (this.position === 0) {
      this.matDialogService.close(false);
    }
    this.position--;
  }

  onClickCloseModal(): void {
    this.matDialogService.close(false);
  }

  onChangeCheckBox(value): void {
    console.log(value);
  }

}
