import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-easy-toast'

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question: '¿Cuál es la capital de México?', 
          options: ['Guadalajara', 'Ciudad de México', 'Monterrey'],
          answerIndex: 1,
        },
        {
          question: '¿Cuál es la capital de España?', 
          options: ['Barcelona', 'Ciudad de España', 'Madrid'],
          answerIndex: 2,
        },
        {
          question: '¿Cuál es la capital de Jalisco?', 
          options: ['Ciudad Guzmán', 'El Fresnito', 'Guadalajara'],
          answerIndex: 1,          
        },
        {
          question: '¿Dónde nació Marcos?', 
          options: ['Ciudad Guzmán', 'Otsss', 'Guadalajara'],
          answerIndex: 0,
        },
        {
          question: '¿Cuál es la capital de Francia?', 
          options: ['El Fresnitoggu ulala', 'Paris', 'Montevideo'],
          answerIndex: 0,
        },
      ],
    index: 0,
    }
  }

  setCurrentQuestion = () => {

    this.setState(({ index }) => {
      if( index >= 4)
        return { index: 0 };

      return { index: index + 1 };

    })
  }

  checkSelectedAnswer( clikedAnswerIndex ) {

    const { questions, index } = this.state;

    if(clikedAnswerIndex === questions[index].answerIndex) 
      this.refs.toast.show('Ajalas, le atinaste!');
    else 
      this.refs.toast.show('Respuesta incorrecta');

  }

  render() {

    const { questions, index } = this.state;

    return (
      <View style={styles.outerFlexContainer}>
        <Toast 
          style={styles.toast} 
          ref="toast"
          position='bottom'
          opacity={0.8}
          />
        <Text style={styles.questionStyle}>
          { questions[index].question }
        </Text>

        <View style={styles.innerFlexContainer}>

          <Button style={styles.button}
            onPress={this.checkSelectedAnswer.bind(this, 0)}
            title={questions[index].options[0]}
          />

          <Button style={styles.button}
            onPress={this.checkSelectedAnswer.bind(this, 1)}
            title={questions[index].options[1]}
          />

          <Button style={styles.button}
            onPress={this.checkSelectedAnswer.bind(this, 2)}
            title={questions[index].options[2]}
          />

        </View>

        <Button
          color='#ff5c5c'
          onPress={this.setCurrentQuestion}
          title="Siguiente"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {margin: '20 0 20 0'},
  innerFlexContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    height: 50,
    marginBottom: 50,
  },
  outerFlexContainer: { flex: 1, padding: 30 },
  questionStyle: { 
    marginBottom: 10,
    marginTop: 10,
   },
   toast: {backgroundColor: 'grey', borderRadius: 5,padding: 10,}
});