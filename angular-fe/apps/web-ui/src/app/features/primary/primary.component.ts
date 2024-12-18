import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnifyPageHeaderModule } from '@rewe/unify-ng/page-header';

import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-primary',
  standalone: true,
  imports: [CommonModule, UnifyPageHeaderModule, TranslocoModule],
  templateUrl: './primary.component.html',
})
export class PrimaryComponent {}
