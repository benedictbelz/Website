import * as React from 'react';
import { Project } from './Project/Project';
import { TypeProject, TypeProjectSelection } from '../../@types/typeProject';
import './Portfolio.scss';

interface Props {
    projects: TypeProject[];
}

interface States {
    currentSelection: TypeProjectSelection;
    selection: TypeProjectSelection[];
}

export class Portfolio extends React.Component<Props, States> {

    constructor(props: any) {
		super(props);

        this.state = {
            currentSelection: 'All',
            selection: ['All', 'Digital', 'Film', 'Art'],
        }
	}

    componentDidMount() {
        window.matchMedia('(max-width: 2000px)').addEventListener('change', () => this.handleFade());
        window.matchMedia('(max-width: 1250px)').addEventListener('change', () => this.handleFade());
        window.matchMedia('(max-width: 1000px)').addEventListener('change', () => this.handleFade());
        window.matchMedia('(max-width: 750px)').addEventListener('change', () => this.handleFade());
    }

    handleFade() {
        // GET VARIABLES
        let timeout: any = [];
        let index = 0;
        const projects = document.querySelectorAll('.project') as unknown as HTMLElement[];
        const visible = document.querySelectorAll('.project.show') as unknown as HTMLElement[];
        // RESET FADE
        projects.forEach((project, index) => {
            if (timeout.length !== 0) clearTimeout(timeout[index]);
            project.classList.add('opacity');
            project.classList.remove('fade');
        })
        // RECURSIVE FUNCTION
        function fade() {
            const project = visible[index];
            project.classList.remove('opacity');
            project.offsetWidth;
            project.classList.add('fade');
            project.style.animationPlayState="paused";
            project.style.animationPlayState="running";
            index++;
            if (index < visible.length)
                timeout.push(setTimeout(fade, 100));
        }
        // CALL FUNCTION
        if (visible.length !== 0)
            fade();
    }

	render() {
		return (
            <div id='portfolio'>
                <ul id='selection'>
                    <li 
                        className={['uppercase', this.state.currentSelection === 'All' ? 'current' : ''].filter(x => x).join(' ')}
                        onClick={() => {
                            if (this.state.currentSelection !== 'All') {
                                this.setState({ currentSelection: 'All' });
                                setTimeout(() => this.handleFade());
                            }
                        }}
                    >
                        All
                    </li>
                    <li 
                        className={['uppercase', this.state.currentSelection === 'Digital' ? 'current' : ''].filter(x => x).join(' ')}
                        onClick={() => {
                            if (this.state.currentSelection !== 'Digital') {
                                this.setState({ currentSelection: 'Digital' });
                                setTimeout(() => this.handleFade());
                            }
                        }}
                    >
                        <img src='assets/interface/digital.svg' />
                        Digital
                    </li>
                    <li 
                        className={['uppercase', this.state.currentSelection === 'Film' ? 'current' : ''].filter(x => x).join(' ')}
                        onClick={() => {
                            if (this.state.currentSelection !== 'Film') {
                                this.setState({ currentSelection: 'Film' });
                                setTimeout(() => this.handleFade());
                            }
                        }}
                    >
                        <img src='assets/interface/film.svg' />
                        Film
                    </li>
                    <li 
                        className={['uppercase', this.state.currentSelection === 'Art' ? 'current' : ''].filter(x => x).join(' ')}
                        onClick={() => {
                            if (this.state.currentSelection !== 'Art') {
                                this.setState({ currentSelection: 'Art' });
                                setTimeout(() => this.handleFade());
                            }
                        }}
                    >
                        <img src='assets/interface/art.svg' />
                        Art
                    </li>
                </ul>
                <div id='projects'>
                    {this.props.projects.map(project => {
                        return <Project key={project.title} project={project} currentSelection={this.state.currentSelection} />
                    })}
                </div>
                <div id='footer'>
                    <span className='uppercase'>© Benedict Belz</span>
                    <span></span>
                    <span className='uppercase'>Imprint</span>
                </div>
            </div>
        );
	}
}