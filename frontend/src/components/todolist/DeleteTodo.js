// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {DeleteTodoAC} from '../../redux/creators';
// import {Input,Button} from 'antd';
//
// class DeleteTodo extends Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       inputValue: ''
//     };
//   }
//
//   render () {
//     const {inputValue} = this.state;
//     return (<div>
//       <Input placeholder={"Введите имя задачи"}  required={true} value={inputValue} onChange={(e) => {this.setState ({inputValue: e.target.value});}}/>
//       <Button onClick={async (e) => {
//         e.preventDefault ();
//         let response = await fetch (`/delete`, {
//           method: 'DELETE', headers: {
//             'Content-Type': 'application/json',
//           }, body: JSON.stringify ({
//             name: inputValue, status: false
//           })
//         });
//         let result = await response.json ();
//
//         if (result) {
//           await this.props.onDeleteTodo (this.props.todoData.filter ((task) => {
//             return task._id !== result._id;
//           }))
//           this.setState ({inputValue: ''});
//         }
//
//
//       }}> Удалить задачу
//       </Button>
//     </div>);
//   }
// }
//
//
// function mapDispatchToProps (dispatch) {
//   return {
//     onDeleteTodo: (todos) => {
//       dispatch (DeleteTodoAC (todos));
//     }
//   };
// }
//
// function mapStateToProps (store) {
//   return {
//     todoData: store.todoData
//   };
// }
//
// export default connect (mapStateToProps, mapDispatchToProps) (DeleteTodo);