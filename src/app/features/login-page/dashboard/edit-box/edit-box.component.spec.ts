import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoxComponent } from './edit-box.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditBoxComponent', () => {
  let component: EditBoxComponent;
  let fixture: ComponentFixture<EditBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBoxComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
