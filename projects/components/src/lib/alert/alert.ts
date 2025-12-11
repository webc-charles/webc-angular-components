import { Component, Directive, input, contentChild } from '@angular/core';
import { NgClass } from '@angular/common';
import type { AlertVariantTypes } from './types';

@Directive({
  selector: '[alertTitle]',
  standalone: true,
})
export class AlertTitle {}

@Directive({
  selector: '[alertBody]',
  standalone: true,
})
export class AlertBody {}

@Component({
  selector: 'alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  variant = input<AlertVariantTypes>('info');
  customClass = input<string>('');
  titleContent = contentChild(AlertTitle);
  bodyContent = contentChild(AlertBody);
}
