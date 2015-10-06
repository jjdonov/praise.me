Footer = React.createClass({
  render() {
    return (
      <div className="ui footer vertical segment">
        <div className="ui stackable center aligned page grid">
          <div className="ten wide column">
            <div className="ui three column center aligned stackable grid">
              <div className="column">
                <a href="#">
                  <i className="blue huge linkedin icon"></i>
                </a>
              </div>
              <div className="column">
                <a href="#">
                  <i className="blue huge github icon"></i>
                </a>
              </div>
              <div className="column">
                <a href="#">
                  <i className="blue huge twitter icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
