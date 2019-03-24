import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesDesriptionComponent } from './quotes-desription.component';

describe('QuotesDesriptionComponent', () => {
  let component: QuotesDesriptionComponent;
  let fixture: ComponentFixture<QuotesDesriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesDesriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDesriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
