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
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
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
      `${this.serviceBasePath}/addstock`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          //appendnew_next_sd_PbfwpcWPLsiv2bI2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PbfwpcWPLsiv2bI2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/billstock`,
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
          bh = await this.sd_MIp5NYRjnqQqDvPQ(bh);
          //appendnew_next_sd_1ZRPnP6XDYXpkpCR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1ZRPnP6XDYXpkpCR');
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

  async sd_MIp5NYRjnqQqDvPQ(bh) {
    try {
      bh.local.query = {
        stock_name: bh.input.body.addstock.stock_name,
        brand_name: bh.input.body.addstock.brand_name,
        size_name: bh.input.body.addstock.size_name,
      };
      bh = await this.sd_C5cjBppu3abLmXKr(bh);
      //appendnew_next_sd_MIp5NYRjnqQqDvPQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MIp5NYRjnqQqDvPQ');
    }
  }

  async sd_C5cjBppu3abLmXKr(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_M1DCivrmttLIrkiR',
        'billing',
        bh.local.query,
        {}
      );
      bh = await this.err_scpt(bh);
      //appendnew_next_sd_C5cjBppu3abLmXKr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C5cjBppu3abLmXKr');
    }
  }

  async err_scpt(bh) {
    try {
      bh.local.response = {
        code: 'IB_001',
        title: 'Add',
        status: 200,
        message: 'stock Added Sucessfully ',
        hasError: false,
        response: bh.local.result.ops,
      };
      bh = await this.sd_wSOT0DsVYbu6W512(bh);
      //appendnew_next_err_scpt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SDYRLu25gTW5S18m');
    }
  }

  async sd_wSOT0DsVYbu6W512(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wSOT0DsVYbu6W512');
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
