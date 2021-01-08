import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSeguradoraComponent } from './tela-seguradora.component';

describe('TelaSeguradoraComponent', () => {
  let component: TelaSeguradoraComponent;
  let fixture: ComponentFixture<TelaSeguradoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSeguradoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSeguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
