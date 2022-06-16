import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationLayoutComponent } from './organisation-layout.component';

describe('OrganisationLayoutComponent', () => {
  let component: OrganisationLayoutComponent;
  let fixture: ComponentFixture<OrganisationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
