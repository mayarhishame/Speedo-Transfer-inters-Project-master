import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money-transfer-conformation',
  standalone: true,
  imports: [],
  templateUrl: './money-transfer-conformation.component.html',
  styleUrl: './money-transfer-conformation.component.scss',
})
export class MoneyTransferConformationComponent {
  constructor(private router: Router) {}
  navigateToConfirmComponent() {
    this.router.navigate(['/money-transfer-confirmation']);
  }
}
