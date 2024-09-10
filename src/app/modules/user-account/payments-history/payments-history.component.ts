import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-payments-history',
  standalone: true,
  imports: [SideNavComponent, FooterComponent, SharedModule],
  templateUrl: './payments-history.component.html',
  styleUrl: './payments-history.component.scss',
})
export class PaymentsHistoryComponent {}
