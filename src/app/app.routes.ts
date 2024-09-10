import { Routes } from '@angular/router';
import { HomeWrapperComponent } from './modules/home/components/home-wrapper/home-wrapper.component';
import { LoginComponent } from './modules/authentication/pages/login/login.component';
import { MoneyTransferAmoutComponent } from './modules/money-transfer/components/money-transfer-amout/money-transfer-amout.component';
import { MoneyTransferConformationComponent } from './modules/money-transfer/components/money-transfer-conformation/money-transfer-conformation.component';
import { RegsiterComponent } from './modules/authentication/pages/register/regsiter.component';
import { MyProfileComponent } from './modules/user-account/my-profile/my-profile.component';
import { PaymentsHistoryComponent } from './modules/user-account/payments-history/payments-history.component';
import { ChangePasswordComponent } from './modules/user-account/change-password/change-password.component';
import { SettingsComponent } from './modules/user-account/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: LoginComponent,
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'home',
    component: HomeWrapperComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'money-transfer',
    component: MoneyTransferAmoutComponent,
  },
  {
    path: 'money-transfer-confirmation',
    component: MoneyTransferConformationComponent,
  },
  {
    path: 'register',
    component: RegsiterComponent,
  },
  {
    path: 'profile',
    component: MyProfileComponent,
  },
  {
    path: 'paymentHistory',
    component: PaymentsHistoryComponent,
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
