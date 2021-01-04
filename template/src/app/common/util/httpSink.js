// import _ from 'lodash-es';

import axios from 'axios';

const getLogLevel = (levelStr) => {
  switch (levelStr) {
    case 'off':
      return 0;
    case 'fatal':
      return 1;
    case 'error':
      return 3;
    case 'warning':
      return 7;
    case 'information':
      return 15;
    case 'debug':
      return 31;
    case 'verbose':
      return 63;
    default:
      return 15;
  }
};

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
    'sink-type': 'http',
    'content-type': 'application/json',
  },
});
const HttpSinkLevelSwitch = {
  off: 0,
  fatal: 1,
  error: 3,
  warning: 7,
  information: 15,
  debug: 31,
  verbose: 63,
};
class HttpSink {
  /**
   *
   * @param {*} option :
   * {
   *  url : null,
   *  restrictedToMinimumLevel: information,
   *  enableRetry: false,
   *  retryCount: 0, // not implemented yet
   *  batchMode: false,
   *  batchSize: 0
   * }
   */
  constructor(options) {
    // if (!options || _.isEmpty(options.url)) {
    //   throw new Error('URL is mandatory');
    // }
    this.url = options.url;
    this.restrictedToMinimumLevel = options.restrictedToMinimumLevel
      ? getLogLevel(options.restrictedToMinimumLevel) : getLogLevel('information');
    this.enableRetry = options.enableRetry;
    this.retryCount = options.retryCount;
    this.batchMode = options.batchMode;
    this.batchSize = options.batchSize;
    this.eventQueues = [];

    this.internalEventThreshold = 2;
    if (this.batchMode && this.batchSize > 1) {
      this.internalEventThreshold = this.batchSize;
    }
  }

  /**
   * @param {*} events  - events which needs to be processed by the sink
   */
  emit(events) {
    // update the event queue as per the level switch
    this.eventQueues = [...this.eventQueues, ...events].filter(
      (e) => e.severity <= this.restrictedToMinimumLevel,
    );
    this.processLogs();
  }

  /**
   * Log any pending events
   */
  flush() {
    // all the pending items needs to be pushed
    this.postEvent(this.eventQueues);
    this.eventQueues.length = 0;
  }

  /**
   * this will process log depending on the batch size configured for the sink
   */
  processLogs() {
    const logMessages = [];
    let counter = this.internalEventThreshold;
    if (this.eventQueues.length >= this.internalEventThreshold) {
      while (counter > 0 && this.eventQueues.length > 0) {
        logMessages.push(this.eventQueues.pop());
        counter -= 1;
      }
    }
    if (logMessages.length > 0) {
      this.postEvent(logMessages);
    }
  }

  /**
   *@param {*} events - events which needs to be posted to the configured endpoint.
   */
  postEvent(events) {
    const logs = events.map((e) => e);
    axiosInstance.post(this.url, logs);
  }
}

export { HttpSink, HttpSinkLevelSwitch };
