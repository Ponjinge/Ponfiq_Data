import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBordCliComponent } from './tab-bord-cli.component';

describe('TabBordCliComponent', () => {
  let component: TabBordCliComponent;
  let fixture: ComponentFixture<TabBordCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBordCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBordCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
