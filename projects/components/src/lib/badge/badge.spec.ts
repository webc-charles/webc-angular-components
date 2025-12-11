import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Badge } from './badge';

describe('Badge', () => {
  let component: Badge;
  let fixture: ComponentFixture<Badge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Badge],
    }).compileComponents();

    fixture = TestBed.createComponent(Badge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the badge element', () => {
    const badgeElement = fixture.debugElement.query(By.css('.badge'));
    expect(badgeElement).toBeTruthy();
  });

  it('has default variant', () => {
    expect(component.variant()).toBe('default');
  });

  it('applies default variant class', () => {
    const badgeElement = fixture.debugElement.query(By.css('.badge'));
    expect(badgeElement.nativeElement.classList.contains('default')).toBe(true);
  });

  it('applies accent variant class', () => {
    fixture.componentRef.setInput('variant', 'accent');
    fixture.detectChanges();

    const badgeElement = fixture.debugElement.query(By.css('.badge'));
    expect(badgeElement.nativeElement.classList.contains('accent')).toBe(true);
  });

  it('applies success variant class', () => {
    fixture.componentRef.setInput('variant', 'success');
    fixture.detectChanges();

    const badgeElement = fixture.debugElement.query(By.css('.badge'));
    expect(badgeElement.nativeElement.classList.contains('success')).toBe(true);
  });

  it('applies warning variant class', () => {
    fixture.componentRef.setInput('variant', 'warning');
    fixture.detectChanges();

    const badgeElement = fixture.debugElement.query(By.css('.badge'));
    expect(badgeElement.nativeElement.classList.contains('warning')).toBe(true);
  });

  it('applies info variant class', () => {
    fixture.componentRef.setInput('variant', 'info');
    fixture.detectChanges();

    const badgeElement = fixture.debugElement.query(By.css('.badge'));
    expect(badgeElement.nativeElement.classList.contains('info')).toBe(true);
  });

  it('applies custom class', () => {
    fixture.componentRef.setInput('customClass', 'my-custom-class');
    fixture.detectChanges();

    const badgeElement = fixture.debugElement.query(By.css('.badge'));
    expect(badgeElement.nativeElement.classList.contains('my-custom-class')).toBe(true);
  });
});
