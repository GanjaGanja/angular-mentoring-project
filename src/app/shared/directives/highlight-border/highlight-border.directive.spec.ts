import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightBorderDirective } from './highlight-border.directive';

@Component({
  template: `<input type="text" appHighlightBorder="yellow">`
})
class TestAppHighlightBorderComponent {
}

fdescribe('HighlightBorderDirective', () => {
  let component: TestAppHighlightBorderComponent;
  let fixture: ComponentFixture<TestAppHighlightBorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestAppHighlightBorderComponent,
        HighlightBorderDirective
      ]
    });
    fixture = TestBed.createComponent(TestAppHighlightBorderComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new HighlightBorderDirective(el: ElementRef, renderer: Renderer2);
    expect(directive).toBeTruthy();
  });
});
