import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from '../Header/Header';
import { Information } from '../Information/Information';
import { Portfolio } from '../Portfolio/Portfolio';
import { Showroom } from '../Showroom/Showroom';
import { Welcome } from '../Welcome/Welcome';
import { getProjects } from '../../@presets/presetProjects';
import { TypeProject } from '../../@types/typeProject';
import '../../General/General.scss';
import './Main.scss';


interface Props {

}

interface States {
	currentPage: Page;
	currentDevice: Device;
	isLoading: boolean;
	projects: TypeProject[];
}

export type Page = 'Imprint' | 'Information' | 'Portfolio' | 'Showroom' | 'Welcome';
export type Device = 'Desktop' | 'Mobile';

class Main extends React.Component<Props, States> {

	constructor(props: any) {
		super(props);

		this.state = {
			currentPage: 'Welcome',
			currentDevice: 'Desktop',
			isLoading: false,
			projects: getProjects(),
		}
	}

	componentDidMount() {

	}

	clickEnter() {
		this.setState({ currentPage: 'Portfolio' });
	}

	clickLeft() {

	}

	clickRight() {
		if (this.state.currentPage === 'Portfolio')
			this.setState({ currentPage: 'Information' });
		if (this.state.currentPage === 'Information' || this.state.currentPage === 'Showroom')
			this.setState({ currentPage: 'Portfolio' });
	}

	clickProject() {

	}

	render() {
		return (
			<div 
				id='main'
				className={[
					this.state.isLoading ? 'loading' : '',
					this.state.currentPage === 'Imprint' ? 'imprint' : '',
					this.state.currentPage === 'Information' ? 'information' : '',
					this.state.currentPage === 'Portfolio' ? 'portfolio' : '',
					this.state.currentPage === 'Showroom' ? 'showroom' : '',
					this.state.currentPage === 'Welcome' ? 'welcome' : ''	
				].filter(x => x).join(' ')}
			>
				<Welcome clickEnter={() => this.clickEnter()}/>
				<>
					<Header currentPage={this.state.currentPage} clickLeft={() => this.clickLeft()} clickRight={() => this.clickRight()}/>
					<Information/>
					<Showroom/>
					<Portfolio projects={this.state.projects}/>
				</>
			</div>
		);
	}
}

ReactDOM.render(<Main/>, document.getElementById('root'));