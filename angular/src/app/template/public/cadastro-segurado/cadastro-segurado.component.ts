import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-cadastro-segurado',
  templateUrl: './cadastro-segurado.component.html',
  styleUrls: ['./cadastro-segurado.component.scss']
})

export class CadastroSeguradoComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  hide = true;
  formMode = 'cadastro'

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  registerClient(): void {
    console.log(this.form.value)
    this.authService.doRegister(this.form.value)
      .subscribe(resp => {
        console.log(resp);
        this.AlertConrfirm();
      }, error => {
        console.log(error);
      }
      )

  }


  submitCadastro(): void {
    this.router.navigate(['/cadastro-segurado']);

  }

  AlertConrfirm() {
    Swal.fire({
      icon: 'success',
      title: 'Usuario Cadastrado com sucesso !',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['tela-inicio']);
  }

}
