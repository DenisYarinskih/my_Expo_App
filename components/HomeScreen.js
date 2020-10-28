import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { Display } from '../components/Display';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 0,
      operand1: null,
      operand2: null,
      operator: null,
    };
  }

  handlePressNumber(btnValue) {
    this.setState((state) => ({
      inputValue: state.inputValue !== 0 ? state.inputValue + `${btnValue}` : btnValue,
    }));

    const stringFromValue = String(this.state.inputValue);
    const isOperatorExist = stringFromValue.includes(this.state.operator);

    if (!isOperatorExist) {
      this.setState((state) => ({
        operand1: state.inputValue,
      }));
    } else {
      this.setState((state) => ({
        operand2: state.inputValue.split(this.state.operator)[1],
      }));
    }
  }

  handlePressOperator(btnValue) {
    if (this.state.operator === '+') {
      this.setState((state) => ({
        operand1: state.operand1 + +state.operand2,
      }));

      this.setState((state) => ({
        inputValue: state.operand1 + state.operator,
      }));

      return;
    } else if (this.state.operator === '-') {
      this.setState((state) => ({
        operand1: state.operand1 - +state.operand2,
      }));

      this.setState((state) => ({
        inputValue: state.operand1 + state.operator,
      }));

      return;
    } else if (this.state.operator === '*') {
      this.setState((state) => ({
        operand1: state.operand1 * +state.operand2,
      }));

      this.setState((state) => ({
        inputValue: state.operand1 + state.operator,
      }));

      return;
    } else if (this.state.operator === '/') {
      this.setState((state) => ({
        operand1: state.operand1 / +state.operand2,
      }));

      this.setState((state) => ({
        inputValue: state.operand1 + state.operator,
      }));

      return;
    } else if (this.state.operator === '%') {
      this.setState((state) => ({
        operand1: state.operand1 % +state.operand2,
      }));

      this.setState((state) => ({
        inputValue: state.operand1 + state.operator,
      }));

      return;
    }

    this.setState((state) => ({
      operator: btnValue,
      inputValue: state.inputValue + btnValue,
    }));
  }

  checkOperator() {
    switch(this.state.operator) {
      case '+':
        this.setState((state) => ({
          inputValue: +state.operand1 + +state.operand2,
        }));

        break;

      case '-':
        this.setState((state) => ({
          inputValue: +state.operand1 - +state.operand2,
        }));

        break;

      case '*':
        this.setState((state) => ({
          inputValue: +state.operand1 * +state.operand2,
        }));

        break;

      case '/':
        this.setState((state) => ({
          inputValue: +state.operand1 / +state.operand2,
        }));

        break;

      case '%':
        this.setState((state) => ({
          inputValue: +state.operand1 % +state.operand2,
        }));

        break;
      default:
        break;
    }
  }

  getResult() {
    this.checkOperator();

    this.setState((state) => ({
      operand1: state.inputValue,
      operator: null,
    }));
  }

  reset() {
    this.setState({
      inputValue: 0,
      operand1: null,
      operand2: null,
      operator: null,
    })
  }

  render() {
    const { inputValue } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <Display display={inputValue}/>
        </View>

        <View style={{paddingBottom: 25}}>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => this.reset()}
              title="C"
              color="#f6f6f6"
              backgroundColor="#a5a5a5"
            />
            <Button
              title="+/-"
              color="#f6f6f6"
              backgroundColor="#a5a5a5"
            />
            <Button
              onPress={() => this.handlePressOperator('%')}
              title="%"
              color="#f6f6f6"
              backgroundColor="#a5a5a5"
            />
            <Button
              onPress={() => this.handlePressOperator("/")}
              title="/"
              color="#f6f6f6"
              backgroundColor="#ff9a0a"
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              title="mc"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              title="mr"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              title="m-"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              title="m+"
              color="#f6f6f6"
              backgroundColor="#ff9a0a"
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => this.handlePressNumber(7)}
              title="7"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressNumber(8)}
              title="8"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressNumber(9)}
              title="9"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressOperator("*")}
              title="x"
              color="#f6f6f6"
              backgroundColor="#ff9a0a"
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => this.handlePressNumber(4)}
              title="4"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressNumber(5)}
              title="5"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressNumber(6)}
              title="6"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressOperator("-")}
              title="-"
              color="#f6f6f6"
              backgroundColor="#ff9a0a"
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => this.handlePressNumber(1)}
              title="1"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressNumber(2)}
              title="2"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressNumber(3)}
              title="3"
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.handlePressOperator("+")}
              title="+"
              color="#f6f6f6"
              backgroundColor="#ff9a0a"
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              onPress={() => this.handlePressNumber(0)}
              style={styles.zeroBtn}
              title="0"
            />
            <Button
              onPress={() => this.handlePressOperator(",")}
              title=","
              color="#f6f6f6"
              backgroundColor="#333333"
            />
            <Button
              onPress={() => this.getResult()}
              title="="
              color="#f6f6f6"
              backgroundColor="#ff9a0a"
            />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  buttonRow:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  zeroBtn: {
    color: "#f6f6f6",
    backgroundColor: "#333333",
    width: 175,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 93
  },
});
