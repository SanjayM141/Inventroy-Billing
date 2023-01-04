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
  selector: 'bh-forgetpassword',
  templateUrl: './forgetpassword.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class forgetpasswordComponent {
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
      this.sd_gvGmlK62hvPMwcOg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_gvGmlK62hvPMwcOg(bh) {
    try {
      bh = this.sd_pu6uzy4UtpfbBtDD(bh);
      //appendnew_next_sd_gvGmlK62hvPMwcOg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gvGmlK62hvPMwcOg');
    }
  }

  //appendnew_flow_forgetpasswordComponent_start

  sd_pu6uzy4UtpfbBtDD(bh) {
    try {
      //appendnew_next_sd_pu6uzy4UtpfbBtDD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pu6uzy4UtpfbBtDD');
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
  //appendnew_flow_forgetpasswordComponent_Catch
}
