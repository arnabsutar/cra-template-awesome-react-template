import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../../utils'
import PageHeader from './pageHeader';

describe('<pageHeader />', () => {
    let component;
    beforeEach(() => {
        const minProps = {
            primaryHeading: 'Primary Heading',
            secondaryHeading: 'Secondary Heading'
        };
        component = shallow(<PageHeader {...minProps} />);
    });

    it('should render without errors', () => {
        const wrapper = findByTestAttr(component, 'PageHeaderComponent');
        expect(wrapper.length).toEqual(1);
    });

    it('should render 1 primary heading', () => {
        const wrapper = findByTestAttr(component, 'PrimaryHeading');
        expect(wrapper.length).toEqual(1);
    });

    it('should render 1 secondary heading', () => {
        const wrapper = findByTestAttr(component, 'SecondaryHeading');
        expect(wrapper.length).toEqual(1);
    });

    // describe('Checking PropTypes', () => {
    //     it('Should NOT throw a warning', () => {
    //         const expectedProps = {
    //             primaryHeading: 'Primary Heading',
    //             secondaryHeading: 'Secondary Heading'
    //         };
    //         const propsError = checkProps(PageHeader, expectedProps);
    //         expect(propsError).toBeUndefined();
    //     });
    // });
});
