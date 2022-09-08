import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVerbComponent } from './new-verb.component';

describe('NewVerbComponent', () => {
  let component: NewVerbComponent;
  let fixture: ComponentFixture<NewVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVerbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
