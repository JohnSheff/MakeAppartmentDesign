import React, { Component } from "react";
import {Affix, Button, Card, Col, Collapse, Icon, Row} from 'antd';
import {
  AddActionAC, AddPriceDoorAC, AddPriceElectricAC, AddPriceFloorAC, AddPriceLightAC, AddPriceMoldingAC, AddPricePlintAC, AddPriceSillAC
} from '../../redux/priceCreators';

import { ClearPresetAC } from "../../redux/creators";
import { connect } from "react-redux";
import wall_base from "../../img/construct/wall_base.png";
import wall_default from "../../img/construct/wall_default.png";
import paint from "../../img/construct/paint.png";
import floor from "../../img/room/floor_base.png";
import door from "../../img/room/door/glanta-white.png";
import plint from "../../img/room/plint/curved_white.png";
import molding from "../../img/room/molding/molding_simple.png";
import podium from "../../img/room/sill/light_wood.png";
import lamp from "../../img/room/light/lightstar.png";
import energy from "../../img/room/electric/legrand.png";
import potolor from "../../img/room/default(2).png";
import bimetal from "../../img/room/bimetal.png";
import okno from "../../img/construct/window.png";

const { Meta } = Card;
const { Panel } = Collapse;

class ConstructorRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      okno:okno,
      bimetal:bimetal,
      potolor:potolor,
      width: "100%",
      wall: wall_base,
      wall1: wall_default,
      paint: paint,
      changeColor: "beige",
      floor: floor,
      door: door,
      plint: plint,
      molding: molding,
      podium: podium,
      lamp: lamp,
      energy: energy,
      invert: "scale(-1,1)"
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
                 zIndex: "7",
                 transform: `${this.state.invert}`
               }}
               src={this.state.okno}
               width={this.state.width}
               height={this.state.height}
               alt={"test"}
              />
              <img
               key={"2"}
               style={{
                 position: "absolute",
                 zIndex: "7",
                 transform: `${this.state.invert}`
               }}
               src={this.state.bimetal}
               width={this.state.width}
               height={this.state.height}
               alt={"test"}
              />
              <img
               key={"3"}
               style={{
                 position: "absolute",
                 zIndex: "7",
                 transform: `${this.state.invert}`
               }}
               src={this.state.potolor}
               width={this.state.width}
               height={this.state.height}
               alt={"test"}
              />
              <img
                key={"4"}
                style={{
                  position: "absolute",
                  zIndex: "2",
                  transform: `${this.state.invert}`
                }}
                src={this.state.wall}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"5"}
                style={{
                  position: "absolute",
                  zIndex: "3",
                  transform: `${this.state.invert}`
                }}
                src={this.state.wall1}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"7"}
                style={{
                  position: "absolute",
                  zIndex: "4",
                  transform: `${this.state.invert}`,
                  opacity: '0.55',
                  background: `${this.props.presetStorage.background ||
                    this.state.changeColor}`
                }}
                src={this.state.paint}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"8"}
                style={{
                  position: "absolute",
                  zIndex: "5",
                  transform: `${this.state.invert}`
                }}
                src={this.props.presetStorage.floor || this.state.floor}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"9"}
                style={{
                  position: "absolute",
                  zIndex: "9",
                  transform: `${this.state.invert}`
                }}
                src={this.props.presetStorage.door || this.state.door}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"10"}
                style={{
                  position: "absolute",
                  zIndex: "8",
                  transform: `${this.state.invert}`
                }}
                src={this.props.presetStorage.plint || this.state.plint}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"11"}
                style={{
                  position: "absolute",
                  zIndex: "8",
                  transform: `${this.state.invert}`
                }}
                src={this.props.presetStorage.molding || this.state.molding}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"12"}
                style={{
                  position: "absolute",
                  zIndex: "10",
                  transform: `${this.state.invert}`
                }}
                src={this.props.presetStorage.sill || this.state.podium}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"13"}
                style={{
                  position: "absolute",
                  zIndex: "8",
                  transform: `${this.state.invert}`
                }}
                src={this.props.presetStorage.light || this.state.lamp}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
              <img
                key={"14"}
                style={{
                  position: "absolute",
                  zIndex: "5",
                  transform: `${this.state.invert}`
                }}
                src={this.props.presetStorage.elecric || this.state.energy}
                width={this.state.width}
                height={this.state.height}
                alt={"test"}
              />
            </Col>
          </Affix>
          <Col span={10} style={{ float: "right" }}>
            <Collapse accordion className={"card-input"}>
              <Panel header="Стены" key="0">
                {this.props.storage.colorWall.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={() => {
                        this.props.clearPresetAC();
                        this.setState({ changeColor: elem.background });
                      }}
                      hoverable
                      style={{ width: "100%", background: elem.background }}
                    >
                      <Meta
                        style={{
                          textShadow:
                            "#C3C3C3 1px 1px 0, #C3C3C3 -1px -1px 0, #C3C3C3 -1px 1px 0, #C3C3C3 1px -1px 0",
                          font: "1em Arial"
                        }}
                        title={elem.title}
                        description={elem.descript}
                      />
                    </Card>
                  </Col>
                ))}
              </Panel>
              <Panel header="Пол" key="1">
                {this.props.storage.srcSample.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={(e) => {
                        e.preventDefault()
                        this.props.clearPresetAC();
                        this.props.addPriceFloor(elem.price);
                        this.setState({ floor: elem.img });
                        
                      }}
                      hoverable
                      style={{ width: "100%" }}
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

              <Panel header="Двери" key="3">
                {this.props.storage.srcDoor.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={(e) => {
                        e.preventDefault()
                        this.props.clearPresetAC();
                        this.setState({ door: elem.img });
                        this.props.addPriceDoor(elem.price);
                        
                      }}
                      hoverable
                      style={{ width: "100%" }}
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
              <Panel header="Плинтуса" key="4">
                {this.props.storage.srcPlint.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={(e) => {
                        e.preventDefault()
                        this.props.clearPresetAC();
                        this.props.addPricePlint(elem.price);
                        this.setState({ plint: elem.img });
                        
                      }}
                      hoverable
                      style={{ width: "100%" }}
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
              <Panel header="Галтели" key="5">
                {this.props.storage.molding.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={(e) => {
                        e.preventDefault()
                        this.props.clearPresetAC();
                        this.props.addPriceSill(elem.price);
                        this.setState({ molding: elem.img });
                        
                      }}
                      hoverable
                      style={{ width: "100%" }}
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
              <Panel header="Подоконник" key="6">
                {this.props.storage.sill.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={(e) => {
                        e.preventDefault()
                        this.props.clearPresetAC();
                        this.props.addPriceMolding(elem.price);
                        this.setState({ podium: elem.img });
                        
                      }}
                      hoverable
                      style={{ width: "100%" }}
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
              <Panel header="Светильник" key="7">
                {this.props.storage.light.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={(e) => {
                        e.preventDefault()
                        this.props.clearPresetAC();
                        this.props.addPriceLight(elem.price);
                        this.setState({ lamp: elem.img });
                      }}
                      hoverable
                      style={{ width: "100%" }}
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
              <Panel header="Электрика" key="8">
                {this.props.storage.electric.map((elem, index) => (
                  <Col key={index} span={12} style={{ padding: 5 }}>
                    <Card
                      onClick={(e) => {
                        e.preventDefault()
                        this.props.clearPresetAC();
                        this.props.addPriceElectric(elem.price);
                        this.setState({ energy: elem.img });
                        
                      }}
                      hoverable
                      style={{ width: "100%" }}
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
            </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    storage: store.constStore,
    presetStorage: store.selectedPreset
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPriceDoor: data => {
      dispatch(AddPriceDoorAC(data));
    },
    addPriceSill: data => {
      dispatch(AddPriceSillAC(data));
    },
    addPriceMolding: data => {
      dispatch(AddPriceMoldingAC(data));
    },
    addPricePlint: data => {
      dispatch(AddPricePlintAC(data));
    },
    addPriceLight: data => {
      dispatch(AddPriceLightAC(data));
    },
    addPriceElectric: data => {
      dispatch(AddPriceElectricAC(data));
    },
    addPriceFloor: data => {
      dispatch(AddPriceFloorAC(data));
    },
    clearPresetAC: () => {
      dispatch(ClearPresetAC());
    },
    addActionPriceAC: (data) => {
      dispatch(AddActionAC(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorRoom);
