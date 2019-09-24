/*
    My Grocery List

    [          ]        <Add Grocery Item>

    - 1 lb tomato
    - 2 lb potatoes
    - 1 gallon of milk
    - 1 bottle of coke
*/

class GroceryContainer extends React.Component {
    state: {
        inputValue: "",
        list: []
    }

    updateInputValue = (e) => {
        // updates the inputValue state
    }

    submitOnClick = (e) => {
        e.preventDefault();
        // get value from state and add to list
        setState({
          // add the value to the state
        })
    }
    render() {
        return (
            <div>
                <h3>My Grocery List</h3>
                <formComponent submitEvent={this.submitOnClick} updateInput={this.updateInputValue} />
                <listComponent />
            </div>
        )
    }
}

class formComponent extends React.Component {

    render() {
        return (
            <div>
               <form onSubmit = {this.props.submitEvent}>
                <input type="text" onChange={this.props.updateEvent} />
                <input type="submit" value="Add Grocery Item" />
                </form>
            </div>
        )
    }
}
