import React, { Component } from "react";
import {Button, Card, Col, Collapse, Row, Icon, Affix} from 'antd';
import { connect } from "react-redux";
import image from "../../img/bath/kerama_wall/kerama_belkanto.png";
import ceramic from "../../img/construct_bath/kerama_belkanto_fregat.png";
import thumb from "../../img/construct_bath/godmorgon_white.png";
import toilet from "../../img/construct_bath/cersanit_parva.png";
import floor from "../../img/construct_bath/bravat_opal.png";
import shower from "../../img/construct_bath/bravat_opal.png";
import bath from "../../img/bath/bath/cersanit_octavia.png";
import locker from "../../img/bath/locker/locker_white.png";
import {
  AddPriceBathAC,
  AddPriceBathFloorAC,
  AddPriceKeramaWallAC,
  AddPriceLockerAC,
  AddPriceShowerAC,
  AddPriceToiletAC,
  AddActionAC
} from "../../redux/priceCreators";
import { ClearPresetAC } from "../../redux/creators";

const {Meta} = Card;
const {Panel} = Collapse;

class ConstructorBath extends Component {
  constructor (props) {
    super (props);
    this.state = {
      width: '100%',
      // height: '600px',
      wall: image,
      ceramic: ceramic,
      floor: floor,
      bath: bath,
      thumb: thumb,
      toilet: toilet,
      shower: shower,
      locker: locker,
      invert: "scale(-1,1)",
      border: ""
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Affix offsetTop={10}>
          <Col span={13}>
            <img
              key={"1"}
              style={{
                position: "absolute",
                zIndex: "1",
                transform: `${this.state.invert}`
              }}
              src={this.props.presetStorage.keramaWall || this.state.ceramic}
              width={this.state.width}
              height={this.state.height}
              alt={"test"}
            />
            <img
              key={"2"}
              style={{
                position: "absolute",
                zIndex: "2",
                transform: `${this.state.invert}`
              }}
              src={this.props.presetStorage.floorBath || this.state.floor}
              width={this.state.width}
              height={this.state.height}
              alt={"test"}
            />
            {/*<img key={'3'}*/}
            {/*     style={{position: 'absolute', zIndex: '3', transform:`${this.state.invert}`}}*/}
            {/*     src={this.state.ceramic}*/}
            {/*     width={this.state.width}*/}
            {/*     height={this.state.height}*/}
            {/*     alt={'test'}*/}
            {/*/>*/}
            <img
              key={"4"}
              style={{
                position: "absolute",
                zIndex: "4",
                transform: `${this.state.invert}`
              }}
              src={this.props.presetStorage.bath || this.state.bath}
              width={this.state.width}
              height={this.state.height}
              alt={"test"}
            />
            <img
              key={"5"}
              style={{
                position: "absolute",
                zIndex: "5",
                transform: `${this.state.invert}`
              }}
              src={this.state.thumb}
              width={this.state.width}
              height={this.state.height}
              alt={"test"}
            />
            <img
              key={"6"}
              style={{
                position: "absolute",
                zIndex: "5",
                transform: `${this.state.invert}`
              }}
              src={this.props.presetStorage.toilet || this.state.toilet}
              width={this.state.width}
              height={this.state.height}
              alt={"test"}
            />
            <img
              key={"7"}
              style={{
                position: "absolute",
                zIndex: "5",
                transform: `${this.state.invert}`
              }}
              src={this.props.presetStorage.shower || this.state.shower}
              width={this.state.width}
              height={this.state.height}
              alt={"test"}
            />
            <img
              key={"8"}
              style={{
                position: "absolute",
                zIndex: "6",
                transform: `${this.state.invert}`
              }}
              src={this.props.presetStorage.locker || this.state.locker}
              width={this.state.width}
              height={this.state.height}
              alt={"test"}
            />
          </Col>
          </Affix>
          <Col span={10}  style={{ float: "right" }}>
            <Collapse accordion className={"card-input"}>
              <Panel header="Настенная плитка" key="1">
                {this.props.storage.keramaWall.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      name={index}
                      onClick={event => {
                        event.preventDefault();
                        this.props.clearPresetAC();
                        this.setState({ ceramic: elem.img });
                        this.props.addPriceKeramaWall((elem.price));
                      }}
                      hoverable
                      cover={<img alt="example" src={elem.sampleImage} />}
                    >
                      <Meta title={elem.title} style={{marginBottom:5}} description={elem.descript} />
                      <span
                       style={{marginRight:30, marginLeft: 20, color: "blue"}}
                      >
                        {elem.price}
                      </span>
                      <Button onClick={(e) => {
                        e.preventDefault()
                        this.props.addActionPriceAC({
                          price: elem.price,
                          title: elem.title,
                          href: elem.href,
                          descript: elem.descript
                        });
                      }}
                      ><Icon type="heart" /> Добавить в избранное</Button>
                    </Card>
                  </Col>
                ))}
              </Panel>

              <Panel header="Напольная плитка" key="2">
                {this.props.storage.floor.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={() => {
                        this.props.clearPresetAC();
                        this.setState({ floor: elem.img });
                        this.props.addPriceBathFloor((elem.price));}}
                      hoverable
                      cover={<img alt="example" src={elem.sampleImage} />}
                    >
                      <Meta title={elem.title} style={{marginBottom:5}} description={elem.descript} />
                      <span
                       style={{marginRight:30, marginLeft: 20, color: "blue"}}
                      >
                        {elem.price}
                      </span>
                      <Button onClick={(e) => {
                        e.preventDefault()
                        this.props.addActionPriceAC({
                          price: elem.price,
                          title: elem.title,
                          href: elem.href,
                          descript: elem.descript
                        });
                      }}
                      ><Icon type="heart" /> Добавить в избранное</Button>
                    </Card>
                  </Col>
                ))}
              </Panel>
              <Panel header="Унитаз" key="3">
                {this.props.storage.toilet.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={() => {
                        this.props.clearPresetAC();
                        this.setState({ toilet: elem.img });
                        this.props.addPriceToilet((elem.price));
                      }}
                      hoverable
                      cover={<img alt="example" src={elem.sampleImage} />}
                    >
                      <Meta title={elem.title} style={{marginBottom:5}} description={elem.descript} />
                      <span
                       style={{marginRight:30, marginLeft: 20, color: "blue"}}
                      >
                        {elem.price}
                      </span>
                      <Button onClick={(e) => {
                        e.preventDefault()
                        this.props.addActionPriceAC({
                          price: elem.price,
                          title: elem.title,
                          href: elem.href,
                          descript: elem.descript
                        });
                      }}
                      ><Icon type="heart" /> Добавить в избранное</Button>
                    </Card>
                  </Col>
                ))}
              </Panel>
              <Panel header="Ванна" key="4">
                {this.props.storage.bath.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={() => {
                        this.props.clearPresetAC();
                        this.setState({ bath: elem.img });
                        this.props.addPriceBath((elem.price));
}}
                      hoverable
                      cover={<img alt="example" src={elem.sampleImage} />}
                    >
                      <Meta title={elem.title} style={{marginBottom:5}} description={elem.descript} />
                      <span
                       style={{marginRight:30, marginLeft: 20, color: "blue"}}
                      >
                        {elem.price}
                      </span>
                      <Button onClick={(e) => {
                        e.preventDefault()
                        this.props.addActionPriceAC({
                          price: elem.price,
                          title: elem.title,
                          href: elem.href,
                          descript: elem.descript
                        });
                      }}
                      ><Icon type="heart" /> Добавить в избранное</Button>
                    </Card>
                  </Col>
                ))}
              </Panel>
              <Panel header="Душевая стойка" key="5">
                {this.props.storage.shower.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={() => {
                        this.props.clearPresetAC();
                        this.setState({ shower: elem.img });
                        this.props.addPriceShower(elem.price);
                      }}
                      hoverable
                      cover={<img alt="example" src={elem.sampleImage} />}
                    >
                      <Meta title={elem.title} style={{marginBottom:5}} description={elem.descript} />
                      <span
                       style={{marginRight:30, marginLeft: 20, color: "blue"}}
                      >
                        {elem.price}
                      </span>
                      <Button onClick={(e) => {
                        e.preventDefault()
                        this.props.addActionPriceAC({
                          price: elem.price,
                          title: elem.title,
                          href: elem.href,
                          descript: elem.descript
                        });
                      }}
                      ><Icon type="heart" /> Добавить в избранное</Button>
                    </Card>
                  </Col>
                ))}
              </Panel>
              <Panel header="Тумба под раковину" key="6">
                {this.props.storage.locker.map((elem, index) => (
                  <Col key={index} span={11} style={{ margin: 6 }}>
                    <Card
                        onClick={() =>{ this.setState ({locker: elem.img});
                        this.props.addPriceLocker((elem.price));
                        }}
                        hoverable
                        cover={<img alt="example" src={elem.sampleImage}/>}>
                      <Meta title={elem.title} style={{marginBottom:5}} description={elem.descript} />
                      <span
                       style={{marginRight:30, marginLeft: 20, color: "blue"}}
                      >
                        {elem.price}
                      </span>
                      <Button onClick={(e) => {
                        e.preventDefault()
                        this.props.addActionPriceAC({
                          price: elem.price,
                          title: elem.title,
                          href: elem.href,
                          descript: elem.descript
                        });
                      }}
                      ><Icon type="heart" /> Добавить в избранное</Button>
                    </Card>
                  </Col>
                ))}
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    storage: store.bathStore,
    presetStorage: store.selectedPreset
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPriceBath: data => {
      dispatch(AddPriceBathAC(data));
    },
    addPriceBathFloor: data => {
      dispatch(AddPriceBathFloorAC(data));
    },
    addPriceKeramaWall: data => {
      dispatch(AddPriceKeramaWallAC(data));
    },
    addPriceLocker: data => {
      dispatch(AddPriceLockerAC(data));
    },
    addPriceShower: data => {
      dispatch(AddPriceShowerAC(data));
    },
    addPriceToilet: data => {
      dispatch(AddPriceToiletAC(data));
    },
    clearPresetAC: () => {
      dispatch(ClearPresetAC());
    },
    addActionPriceAC: (data) => {
      dispatch(AddActionAC(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorBath);
