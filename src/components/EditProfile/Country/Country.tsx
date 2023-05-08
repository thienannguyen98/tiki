import React from 'react'

interface Props {
    code: string;
    name: string
}

const Country: React.FC<Props> = ({ code, name }) => {
    return (
        <option value={name}>{name}</option>
    )
}

export default Country