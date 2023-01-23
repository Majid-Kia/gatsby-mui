import React from 'react';
import PropTypes from 'prop-types';
import CustomLink from '../link/CustomLink';
import Typography from '@mui/material/Typography';


const TableOfContentLinks = ({ link, activeLink, setActiveLink }) => {

    return (
        <CustomLink className="tableOfContentLink" navigationObject={link} idBaseClickEvent={() => setActiveLink(link.id)}>
            <Typography variant={activeLink === link.id ? 'subtitle2' : 'body2'} sx={(theme) => ({
                display: 'block',
                color: theme.palette.text.secondary,
                marginBottom: '0.5rem',
                cursor: 'pointer',
                ':before': {
                    content: 'counters(item, ".") " "',
                    counterIncrement: 'item',
                },
                ':hover': {
                    fontWeight: 700,
                },
            })}>
                {link.value}
            </Typography>
        </CustomLink >
    )
}

TableOfContentLinks.prototype = {
    link: PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        sectionId: PropTypes.string.isRequired
    }),
    activeLink: PropTypes.number,
    setActiveLink: PropTypes.func
};

export default TableOfContentLinks