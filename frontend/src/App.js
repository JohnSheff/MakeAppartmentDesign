// import React, {Component} from 'react';
// import ViewTodo from './components/todolist/ViewTodo';
// import AddTodo from './components/todolist/AddTodo';
// import DeleteTodo from './components/todolist/DeleteTodo';
// import {ViewTodoAC} from './redux/creators';
// import {connect} from 'react-redux';
// import {Col, Row} from 'antd';
// import '../src/app.css';
// class App extends Component {
//
//   async componentDidMount () {
//     let response = await fetch ('/get');
//     let result = await response.json ();
//     this.props.onView (result.result, result.status);
//   }
//
//   render () {
//     return (<div>
//       {this.props.isLogin === false ? (<div>вы не авторизованы</div>):(
//        <>
//       <Row>
//         <Col span={12} offset={6}><AddTodo/></Col>
//       </Row>
//       <Row>
//         <Col span={12} offset={6}>  {this.props.todoData ? (this.props.todoData.map ((element, index) => {
//           return <ViewTodo key={index} elem={element} id={index}/>;
//         })) : (<div>loading</div>)}</Col>
//       </Row>
//       <Row>
//         <Col span={12} offset={6}> <DeleteTodo/></Col>
//       </Row>
//        </>)}
//     </div>);
//   }
// }
//
//
// function mapDispatchToProps (dispatch) {
//   return {
//     onView: (todos, done) => {
//       dispatch (ViewTodoAC (todos, done));
//     }
//   };
// }
//
//
// function mapStateToProps (store) {
//   return {
//     todoData: store.todoData,
//        isLogin:store.isLogin
//   };
// }
//
// export default connect (mapStateToProps, mapDispatchToProps) (App);
//
//
//
