import * as React from 'react';
import { Project } from './Project/Project';
import { Scrollbar } from '../../Scrollbar/Scrollbar';
import { TypeDevice, TypePage } from '../../../@types/typeCommon';
import { TypeProject, TypeProjectSelection } from '../../../@types/typeProject';
import './Portfolio.scss';

interface Props {
	clickImprint: Function;
	clickProject: Function;
	currentDevice: TypeDevice | null;
	currentPage: TypePage;
	projects: TypeProject[];
}

interface States {
	currentSelection: TypeProjectSelection;
	isClicked: boolean;
	selection: TypeProjectSelection[];
}

export class Portfolio extends React.Component<Props, States> {

	state: States = {
		currentSelection: 'All',
		isClicked: false,
		selection: ['All', 'Digital', 'Film', 'Art'],
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

	fadeSelection() {
		// GET VARIABLES
		let index = 0;
		const selection = document.querySelectorAll('#selection li') as unknown as HTMLElement[];
		// RESET FADE
		selection.forEach(item => item.classList.add('opacity'));
		// RECURSIVE FUNCTION
		function fade() {
			const item = selection[index];
			item.classList.remove('opacity');
			item.classList.add('fade');
			index++;
			if (index < selection.length) setTimeout(() => fade(), 100);
		}
		// CALL FUNCTION
		fade()
	}

	fadeProjects() {
		// GET VARIABLES
		let timeout: any = [];
		let index = 0;
		const projects = document.querySelectorAll('.project') as unknown as HTMLElement[];
		const show = document.querySelectorAll('.project.show') as unknown as HTMLElement[];
		// RESET TIMEOUT
		timeout.forEach((t: any) => clearTimeout(t));
		// RESET FADE
		projects.forEach(project => {
			project.classList.add('opacity');
			project.classList.remove('fade');
			project.style.animationPlayState = 'paused';
		});
		// RECURSIVE FUNCTION
		function fade() {
			const project = show[index];
			project.classList.remove('opacity');
			project.offsetWidth;
			project.classList.add('fade');
			project.style.animationPlayState = 'running';
			index++;
			if (index < show.length) timeout.push(setTimeout(() => fade(), 100));
		}
		// CALL FUNCTION
		if (show.length !== 0) fade();
	}

	render() {
		return (
			<Scrollbar color={'black'} currentDevice={this.props.currentDevice} element={'portfolio'}>
				<div id='portfolio'>
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
								<Project
									key={project.title}
									clickProject={() => {
										if (!this.state.isClicked) {
											this.props.clickProject(project)
											this.setState({ isClicked: true });
											setTimeout(() => this.setState({ isClicked: false }), 500);
										}
									}}
									currentDevice={this.props.currentDevice}
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
				</div>
			</Scrollbar>
		);
	}
}