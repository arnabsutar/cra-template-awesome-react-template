import ApplicationBaseReducer, { initialState } from './ApplicationBaseReducer';
import { commonTypes } from '../actions/commonActions';

describe('ApplicationBaseReducer', () => {
    it('should return default state', () => {
        const newState = ApplicationBaseReducer(initialState, {});
        expect(newState).toBe(initialState);
    });
    
    it('should return APPLICATION_LOADED state', () => {
        const expectedState = {"applicationName": "React Sample Project Setup", "loaded": true, "processingInProgress": 0};
        const newState = ApplicationBaseReducer(initialState, {
            type: commonTypes.APPLICATION_LOADED,
            data: {
                isLoaded: true
            }
        });
        expect(newState).toStrictEqual(expectedState);
    });
    
    it('should return PROCESSING_INITIATED state', () => {
        const expectedState = {"applicationName": "React Sample Project Setup", "loaded": false, "processingInProgress": 1};
        const newState = ApplicationBaseReducer(initialState, {
            type: commonTypes.PROCESSING_INITIATED
        });
        expect(newState).toStrictEqual(expectedState);
    });
    
    it('should return PROCESSING_COMPLETED state', () => {
        const expectedState = {"applicationName": "React Sample Project Setup", "loaded": false, "processingInProgress": -1};
        const newState = ApplicationBaseReducer(initialState, {
            type: commonTypes.PROCESSING_COMPLETED
        });
        expect(newState).toStrictEqual(expectedState);
    });
});