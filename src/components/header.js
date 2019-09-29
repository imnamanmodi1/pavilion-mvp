import React, { Component } from "react";
import "../App.css";

import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
  NavbarEnd,
  NavbarMenu,
  Button,
  Icon,
  Field,
  Control,
  NavbarStart
} from "bloomer";

export default class header extends Component {
  state = {
    isActive: false
  };

  onClickNav = () => {
    if (this.state.isActive === true) {
      this.setState({ isActive: false });
    }
    if (this.state.isActive === false) {
      this.setState({ isActive: true });
    }
  };
  render() {
    return (
      <Navbar style={{ margin: "0" }}>
        <NavbarBrand>
          <NavbarItem>
            <img src="" style={{ marginRight: 5 }} /> PAVILION LANDMARKS
          </NavbarItem>
          <NavbarItem
            isHidden="desktop"
            href="https://api.whatsapp.com/send?phone=918386878380"
          >
            <Icon className="fab fa-2x fa-whatsapp-square" />
          </NavbarItem>
          <NavbarItem isHidden="desktop" href="https://www.facebook.com/">
            <Icon
              className="fab fa-2x fa-facebook-square"
              style={{ color: "#55acee" }}
            />
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
        </NavbarBrand>

        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
            <NavbarItem href="#/">Home</NavbarItem>
            <NavbarItem href="#/">Overview</NavbarItem>
            <NavbarItem href="#/">Amenities</NavbarItem>
            <NavbarItem href="#/">Price List</NavbarItem>
            <NavbarItem href="#/">Gallery</NavbarItem>
            <NavbarItem href="#/">Location</NavbarItem>
            <NavbarItem href="#/">Contact</NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem
              href="https://api.whatsapp.com/send?phone=918386878380"
              isHidden="touch"
            >
              <Icon className="fab fa-2x fa-whatsapp-square" />
            </NavbarItem>
            <NavbarItem href="https://www.facebook.com/" isHidden="touch">
              <Icon
                className="fab fa-2x fa-facebook-square"
                style={{ color: "#55acee" }}
              />
            </NavbarItem>
            <NavbarItem>
              <Field isGrouped>
                <Control>
                  <Button id="call" href="tel:02012345678">
                    <Icon className="fas fa-phone-square-alt" />
                    <span>Call</span>
                  </Button>
                </Control>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}
