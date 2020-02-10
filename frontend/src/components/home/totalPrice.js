import React, { Component } from 'react';
import { ReqUserAC } from '../../redux/creators';
import { connect } from 'react-redux';
import { Button } from 'antd';

class TotalPrice extends Component {


  constructor(props) {
    super(props);
    this.state = {
      totalPrice: null
    }
  }

  totalPriceFunc = () => {
    this.setState({ totalPrice: this.props.roomCard.price })
  }


  render() {
    return (<div>
      {
        this.state.totalPrice === null ?
          <Button onClick={() => { this.totalPriceFunc() }}>
            Пересчитать сумму с изменениями
        </Button> :
          <>
            {this.state.totalPrice}
          </>
      }

    </div>);
  }
}


function mapDispatchToProps(dispatch) {
  return {
    submit: (status, user, data) => dispatch(ReqUserAC(status, user, data)),
  };
}

function mapStateToProps(store) {
  return {
    isLogin: store.isLogin, 
    username: store.username, 
    ymaps: store.ymaps, 
    roomCard: store.roomCard,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalPrice);