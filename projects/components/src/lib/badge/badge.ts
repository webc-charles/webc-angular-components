import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import type { BadgeVariantTypes } from './types';

@Component({
  selector: 'badge',
  imports: [NgClass],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  variant = input<BadgeVariantTypes>('default');
  customClass = input<string>('');
}
