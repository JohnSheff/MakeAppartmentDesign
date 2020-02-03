// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {AddTodoAC} from '../../redux/creators';
// import {Input,Button} from 'antd';
//
// class AddTodo extends Component {
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
//         if(inputValue===""){
//           return
//         }
//         const response = await fetch (`/add`, {
//           method: 'POST', headers: {
//             'Content-Type': 'application/json',
//           }, body: JSON.stringify ({
//             name: inputValue, status: false
//           })
//         });
//         let result = await response.json ();
//         if (result.result) {
//           await this.props.onAddTodo (result.todo);
//           this.setState ({inputValue: ''});
//         }else {
//           this.setState ({inputValue: ''});
//           alert(result.error.errmsg)
//         }
//       }}> Добавить задачу
//       </Button>
//     </div>);
//   }
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
//     onAddTodo: (todos) => {
//       dispatch (AddTodoAC (todos));
//     }
//   };
// }
//
// export default connect (mapStateToProps, mapDispatchToProps) (AddTodo);