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
import { TypeDevice } from '../../../@types/typeDevice';
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
				this.loadMedia();
			});
        }
    }

    async loadMedia() {
        let images = document.querySelectorAll('#showroom img') as unknown as HTMLImageElement[];
        let videos = document.querySelectorAll('#showroom .slider video') as unknown as HTMLVideoElement[];
        const loadImages = async () => await new Promise<void>(resolve => {
            if (images.length === 0) {
                resolve();
            }
            let index = 0;
            const load = () => {
                const getNextImage = () => {
                    index++;
                    this.setState({ percentage: Math.floor(index/(images.length+videos.length)*100) });
                    if (index !== images.length) {
                        setTimeout(load, 5);
                    } else {
                        resolve();
                    }
                };
                const image = new Image();
                image.src = images[index].src;
                image.onload = () => getNextImage();
                image.onerror = () => getNextImage();
            };
            load();
        });
        const loadVideos = async () => await new Promise<void>(resolve => {
            if (videos.length === 0) {
                resolve();
            }
            let index = 0;
            const load = () => {
                const getNextVideo = () => {
                    index++;
                    this.setState({ percentage: Math.floor((index+images.length)/(images.length+videos.length)*100) });
                    if (index !== videos.length) {
                        setTimeout(load, 5);
                    } else {
                        resolve();
                    }
                };
                const video = new XMLHttpRequest();
                video.open('GET', videos[index].src, true);
                video.responseType = 'blob';
                video.onload = () => getNextVideo();
                video.onerror = () => getNextVideo();
                video.send();
            };
            load();
        });
        await loadImages();
        await loadVideos();
        this.setState({ isLoading: false, percentage: 100 });
    }

	render() {
		return (
            <Scrollbar color='White' currentDevice={this.props.currentDevice} id='showroom'>
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