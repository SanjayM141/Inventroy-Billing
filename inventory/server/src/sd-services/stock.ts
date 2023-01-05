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
          bh = await this.sd_QoyXlyDLaOi0Yqnw(bh);
          //appendnew_next_sd_oI9k8Zap2JOrWcbG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oI9k8Zap2JOrWcbG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update`,
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
          //appendnew_next_sd_57C3V2efOtp2ZyB3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_57C3V2efOtp2ZyB3');
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

  async sd_QoyXlyDLaOi0Yqnw(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          bh.input.body.addstock.stock_name,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9NmDVOMZyJr9yj3T(bh);
      } else if (
        this.sdService.operators['nempty'](
          bh.input.body.addstock.stock_name,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rwHr8VSLd1AVRnDG(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QoyXlyDLaOi0Yqnw');
    }
  }

  async sd_9NmDVOMZyJr9yj3T(bh) {
    try {
      bh.local.query = {
        stock_name: bh.input.body.addstock.stock_name,
        brand_name: bh.input.body.addstock.brand_name,
        size_name: bh.input.body.addstock.size_name,
      };
      bh = await this.sd_fgL13jdERkDoB2UM(bh);
      //appendnew_next_sd_9NmDVOMZyJr9yj3T
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9NmDVOMZyJr9yj3T');
    }
  }

  async sd_fgL13jdERkDoB2UM(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_M1DCivrmttLIrkiR',
        'billing',
        bh.local.query,
        {}
      );
      bh = await this.sd_QMlYEmGkUHblHXYu(bh);
      //appendnew_next_sd_fgL13jdERkDoB2UM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fgL13jdERkDoB2UM');
    }
  }

  async sd_QMlYEmGkUHblHXYu(bh) {
    try {
      bh.local.response = {
        code: 'IB_001',
        title: 'Add',
        status: 200,
        message: 'stock Added Sucessfully ',
        hasError: false,
        response: bh.local.result.ops,
      };
      bh = await this.sd_fbBTfmLrmIaK6B4a(bh);
      //appendnew_next_sd_QMlYEmGkUHblHXYu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QMlYEmGkUHblHXYu');
    }
  }

  async sd_fbBTfmLrmIaK6B4a(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fbBTfmLrmIaK6B4a');
    }
  }

  async sd_rwHr8VSLd1AVRnDG(bh) {
    try {
      const { stock_name, brand_name, size_name } = bh.input.body.addstock;
      const ObjectId = require('mongodb').ObjectId;

      bh.local.id = {
        //  "_id" : ObjectId('63b521a655a9941480f4ed5e')
        _id: bh.input.query.id,
      };
      bh.local.updatequery = {
        $set: {
          stock_name,
          brand_name,
          size_name,
        },
      };
      bh = await this.sd_SMZ1Z3yh6qVTEBvw(bh);
      //appendnew_next_sd_rwHr8VSLd1AVRnDG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rwHr8VSLd1AVRnDG');
    }
  }

  async sd_SMZ1Z3yh6qVTEBvw(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_M1DCivrmttLIrkiR',
        'billing',
        bh.local.id,
        bh.local.updatequery,
        {}
      );
      bh = await this.sd_S8gaTw2NiJODpdGT(bh);
      //appendnew_next_sd_SMZ1Z3yh6qVTEBvw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SMZ1Z3yh6qVTEBvw');
    }
  }

  async sd_S8gaTw2NiJODpdGT(bh) {
    try {
      bh.local.response = {
        code: 'IB_001',
        title: 'Add',
        status: 200,
        message: 'update Added Sucessfully ',
        hasError: false,
        response: bh.local.result,
      };
      bh = await this.sd_VvBVTd773UQaQjJR(bh);
      //appendnew_next_sd_S8gaTw2NiJODpdGT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_S8gaTw2NiJODpdGT');
    }
  }

  async sd_VvBVTd773UQaQjJR(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VvBVTd773UQaQjJR');
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
