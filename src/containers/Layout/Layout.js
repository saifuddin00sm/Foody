import React, { Component } from "react";
import Header from "../../components/Header/Header";
import SideDrawer from "../../components/Header/Navbar/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  openSideDrawer = () => {
    this.setState({ showSideDrawer: true });
  };
  closeSideDrawer = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Header openSideDrawer={this.openSideDrawer} />
        <SideDrawer
          closeSideDrawer={this.closeSideDrawer}
          open={this.state.showSideDrawer}
        />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
