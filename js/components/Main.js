import React, {Component} from 'react';
import Relay from 'react-relay';
import Link from './Link';

class Main extends Component {
    static propTypes = {
        limit: React.PropTypes.number
    }

    static defaultProps = {
        limit: 4
    }

    render() {
        let content = this
            .props
            .store
            .links
            .slice(0, this.props.limit)
            .map(link => {
                return <Link key={link._id} link={link}/>;
            });
        return (
            <div>
                <h3>Links</h3>
                <ul>
                    {content}
                </ul>
            </div>
        );
    }
}

//Declare the data requirement for this component
Main = Relay.createContainer(Main, {
    fragments:{
        store:()=>Relay.QL`
            fragment on Store{
                links{
                    _id,
                    ${Link.getFragment('link')}
                }
            }
        `
    }
});

export default Main;