import * as React from 'react';
import { Loader } from '../../Loader/Loader';
import { Logo } from './Logo/Logo';
import { TypeDevice } from '../../../@types/typeCommon';
import './Welcome.scss';

interface Props {
    clickEnter: Function;
    currentDevice: TypeDevice | null;
}

interface States {
    isLoading: boolean;
    isRendered: boolean;
    percentage: number;
}

export class Welcome extends React.Component<Props, States> {

    state: States = {
        isLoading: true,
        isRendered: false,
        percentage: 0
    }

    componentDidMount() {
		this.initLoading();
	}

    initLoading() {
		let images = document.images;
		let index = 0;
		const load = () => {
			const image = new Image();
			image.src = images[index].src;
			image.onload = () => {
				index++;
				if (index !== images.length) {
                    this.setState({ percentage: Math.floor(index/images.length*100) });
					setTimeout(load, 5);
                } else if (this.props.currentDevice === 'Desktop' && !this.state.isRendered) {
                    const interval = setInterval(() => {
                        if (!this.state.isRendered) {
                            clearInterval(interval);
                            this.setState({ percentage: 100 });
                            setTimeout(() => this.setState({ isLoading: false }), 1000);
                        }
                    }, 50); 
				} else {
                    this.setState({ percentage: 100 });
                    setTimeout(() => this.setState({ isLoading: false }), 1000);
                }
			}
		}
		load();
	}

	render() {
		return (
            <div id='welcome' className={!this.state.isLoading ? 'show' : ''}>
                <Loader color='White' isLoading={this.state.isLoading} percentage={this.state.percentage}/>
                <div id='logo'>
                    {this.props.currentDevice === 'Desktop'
                        ? <Logo isRendered={() => this.setState({ isRendered: true })} isLoading={this.state.isLoading}/>
                        : !this.state.isLoading && <img src='assets/interface/logo.gif' draggable='false'/>
                    }
                </div>
                <div id='message'>
                    Welcome to my website.<br />
                    Click to view some of<br />
                    my creative work.
                </div>
                <div id='enter' onClick={() => this.props.clickEnter()}>
                    <img src='assets/interface/arrowDown.png' draggable='false' />
                </div>
            </div>
        );
	}
}
