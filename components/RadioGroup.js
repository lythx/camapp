import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.defaultValue
    };
  }

  handleButtonPress(index) {
    this.setState({ selected: index })
    this.props.onValueChange(this.props.options[index][1])
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>{this.props.title}</Text>
        {this.props.options.map((a, i) => <View style={styles.groupRow} key={Math.random()}>
          <RadioButton key={Math.random()} onPress={() => this.handleButtonPress(i)}
            selected={i === this.state.selected} />
          <Text style={styles.text} key={Math.random()}>{a[0]}</Text>
        </View >)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    zIndex: 100,
    marginTop: 15
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
    color: '#ffff00'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    textAlignVertical: 'center'
  },
  groupRow: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'flex-start'
  }
})