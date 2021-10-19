import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../../General/General.scss';
import './Main.scss';


class Main extends React.Component {

	render() {
		return <>
			<h3 id='title'>This is awesome!</h3>
			<p>This is a text</p>
			<img src='assets/interface/picture.jpg' />
		</>;
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));