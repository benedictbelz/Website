import * as React from 'react';
import { TypePage } from '../../../@types/typePage';
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

    clickLeft() {
        this.props.clickLeft();
    }

    clickRight() {
        if (this.state.isClickedRight) {
            return;
        }
        this.setState({ isClickedRight: true });
        this.props.clickRight();
        setTimeout(() => this.setState({ isClickedRight: false }), 1000);
    }

	render() {
		return (
            <div id='header'>
                <div onClick={() => this.clickLeft()}>        
                    <img id='logoBack' className={'show'} src='assets/interface/logoBack.png' draggable='false' />
                    <img id='logoFront' className={'show'} src='assets/interface/logoFront.png' draggable='false' />
                    <img id='arrowUp' className={''} src='assets/interface/arrowUp.png' draggable='false' />
                </div>
                <div onClick={() => this.clickRight()}>
                    <img id='informationBack' className={this.props.currentPage === 'Portfolio' || this.props.currentPage === 'Welcome' ? 'show' : ''} src='assets/interface/informationBack.png' draggable='false' />
                    <img id='informationFront' className={this.props.currentPage === 'Portfolio' || this.props.currentPage === 'Welcome' ? 'show' : ''} src='assets/interface/informationFront.png' draggable='false' />
                    <img id='arrowLeft' className={this.props.currentPage === 'Imprint' || this.props.currentPage === 'Information' ? 'show' : ''} src='assets/interface/arrowLeft.png' draggable='false' />
                    <img id='arrowRight' className={this.props.currentPage === 'Showroom' ? 'show' : ''} src='assets/interface/arrowRight.png' draggable='false' />
                </div>
            </div>
        );
	}
}
