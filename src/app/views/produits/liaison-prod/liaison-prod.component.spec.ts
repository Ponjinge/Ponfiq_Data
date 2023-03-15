import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonProdComponent } from './liaison-prod.component';

describe('LiaisonProdComponent', () => {
  let component: LiaisonProdComponent;
  let fixture: ComponentFixture<LiaisonProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiaisonProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiaisonProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
