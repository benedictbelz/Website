import * as React from 'react';
import { Preview } from './Preview/Preview';
import { Scrollbar } from '../../Components/Scrollbar/Scrollbar';
import { Browser } from '../../@types/browser';
import { Page } from '../../@types/page';
import { Project, Selection } from '../../@types/project';
import './Portfolio.scss';

interface Props {
	browser: Browser;
	clickImprint: Function;
	clickProject: Function;
	currentPage: Page;
	projects: Project[];
}

interface States {
	currentSelection: Selection;
	isClicked: boolean;
	selection: Selection[];
}

export class Portfolio extends React.Component<Props, States> {

	private timeout: any = [];

	state: States = {
		currentSelection: 'All',
		isClicked: false,
		selection: ['All', 'Digital', 'Film'],
	};

	componentDidMount() {
		window
			.matchMedia('(max-width: 2000px)')
			.addEventListener('change', () => this.fadeProjects());
		window
			.matchMedia('(max-width: 1200px)')
			.addEventListener('change', () => this.fadeProjects());
		window
			.matchMedia('(max-width: 900px)')
			.addEventListener('change', () => this.fadeProjects());
		window
			.matchMedia('(max-width: 600px)')
			.addEventListener('change', () => this.fadeProjects());
	}

	componentDidUpdate(prevProps: any) {
		if (this.props.currentPage === 'Portfolio' && prevProps.currentPage === 'Welcome') {
			this.fadeSelection();
			this.fadeProjects();
		}
	}

	async fadeSelection() {
		// GET VARIABLES
		const selection = document.querySelectorAll('#selection li') as unknown as HTMLElement[];
		// ADD OPACITY
		selection.forEach(item => item.classList.add('opacity'));
		// GO THROUGH SELECTION
		for (let index = 0; index < selection.length; index++) {
			selection[index].classList.remove('opacity');
			selection[index].classList.add('fade');
			await new Promise(resolve => setTimeout(resolve, 100));
		}
	}

	fadeProjects() {
		// DEFINE INDEX
		let index = 0;
		// GET VARIABLES
		const projects = document.querySelectorAll('.project') as unknown as HTMLElement[];
		const show = document.querySelectorAll('.project.show') as unknown as HTMLElement[];
		// RESET TIMEOUT
		this.timeout.forEach((timeout: any) => clearTimeout(timeout));
		// RESET PROJECTS
		projects.forEach(project => {
			project.classList.add('opacity');
			project.classList.remove('fade');
		});
		// RECURSIVE FUNCTION
		let fade = () => {
			show[index].classList.remove('opacity');
			show[index].offsetWidth;
			show[index].classList.add('fade');
			show[index].style.animationPlayState = 'paused';
			show[index].style.animationPlayState = 'running';
			index++;
			if (index < show.length) {
				this.timeout.push(setTimeout(() => fade(), 100));
			}
		}
		// START FADE
		if (show.length !== 0) {
			fade()
		}
	}

	render() {
		return (
			<Scrollbar color='Black' browser={this.props.browser} id='portfolio'>
				<ul id='selection'>
					{this.state.selection.map(selection => {
						return (
							<li
								key={selection}
								className={this.state.currentSelection === selection ? 'current' : ''}
								onClick={() => {
									if (this.state.currentSelection !== selection) {
										this.setState({ currentSelection: selection });
										setTimeout(() => this.fadeProjects());
									}
								}}
							>
								<img src={'assets/interface/' + selection.toLowerCase() + '.svg'} draggable='false'/>
								<p>{selection}</p>
							</li>
						);
					})}
				</ul>
				<div id='projects'>
					{this.props.projects.map(project => {
						return (
							<Preview
								key={project.title}
								browser={this.props.browser}
								clickProject={() => {
									if (!this.state.isClicked) {
										this.props.clickProject(project)
										this.setState({ isClicked: true });
										setTimeout(() => this.setState({ isClicked: false }), 500);
									}
								}}
								currentSelection={this.state.currentSelection}
								project={project}
							/>
						);
					})}
				</div>
				<div id='footer'>
					<span>© Benedict Belz</span>
					<span className='divider'/>
					<span className='underline black' onClick={() => this.props.clickImprint()}>Imprint</span>
				</div>
			</Scrollbar>
		);
	}
}
