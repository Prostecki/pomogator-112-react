const Button = (props) => {
  //Two const variables which was declared in Firstsection, lay down here as child
  return <button className="call-to-locksmith button">{props.children}</button>;
};

export default Button;
