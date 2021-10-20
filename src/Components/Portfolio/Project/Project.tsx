import * as React from 'react';
import { TypeProject, TypeProjectSelection } from '../../../@types/typeProject';
import './Project.scss';

interface Props {
    currentSelection: TypeProjectSelection;
    project: TypeProject;
}

interface States {
    
}

export class Project extends React.Component<Props, States> {

    constructor(props: any) {
		super(props);
	}

    render() {
        return (
            <div 
                className={[
                    'project',
                    this.props.project.type === this.props.currentSelection || this.props.currentSelection === 'All' ? 'show' : '',
                ].filter(x => x).join(' ')
            }>
                <div className='description'>
                    <p className='title uppercase'>{this.props.project.title}</p>
                    <span></span>
                    <p className='selection'>{this.props.project.type}</p>
                </div>
                <div className='link'>
                    {this.props.project.vimeo && 
                        <a 
                            className='vimeo'
                            href={this.props.project.vimeo}
                            target='_blank' 
                            rel='noopener noreferrer'
                            title='Vimeo'
                        >
                            <img src='assets/social/vimeo.svg'/>
                        </a>
                    }
                </div>
                <div className='image'>
                    <img src={this.props.project.image}/>
                </div>
            </div>
        );
    }
}