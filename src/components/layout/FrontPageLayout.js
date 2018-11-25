import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import InsertMarkdown from '../common/InsertMarkdown';
import InsertContent from '../common/InsertContent';
import Slideshow from '../common/Slideshow';
import ContentSection from '../common/ContentSection';
import GalleryDisplay from '../common/GalleryDisplay';
import Team from '../common/Team';

class FrontPageLayout extends Component {
  render() {
    const { frontMatter, children } = this.props;
    const sections = frontMatter.sections.section;
    const photos = frontMatter.gallery;

    return (
      <Fragment>
        <Section pad="medium" align="center" className="info-header">
          <h2>Test</h2>
        </Section>
      </Fragment>
    );
  }
}

FrontPageLayout.propTypes = {
  frontMatter: PropTypes.object
};
FrontPageLayout.defaultProps = {};

export default FrontPageLayout;
