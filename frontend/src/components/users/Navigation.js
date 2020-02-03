import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Icon, Menu, notification} from 'antd';
import {LogoutUserAC} from '../../redux/creators';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    };
  }
  openNotification = (user) => {
    notification.open({
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      message: 'Ждем вас снова.',
      description:
       `Всего доброго, ${user}`
    });
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };
  
  render () {
    return (
        <Menu onClick={this.handleClick} mode="horizontal" selectedKeys={[this.state.current]}>
      <Menu.Item key="home">
        <Link to="/">
          <Icon type="code"/> Home
        </Link>
      </Menu.Item>
      {this.props.isLogin ?
        <Menu.Item>
        <Link to="/room">
          <Icon type="snippets"/> AppartmentDesign
        </Link>
      </Menu.Item>:<></>}

      {this.props.isLogin ? (<Menu.Item style={{float: 'right'}}>
        <Link to="/logout" onClick={async (e) => {
          e.preventDefault ();
          localStorage.removeItem ('login');
          let response = await fetch (`/logout`, {
            method: 'get', headers: {
              'Content-Type': 'application/json',
            }
          });
          let result = await response.json ();
          this.props.logout (!result);
          this.props.history.push ('/login');
          this.openNotification (result.user);
          localStorage.removeItem("state")
        }}>
          <Icon type="logout"/> Logout
        </Link>
      </Menu.Item>) : (<Menu.Item style={{float: 'right'}}
      >
        <Link to="/login">
          <Icon type="login"/> Login
        </Link>
      </Menu.Item>)}
  
      {this.props.isLogin ? <Menu.Item >
         <Link to='/info'>
           <Icon type="user"/> {this.props.username}
         </Link>
       </Menu.Item>
   
       : <Menu.Item style={{float: 'right'}}>
         <Link to="/registration">
           <Icon type="form"/> Registration
         </Link>
       </Menu.Item>}
    </Menu>);
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logout: (status, user) => {
      dispatch (LogoutUserAC (status, user));
    }
  };
}

function mapStateToProps (store) {
  return {
    isLogin: store.isLogin, username: store.username
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (Navigation);