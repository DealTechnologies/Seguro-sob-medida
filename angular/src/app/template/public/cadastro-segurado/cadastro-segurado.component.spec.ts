import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroSeguradoComponent } from './cadastro-segurado.component';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('CadastroSeguradoComponent', () => {
  let component: CadastroSeguradoComponent;
  let fixture: ComponentFixture<CadastroSeguradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSeguradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSeguradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
