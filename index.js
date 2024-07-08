const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="backgroundContainer">
  <div className="content-container">
    <h1 className="mainHeading">Social Buttons</h1>
    <div className="buttons-container">
    <Button text="Like" className="like-button" />
    <Button text="Comment" className="comment-button" />
    <Button text="Share" className="share-button" />
    </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
