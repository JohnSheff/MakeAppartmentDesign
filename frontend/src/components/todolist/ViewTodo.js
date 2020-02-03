// import React, {Component} from 'react';
// import {EditTodoAC} from '../../redux/creators';
// import {connect} from 'react-redux';
// import {Button, Input, List} from 'antd';
//
// class ViewTodo extends Component {
//
//   constructor (props) {
//     super (props);
//     this.state = {
//       viewInput: false, inputValue: ''
//     };
//   }
//
//   render () {
//     const {viewInput, inputValue} = this.state;
//     return (<div>
//
//       <List
//        key={this.props.id}
//        bordered
//        dataSource={[this.props.elem.name]}
//        renderItem={item => (<List.Item
//         actions={[
//           <Button onClick={async (e) => {
//             this.setState ({viewInput: !viewInput});
//             if (inputValue !== '') {
//               const response = await fetch (`/edit`, {
//                 method: 'PUT', headers: {
//                   'Content-Type': 'application/json',
//                 }, body: JSON.stringify ({
//                   newName: inputValue, name: this.props.elem.name, status: false
//                 })
//               });
//               const res = await response.json ();
//               if (res.result) {
//                 this.setState ({inputValue: ''});
//                 await this.props.onEditTodo (res.result);
//               }
//               else {
//                 console.log (res.result);
//                 this.setState ({inputValue: ''});
//               }
//             }
//           }}>Изменить
//           </Button>, <Input value={inputValue} onChange={async (e) => {
//             this.setState ({inputValue: e.target.value});
//           }}/>
//         ]}>{item}
//        </List.Item>)}
//       />
//     </div>);
//   }
//
// }
//
// function mapStateToProps (store) {
//   return {
//     todoData: store.todoData
//   };
// }
//
// function mapDispatchToProps (dispatch) {
//   return {
//     onEditTodo: (todos) => {
//       dispatch (EditTodoAC (todos));
//     }
//   };
// }
//
// export default connect (mapStateToProps, mapDispatchToProps) (ViewTodo);
//
