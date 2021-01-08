import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarInfoComponent } from './modal-adicionar-info.component';

describe('ModalAdicionarInfoComponent', () => {
  let component: ModalAdicionarInfoComponent;
  let fixture: ComponentFixture<ModalAdicionarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAdicionarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdicionarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
