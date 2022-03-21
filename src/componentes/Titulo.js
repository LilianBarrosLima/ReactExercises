import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    <React.Fragment>
        <Text sytle={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.segundario}</Text>
    </React.Fragment>
)


