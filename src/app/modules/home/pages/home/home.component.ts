import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DownloadMobileAppComponent } from '../../../../shared/components/download-mobile-app/download-mobile-app.component';
import { SharedModule } from '../../../../shared/shared.module';
import { GetStartedComponent } from '../../components/get-started/get-started.component';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    DownloadMobileAppComponent,
    SharedModule,
    GetStartedComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
