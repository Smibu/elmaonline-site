import React, { useEffect, useState } from 'react';
import DerpTable from 'components/Table/DerpTable';
import DerpTableCell from 'components/Table/DerpTableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import LocalTime from 'components/LocalTime';
import Time from 'components/Time';
import Header from 'components/Header';
import { Level } from 'components/Names';
import { useStoreState, useStoreActions } from 'easy-peasy';

const LatestTimes = ({ KuskiIndex }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pagePR, setPagePR] = useState(0);
  const [rowsPerPagePR, setRowsPerPagePR] = useState(10);
  const { latestTimes, latestPRs } = useStoreState(state => state.Kuski);
  const { getLatest } = useStoreActions(actions => actions.Kuski);
  useEffect(() => {
    getLatest({ KuskiIndex, limit: 1000 });
  }, [KuskiIndex]);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={6}>
        <Container>
          <Header h3>Latest finishes</Header>
        </Container>
        {latestTimes.length > 0 && (
          <DerpTable
            headers={['Level', 'Time', 'Driven']}
            length={latestTimes.length}
            pagination
            onChangePage={nextPage => setPage(nextPage)}
            onChangeRowsPerPage={rows => {
              setPage(0);
              setRowsPerPage(rows);
            }}
          >
            {latestTimes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(r => (
                <TableRow hover key={r.KuskiIndex}>
                  <DerpTableCell>
                    <Level LevelData={r.LevelData} />
                  </DerpTableCell>
                  <DerpTableCell>
                    <Time time={r.Time} />
                  </DerpTableCell>
                  <DerpTableCell>
                    <LocalTime
                      date={r.Driven}
                      format="ddd D MMM YYYY HH:mm:ss"
                      parse="X"
                    />
                  </DerpTableCell>
                </TableRow>
              ))}
          </DerpTable>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Container>
          <Header h3>Latest PRs</Header>
        </Container>
        {latestPRs.length > 0 && (
          <DerpTable
            headers={['Level', 'Time', 'Driven']}
            length={latestPRs.length}
            pagination
            onChangePage={nextPage => setPagePR(nextPage)}
            onChangeRowsPerPage={rows => {
              setPagePR(0);
              setRowsPerPagePR(rows);
            }}
          >
            {latestPRs
              .slice(
                pagePR * rowsPerPagePR,
                pagePR * rowsPerPagePR + rowsPerPagePR,
              )
              .map(r => (
                <TableRow hover key={r.KuskiIndex}>
                  <DerpTableCell>
                    <Level LevelData={r.LevelData} />
                  </DerpTableCell>
                  <DerpTableCell>
                    <Time time={r.Time} />
                  </DerpTableCell>
                  <DerpTableCell>
                    <LocalTime
                      date={r.Driven}
                      format="ddd D MMM YYYY HH:mm:ss"
                      parse="X"
                    />
                  </DerpTableCell>
                </TableRow>
              ))}
          </DerpTable>
        )}
      </Grid>
    </Grid>
  );
};

const Container = styled.div`
  margin: 8px;
`;

export default LatestTimes;
