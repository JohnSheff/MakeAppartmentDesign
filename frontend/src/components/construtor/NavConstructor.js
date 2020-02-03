import React, {Component} from 'react';
import {Tabs, Row, Col} from 'antd';
import ConstructorRoom from './ConstructorRoom';
import ConstructorBath from './ConstructorBath';
import ConstructorKitchen from "./ConstructorKitchen";
import Slider from '../render/Slider';
import {connect} from 'react-redux';


const {TabPane} = Tabs;

class NavConstructor extends Component {

  
  render () {
    return (
     <div>
       {this.props.isLogin ?
       <Row style={{margin: 5, padding: 5}}>
         <Col style={{margin: 5, padding: 5}} offset={0} span={24}>
             <Slider/>
         </Col>
         <Col style={{margin: 5, padding: 5}} offset={0} span={24}>
             <Tabs defaultActiveKey="1" style={{minHeight: 900 , minWidth: 600, }}>

               <TabPane tab="Комната" key="1">
                 <ConstructorRoom cardData={''} cardPrice={''}/>
               </TabPane>
               <TabPane tab="Санузел" key="2">
                 <ConstructorBath cardData={''} cardPrice={''}/>
               </TabPane>
               <TabPane tab="Кухня" key="3">
                 <ConstructorKitchen cardData={''} cardPrice={''}/>
               </TabPane>
             </Tabs>
         </Col>
       </Row>
       :<h1>Шуруй регаться, что встал! </h1>}
</div>
    );
  }
}

function mapStateToProps (store) {
  return {
    isLogin: store.isLogin, username: store.username
  };
}

export default connect(mapStateToProps) (NavConstructor);