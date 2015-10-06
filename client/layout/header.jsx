Header = React.createClass({
  render() {
    return (
      <div className="ui segment">
        <div className="ui fixed main inverted blue menu">
          <div className="menu left">
            <div className="item">praise.me</div>
            <a className="item" href="#">
              <i className="fa fa-home"></i>
            </a>
            <a className="item" href="#">
              <i className="fa fa-trophy"></i>
            </a>
            <a className="item" href="#">
              <i className="fa fa-users"></i>
            </a>
            <a className="item" href="#">
              <i className="fa fa-line-chart"></i>
            </a>
          </div>
          <div className="menu right">
            <a className="item">
              John Doe
              <i className="user icon"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
});
