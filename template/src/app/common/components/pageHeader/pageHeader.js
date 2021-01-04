import React from 'react';
import PropTypes from 'prop-types';
import './pageHeader.scss';

const PageHeader = ({ primaryHeading, secondaryHeading }) => (
  <div align="left" data-test="PageHeaderComponent">
    <span className="page-header-primary" data-test="PrimaryHeading">{primaryHeading}</span>
    &nbsp;
    <span className="page-header-secondary" data-test="SecondaryHeading">{secondaryHeading}</span>
  </div>
);

PageHeader.propTypes = {
  primaryHeading: PropTypes.string.isRequired,
  secondaryHeading: PropTypes.string,
};

PageHeader.defaultProps = {
  secondaryHeading: '',
};

export default PageHeader;
