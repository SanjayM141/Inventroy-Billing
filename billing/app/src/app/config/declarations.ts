import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-viewOrdersComponent
import { viewOrdersComponent } from '../components/Ui/viewOrders.component';
//CORE_REFERENCE_IMPORT-forgetpasswordComponent
import { forgetpasswordComponent } from '../components/Ui/forgetpassword.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/Ui/register.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/Ui/login.component';
//CORE_REFERENCE_IMPORT-viewStockComponent
import { viewStockComponent } from '../components/Ui/viewStock.component';
//CORE_REFERENCE_IMPORT-addStockComponent
import { addStockComponent } from '../components/Ui/addStock.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/Ui/dashboard.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-viewOrdersComponent
  viewOrdersComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-forgetpasswordComponent
  forgetpasswordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-viewStockComponent
  viewStockComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addStockComponent
  addStockComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'login', component: loginComponent },
  { path: 'register', component: registerComponent },
  { path: 'forgetpassword', component: forgetpasswordComponent },
  { path: 'dashboard', component: dashboardComponent },
  { path: 'addstock', component: addStockComponent },
  { path: 'viewstock', component: viewStockComponent },
  { path: 'vieworder', component: viewOrdersComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
