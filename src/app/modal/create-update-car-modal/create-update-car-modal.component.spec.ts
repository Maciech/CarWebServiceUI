import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateCarModalComponent } from './create-update-car-modal.component';

describe('CreateUpdateCarModalComponent', () => {
  let component: CreateUpdateCarModalComponent;
  let fixture: ComponentFixture<CreateUpdateCarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateCarModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
