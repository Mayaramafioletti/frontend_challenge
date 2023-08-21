import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoxComponent } from './edit-box.component';

describe('EditBoxComponent', () => {
  let component: EditBoxComponent;
  let fixture: ComponentFixture<EditBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBoxComponent]
    });
    fixture = TestBed.createComponent(EditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});