import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import "./header.scss";
import logo from "../../images/logo.png";
import hamburger from "../../images/dropdown-icon.svg"; // Dropdown-menu icon

export default class Header extends Component {
  constructor(props) {
    super(props);
    // TODO: This needs further reworking. I'm thinking it always shows login unless it detects a certain page title,
    // in which case it may display register. This also will need to show account once logged in.
    if(this.props.userInfo.sessionIdentifier === "") {
      this.state = {
        link: "/login",
        text: "login"
      };
    } else if(this.props.userInfo.sessionIdentifier === "register") {
      this.state = {
        link: "/registerDefault",
        text: "register"
      };
    } else if(this.props.userInfo.sessionIdentifier === "account") {
      this.state = {
        link: "/accountinfo",
        text: "account"
      };
    }


    this.handleClick = this.handleClick.bind(this);



  //   // Close the dropdown menu if the user clicks outside of it
  //   window.onclick = function(event) {
  //     if (!event.target.matches('.dropbtn')) {
  //       var dropdowns = document.getElementsByClassName("dropdown-content");
  //       var i;
  //       for (i = 0; i < dropdowns.length; i++) {
  //         var openDropdown = dropdowns[i];
  //         if (openDropdown.classList.contains('show')) {
  //           openDropdown.classList.remove('show');
  //         }
  //       }
  //     }
  //   }

  }

  handleClick() {
    console.log('click happened');
    document.getElementById("headerDropdown").classList.toggle("show");
  }

      // // When the user clicks on the button, toggle between hiding and showing the dropdown content
      // function myFunction() {
      //   document.getElementById("headerDropdown").classList.toggle("show");
      // }


  render() {
    return (
      <header className = "header_bar">
        <a href = "/">
          <img src = {logo} className = "header_bar_logo" alt = "logo" />
        </a>
        {this.props.title}
        {/* <a href = {this.state.link} className = "header_bar_btn">
          {this.state.text}out
        </a> */}
        <div class="dropdown">
          <button onClick={this.handleClick} class="dropbtn">
            <img src={hamburger} className = "dropdown-icon"/>
          </button>
          <div id="headerDropdown" class="dropdown-content">
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
      </header>
    );
  }
}
