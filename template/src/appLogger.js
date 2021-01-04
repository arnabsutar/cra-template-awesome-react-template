import { configure, ConsoleSink, LogEventLevel } from './app/common/libs/structured-log';
import { HttpSink } from './app/common/util';

// const structuredLog = require('structured-log');

const getLogLevel = (levelStr) => {
  switch (levelStr) {
    case 'off':
      return LogEventLevel.off;
    case 'fatal':
      return LogEventLevel.fatal;
    case 'error':
      return LogEventLevel.error;
    case 'warning':
      return LogEventLevel.warning;
    case 'information':
      return LogEventLevel.information;
    case 'debug':
      return LogEventLevel.debug;
    case 'verbose':
      return LogEventLevel.verbose;
    default:
      return LogEventLevel.information;
  }
};

const logger = configure()
  .writeTo(new ConsoleSink({
    includeTimestamps: true,
    restrictedToMinimumLevel: getLogLevel(window.SERVER_DATA.consoleLogLevel),
    // includeProperties: true,
  }))
  .writeTo(new HttpSink({
    url: window.SERVER_DATA.logEndpoint,
    restrictedToMinimumLevel: window.SERVER_DATA.httpLogLevel,
  }))
  .minLevel(window.SERVER_DATA.minimumLogLevel)
  .enrich(window.SERVER_DATA)
  .create();

export default logger;

// import { HttpSink } from './app/common/util/httpSink';

// const structuredLog = require('./app/common/libs/structured-log/structured-log');

// const getLogLevel = (levelStr) => {
//   switch (levelStr) {
//     case 'off':
//       return structuredLog.LogEventLevel.off;
//     case 'fatal':
//       return structuredLog.LogEventLevel.fatal;
//     case 'error':
//       return structuredLog.LogEventLevel.error;
//     case 'warning':
//       return structuredLog.LogEventLevel.warning;
//     case 'information':
//       return structuredLog.LogEventLevel.information;
//     case 'debug':
//       return structuredLog.LogEventLevel.debug;
//     case 'verbose':
//       return structuredLog.LogEventLevel.verbose;
//     default:
//       return structuredLog.LogEventLevel.information;
//   }
// };

// const logger = structuredLog.configure()
//   .writeTo(new structuredLog.ConsoleSink({
//     includeTimestamps: true,
//     restrictedToMinimumLevel: getLogLevel(window.SERVER_DATA.consoleLogLevel),
//     // includeProperties: true,
//   }))
//   .writeTo(new HttpSink({
//     url: window.SERVER_DATA.logEndpoint,
//     restrictedToMinimumLevel: window.SERVER_DATA.httpLogLevel,
//   }))
//   .minLevel(window.SERVER_DATA.minimumLogLevel)
//   .enrich(window.SERVER_DATA)
//   .create();

// export default logger;
