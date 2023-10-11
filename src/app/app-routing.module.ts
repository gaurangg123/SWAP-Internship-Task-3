import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';

import { HomePageComponent } from './views/home-page/home-page.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { SignupFormComponent } from './views/signup-form/signup-form.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { CategoryInternalPageComponent } from './views/category-internal-page/category-internal-page.component';
import { IndividualInternalPageComponent } from './views/individual-internal-page/individual-internal-page.component';
import { HeaderSearchResultComponent } from './views/header-search-result/header-search-result.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PrivacyPoliciesComponent } from './views/privacy-policies/privacy-policies.component';
import { TermConditionComponent } from './views/term-condition/term-condition.component';
import { DisclaimerComponent } from './views/disclaimer/disclaimer.component';
import { NewsComponent } from './views/news/news.component';
import { RegulatoryGuidelinesComponent } from './views/regulatory-guidelines/regulatory-guidelines.component';
import { GmpTrainingComponent } from './views/gmp-training/gmp-training.component';
import { ProductsComponent } from './views/products/products.component';
import { BusinessComponent } from './views/business/business.component';
import { VideosComponent } from './views/videos/videos.component';
import { InternalPageComponent } from './views/internal-page/internal-page.component';
import { BusinessNewsComponent } from './views/news/business-news/business-news.component';
import { EducationNewsComponent } from './views/news/education-news/education-news.component';
import { EntertainmentNewsComponent } from './views/news/entertainment-news/entertainment-news.component';
import { ForeignNewsComponent } from './views/news/foreign-news/foreign-news.component';
import { ItsectorNewsComponent } from './views/news/itsector-news/itsector-news.component';
import { MedicalNewsComponent } from './views/news/medical-news/medical-news.component';
import { PoliticsNewsComponent } from './views/news/politics-news/politics-news.component';
import { SpaceNewsComponent } from './views/news/space-news/space-news.component';
import { SportsNewsComponent } from './views/news/sports-news/sports-news.component';
import { WeatherNewsComponent } from './views/news/weather-news/weather-news.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'news',
    component: NewsComponent, 
  },
  {
    path: 'news/:id',
    component: InternalPageComponent, 
  },
  {
    path: 'regulatory-guidelines',
    component: RegulatoryGuidelinesComponent, 
  },
  {
    path: 'regulatory-guidelines/:id',
    component: InternalPageComponent, 
  },
  {
    path: 'gmp-training',
    component: GmpTrainingComponent, 
  },
  {
    path: 'gmp-training/:id',
    component: InternalPageComponent, 
  },
  {
    path: 'products',
    component: ProductsComponent, 
  },
  {
    path: 'products/:id',
    component: InternalPageComponent, 
  },
  {
    path: 'business',
    component: BusinessComponent, 
  },
  {
    path: 'business/:id',
    component: InternalPageComponent, 
  },
  {
    path: 'videos',
    component: VideosComponent, 
  },
  {
    path: 'videos/:id',
    component: InternalPageComponent, 
  },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [NonAuthGuard]
  },
  {
    path: 'reset-password/:emailAdd',
    component: ResetPasswordComponent,
    canActivate: [NonAuthGuard]
  },
  {
    path: 'category-internal/:cat/:subcat',
    component: CategoryInternalPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'individual-internal/:getId/:getType',
    component: IndividualInternalPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'header-search-result/:searchData',
    component: HeaderSearchResultComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about-us',
    component: AboutUsComponent
   
  },
  {
    path: 'privacy-policies',
    component: PrivacyPoliciesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'term-condition',
    component: TermConditionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'business-news',
    component: BusinessNewsComponent,
  },
  {
    path:'education-news',
    component: EducationNewsComponent,
  },
  {
    path: 'entertainment-news',
    component: EntertainmentNewsComponent,
  },
  {
    path: 'foreign-news',
    component: ForeignNewsComponent,
  },
  {
    path: 'itsector-news',
    component: ItsectorNewsComponent,
  },
  {
    path: 'medical-news',
    component: MedicalNewsComponent,
  },
  {
    path: 'politics-news',
    component: PoliticsNewsComponent,
  },
  {
    path: 'space-news',
    component: SpaceNewsComponent,
  },
  {
    path: 'sports-news',
    component: SportsNewsComponent,
  },
  {
    path: 'weather-news',
    component: WeatherNewsComponent,
  },
  {
    path: '**',
    redirectTo: '', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollOffset: [0, 0], scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
