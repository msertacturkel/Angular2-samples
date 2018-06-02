import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportjobComponent } from './importjob.component';

describe('ImportjobComponent', () => {
  let component: ImportjobComponent;
  let fixture: ComponentFixture<ImportjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
