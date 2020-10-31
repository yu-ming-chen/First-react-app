import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onAdd } = this.props; //taking these from props -> object destructing
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id} //cannot assess by us only by react
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
