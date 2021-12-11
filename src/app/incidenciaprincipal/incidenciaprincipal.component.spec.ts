import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaprincipalComponent } from './incidenciaprincipal.component';

describe('IncidenciaprincipalComponent', () => {
  let component: IncidenciaprincipalComponent;
  let fixture: ComponentFixture<IncidenciaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
