import React, { Component } from "react";
import BeautifulHeading from "./beautiful-heading";

export default class Welcome extends Component {
  state = {
    readMoreActive: false,
    description:
      "Pavilion Landmarks - India’s most prominent real estate developer that is playing an important role in changing skylines, is bringing another ultra-luxury development by the name “Pavilion Landmarks”. Each of the homes offers stunning views of Pune’s cityscape, while more than half of the open area is beautifully landscaped. Innovative use of construction technology and contemporary glass and ACP facade makes this project a benchmark of luxury living in Pune.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  handleClick = () => {
    this.setState({
      readMoreActive: true,
      description:
        "Pavilion Landmarks - India’s most prominent real estate developer that is playing an important role in changing skylines, is bringing another ultra-luxury development by the name “Pavilion Landmarks”. Each of the homes offers stunning views of Pune’s cityscape, while more than half of the open area is beautifully landscaped. Innovative use of construction technology and contemporary glass and ACP facade makes this project a benchmark of luxury living in Pune.Technology and Luxury Merged: Spread over 14 acres, Panchshil Towers comprises 9 contemporary towers with best in class amenities. Exterior viewing decks in every apartment and usage of global technologies like 'Dry Construction Technique' & pre-fabricated bathrooms - 'The Bath Pods' have been fitted into the apartments. The development consists of 9 towers housing ultra-luxurious 3.5 / 4.5 Bedroom Penthouse. The open green surroundings and landscaped gardens make you feel close to nature while keeping you amidst a location that has great connectivity from all parts of the city. Price and Amenities: These exclusive 3.5 and 4.5 BHK Penthouses and Podiums Villas are available at a price varying from 1.93 Crores to 6.65 Crores. The place has a plethora of amenities that include an expensive clubhouse & Swimming Pool with a separate Children's Pool, Bar, Cards Room, Cricket / Football Ground, Dance Studio, Elder’s Garden, Facility Management Room, Gardens, Gourmet Café& Restaurant, Gymnasium, Jogging Track, Multipurpose Lawn, Multisport Court, Pet Zone, Screening Room, Squash Court, Street Basketball, Teenage Garden and Yoga Deck. Kharadi, Pune – The Advantages of this Location: With our strategic location at Kharadi, Pune offers you all the necessary facilities to make your life comfortable and peaceful. Kharadi is a developing locality in Pune with new infrastructural developments and offering a number of upcoming projects available at economical prices. It has connectivity via Lohegaon Road and Awhalwadi Road to other parts of the city. The growing IT industry has resulted in huge corporate migration and the place has accessibility to Entertainment and Lifestyle hubs, EON IT Park and Magarpatta City. The development is at a close distance from most of the daily conveniences of the inhabitants, making their life comfortable and peaceful. "
    });
  };

  render() {
    return (
      <>
        <BeautifulHeading
          lightHeading="Welcome"
          darkHeading="Pavilion Landmarks"
        />
        <p className="welcome-description">{this.state.description}</p>
        {this.state.readMoreActive == true ? (
          ""
        ) : (
          <a
            class="button is-warning read-more-hover"
            onClick={this.handleClick}
          >
            Read More
          </a>
        )}
      </>
    );
  }
}
