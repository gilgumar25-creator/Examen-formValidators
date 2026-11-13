import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormVeterinariaComponent } from './form-veterinaria-component';

describe('FormVeterinariaComponent', () => {
  let component: FormVeterinariaComponent;
  let fixture: ComponentFixture<FormVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVeterinariaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormVeterinariaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
