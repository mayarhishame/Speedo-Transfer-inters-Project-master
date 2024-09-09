import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-money-transfer-amout',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './money-transfer-amout.component.html',
  styleUrl: './money-transfer-amout.component.scss',
})
export class MoneyTransferAmoutComponent {
  constructor(private router: Router) {}
  navigateToConfirmComponent() {
    this.router.navigate(['/money-transfer-confirmation']);
  }
}
