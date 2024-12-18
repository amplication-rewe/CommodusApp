import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnifyPageHeaderModule } from '@rewe/unify-ng/page-header';

import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-secondary',
  standalone: true,
  imports: [CommonModule, UnifyPageHeaderModule, TranslocoModule],
  templateUrl: './secondary.component.html',
})
export class SecondaryComponent {}
