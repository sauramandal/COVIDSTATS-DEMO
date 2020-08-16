import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

const Styles = styled.div`
    .container {
        height: 20px;
        width: 20px;
        color: red;
    }
`
const defaultNationality = 'Italy'
const Modal = () => {

    const [rawCovidData, setRawCovidData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const fetchCovidData = () => {
        // const covidAPI = 'https://api.covid19india.org/v4/min/data.min.json'
        const api = 'https://api.covid19india.org/raw_data.json'
        axios.get(api).then((response) => {
            const result = response.data.raw_data.filter(item => item.nationality === defaultNationality)
            setRawCovidData(result)
            setIsLoaded(true)
        })
    }

    useEffect(() => { 
        fetchCovidData()
    }, [])

    return (
        <Fragment>
            <Styles>
                <div className="container">
                    {rawCovidData && rawCovidData.map((dataItem, dataItemIndex) => {
                        return (
                            <div key={dataItemIndex} className="">
                                <p>{dataItem.nationality}</p>
                            </div>
                        )
                    })}
                </div>
            </Styles>
        </Fragment>
    )
}

/* Modal.propTypes = {
    data: PropTypes.array.isRequired
}
Modal.defaultProps = {
    data: []
} */
export default Modal