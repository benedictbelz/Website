import * as React from 'react';
import { Loader } from '../../Loader/Loader';
import { Logo } from './Logo/Logo';
import { TypeDevice } from '../../../@types/typeCommon';
import './Welcome.scss';

interface Props {
    clickEnter: Function;
    currentDevice: TypeDevice | null;
    isLoading: boolean;
    percentage: number;
}

interface States {
	isVisible: boolean;
}

export class Welcome extends React.Component<Props, States> {

    state: States = {
        isVisible: false
    }

    componentDidUpdate(prevProps: any) {
        if (!this.props.isLoading && prevProps.isLoading)
            setTimeout(() => this.setState({ isVisible: true }), 1000);
    }

	render() {
		return (
            <div id='welcome' className={this.state.isVisible ? 'show' : ''}>
                <Loader color='White' isLoading={this.props.isLoading} percentage={this.props.percentage}/>
                <div id='logo'>
                    {this.props.currentDevice === 'Desktop'
                        ? <Logo isVisible={this.state.isVisible}/>
                        : this.state.isVisible ? <img src='assets/interface/logo.gif' draggable='false'/> : null
                    }
                </div>
                <div id='message'>
                    Welcome to my website.<br />
                    Click to view some of<br />
                    my creative work.
                </div>
                <div id='enter' onClick={() => this.props.clickEnter()}>
                    <img src='assets/interface/arrow_down.png' draggable='false' />
                </div>
            </div>
        );
	}
}
