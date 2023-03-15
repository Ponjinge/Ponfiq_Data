import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseParProdComponent } from './analyse-par-prod.component';

describe('AnalyseParProdComponent', () => {
  let component: AnalyseParProdComponent;
  let fixture: ComponentFixture<AnalyseParProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseParProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseParProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
