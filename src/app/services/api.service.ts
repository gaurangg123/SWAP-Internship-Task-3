import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiHost: string;
  registerUser: string;
  login: string;
  logout: string;
  checkEmail: string;
  checkOTP: string;
  resetPsw: string;
  getUserById: string;
  changePsw: string;
  loginLogoutTime: string;
  userMembership: string;
  isAlreadyUserMembership: string;
  setUserIp: string;
  checkAlreadyUserAccess: string;

  getCategory: string;
  newsData: string;
  gmpData: string;
  guidelinesData: string;
  businessData: string;
  productData: string;
  videosData: string;
  // InternalNewsData: string;
  // InternalGmpData: string;
  // InternalGuidelinesData: string;
  // InternalBusinessData: string;
  // InternalproductData: string;
  getNewsById: string;
  getGmpById: string;
  getGuidelinesById: string;
  getBusinessById: string;
  getProductById: string;
  getVideoById: string;

  newsSubCatData: string;
  gmpSubCatData: string;
  guidelinesSubCatData: string;
  businessSubCatData: string;
  productSubCatData: string;
  videoSubcatData: string;

  internalSearch: string;
  headerSearch: string;
  getAboutUsData: string;
 
  getDisclaimerData: string;
  getTermsAndConditionData: string;
  getPrivacyPolicyData: string;

  getInternalBusinessById: string;

  constructor(private http: HttpClient) { 
    this.apiHost = environment.API_HOST;
    this.registerUser = this.apiHost + `user-website`;
    this.login = this.apiHost + `login`;
    this.logout = this.apiHost + `admin/logout`;
    this.checkEmail = this.apiHost + `admin/forgetUserPassword`;
    this.checkOTP = this.apiHost + `admin/verifyOTPForgetUserPassword`;
    this.resetPsw = this.apiHost + `admin/forgetUserPasswordUpdate`;
    this.getUserById = this.apiHost + `getUserById`;
    this.changePsw = this.apiHost + `admin/resetPassword`;
    this.loginLogoutTime = this.apiHost + `postLoginLogoutTime`;
    this.userMembership = this.apiHost + `setUserMembership`;
    this.isAlreadyUserMembership = this.apiHost + `checkAlreadyUserMembership`;
    this.setUserIp = this.apiHost + `setUserIp`;
    this.checkAlreadyUserAccess = this.apiHost + `checkAlreadyUserAccess`;
    // this.setUserIp = `http://ati1855.cloudapp.net:5000/setUserIp`;
    // this.checkAlreadyUserAccess = `http://ati1855.cloudapp.net:5000/checkAlreadyUserAccess`;

    this.getCategory = this.apiHost + `admin/all-category`;
    this.newsData = this.apiHost + `All-News-active`;
    this.gmpData = this.apiHost + `All-GMP-active`;
    this.guidelinesData = this.apiHost + `All-Regulatory-active`;
    this.businessData = this.apiHost + `All-Business-active`;
    this.productData = this.apiHost + `All-Product-active`;
    this.videosData = this.apiHost + `All-Video-active`;
    // this.InternalNewsData = this.apiHost + `News-active`;
    // this.InternalGmpData = this.apiHost + `GMP-active`;
    // this.InternalGuidelinesData = this.apiHost + `Regulatory-active`;
    // this.InternalBusinessData = this.apiHost + `Business-active`;
    // this.InternalproductData =this.apiHost + `Product-active`;
    this.getNewsById = this.apiHost + `admin/get-internal-newsById`;
    this.getGmpById = this.apiHost + `admin/get-internal-GMPById`;
    this.getGuidelinesById = this.apiHost + `admin/get-internal-RegulatoryById`;
    this.getBusinessById = this.apiHost + `admin/get-internal-BusinessById`;
    this.getProductById = this.apiHost + `admin/get-internal-ProductById`;
    this.getVideoById = this.apiHost + `admin/get-VideoById`;

    this.newsSubCatData = this.apiHost + `admin/all-sub-category`;
    this.gmpSubCatData = this.apiHost + `admin/all-sub-category-GMP`;
    this.guidelinesSubCatData = this.apiHost + `admin/all-sub-category-Regulatory`;
    this.businessSubCatData = this.apiHost + `admin/all-sub-category-Business`;
    this.productSubCatData = this.apiHost + `admin/all-sub-category-Product`;
    this.videoSubcatData = this.apiHost + `admin/all-sub-category-Video`;

    this.internalSearch = this.apiHost + `searchInternalCategories`;
    this.headerSearch = this.apiHost + `searchHeader`;
    this.getAboutUsData = this.apiHost + `admin/all-about-us`;
    this.getDisclaimerData = this.apiHost + `admin/all-disclaimer`;
    this.getTermsAndConditionData = this.apiHost + `admin/all-term-condition`;
    this.getPrivacyPolicyData = this.apiHost + `admin/all-privacy-policy`;

    this.getInternalBusinessById = this.apiHost + `admin/get-internal-BusinessById`;
  }

  registerNewUser(requestParameter: string) {
    return this.http.post(`${this.registerUser}`, JSON.parse(requestParameter), {})
  }

  updateUser(requestParameter: string, id: string) {
    return this.http.put(`${this.registerUser}?id=${id}`, JSON.parse(requestParameter), {})
  }

  onLogin(requestParameter: string) {
    return this.http.post(`${this.login}`, JSON.parse(requestParameter), {});
  }

  onLogout(requestParameter: string) {
    return this.http.post(`${this.logout}`, JSON.parse(requestParameter), {});
  }

  checkEmailForgotPsw(requestParameter: string) {
    return this.http.post(`${this.checkEmail}`, JSON.parse(requestParameter), {});
  }

  checkOTPForgotPsw(requestParameter: string) {
    return this.http.post(`${this.checkOTP}`, JSON.parse(requestParameter), {});
  }

  resetForgotPsw(requestParameter: string) {
    return this.http.post(`${this.resetPsw}`, JSON.parse(requestParameter), {});
  }

  getUser(requestParameters: string) {
    return this.http.post(`${this.getUserById}`, JSON.parse(requestParameters), {});
  }

  changeUserPassword(requestParameters: string) {
    return this.http.post(`${this.changePsw}`, JSON.parse(requestParameters), {});
  }

  userLoginLogoutTime(requestParameters: string) {
    return this.http.post(`${this.loginLogoutTime}`, JSON.parse(requestParameters), {});
  }

  setUserMembership(requestParameter: string) {
    return this.http.post(`${this.userMembership}`, JSON.parse(requestParameter), {});
  }

  checkAlreadyUserMembership(requestParameter: string) {
    return this.http.post(`${this.isAlreadyUserMembership}`, JSON.parse(requestParameter), {});
  }

  getUserIp(requestParameter: string) {
    return this.http.post(`${this.setUserIp}`, JSON.parse(requestParameter), {});
  }

  checkUserAccess(requestParameter: string) {
    return this.http.post(`${this.checkAlreadyUserAccess}`, JSON.parse(requestParameter), {});
  }

  getAllCategoryNames() {
    return this.http.get(`${this.getCategory}`);
  }

  getAllNews() {
    return this.http.get(`${this.newsData}`);
  }

  getAllGmp() {
    return this.http.get(`${this.gmpData}`);
  }

  getAllGuidelines() {
    return this.http.get(`${this.guidelinesData}`);
  }

  getAllBusiness() {
    return this.http.get(`${this.businessData}`);
  }

  getAllProduct() {
    return this.http.get(`${this.productData}`);
  }

  getAllVideos() {
    return this.http.get(`${this.videosData}`);
  }
 
  getAllSubCatNewsList() {
    return this.http.get(`${this.newsSubCatData}`);
  }

  getAllSubCatGmpList() {
    return this.http.get(`${this.gmpSubCatData}`);
  }

  getAllSubCatGuidelinesList() {
    return this.http.get(`${this.guidelinesSubCatData}`);
  }

  getAllSubCatBusinessList() {
    return this.http.get(`${this.businessSubCatData}`);
  }

  getAllSubCatProductList() {
    return this.http.get(`${this.productSubCatData}`);
  }

  getAllSubCatVideoList() {
    return this.http.get(`${this.videoSubcatData}`);
  }

  // getInternalActiveNews() {
  //   return this.http.get(`${this.InternalNewsData}`);
  // }
  // getInternalActiveGmp() {
  //   return this.http.get(`${this.InternalGmpData}`);
  // }
  // getInternalActiveGuidelines() {
  //   return this.http.get(`${this.InternalGuidelinesData}`);
  // }
  // getInternalActiveBusiness() {
  //   return this.http.get(`${this.InternalBusinessData}`);
  // }
  // getInternalActiveProduct() {
  //   return this.http.get(`${this.InternalproductData}`);
  // }
  newsById(requestParameter: any) {
    return this.http.post(`${this.getNewsById}`, requestParameter, {});
  }

  gmpById(requestParameter: any) {
    return this.http.post(`${this.getGmpById}`, requestParameter, {});
  }

  guidelinesById(requestParameter: any) {
    return this.http.post(`${this.getGuidelinesById}`, requestParameter, {});
  }

  businessById(requestParameter: any) {
    return this.http.post(`${this.getBusinessById}`, requestParameter, {});
  }

  productById(requestParameter: any) {
    return this.http.post(`${this.getProductById}`, requestParameter, {});
  }

  videoById(requestParameter: any) {
    return this.http.post(`${this.getVideoById}`, requestParameter, {});
  }

  internalSearchData(requestParameter: any) {
    return this.http.post(`${this.internalSearch}`, requestParameter, {});
  }

  headerSearchData(requestParameter: any) {
    return this.http.post(`${this.headerSearch}`, requestParameter, {});
  }
  getAboutUsContent(){
    return this.http.get(`${this.getAboutUsData}`)
  }
  getDisclaimerContent(){
    return this.http.get(`${this.getDisclaimerData}`)
  }
  getTermsConditionsContent(){
    return this.http.get(`${this.getTermsAndConditionData}`)
  }
  getPrivacyPolicyContent(){
    return this.http.get(`${this.getPrivacyPolicyData}`)
  }

  getInternalBusinessbyId(businessId: string) {
    return this.http.get(`${this.getInternalBusinessById}/${businessId}`);
  }
  getinternalRegulatoryById(regulatoryId: string) {
    return this.http.get(`${this.getInternalBusinessById}/${regulatoryId}`);
  }
  getVideosResultbyId(videoId: any) {
    return this.http.post(`${this.getVideoById}`, videoId, {});
  }
  getNewsResultbyId(newsId: string) {
    return this.http.post(`${this.getNewsById}`, newsId, {});
  }
  ////////////////////////---- Load Image ----//////////////////////////
  imgUrl(imgSrc: string) {
    return this.apiHost + imgSrc;
  }
  //////////////////////////////////////////////////////////////////////
}
