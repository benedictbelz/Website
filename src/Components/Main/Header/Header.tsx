import * as React from 'react';
import { TypePage } from '../../../@types/typeCommon';
import './Header.scss';

interface Props {
    clickLeft: Function;
    clickRight: Function;
    currentPage: TypePage;
}

interface States {
    isClickedLeft: boolean;
    isClickedRight: boolean;
}

export class Header extends React.Component<Props, States> {

    state: States = {
        isClickedLeft: false,
        isClickedRight: false
    }

	render() {
		return (
            <div id='header'>
                <div onClick={() => {
                    if (!this.state.isClickedLeft) {
                        this.setState({ isClickedLeft: true });
                        this.props.clickLeft();
                        setTimeout(() => this.setState({ isClickedLeft: false }), 1000);
                    }
                }}>        
                    <img id='logo_back' className={'show'} src='assets/interface/logo_back.png' draggable='false' />
                    <img id='logo_front' className={'show'} src='assets/interface/logo_front.png' draggable='false' />
                    <img id='arrow_up' className={''} src='assets/interface/arrow_up.png' draggable='false' />
                </div>
                <div onClick={() => {
                    if (!this.state.isClickedRight) {
                        this.setState({ isClickedRight: true });
                        this.props.clickRight();
                        setTimeout(() => this.setState({ isClickedRight: false }), 1000);
                    }
                }}>
                    <img id='information_back' className={this.props.currentPage === 'Portfolio' || this.props.currentPage === 'Welcome' ? 'show' : ''} src='assets/interface/information_back.png' draggable='false' />
                    <img id='information_front' className={this.props.currentPage === 'Portfolio' || this.props.currentPage === 'Welcome' ? 'show' : ''} src='assets/interface/information_front.png' draggable='false' />
                    <img id='arrow_left' className={this.props.currentPage === 'Imprint' || this.props.currentPage === 'Information' ? 'show' : ''} src='assets/interface/arrow_left.png' draggable='false' />
                    <img id='arrow_right' className={this.props.currentPage === 'Showroom' ? 'show' : ''} src='assets/interface/arrow_right.png' draggable='false' />
                </div>
            </div>
        );
	}
}