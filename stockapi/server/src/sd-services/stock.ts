let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { validateRequest } from '../middleware/SchemaValidator'; //_splitter_
import { dmUtils } from '../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class stock {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'stock';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new stock(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_stock_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: stock');

    //appendnew_flow_stock_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: stock');

    this.app['post'](
      `${this.serviceBasePath}/stock`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      validateRequest(),
      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          this.sdService.addDMPropertiesToBh(bh, req, 'addstock');
          bh = await this.sd_wrAu1YbatXKJmdjU(bh);
          //appendnew_next_sd_KFPKeaBneCkkJ1Rh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KFPKeaBneCkkJ1Rh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_stock_HttpIn
  }
  //   service flows_stock

  //appendnew_flow_stock_start

  async sd_wrAu1YbatXKJmdjU(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          bh.input.body.addstock.stock_name,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.addorupdateswitch(bh);
      } else if (
        this.sdService.operators['empty'](
          bh.input.body.addstock.stock_name,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_6QjQqdBKOyGwWalI(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wrAu1YbatXKJmdjU');
    }
  }

  async addorupdateswitch(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.addstock.stock_id,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.db1(bh);
      } else if (
        this.sdService.operators['neq'](
          bh.input.body.addstock.stock_id,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ZKVDbszJEakNT8TY(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rRHYTaygggCUdx4f');
    }
  }

  async db1(bh) {
    try {
      const dmUtilsInst = new dmUtils('sd_tiU3Q1ghCej28eZm');
      bh.local.result = await dmUtilsInst.insert(
        '_EN_008wau1q9g',
        bh.input.body.addstock
      );

      bh = await this.sd_WxqnJfiLOEz8J5pg(bh);
      //appendnew_next_db1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5GrElrGzuP4vtiUf');
    }
  }

  async sd_WxqnJfiLOEz8J5pg(bh) {
    try {
      bh.local.response = {
        code: 'TS_001',
        tittle: 'Create',
        status: 200,
        message: 'stock Created Sucessfully',
        hasError: false,
        response: bh.local.result,
      };

      bh = await this.sd_qOluJRZlPpn19Dei(bh);
      //appendnew_next_sd_WxqnJfiLOEz8J5pg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WxqnJfiLOEz8J5pg');
    }
  }

  async sd_qOluJRZlPpn19Dei(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qOluJRZlPpn19Dei');
    }
  }

  async sd_ZKVDbszJEakNT8TY(bh) {
    try {
      const dmUtilsInst = new dmUtils('sd_tiU3Q1ghCej28eZm');
      bh.local.result = await dmUtilsInst.updateById(
        '_EN_008wau1q9g',
        bh.input.body.stock
      );

      bh = await this.sd_xOyxSQPmrDBQZagX(bh);
      //appendnew_next_sd_ZKVDbszJEakNT8TY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZKVDbszJEakNT8TY');
    }
  }

  async sd_xOyxSQPmrDBQZagX(bh) {
    try {
      bh.local.response = {
        code: 'TS_001',
        tittle: 'Create',
        status: 200,
        message: 'stock update Sucessfully',
        hasError: false,
        response: bh.local.result,
      };

      bh = await this.sd_JuGAUJ4XyWd4S3W5(bh);
      //appendnew_next_sd_xOyxSQPmrDBQZagX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xOyxSQPmrDBQZagX');
    }
  }

  async sd_JuGAUJ4XyWd4S3W5(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JuGAUJ4XyWd4S3W5');
    }
  }

  async sd_6QjQqdBKOyGwWalI(bh) {
    try {
      bh = await this.hTTPOut(bh);
      //appendnew_next_sd_6QjQqdBKOyGwWalI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6QjQqdBKOyGwWalI');
    }
  }

  async hTTPOut(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nULSXp5wz7XFJOgU');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_stock_Catch
}
