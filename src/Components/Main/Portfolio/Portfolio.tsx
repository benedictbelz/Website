import * as React from 'react';
import { Project } from './Project/Project';
import { Scrollbar } from '../../Scrollbar/Scrollbar';
import { TypeProject, TypeProjectSelection } from '../../../@types/typeProject';
import './Portfolio.scss';

interface Props {
	projects: TypeProject[];
}

interface States {
	height: number;
	scroll: number;
	currentSelection: TypeProjectSelection;
	selection: TypeProjectSelection[];
}

export class Portfolio extends React.Component<Props, States> {
	constructor(props: any) {
		super(props);

		this.state = {
			height: 0,
			scroll: 0,
			currentSelection: 'All',
			selection: ['All', 'Digital', 'Film', 'Art'],
		};
	}

	componentDidMount() {
		window
			.matchMedia('(max-width: 2000px)')
			.addEventListener('change', () => this.handleFade());
		window
			.matchMedia('(max-width: 1200px)')
			.addEventListener('change', () => this.handleFade());
		window
			.matchMedia('(max-width: 900px)')
			.addEventListener('change', () => this.handleFade());
		window
			.matchMedia('(max-width: 600px)')
			.addEventListener('change', () => this.handleFade());
	}

	handleFade() {
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
		});
		// RECURSIVE FUNCTION
		function fade() {
			const project = show[index];
			project.classList.remove('opacity');
			project.offsetWidth;
			project.classList.add('fade');
			project.style.animationPlayState = 'paused';
			project.style.animationPlayState = 'running';
			index++;
			if (index < show.length) timeout.push(setTimeout(fade, 100));
		}
		// CALL FUNCTION
		if (show.length !== 0) fade();
	}

	render() {
		return (
			<Scrollbar color={'black'} element={'portfolio'}>
				<div id="portfolio">
					<ul id="selection">
						{this.state.selection.map(selection => {
							return (
								<li
									key={selection}
									className={this.state.currentSelection === selection ? 'current' : ''}
									onClick={() => {
										if (this.state.currentSelection !== selection) {
											this.setState({ currentSelection: selection });
											setTimeout(() => this.handleFade());
										}
									}}
								>
									<img src={'assets/interface/' + selection.toLowerCase() + '.svg'}/>
								</li>
							);
						})}
					</ul>
					<div id="projects">
						{this.props.projects.map(project => {
							return (
								<Project
									key={project.title}
									project={project}
									currentSelection={this.state.currentSelection}
								/>
							);
						})}
					</div>
					<div id="footer">
						<span>© Benedict Belz</span>
						<span className='divider'/>
						<span className='underline black'>Imprint</span>
					</div>
				</div>
			</Scrollbar>
		);
	}
}
