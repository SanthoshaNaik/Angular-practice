import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"aboutUs",component:AboutUs},
    {path:"Login",component:Login},
    {path:"Profile",component:Profile}
];
