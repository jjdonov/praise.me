Card = React.createClass({
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <span className="left floated">
            John
            <i className="user icon"></i>
          </span>
          <span className="right floated">
            <i className="user icon"></i>
            Fred
          </span>
        </div>
        <div className="content">
          <h2>+10</h2>
          <div className="description">
            Yada yada i did a lotta
          </div>
        </div>
        <div clasName="extra content">
          <div className="ui buttons">
            <div className="ui labeled button">
              <div className="ui blue button">
                <i className="heart icon"></i>
              </div>
              <a className="ui basic left pointing blue label">1,048</a>
            </div>
            <div className="ui blue labeled button">
              <a className="ui basic right pointing blue label">25</a>
              <div className="ui blue button">
                <i className="comment icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
