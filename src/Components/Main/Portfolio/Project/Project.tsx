import * as React from 'react';
import { TypeDevice } from '../../../../@types/typeDevice';
import { TypeProject, TypeProjectSelection } from '../../../../@types/typeProject';
import './Project.scss';

interface Props {
    clickProject: Function;
    currentDevice: TypeDevice | null;
    currentSelection: TypeProjectSelection;
    project: TypeProject;
}

export class Project extends React.Component<Props,{}> {

    render() {
        return (
            <div 
                className={[
                    'project',
                    this.props.project.type === this.props.currentSelection || this.props.currentSelection === 'All' ? 'show' : '',
                    this.props.project.icon === 'White' ? 'white' : '',
                    this.props.project.icon === 'Black' ? 'black' : ''
                ].filter(x => x).join(' ')}
                onClick={() => { if (this.props.currentDevice === 'Mobile') this.props.clickProject(); }}
            >
                <div className='wrapper'>
                    <div className='label'>
                        {this.props.project.type === 'Art' && <img src='assets/interface/art.svg' draggable='false'/>}
                        {this.props.project.type === 'Digital' && <img src='assets/interface/digital.svg' draggable='false'/>}
                        {this.props.project.type === 'Film' && <img src='assets/interface/film.svg' draggable='false'/>}
                    </div>
                    {this.props.currentDevice === 'Desktop' &&
                        <>
                            <div 
                                className='description'
                                onClick={() => { if (this.props.currentDevice === 'Desktop') this.props.clickProject(); }}
                            >
                                <p className='title uppercase'>{this.props.project.title}</p>
                            </div>
                            <div className='link'>
                                {this.props.project.github && 
                                    <a 
                                        className='github'
                                        href={this.props.project.github}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        title='GitHub'
                                    >
                                        <img src='assets/social/github.svg' draggable='false'/>
                                    </a>
                                }
                                {this.props.project.vimeo && 
                                    <a 
                                        className='vimeo'
                                        href={this.props.project.vimeo}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        title='Vimeo'
                                    >
                                        <img src='assets/social/vimeo.svg' draggable='false'/>
                                    </a>
                                }
                                {this.props.project.youtube && 
                                    <a 
                                        className='youtube'
                                        href={this.props.project.youtube}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        title='YouTube'
                                    >
                                        <img src='assets/social/youtube.svg' draggable='false'/>
                                    </a>
                                }
                                {this.props.project.www && 
                                    <a 
                                        className='www'
                                        href={this.props.project.www}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        title='Website'
                                    >
                                        <img src='assets/social/www.svg' draggable='false'/>
                                    </a>
                                }
                            </div>
                        </>
                    }
                    <div className='image'>
                        <img src={this.props.project.image} draggable='false'/>
                    </div>
                </div>
            </div>
        );
    }
}
