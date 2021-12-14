import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaListarComponent } from './persona-listar.component';

describe('PersonaListarComponent', () => {
  let component: PersonaListarComponent;
  let fixture: ComponentFixture<PersonaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
