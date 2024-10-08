import * as React from 'react';
import { Loader } from '../../Components/Loader/Loader';
import { Scrollbar } from '../../Components/Scrollbar/Scrollbar';
import { AcSync } from './Projects/AcSync';
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

import { Project } from '../../@types/project';
import './Showroom.scss';
import { Browser } from '../../@types/browser';

interface Props {
    browser: Browser;
    currentProject: Project | null;
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
        const loadImages = async () => await new Promise<void>(resolve => {
            if (images.length === 0) {
                resolve();
            }
            let index = 0;
            const load = () => {
                const getNextImage = () => {
                    index++;
                    this.setState({ percentage: Math.floor(index/(images.length)*100) });
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
        await loadImages();
        this.setState({ isLoading: false, percentage: 100 });
    }

	render() {
		return (
            <Scrollbar color='White' browser={this.props.browser} id='showroom'>
                <Loader color='Black' isLoading={this.state.isLoading} percentage={this.state.percentage}/>
                {this.props.currentProject && this.props.currentProject.title === 'AC Sync' && <AcSync/>}
                {this.props.currentProject && this.props.currentProject.title === 'AdmiralCloud' && <AdmiralCloud browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Art Attech' && <ArtAttech browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Droemer Knaur' && <DroemerKnaur browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Être' && <Etre browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Keep Going' && <KeepGoing/>}
                {this.props.currentProject && this.props.currentProject.title === 'Lockdown' && <Lockdown browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Metropolis' && <Metropolis browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'MMPro' && <MMPro/>}
                {this.props.currentProject && this.props.currentProject.title === 'Nanotec' && <Nanotec browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Personal Website' && <PersonalWebsite/>}
                {this.props.currentProject && this.props.currentProject.title === 'Phobius' && <Phobius browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Shimmering Nightmare' && <ShimmeringNightmare browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'Showreel' && <Showreel browser={this.props.browser}/>}
                {this.props.currentProject && this.props.currentProject.title === 'ZDF Aspekte' && <ZdfAspekte browser={this.props.browser}/>}
            </Scrollbar>
        );
	}
}