import React, { Component } from "react";

// Componente funcional expresado
// const MyComponent = (props) => <h2>{props.msg}</h2>;

// Componente funcional declarado
// function MyComponent(props) {
// 	return <h2>{props.msg}</h2>;
// }

// Componente de clase
class MyComponent extends Component {
	render() {
		return <h2>{this.props.msg}</h2>;
	}
}

export default MyComponent;
