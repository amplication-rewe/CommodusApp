import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnifyCoreModule } from '@rewe/unify-ng';
import { UnifyFooterModule } from '@rewe/unify-ng/footer';
import { UnifyGlobalHeaderModule } from '@rewe/unify-ng/global-header';
import { UnifyLeftPanelLanguageSwitcherItem, UnifyLeftPanelModule } from '@rewe/unify-ng/left-panel';

import { LangDefinition, TranslocoModule, TranslocoService } from '@ngneat/transloco';

import { version } from '../environments/environment';

@Component({
  standalone: true,
  imports: [RouterModule, UnifyCoreModule, UnifyGlobalHeaderModule, UnifyLeftPanelModule, UnifyFooterModule, TranslocoModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public version = version;
  public languageSwitcherConfig!: UnifyLeftPanelLanguageSwitcherItem[];

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.setLanguageSwitcherConfig();
  }

  public get activeLanguage(): string {
    return this.translocoService.getActiveLang();
  }

  private setLanguageSwitcherConfig(): void {
    const availableLangs: LangDefinition[] = this.translocoService.getAvailableLangs() as LangDefinition[];

    this.languageSwitcherConfig = availableLangs.map((lang: LangDefinition) => ({
      lang: lang.id,
      name: lang.label,
      action: () => this.translocoService.setActiveLang(lang.id),
    }));
  }

  public scrollToTop(element: HTMLElement): void {
    element.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
