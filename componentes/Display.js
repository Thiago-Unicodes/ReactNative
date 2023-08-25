import React, {useState} from 'react';
import { ColorPropType, SafeAreaView, TextInput, Image, TouchableHighlight, Text, View } from 'react-native';
import { css } from '../css/Css';


export default props=> {

    return(
        
        <View style={css.display}>
            {/* VIEW DO DISPLAY */}

            <Text 
                style={css.display_numeros}
                numberOfLines={1} 
            >
                {/* aqui eu busco o valor que esta sendo passado via props */}
                {props.valor}
            </Text>

            <Text 
                style={css.display_resultado}
                numberOfLines={1} 
            >
                {/* aqui eu busco o valor que esta sendo passado via props */}
                {props.res}
            </Text>

        </View>
    )
}
