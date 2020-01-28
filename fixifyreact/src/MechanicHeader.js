import React from 'react';
import { Link } from 'react-router-dom';
import navstyle from './css/navstyle.css';
import { Menu, Container, Header, Icon} from 'semantic-ui-react'

function MechanicHeader(props) {
    const id = props.id
    const IdOfMechanic = `/mechanic/${id}` /*this.props.user.id*/
    return (
        <Header>
        <Menu fixed='top' inverted>
                <Menu.Item>
                    <Icon name='wrench' size='large' color="green"/>
                    <Link to ='/problems'>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Icon name='user' size='large' />
                    <Link to={IdOfMechanic}>Profile</Link>
                </Menu.Item>
                <div onClick={props.logout}>
                <Menu.Item onClick={props.logout}>
                    <Icon name='dont' size='large'/>
                    <Link to='/logout'>Logout</Link>
                </Menu.Item>
                </div>
        </Menu>
    </Header>
    )
}

export default MechanicHeader;