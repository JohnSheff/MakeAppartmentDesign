import React from "react";
import { connect } from "react-redux";
import { SetPresetAC } from "../../redux/creators";
import { Card, Row, Col } from "antd";

class Slider extends React.Component {
  setPreset = elem => {
    this.props.addPreset(elem);
  };
  render() {
    return (
      <div >
        <Row className={"scroll-image"}>
        {this.props.storage.preset.map((elem, index) => (
          <Col key={index} span={6} style={{padding:4,height:400}} ><Card
            onClick={() => this.setPreset(elem)}
            hoverable
            // style={{ margin: 5,width:400 }}
            cover={<img style={{height:340,width:"100%"}} alt="example" src={elem.img} />}
          >{elem.title}</Card>
          </Col>
        ))}
          </Row>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    storage: store.constStore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPreset: data => {
      dispatch(SetPresetAC(data));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Slider);

