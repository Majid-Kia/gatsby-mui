import React from 'react';
import Grid from '@mui/material/Grid';
// import SubFooterLinksData from './SubFooterLinks.data';
import SubFooterImage from './SubFooterImage';
import CustomLink from '../../../components/link/CustomLink';
import { useStaticQuery, graphql } from 'gatsby';

const SubFooterLinks = () => {
  const data = useStaticQuery(graphql`
    query SubFooterLinks {
      allSubFooterLinksJson {
        edges {
          node {
            SubFooterIconPath
            SubFooterPath {
              link
            }
            SubFooterAlt
          }
        }
      }
    }
  `);

  const {
    allSubFooterLinksJson: { edges: SubFooterLinksData },
  } = data;

  return (
    <Grid container alignItems="center" justifyContent="center" spacing={1}>
      {SubFooterLinksData.map((item) => {
        return (
          <Grid
            item
            key={item.node.SubFooterIconPath}
            sx={{ cursor: 'pointer', paddingX: 1.5 }}
          >
            <CustomLink navigationObject={item.node.SubFooterPath}>
              <SubFooterImage
                imagePath={item.node.SubFooterIconPath}
                alt={item.node.SubFooterAlt}
              />
            </CustomLink>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SubFooterLinks;
