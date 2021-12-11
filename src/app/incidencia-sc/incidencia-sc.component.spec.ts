import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaSCComponent } from './incidencia-sc.component';

describe('IncidenciaSCComponent', () => {
  let component: IncidenciaSCComponent;
  let fixture: ComponentFixture<IncidenciaSCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaSCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
