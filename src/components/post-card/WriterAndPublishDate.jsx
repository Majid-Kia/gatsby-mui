import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WriterInfo from './WriterInfo';

const WriterAndPublishDate = ({
  writerId,
  publishDate,
  timeToRead,
  hasDate,
}) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <WriterInfo writerId={writerId} />
      </Grid>
      <Grid item>
        <Grid container>
          {hasDate === true && (
            <Grid
              item
              borderRight={1}
              lineHeight={0}
              pr={0.5}
              sx={(theme) => ({
                borderColor: theme.palette.grey['400'],
              })}
            >
              <Typography
                lineHeight={1}
                variant="caption"
                sx={{
                  color: (theme) => theme.palette.grey['400'],
                }}
              >
                {publishDate}
              </Typography>
            </Grid>
          )}
          <Grid item pl={0.5} lineHeight={0}>
            <Typography
              lineHeight={1}
              variant="caption"
              sx={{
                color: (theme) => theme.palette.grey['400'],
              }}
            >
                {`${timeToRead} mins read`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

WriterAndPublishDate.propTypes = {
  writerId: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  hasDate: PropTypes.bool,
};

export default WriterAndPublishDate;
