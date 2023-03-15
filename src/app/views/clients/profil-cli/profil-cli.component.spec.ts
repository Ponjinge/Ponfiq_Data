import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCliComponent } from './profil-cli.component';

describe('ProfilCliComponent', () => {
  let component: ProfilCliComponent;
  let fixture: ComponentFixture<ProfilCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
