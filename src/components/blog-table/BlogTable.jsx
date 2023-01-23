import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import StyledTableRow from './StyledTableRow';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import StyledTableCell from './StyledTableCell';
import StyledTableColumnCell from './StyledTableColumnCell';
import StyledTableFirstCell from './StyledTableFirtsCell';
import StyledTableFirstColumnCell from './StyledTableFirstColumnCell';
import PropTypes from 'prop-types';
import DangerouslySetTypography from '../typography/DangerouslySetTypography';
import Grid from '@mui/material/Grid';

const BlogTable = ({ data, mt }) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ maxWidth: '100%' }}>
        <TableContainer
          sx={(theme) => ({
            boxShadow: theme.shadows['1'],
            mt: mt,
            maxWidth: { sm: '100%', xs: '90vw' },
          })}
        >
          <Table sx={{ overflowX: 'auto' }}>
            <TableHead>
              <TableRow>
                {data.tableColumnName.tableFirstColumn && (
                  <StyledTableFirstColumnCell>
                    <Typography variant="subtitle1">
                      {data.tableColumnName.tableFirstColumn}
                    </Typography>
                  </StyledTableFirstColumnCell>
                )}
                {data.tableColumnName.tableColumns.map((column) => (
                  <StyledTableColumnCell>
                    <Typography variant="subtitle1">{column}</Typography>
                  </StyledTableColumnCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.tableBody.map((item) => (
                <StyledTableRow>
                  {item.tableFirstRow && (
                    <StyledTableFirstCell>
                      <DangerouslySetTypography variant="subtitle1">
                        {item.tableFirstRow}
                      </DangerouslySetTypography>
                    </StyledTableFirstCell>
                  )}
                  {item.tableRow.map((row) => (
                    <StyledTableCell>
                      <DangerouslySetTypography variant="body1">
                        {row}
                      </DangerouslySetTypography>
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

BlogTable.prototype = {
  mt: PropTypes.object.isRequired,
  data: PropTypes.shape({
    tableColumnName: PropTypes.shape({
      tableFirstColumn: PropTypes.string.isRequired,
      tableColumns: PropTypes.array.isRequired,
    }),
    tableBody: PropTypes.arrayOf(
      PropTypes.shape({
        tableFirstRow: PropTypes.string.isRequired,
        tableRow: PropTypes.array.isRequired,
      }),
    ),
  }),
};

export default BlogTable;
