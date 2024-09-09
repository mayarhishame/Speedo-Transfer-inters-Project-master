import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyTransferRoutingModule } from './money-transfer-routing.module';
import { MoneyTransferAmoutComponent } from './components/money-transfer-amout/money-transfer-amout.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoneyTransferRoutingModule,
    MoneyTransferAmoutComponent,
  ],
})
export class MoneyTransferModule {}
