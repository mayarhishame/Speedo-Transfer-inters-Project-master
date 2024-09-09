import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.scss'],
})
export class RegsiterComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    // this.authService.register(null);
  }
}
