import React from "react";
import Moment from 'react-moment';
const TweetItem = (props) => {
  const url = props.url ? props.url: "https://picsum.photos/200";
  return (
    <div className="content">
      <img
        className="ui avatar image"
        alt="img"
        src={url}
      />
      <span> {props.name} </span>  <span style={{ float: "right" }}> <Moment fromNow>{props.date}</Moment>  </span>
      <div className="description">
        {props.text}
      </div>
    </div>
  );
};

export default TweetItem;
