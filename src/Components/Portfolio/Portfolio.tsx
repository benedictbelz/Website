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
            visible[index].classList.remove('opacity');
            visible[index].offsetWidth;
            visible[index].classList.add('fade');
            visible[index].style.webkitAnimationPlayState="paused";
            visible[index].style.webkitAnimationPlayState="running";
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
                    {this.state.selection.map(selection => {
                        return (
                            <li 
                                key={selection} 
                                className={this.state.currentSelection === selection ? 'current' : ''}
                                onClick={() => {
                                    this.setState({ currentSelection: selection });
                                    setTimeout(() => this.handleFade());
                                }}
                            >
                                <div className='bold'>{selection}</div>
                                <div className='regular'>{selection}</div>
                            </li>
                        )
                    })}
                </ul>
                <div id='projects'>
                    {this.props.projects.map(project => {
                        return <Project key={project.title} project={project} currentSelection={this.state.currentSelection} />
                    })}
                </div>
                <div id='footer'>
                    <span>© Benedict Belz</span>
                    <span>|</span>
                    <span>Imprint</span>
                </div>
            </div>
        );
	}
}