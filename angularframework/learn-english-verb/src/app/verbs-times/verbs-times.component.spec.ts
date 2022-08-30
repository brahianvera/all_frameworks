import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsTimesComponent } from './verbs-times.component';

describe('VerbsTimesComponent', () => {
  let component: VerbsTimesComponent;
  let fixture: ComponentFixture<VerbsTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbsTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbsTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
