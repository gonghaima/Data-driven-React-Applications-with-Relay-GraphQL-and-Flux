var React=require("react");
var ReactDOM=require("react-dom");

var Hello=React.createClass({
    render: function(){
        return <h3>Hello webpack</h3>;
    }
});

ReactDOM.render(<Hello/>, document.getElementById('react'));