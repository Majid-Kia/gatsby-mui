import React, { useState } from 'react';
import StyledContentList from './StyledContentList';
import StyledContentListItem from './StyledContentListItem';
import TableOfContentLinks from './TableOfContentLinks';
import PropTypes from 'prop-types';
import stringUtil from '../../util/string.util';

const TableOfContentHeadings = ({ toc }) => {
  const [activeLink, setActiveLink] = useState(-1);

  const convertToNestedList = (toc, currentDepth, start) => {
    const result = [];
    let index = start;
    while (toc.length > index) {
      const tocItem = toc[index];
      if (tocItem.depth === currentDepth) {
        result.push({
          value: tocItem.value,
          id: index,
          sectionId: stringUtil.normalizeIdString(tocItem.value),
        });
        index++;
      } else if (tocItem.depth > currentDepth) {
        const { result: subResult, index: newIndex } = convertToNestedList(
          toc,
          tocItem.depth,
          index,
        );
        result.push(subResult);
        index = newIndex;
        continue;
      } else {
        // depth should be decreased
        break;
      }
    }
    return { result, index };
  };

  const { result } = convertToNestedList(toc, 2, 0);

  function renderItems(items) {
    return (
      <StyledContentList>
        {items.map((item, index) => {
          return (
            <StyledContentListItem key={index}>
              {item.value && (
                <TableOfContentLinks
                  activeLink={activeLink}
                  setActiveLink={setActiveLink}
                  link={item}
                />
              )}
              {Array.isArray(item) && renderItems(item)}
            </StyledContentListItem>
          );
        })}
      </StyledContentList>
    );
  }
  return renderItems(result);
};

TableOfContentHeadings.prototype = {
  toc: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      depth: PropTypes.number.isRequired,
    }),
  ),
};

export default TableOfContentHeadings;
