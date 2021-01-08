import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
// import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './settings/user/user.component';
import { PrivacyComponent } from './settings/privacy/privacy.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: HomeComponent },
            { path: 'new-user', component: NewUserComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: 'profile', component: ProfileComponent },
            {
                path: 'settings', component: SettingsComponent, children: [
                    { path: 'user', component: UserComponent },
                    { path: 'privacy', component: PrivacyComponent }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule { }
