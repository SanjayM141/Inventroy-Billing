/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_lNckxm66UZGInhmd(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_lNckxm66UZGInhmd(bh) {
    try {
      bh = this.sd_O37GrgAYZZIMqQcy(bh);
      //appendnew_next_sd_lNckxm66UZGInhmd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lNckxm66UZGInhmd');
    }
  }

  login_alert(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_b1I0tO90Q6jshfsF(bh);
      //appendnew_next_login_alert
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7fezz0Ta2Vf9BRog');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_O37GrgAYZZIMqQcy(bh) {
    try {
      //appendnew_next_sd_O37GrgAYZZIMqQcy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O37GrgAYZZIMqQcy');
    }
  }

  sd_b1I0tO90Q6jshfsF(bh) {
    try {
      const page = this.page;
      alert('user Login Successfully');
      //appendnew_next_sd_b1I0tO90Q6jshfsF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b1I0tO90Q6jshfsF');
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
  //appendnew_flow_loginComponent_Catch
}
