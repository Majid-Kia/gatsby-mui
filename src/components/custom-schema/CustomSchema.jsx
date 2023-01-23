import React from 'react'
import {Helmet} from 'react-helmet-async';
import PropTypes from 'prop-types';

const CustomSchema = ({ schema }) => {

    return (
        <Helmet>
            <script type={"application/ld+json"}>
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    )
}

CustomSchema.prototype = {
    schema: PropTypes.object
}

export default CustomSchema
