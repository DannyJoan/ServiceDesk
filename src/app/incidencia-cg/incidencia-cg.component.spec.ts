import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaCGComponent } from './incidencia-cg.component';

describe('IncidenciaCGComponent', () => {
  let component: IncidenciaCGComponent;
  let fixture: ComponentFixture<IncidenciaCGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaCGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaCGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
