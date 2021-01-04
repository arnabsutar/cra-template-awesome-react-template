import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';
import { findByTestAttr } from '../../../../../utils';

describe('<Modal />', () => {
    let component;
    beforeEach(() => {
        const minProps = {
            showModal: true,
            closeModalFlag: () => {

            },
            modalContent: {
                name: 'Test Name'
            }
        };
        component = shallow(<Modal {...minProps} />);
    });

    it('should render without error', () => {
        const wrapper = findByTestAttr(component, 'ModalComponent');
        expect(wrapper.length).toEqual(1);
    });
});