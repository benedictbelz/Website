import * as React from 'react';
import './Slider.scss';

interface Props {

}

interface States {
    currentImage: number | null;
    currentNumber: number | null;
    images: HTMLCollection | null;
    isTransition: boolean;
}

export class Slider extends React.Component<Props, States> {

    state: States = {
        currentImage: null,
        currentNumber: null,
        images: null,
        isTransition: false
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.children && (this.props.children !== prevProps.children)) {
            this.setState({ 
                currentImage: 0,
                currentNumber: React.Children.toArray(this.props.children).length,
                images: document.querySelector('.slider').children
            });
            setTimeout(() => this.updateSlider());
        }
    }

    updateSlider() {
        // DEFINE IMAGES
        let images = document.querySelector('.slider').children;
        let previous, next;
        let current = this.state.currentImage;
        let number = this.state.currentNumber;
        // PREVIOUS IMAGE
        if (current - 1 < 0)
            previous = current - 1 + number;
        else
            previous = current - 1;
        // NEXT IMAGE
        if (current + 1 >= number)
            next = current + 1 - number;
        else
            next = current + 1;
        // SHOW IMAGE
        this.state.images[previous].classList.add('show', 'previous');
        this.state.images[current].classList.add('show', 'current');
        this.state.images[next].classList.add('show', 'next');
    }

    previousImage() {

    }

    nextImage() {

    }

	render() {
		return (
            <div className={'slider'}>
                {this.props.children}
                <div className={'bullets'}>
                    {this.state.currentNumber && [...Array(this.state.currentNumber)].map((bullet, index) => {
                        return <div key={index} data-index={index} className='bullet'></div>
                    })}
                </div>
            </div>
        );
	}
}
