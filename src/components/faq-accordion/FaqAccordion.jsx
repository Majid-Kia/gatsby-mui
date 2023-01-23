import React from 'react';
import StyledAccordionContainer from '../styled-accordion/StyledAccordionContainer';
import StyledAccordionDetail from '../styled-accordion/StyledAccordionDetail';
import StyledAccordionSummary from '../styled-accordion/StyledAccordionSummary';
import StyledAccordionSummaryContent from '../styled-accordion/StyledAccordionSummaryContent';
import FaqAccordionTitle from './FaqAccordionTitle';
import FaqAccordionEndIcon from './FaqAccordionEndIcon';
import PropTypes from 'prop-types';
import FaqAccordionEndIconExpand from './FaqAccordionEndIconExpand';
import Grid from '@mui/material/Grid';
import DangerouslySetTypography from '../typography/DangerouslySetTypography';

const FaqAccordion = ({ item, expanded, setExpanded, index, isMainFaq }) => {
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : -1);
  };
  const getAreaControlId = (id) => {
    return `panel-${id}-content`;
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledAccordionContainer
          expanded={expanded === index && expanded !== -1}
          onChange={handleChange(index)}
          sx={{
            boxShadow: 0,
            marginBottom: 1,
          }}
        >
          <StyledAccordionSummary
            component={'a'}
            className={'faqAccordion'}
            aria-controls={getAreaControlId(index)}
            id={getAreaControlId(index)}
          >
            <StyledAccordionSummaryContent
              title={<FaqAccordionTitle title={item.accordionTitle} />}
              expanded={expanded}
              index={index}
              endIcon={<FaqAccordionEndIcon />}
              endIconExpand={<FaqAccordionEndIconExpand />}
            />
          </StyledAccordionSummary>
          <StyledAccordionDetail>
            {isMainFaq ? (
              item.accordionDescription
            ) : (
              <DangerouslySetTypography
                variant="body1"
                component="p"
                color="textSecondary"
              >
                {item.accordionDescription}
              </DangerouslySetTypography>
            )}
          </StyledAccordionDetail>
        </StyledAccordionContainer>
      </Grid>
    </Grid>
  );
};

FaqAccordion.propTypes = {
  item: PropTypes.shape({
    accordionTitle: PropTypes.string.isRequired,
    accordionDescription: PropTypes.string.isRequired,
  }).isRequired,
  expanded: PropTypes.number.isRequired,
  setExpanded: PropTypes.func.isRequired,
  index: PropTypes.number,
};

export default FaqAccordion;
