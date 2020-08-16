import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const CovidInsights = ({ data }) => {

    const [state, setState] = useState({})

    return (
        <Fragment>
            Content
        </Fragment>
    )
}
CovidInsights.propTypes = {
    data: PropTypes.array.isRequired
}
CovidInsights.defaultProps = {
    data: []
}
export default CovidInsights