import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
    const styleProfile={color :"Bleu" , textAlign :"center" ,paddingTop:"4em"};
    const styleImage ={width :"100px" , height :"auto" ,borderRadius:"50px"}
  return (
    <div style={styleProfile}>
      <img src={props.children} alt="" style={styleImage}></img>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <h3>{props.profession}</h3>
      <em>{props.default}</em>
      <br/>
      <button
        onClick={() => props.handelName(props.name)}
      >
        Show Name
      </button>
    </div>
  );
};
Profile.defaultProps = {
  name: "Hechem",
  bio :"i exist",
  profession :"developper",
  default:"this is a default props"
};
Profile.propsTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.string,
};
export default Profile;