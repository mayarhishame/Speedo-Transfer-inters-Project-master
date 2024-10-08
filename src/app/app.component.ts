import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SessionManagementService } from './shared/services/session-management.service';
import { SharedModule } from './shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'speedo-transfer-app';
  constructor(private SessionManagementService: SessionManagementService) {}

  ngOnInit(): void {
    this.SessionManagementService.startInactivityTimer();
  }
}
