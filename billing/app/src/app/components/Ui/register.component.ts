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
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
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
      this.sd_mN8p6wMgFRPUPljM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_mN8p6wMgFRPUPljM(bh) {
    try {
      bh = this.sd_87lwFPVHYwSWSmRO(bh);
      //appendnew_next_sd_mN8p6wMgFRPUPljM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mN8p6wMgFRPUPljM');
    }
  }

  register_alert(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6hPbSgG12bxxzXj1(bh);
      //appendnew_next_register_alert
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bHIlqhZDfRx9z4QM');
    }
  }

  //appendnew_flow_registerComponent_start

  sd_87lwFPVHYwSWSmRO(bh) {
    try {
      //appendnew_next_sd_87lwFPVHYwSWSmRO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_87lwFPVHYwSWSmRO');
    }
  }

  sd_6hPbSgG12bxxzXj1(bh) {
    try {
      const page = this.page;
      alert('Registered Successfully');
      //appendnew_next_sd_6hPbSgG12bxxzXj1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6hPbSgG12bxxzXj1');
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
  //appendnew_flow_registerComponent_Catch
}
