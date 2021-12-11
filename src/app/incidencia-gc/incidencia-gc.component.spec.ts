import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaGCComponent } from './incidencia-gc.component';

describe('IncidenciaGCComponent', () => {
  let component: IncidenciaGCComponent;
  let fixture: ComponentFixture<IncidenciaGCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaGCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
