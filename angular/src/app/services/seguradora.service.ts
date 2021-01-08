import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "../shared/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SeguradoraService {

  baseUrl = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient,
              private authService: AuthService) {
  }

  getSolicitacoes(): Observable<any> {
    const user = this.authService.getUser();
    return this.httpClient.get(`${this.baseUrl}seguro/solicitacao?user_id=${user.id}`);
  }

  gerarProposta(proposta): Observable<any> {
    const user = this.authService.getUser();
    return this.httpClient.post(`${this.baseUrl}proposta/iniciar?user_id=${user.id}&solicitacao_id=${proposta.id}&data_inicio_vigencia=${proposta.inicio}&data_fim_vigencia=${proposta.fim}&validade_proposta=${'2022-01-01'}&valor=${proposta.valor}`,
      {});
  }

  getCoberturas(user): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}cobertura/1`);
  }

  getPropostas(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}proposta/`);
  }

  incluirCoberturaProposta(proposta): Observable<any> {
    const body = {
      user_id: "3",
      cobertura_id: "1",
      valor: "121212",
      descricaoAdicional: "asasas"
    };
    return this.httpClient.post(`${this.baseUrl}proposta/${proposta.id}/cobertura/incluir`, body);
  }

  incluirFranquiaProposta(proposta): Observable<any> {
    const body = {
      user_id: "3",
      franquia_id: "1",
      valor: "121212"
    };
    return this.httpClient.post(`${this.baseUrl}proposta/${proposta.id}/franquia/incluir`, body);
  }

  enviarProposta(proposta, user): Observable<any> {
    const body = {
      user_id: "3",
      franquia_id: "1",
      valor: "121212"
    };
    return this.httpClient.post(`${this.baseUrl}proposta/${proposta.id}/enviar?user_id=${user.id}`, body);
  }



}
