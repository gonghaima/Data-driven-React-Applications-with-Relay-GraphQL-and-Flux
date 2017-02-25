import React, {Component} from 'react';
import Relay from 'react-relay';
import Link from './Link';

class Main extends Component {
    render() {
        let content = this
            .props
            .store
            .links
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