import React, {Component} from 'react';
import {Route, Router} from 'react-router';
import RegistrationForm from './components/users/RegForm';
import Home from './components/home/Home';
import List from './components/home/List'
import NavConstructor from './components/construtor/NavConstructor';
import Navigation from './components/users/Navigation';
import Login from './components/users/LoginForm';
import {createBrowserHistory} from 'history';
import {ReqUserAC} from './redux/creators';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import '../src/app.css';
import {Icon, Layout, BackTop} from 'antd';

const {Header, Footer, Content} = Layout;

const customHistory = createBrowserHistory ();

class Routers extends Component {
  async componentDidMount () {
    if (localStorage.getItem ('login')) {
      const response = await fetch (`/login`, {
        method: 'get', headers: {
          'Content-Type': 'application/json',
        }
      });
      const res = await response.json ();
      if (res.result) {
        localStorage.setItem ('login', res.user);
        // console.log ( res.room);
        this.props.submit (res.result, res.user);
      }
      else {
        localStorage.removeItem("login")
      }
    }
  }
  totalPrice=()=>{
    const{priceKitchen,priceApron,priceDoor,priceElectric,priceFloor,priceLight,priceMolding,pricePlint,priceSill,priceBath,priceBathfloor,priceKeramaWall,priceLocker,priceShower,priceToilet,roomCard} =this.props
    let sumPrice=priceApron+priceKitchen+priceDoor+priceElectric+priceFloor+priceLight+priceMolding+pricePlint+priceSill+priceBath+priceBathfloor+priceKeramaWall+priceLocker+priceShower+priceToilet+roomCard.price
    return sumPrice
  }
  
  render () {
    return (<Router history={customHistory}>
      <Layout  style={{ backgroundColor: "white", minHeight:1200}}  >
        <Header style={{margin: 5}}>
          <Navigation history={customHistory}/>
        </Header>
        <Content >
          {this.props.ymaps ? <Route exact path="/" component={Home}/> : <>loading</>}
  
          <Route path='/login' component={Login}/>
          <Route path='/room' component={NavConstructor}/>
          <Route path='/registration' component={RegistrationForm}/>
          <Route path='/info' component={List} />
        </Content>
        <Footer style={{ backgroundColor: "white" , display:'flex', justifyContent: 'space-between'}} >Контакты:
          
          <Icon type="instagram" style={{fontSize: '30px', color: '#08c'}} theme=""
            onClick={() => {window.open('https://www.instagram.com/elbrus.bootcamp/')}}
          />
          <Icon type="slack" style={{fontSize: '30px', color: '#08c'}} theme=""
            onClick={() => {window.open('https://slack.com/intl/en-ru/')}}
          />
          <Icon type="github" style={{fontSize: '30px', color: '#08c'}} theme=""
            onClick={() => {window.open('https://elbrusboot.camp/')}}
          />
          <h1 style={{float:"right"}}> Итоговая стоимость:  {this.totalPrice()}</h1>
          <BackTop style={{bottom: 60 }} />
        </Footer>
      </Layout>


    </Router>);
  }
}

function mapDispatchToProps (dispatch) {
  return {
    submit: (status, user,data) => {
      dispatch (ReqUserAC (status, user,data));
    }
  };
}

function mapStateToProps (store) {
  return {
    isLogin: store.isLogin, username: store.username, ymaps: store.ymaps,roomCard: store.roomCard,
    priceDoor: store.priceDoor,
    priceElectric: store.priceElectric,
    priceFloor: store.priceFloor,
    priceLight: store.priceLight,
    priceMolding: store.priceMolding,
    pricePlint: store.pricePlint,
    priceSill: store.priceSill,
    priceBath: store.priceBath,
    priceBathfloor: store.priceBathfloor,
    priceKeramaWall: store.priceKeramaWall,
    priceLocker: store.priceLocker,
    priceShower: store.priceShower,
    priceToilet: store.priceToilet,
    priceApron: store.priceApron,
    priceKitchen: store.priceKitchen,
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (Routers);



