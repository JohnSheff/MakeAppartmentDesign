import React, {Component} from 'react';
import {Card, Col, Row} from 'antd';
import {connect} from 'react-redux';
import InfoCard from './infoCard';
import UploadImg from './Upload';

class List extends Component {

  totalPrice=()=>{
    const{priceKitchen, priceApron, priceDoor,priceElectric,priceFloor,priceLight,priceMolding,pricePlint,priceSill,priceBath,priceBathfloor,priceKeramaWall,priceLocker,priceShower,priceToilet,roomCard} =this.props

    let sumPrice=priceKitchen+priceApron+priceDoor+priceElectric+priceFloor+priceLight+priceMolding+pricePlint+priceSill+priceBath+priceBathfloor+priceKeramaWall+priceLocker+priceShower+priceToilet+roomCard.price
    return sumPrice
  }

  render() {
   
    const {roomCard} = this.props;
  return (<div className={"backImg"} style={{display: 'flex', justifyContent: 'center', marginTop: '10px',minHeight:1300,paddingTop:50}}>
    {this.props.isLogin ?
     <Row style={{margin: 5, padding: 5}}>
       <Col offset={3} span={16}>
         <Card title={"Добро пожаловать: " +this.props.username} style={{backgroundColor: '#282c34', width: '100%', opacity: '0.90'}}>
           <h2 style={{color: 'white'}}> Ваш адрес: {roomCard.address}</h2>
           <p style={{color: 'white'}}>{roomCard.countRoom} -комнатная квартира площадью {roomCard.m2} м2</p>
           <p style={{color: 'white'}}>Количество санузлов: {roomCard.countBath}</p>
           <p style={{color: 'white'}}>Количество дверей: {roomCard.countDoor}</p>
         
           <p style={{color: 'white'}}>Начальная стоимость дизайн проекта: {this.props.roomCard.price} </p>
           <p style={{color: 'white'}}>Общая стоимось: {this.totalPrice()} </p>
         </Card>
       </Col>
       <Col offset={3} span={16}>
         <InfoCard/>
       </Col>
       <Col offset={3} span={16}>
         <UploadImg />
       </Col>
     </Row>
     :<h1>Шуруй регаться, что встал! </h1>}
      </div>
  )
}}

function mapStateToProps(store) {
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
    priceKitchen: store.priceKitchen,
    priceApron: store.priceApron
  };
}


export default connect(mapStateToProps)(List);