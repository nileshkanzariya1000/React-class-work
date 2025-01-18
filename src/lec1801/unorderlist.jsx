import * as React from "react";

class List extends React.Component {
  state = {
    itms: ["a", "b", "c", "d"],
  };

  render() {
    const { itms } = this.state;
    return (
      <div>
        <ul>
          {itms.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
