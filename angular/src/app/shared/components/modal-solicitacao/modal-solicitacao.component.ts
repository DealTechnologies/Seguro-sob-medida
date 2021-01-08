import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-modal-solicitacao',
  templateUrl: './modal-solicitacao.component.html',
  styleUrls: ['./modal-solicitacao.component.scss']
})
export class ModalSolicitacaoComponent implements OnInit {

  position = 0;
  rate;
  novaSolicitacao = false;
  solicitation = {
    id: '',
    inicio: new Date(),
    fim: new Date(),
    valor: '',
    user: ''
  }
  constructor(private matDialogService: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public solicitacao) {
  }

  ngOnInit(): void {
    console.log(this.solicitacao);
  }

  onClickNext(): void{
  }


  onClickCloseModal(): void {
    this.matDialogService.close(false);
  }

  onChangeCheckBox(value): void {
    console.log(value);
  }

  criarProposta(): void {

    if (this.novaSolicitacao) {
      this.solicitation.user = this.solicitacao.user.id;
      this.solicitation.id = this.solicitacao.id;
      this.matDialogService.close(this.solicitation);
    }

    this.novaSolicitacao = true;
  }

}
