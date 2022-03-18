import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avartar(props) {
  return (
    <img className="Avatar" src={props.user.avatar} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avartar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-txt">{props.txt}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const commentOne = {
  date: new Date(),
  txt: 'Nice to meet you!',
  author: {
    name: 'cat1',
    avatar: 'http://placekitten.com/g/64/64',
  },
};

const commentTwo = {
  date: new Date(),
  txt: 'Nice to meet you Too!',
  author: {
    name: 'cat2',
    avatar: 'http://placekitten.com/g/64/64',
  },
};

let ComponentProps = () => {
  return (
    <div className="component_props">
      <Comment
        date={commentOne.date}
        txt={commentOne.txt}
        author={commentOne.author}
      />
      <Comment
        date={commentTwo.date}
        txt={commentTwo.txt}
        author={commentTwo.author}
      />
    </div>
  );
};

export default ComponentProps;
