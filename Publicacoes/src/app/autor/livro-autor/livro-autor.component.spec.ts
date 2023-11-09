/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LivroAutorComponent } from './livro-autor.component';

describe('LivroAutorComponent', () => {
  let component: LivroAutorComponent;
  let fixture: ComponentFixture<LivroAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
