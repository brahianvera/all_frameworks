import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsStatementsComponent } from './verbs-statements.component';

describe('VerbsStatementsComponent', () => {
  let component: VerbsStatementsComponent;
  let fixture: ComponentFixture<VerbsStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbsStatementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbsStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
