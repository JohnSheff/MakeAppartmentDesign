import { Table} from 'antd';
import React, {Component} from 'react';
import {connect} from "react-redux";

import {Link} from 'react-router-dom';



class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
const columns = [
  { title: 'Материал', dataIndex: 'title', key: 'title' },
  { title: 'Цена', dataIndex: 'price', key: 'price' },

  {
    title: 'Ссылка',
    dataIndex: 'href',
    key: 'href',
    render: (e) => <Link to="#" onClick={()=>{window.open(e)}}>Где купить!</Link>,
  },
];

return (
    <Table
     style={{backgroundColor:'white'}}
     rowKey="uid"
      columns={columns}
      expandedRowRender={e => <span>{e.descript}</span>}
      dataSource={this.props.priceAction}
    />
    )
  }
}

function mapStateToProps(store) {
  return {
    priceAction: store.priceAction
  };
}


export default connect(mapStateToProps)(InfoCard);