import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseParVilleComponent } from './analyse-par-ville.component';

describe('AnalyseParVilleComponent', () => {
  let component: AnalyseParVilleComponent;
  let fixture: ComponentFixture<AnalyseParVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseParVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseParVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
