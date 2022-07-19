import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>CV Application</h1>
        <p>Click things you want to edit or add, then edit them to create a CV.</p>
      </div>
    )
  }
};

export default Header;