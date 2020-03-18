import React, { Component } from "react";

const ProductContext = React.createContext();

class ContextManager extends Component {
  state = {
    sidebarOpen: false
  };

  openSidebar = () => {
    this.state.sidebarOpen
      ? this.setState(() => {
          return { sidebarOpen: false };
        })
      : this.setState(() => {
          return { sidebarOpen: true };
        });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{ ...this.state, openSidebar: this.openSidebar }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ContextConsumer = ProductContext.Consumer;

export { ContextManager, ContextConsumer };
