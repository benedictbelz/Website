import * as React from 'react';
import { Device } from '../../@types/typeCommon';
import './Scrollbar.scss';

interface Props {
    color: 'black' | 'white';
    currentDevice: Device;
    element: string;
}

interface States {
    element: HTMLElement | null;
    scroll: number;
}

export class Scrollbar extends React.Component<Props, States> {

    state: States = {
        element: null,
        scroll: 0
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.currentDevice === 'Desktop' && !prevProps.currentDevice) {
            const element = document.getElementById(this.props.element);
            this.setState({ element });
            element.addEventListener('scroll', () => this.update());
            window.addEventListener('resize', () => this.update());
        }
    }

    update() {
        let height = this.state.element.scrollHeight - this.state.element.clientHeight;
        let scroll = this.state.element.scrollTop;
        let percentage = Math.floor(scroll/height*1000)/1000;
        // BOUNDARY
        if (percentage <= 0 || isNaN(percentage))
            percentage = 0;
        if (percentage >= 1 && height !== 0)
            percentage = 1;
        // UPDATE SCROLL
        this.setState({ scroll: percentage });
    }

	render() {
		return (
            <>
                {this.props.children}
                {this.state.element && 
                    <div className={[
                        'scrollbar',
                        this.state.element ? this.state.element.id : '',
                        this.props.color
                    ].filter((x) => x).join(' ')}>
                        <div style={ { transform: 'scaleY(' + this.state.scroll + ')' } }/>
                    </div>
                }
            </>
        );
	}
}