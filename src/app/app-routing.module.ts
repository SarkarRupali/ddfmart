import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'medical-list',
    loadChildren: () => import('./pages/medical-list/medical-list.module').then( m => m.MedicalListPageModule)
  },
  {
    path: 'medical-list/:id',
    //loadChildren: () => import('./pages/doctor-details/doctor-details.module').then( m => m.DoctorDetailsPageModule)
    loadChildren: () => import('./pages/doctor-name-list/doctor-name-list.module').then( m => m.DoctorNameListPageModule)
  },
  {
    path : 'medical-list_details/:id',
    loadChildren: () => import('./pages/doctor-details/doctor-details.module').then( m => m.DoctorDetailsPageModule)
  },
  {
    path: 'matrimony',
    loadChildren: () => import('./pages/matrimony/matrimony.module').then( m => m.MatrimonyPageModule)
  },
  {
    path: 'property',
    loadChildren: () => import('./pages/property/property.module').then( m => m.PropertyPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./pages/health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'doctor-name-list',
    loadChildren: () => import('./pages/doctor-name-list/doctor-name-list.module').then( m => m.DoctorNameListPageModule)
  },
  {
    path : 'thank_you',
    loadChildren: () => import('./pages/thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'tour-travels',
    loadChildren: () => import('./pages/tour-travels/tour-travels.module').then( m => m.TourTravelsPageModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./pages/job/job.module').then( m => m.JobPageModule)
  },
  {
    path: 'help-line',
    loadChildren: () => import('./pages/help-line/help-line.module').then( m => m.HelpLinePageModule)
  },
  {
    path: 'job-loan',
    loadChildren: () => import('./pages/job-loan/job-loan.module').then( m => m.JobLoanPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
