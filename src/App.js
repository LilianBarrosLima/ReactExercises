import React from 'react'
import { View, StyleSheet} from 'react-native'

//import CompPadrao, {Comp1, Comp2 } from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'
//import MinMax from './componentes/MinMax'
//import Aleatorio from './componentes/Aleatorio'
//import Titulo from './componentes/Titulo'
//import Botao from './componentes/Botao'
//import Contador from './componentes/Contador'
import Pai from './componentes/direta/Pai'

export default () => (
<View style={style.App}>
    <Pai />
    {/*
    <Contador inicial={100} passo={10} />
    <Contador />
    <Botao />
    < Titulo principal="Cadastro"
        segundario="Tela de Cadastro do produto"/>
    <Aleatorio min="1" max="60" />
    <Aleatorio min="1" max="60" />
    <MinMax min="3" max="20" />
    <MinMax min={1} max={15} />     
    <CompPadrao />
    <Comp1 />
    <Comp2 /> 
    */}
</View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20        
    }
})
