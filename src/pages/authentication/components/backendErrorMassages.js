import React from 'react'

const BackendErrorMassages = ({ backendErrors }) => {
    const errorMassages = Object.keys(backendErrors).map(name => {
        const massages = backendErrors[name].join(' ')
        return `${ name } ${ massages }`
    })
    return <ul className="error-messages">
        { errorMassages.map(errorMassages => (
            <li key={ errorMassages }>{ errorMassages }</li>
        )) }
    </ul>
}

export default BackendErrorMassages