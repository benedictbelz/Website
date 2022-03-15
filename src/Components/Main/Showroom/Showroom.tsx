import * as React from 'react';
import { Loader } from '../../Loader/Loader';
import { Scrollbar } from '../../Scrollbar/Scrollbar';
import { AdmiralCloud } from './Projects/AdmiralCloud';
import { ArtAttech } from './Projects/ArtAttech';
import { DroemerKnaur } from './Projects/DroemerKnaur';
import { Etre } from './Projects/Etre';
import { KeepGoing } from './Projects/KeepGoing';
import { Lockdown } from './Projects/Lockdown';
import { Metropolis } from './Projects/Metropolis';
import { MMPro } from './Projects/MMPro';
import { Nanotec } from './Projects/Nanotec';
import { Phobius } from './Projects/Phobius';
import { PersonalWebsite } from './Projects/PersonalWebsite';
import { ShimmeringNightmare } from './Projects/ShimmeringNightmare';
import { Showreel } from './Projects/Showreel';
import { ZdfAspekte } from './Projects/ZdfAspekte';
import { TypeDevice } from '../../../@types/typeCommon';
import { TypeProject } from '../../../@types/typeProject';
import './Showroom.scss';

interface Props {
    currentDevice: TypeDevice | null;
    currentProject: TypeProject | null;
}

interface States {
    isLoading: boolean;
    percentage: number;
    loadedProjects: string[];
}

export class Showroom extends React.Component<Props, States> {

    state: States = {
        isLoading: true,
        percentage: 0,
        loadedProjects: []
    }

    componentDidUpdate(prevProps: any) {
        if (
            this.props.currentProject && (
            (this.props.currentProject && !prevProps.currentProject) || this.props.currentProject.title !== prevProps.currentProject.title) &&
			!this.state.loadedProjects.includes(this.props.currentProject.title)
        ) {
			setTimeout(() => {
				this.setState({ isLoading: true, loadedProjects: [this.props.currentProject.title, ...this.state.loadedProjects] });
				this.loadImages();
			});
        }
    }

    loadImages() {
        let images = document.querySelectorAll('#showroom img') as unknown as HTMLImageElement[];
		let index = 0;
		const load = () => {
			const image = new Image();
			image.src = images[index].src;
			image.onload = () => {
				index++;
				if (index === images.length) {
					this.setState({ isLoading: false, percentage: 100 });
                }
				else {
					this.setState({ percentage: Math.floor(index/images.length*100) });
					setTimeout(load, 5);
				}
			}
		}
		if (images.length !== 0) {
            load();
        }
    }

	render() {
		return (
            <Scrollbar color={'white'} currentDevice={this.props.currentDevice} id={'showroom'}>
                <Loader color='Black' isLoading={this.state.isLoading} percentage={this.state.percentage}/>
                {this.props.currentProject && this.props.currentProject.title === 'AdmiralCloud' && <AdmiralCloud currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Art Attech' && <ArtAttech currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Droemer Knaur' && <DroemerKnaur currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Être' && <Etre currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Keep Going' && <KeepGoing/>}
                {this.props.currentProject && this.props.currentProject.title === 'Lockdown' && <Lockdown currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Metropolis' && <Metropolis currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'MMPro' && <MMPro/>}
                {this.props.currentProject && this.props.currentProject.title === 'Nanotec' && <Nanotec currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Personal Website' && <PersonalWebsite/>}
                {this.props.currentProject && this.props.currentProject.title === 'Phobius' && <Phobius currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Shimmering Nightmare' && <ShimmeringNightmare currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Showreel' && <Showreel currentDevice={this.props.currentDevice}/>}
                {this.props.currentProject && this.props.currentProject.title === 'ZDF Aspekte' && <ZdfAspekte currentDevice={this.props.currentDevice}/>}
            </Scrollbar>
        );
	}
}