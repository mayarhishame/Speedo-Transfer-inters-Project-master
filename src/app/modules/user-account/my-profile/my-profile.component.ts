import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ProfileService } from '../../../core/services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [SideNavComponent, HttpClientModule, FooterComponent, SharedModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
  // name: string = '';
  // email: string = '';
  // constructor(private profileService: ProfileService) {}
  // ngOnInit(): void {
  //   this.profileService.getUserProfile().subscribe((data) => {
  //     this.name = data.name;
  //     this.email = data.email;
  //   });
  // }
}
