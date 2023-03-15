import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBordProdComponent } from './tab-bord-prod.component';

describe('TabBordProdComponent', () => {
  let component: TabBordProdComponent;
  let fixture: ComponentFixture<TabBordProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBordProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBordProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
