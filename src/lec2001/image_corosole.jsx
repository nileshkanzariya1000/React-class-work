import React from "react";

class IMAGE_List extends React.Component {
  state = {
    itms: ["1.png", "2.png", "3.png", "4.png"],
  };

  render() {
    const { itms } = this.state;
    const path="../../public/";
    return (
      <div>
        <img src="../../public/"></img>
        {itms.map((item, index) => (
          <div key={index}>
            <img src={path+item} alt={`Image ${index + 1}`} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default IMAGE_List;
