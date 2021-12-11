import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaDBComponent } from './incidencia-db.component';

describe('IncidenciaDBComponent', () => {
  let component: IncidenciaDBComponent;
  let fixture: ComponentFixture<IncidenciaDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
