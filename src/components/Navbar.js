import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
    .container {
        height: 20px;
        width: 20px;
        color: blue;
    }
`
const Navbar = ({ data }) => {

    const [state, setState] = useState({})

    return (
        <Fragment>
            <Styles>
                <div className="container">
                    Navbar
                </div>
            </Styles>
        </Fragment>
    )
}
Navbar.propTypes = {
    data: PropTypes.array.isRequired
}
Navbar.defaultProps = {
    data: []
}
export default Navbar