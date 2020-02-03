import React, {Component} from 'react';
import {Button, Card, Col, Form, Icon, Input, notification} from 'antd';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReqUserAC} from '../../redux/creators'

class LoginForm extends Component {
  constructor (props) {
    super (props);
    
    this.state = {
      username: null, password: null
    };
  }
  
  // async componentDidMount () {
  //   let response = await fetch ('/get');
  //   let result = await response.json ();
  //   this.props.onView (result.result, result.status);
  // }
  
  openOkNotification = () => {
    notification.open({
      
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      message: 'Добро пожаловать',
      description:
       `${this.props.username}`
      
    });
  };
  openNotification = () => {
    notification.open({
      icon: <Icon type="frown" style={{ color: '#108ee9' }} />,
      message: 'Произошла ошибка',
      description:
       'Не правильно введены Логин и Пароль, по пробуйте еще раз.'
      
    });
  };

  
  render () {
    const {username, password} = this.state;
  

    return (
     <div className={"backImg"} style={{display:"flex",justifyContent: "center", marginTop: "10px",minHeight:1300,paddingTop:50}}>
       <Card title="Добро пожаловать!" style={{width: "40%",backgroundColor: "#282c34",opacity:"0.90", height:"10%"}}>
       <Col offset={0} span={24} >
{this.props.isLogin === false ? (<Form layout="horizontal">
           <Form.Item label="Username">
             <Input
             
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
              placeholder="Введите ваш логин"
              autoComplete="Username"
              required="required"
              onChange={(e) => this.setState ({username: e.target.value})}
             />
           </Form.Item>
           <Form.Item label="Password">
             <Input.Password
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
              type="password"
              required="required"
              placeholder="Введите ваш пароль"
              autoComplete="current-password"
              onChange={(e) => this.setState ({password: e.target.value})}
             />
           </Form.Item>
           <Form.Item>
             <Button type="primary" htmlType="submit" onClick={async (e) => {
               e.preventDefault ();
               const response = await fetch (`/login`, {
                 method: 'POST', headers: {
                   'Content-Type': 'application/json',
                 }, body: JSON.stringify ({
                   username: username, password: password
                 })
               });
               this.setState ({username: null, password: null});
               const res = await response.json ();
               if (res.result) {
                 localStorage.setItem("login", username)
                 this.props.submit(res.result,username)
                 this.openOkNotification()
               }
               else {
                 this.openNotification()
                 // await alert ('Не правильно введены Логин и Пароль, по пробуйте еще раз.');
               }
             }}>
               Log in
             </Button>
           </Form.Item>
         </Form>) : (<Redirect to="/"/>
 )}

       </Col>
  </Card>
     </div>
     );

  }
}

function mapDispatchToProps(dispatch) {


  return {
    submit: (status,user) => {
      dispatch( ReqUserAC(status,user) )
    }
  }
}
function mapStateToProps(store) {
  return {
    isLogin: store.isLogin,
    username: store.username
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)