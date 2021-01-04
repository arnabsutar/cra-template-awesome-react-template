export const commonTypes = {
  APPLICATION_LOADED: 'APPLICATION_LOADED',
  PROCESSING_INITIATED: 'START_PROCESSING',
  PROCESSING_COMPLETED: 'FINISHED_PROCESSING',
};

export function applicationLoadedSuccessfully() {
  return {
    type: commonTypes.APPLICATION_LOADED,
    data: { isLoaded: true },
  };
}

export function applicationFailedToLoad() {
  return {
    type: commonTypes.APPLICATION_LOADED,
    data: { isLoaded: false },
  };
}

export function processingStarted() {
  return {
    type: commonTypes.PROCESSING_INITIATED,
    data: {},
  };
}

export function processingCompleted() {
  return {
    type: commonTypes.PROCESSING_COMPLETED,
    data: {},
  };
}
