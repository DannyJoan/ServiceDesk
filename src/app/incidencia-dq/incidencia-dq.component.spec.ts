import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaDQComponent } from './incidencia-dq.component';

describe('IncidenciaDQComponent', () => {
  let component: IncidenciaDQComponent;
  let fixture: ComponentFixture<IncidenciaDQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaDQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaDQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
