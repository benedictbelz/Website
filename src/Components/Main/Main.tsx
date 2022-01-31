import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './Header/Header';
import { Imprint } from './Imprint/Imprint';
import { Information } from './Information/Information';
import { Portfolio } from './Portfolio/Portfolio';
import { Showroom } from './Showroom/Showroom';
import { Welcome } from './Welcome/Welcome';
import { getProjects } from '../../@presets/presetProjects';
import { TypeBrowser, TypeDevice, TypePage } from '../../@types/typeCommon';
import { TypeProject } from '../../@types/typeProject';
import '../../General/General.scss';
import './Main.scss';

interface States {
	currentBrowser: TypeBrowser | null;
	currentDevice: TypeDevice | null;
	currentPage: TypePage;
	currentProject: TypeProject | null;
	isLoading: boolean;
	isTransition: boolean;
	percentage: number;
	projects: TypeProject[];
}
class Main extends React.Component<{}, States> {

	state: States = {
		currentBrowser: null,
		currentDevice: null,
		currentPage: 'Welcome',
		currentProject: null,
		isLoading: true,
		isTransition: false,
		percentage: 0,
		projects: getProjects(),
	}

	componentDidMount() {
		this.initBrowser();
		this.initDevice();
		this.initLoading();
	}

	initBrowser() {
		if (navigator.userAgent.indexOf('Chrome') > -1)
			this.setState({ currentBrowser: 'Chrome' });
		if (navigator.userAgent.indexOf('Firefox') > -1)
			this.setState({ currentBrowser: 'Firefox' });
		if (navigator.userAgent.indexOf('MSIE') > -1)
			this.setState({ currentBrowser: 'Microsoft' });
		if (navigator.userAgent.toLowerCase().indexOf('op') > -1)
			this.setState({ currentBrowser: 'Opera' });
		if (navigator.userAgent.indexOf('Safari') > -1)
			this.setState({ currentBrowser: 'Safari' });
	}

	initDevice() {
		if ('ontouchstart' in window || 'onmsgesturechange' in window)
			this.setState({ currentDevice: 'Mobile' });
		else
			this.setState({ currentDevice: 'Desktop' });
	}

	initLoading() {
		let images = document.images;
		let index = 0;
		const load = () => {
			const image = new Image();
			image.src = images[index].src;
			image.onload = () => {
				index++;
				if (index === images.length)
					this.setState({ isLoading: false, percentage: 100 });
				else {
					this.setState({ percentage: Math.floor(index/images.length*100) });
					setTimeout(load, 5);
				}
			}
		}
		load();
	}

	clickEnter() {
		this.setState({ currentPage: 'Portfolio', isTransition: true });
		setTimeout(() => this.setState({ isTransition: false }), 500);
	}

	clickLeft() {

	}

	clickRight() {
		if (this.state.currentPage === 'Portfolio')
			this.setState({ currentPage: 'Information', isTransition: true });
		if (this.state.currentPage === 'Imprint' || this.state.currentPage === 'Information' || this.state.currentPage === 'Showroom')
			this.setState({ currentPage: 'Portfolio', isTransition: true });
		setTimeout(() => this.setState({ isTransition: false }), 500);
	}

	clickImprint() {
		this.setState({ currentPage: 'Imprint', isTransition: true });
	}

	clickProject(project: TypeProject) {
		this.setState({ currentPage: 'Showroom', isTransition: true, currentProject: project });
	}

	render() {
		return (
			<div 
				id='main'
				className={[
					this.state.isLoading ? 'loading' : '',
					this.state.isTransition ? 'transition' : '',
					this.state.currentDevice === 'Desktop' ? 'desktop' : 'mobile',
					this.state.currentPage === 'Imprint' ? 'imprint' : '',
					this.state.currentPage === 'Information' ? 'information' : '',
					this.state.currentPage === 'Portfolio' ? 'portfolio' : '',
					this.state.currentPage === 'Showroom' ? 'showroom' : '',
					this.state.currentPage === 'Welcome' ? 'welcome' : ''
				].filter(x => x).join(' ')}
			>
				<Welcome
					clickEnter={() => this.clickEnter()}
					currentDevice={this.state.currentDevice}
					isLoading={this.state.isLoading}
					percentage={this.state.percentage}
				/>
				<>
					<Header
						clickLeft={() => this.clickLeft()}
						clickRight={() => this.clickRight()}
						currentPage={this.state.currentPage}
					/>
					<Imprint currentDevice={this.state.currentDevice}/>
					<Information currentDevice={this.state.currentDevice}/>
					<Showroom 
						currentDevice={this.state.currentDevice}
						currentProject={this.state.currentProject}
					/>
					<Portfolio
						clickImprint={() => this.clickImprint()}
						clickProject={(project: TypeProject) => this.clickProject(project)}
						currentDevice={this.state.currentDevice}
						currentPage={this.state.currentPage}
						projects={this.state.projects}
					/>
				</>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
