/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_YZ9HxB6S06vvV0Sn(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_YZ9HxB6S06vvV0Sn(bh) {
    try {
      bh = this.sd_B1sRif2Qzd87yloD(bh);
      //appendnew_next_sd_YZ9HxB6S06vvV0Sn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YZ9HxB6S06vvV0Sn');
    }
  }

  //appendnew_flow_dashboardComponent_start

  sd_B1sRif2Qzd87yloD(bh) {
    try {
      bh = this.sd_vOVlyGdJPkW36xVn(bh);
      //appendnew_next_sd_B1sRif2Qzd87yloD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B1sRif2Qzd87yloD');
    }
  }

  sd_vOVlyGdJPkW36xVn(bh) {
    try {
      const page = this.page;
      page.menu = [
        {
          iconName: 'dashboard',
          displayName: page.locales.keys.menu_case,
          route: 'case',
        },
        {
          iconName: 'work_outline',
          displayName: page.locales.keys.menu_process,
          route: 'process',
        },
        {
          iconName: 'Roles',
          displayName: page.locales.keys.menu_role,
          route: 'roles',
        },
        {
          iconName: 'group',
          displayName: page.locales.keys.menu_users,
          route: 'users',
        },
        {
          iconName: 'lock',
          displayName: page.locales.keys.menu_app_setting,
          route: 'appsettings',
        },
      ];
      //appendnew_next_sd_vOVlyGdJPkW36xVn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vOVlyGdJPkW36xVn');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_dashboardComponent_Catch
}
