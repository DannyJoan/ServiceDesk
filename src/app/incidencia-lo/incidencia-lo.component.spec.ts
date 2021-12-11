import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaLOComponent } from './incidencia-lo.component';

describe('IncidenciaLOComponent', () => {
  let component: IncidenciaLOComponent;
  let fixture: ComponentFixture<IncidenciaLOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaLOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaLOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
