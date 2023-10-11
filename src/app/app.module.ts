import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partial-components/header/header.component';
import { FooterComponent } from './partial-components/footer/footer.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { SignupFormComponent } from './views/signup-form/signup-form.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { CategoryInternalPageComponent } from './views/category-internal-page/category-internal-page.component';
import { CategoryCardsComponent } from './views/category-cards/category-cards.component';

import { EllipsifyPipe } from './helpers/ellipsify.pipe';
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
import {CarouselModule} from 'ngx-owl-carousel-o';
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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginFormComponent,
    SignupFormComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    CategoryInternalPageComponent,
    CategoryCardsComponent,
    IndividualInternalPageComponent,
    HeaderSearchResultComponent,
    UserProfileComponent,
    EllipsifyPipe,
    AboutUsComponent,
    PrivacyPoliciesComponent,
    TermConditionComponent,
    DisclaimerComponent,
    NewsComponent,
    RegulatoryGuidelinesComponent,
    GmpTrainingComponent,
    ProductsComponent,
    BusinessComponent,
    VideosComponent,
    InternalPageComponent,
    BusinessNewsComponent,
    EducationNewsComponent,
    EntertainmentNewsComponent,
    ForeignNewsComponent,
    ItsectorNewsComponent,
    MedicalNewsComponent,
    PoliticsNewsComponent,
    SpaceNewsComponent,
    SportsNewsComponent,
    WeatherNewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxDocViewerModule,
    CarouselModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
