import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SeguradoraService } from "../../../services/seguradora.service";
import { ModalRespostaComponent } from "../../../shared/components/modal-resposta/modal-resposta.component";
import { ModalSolicitacaoComponent } from "../../../shared/components/modal-solicitacao/modal-solicitacao.component";
import { MatDialog } from "@angular/material/dialog";
import { element } from "protractor";
import Swal from "sweetalert2";

@Component({
  selector: 'app-tela-seguradora',
  templateUrl: './tela-seguradora.component.html',
  styleUrls: ['./tela-seguradora.component.scss']
})
export class TelaSeguradoraComponent implements OnInit {
  showClient = true;
  showProposta = false;
  solicitations = [];
  propostas = [];
  displayedColumns: string[] = ['nome', 'cidade', 'veiculo', 'situação', 'e-mail'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  displayedColumnsProposta: string[] = ['position', 'name', 'documento', 'contato'];
  dataSourceProposta = new MatTableDataSource<Proposta>(ELEMENT_DATA_PROPOSTA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private seguradoraService: SeguradoraService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.seguradoraService.getPropostas()
      .subscribe(resp => {
        console.log('PROPOS', resp);
        this.propostas = resp.data;
      }, error => console.log(error));
    this.seguradoraService.getSolicitacoes()
      .subscribe(resp => {
        console.log('SOLIC', resp);
        this.solicitations = resp.data.solicitacoes;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.solicitations);
      },
        error => {
        console.log('error');
        });
  }

  showClientModel(): void {
    if (this.showProposta === true) {
      this.showProposta = !this.showProposta;
    }
    this.showClient = !this.showClient;
  }

  showPropostaModel(): void {
    if (this.showClient === true) {
      this.showClient = !this.showClient;
    }
    this.showProposta = !this.showProposta;
  }

  openModalSolicitacao(element): void {
    const dialogRef = this.dialog.open(ModalSolicitacaoComponent,
      {
        hasBackdrop: true,
        data: element
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.seguradoraService.gerarProposta(result).subscribe( resp => {
          console.log('resp PROPOSTA', resp);
          Swal.fire({
            icon: 'success',
            title: 'Proposta Criada',
            showConfirmButton: false,
            timer: 1500
          })
        }, error => {
          console.log(error);
        });

      }
    });
  }

  // troca de pagina
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  documento: string;
  contato: string;

}

export interface Proposta {
  name: string;
  position: number;
  documento: string;
  contato: string;

}

// elementos de da tabela
const ELEMENT_DATA_PROPOSTA: Proposta[] = [
  {position: 1, name: 'Hydrogen', documento: '600', contato: '(00) 0000-0000',},
  {position: 2, name: 'Helium', documento: '300', contato: '(00) 0000-0000',},
  {position: 3, name: 'Lithium', documento: '250', contato: '(00) 0000-0000',},
  {position: 4, name: 'Beryllium', documento: '900', contato: '(00) 0000-0000',},
  {position: 5, name: 'Boron', documento: '800', contato: '(00) 0000-0000',},
  {position: 6, name: 'Carbon', documento: '500', contato: '(00) 0000-0000',},
  {position: 7, name: 'Nitrogen', documento: '750', contato: '(00) 0000-0000',},
];

