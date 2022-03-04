import * as React from 'react';
import { Loader } from '../../Loader/Loader';
import { Scrollbar } from '../../Scrollbar/Scrollbar';
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
				this.setState({ loadedProjects: [this.props.currentProject.title, ...this.state.loadedProjects] });
				this.initLoading();
			});
        }
    }

    initLoading() {
        let images = document.querySelectorAll('#showroom img') as unknown as HTMLImageElement[];
		let index = 0;
		const load = () => {
			const image = new Image();
			image.src = images[index].src;
			image.onload = () => {
				index++;
				if (index === images.length)
					this.setState({ isLoading: false, percentage: 100 });
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
            <Scrollbar color={'white'} currentDevice={this.props.currentDevice} element={'showroom'}>
                <div id='showroom'>
                    <Loader color='Black' isLoading={this.state.isLoading} percentage={this.state.percentage}/>
                    {this.props.currentProject && this.props.currentProject.title === 'ZDF Aspekte' && <ZdfAspekte/>}
                </div>
            </Scrollbar>
        );
	}
}