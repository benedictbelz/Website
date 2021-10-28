import * as React from 'react';
import { Logo } from './Logo/Logo';
import './Welcome.scss';

interface Props {
    clickEnter: Function;
}

interface States {
	
}

export class Welcome extends React.Component<Props, States> {

	render() {
		return (
            <div id='welcome'>
                <div id='logo'>
                    {/* <img src='assets/interface/logo.gif' draggable='false' /> */}
                    <Logo/>
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