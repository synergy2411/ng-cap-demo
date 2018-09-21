import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInDemoComponent } from './built-in-demo.component';

describe('BuiltInDemoComponent', () => {
  let component: BuiltInDemoComponent;
  let fixture: ComponentFixture<BuiltInDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
