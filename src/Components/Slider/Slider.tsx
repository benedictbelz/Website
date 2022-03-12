import * as React from 'react';
import { TypeDevice } from '../../@types/typeCommon';
import './Slider.scss';

interface Props {
    currentDevice: TypeDevice | null;
}

interface States {
    current: number | null;
    bullets: HTMLElement[] | null;
    images: HTMLElement[] | null;
    isInitialized: boolean;
    isTransition: boolean;
    number: number | null;
}

export class Slider extends React.Component<Props, States> {

    constructor(props: any) {
        super(props);

        this.state = {
            current: null,
            bullets: null,
            images: null,
            isInitialized: false,
            isTransition: false,
            number: null
        }

        setTimeout(() => this.initSlider());
    }

    initSlider() {
        // SET STATE
        this.setState({ 
            current: 0,
            bullets: document.querySelector('.slider .bullets').children as unknown as HTMLElement[],
            images: document.querySelector('.slider .images').children as unknown as HTMLElement[],
            isInitialized: true,
            number: React.Children.toArray(this.props.children).length
        });
        // SET BULLETS & IMAGES
        setTimeout(() => {
            this.initDrag();
            this.setBullets();
            this.setImages();
        });
    }

    initDrag() {
        // GET DRAG ELEMENT
        const drag = document.querySelector('.slider .drag') as unknown as HTMLElement;
        // DEFINE POSITION
        let origin: number;
        let destination: number;
        // DEFINE ACTIVE
        let isActive = false;
        // DEFINE START
        const start = (position: number) => {
            if (this.state.isTransition) {
                return;
            }
            isActive = true;
            origin = position;
        }
        // DEFINE MOVE
        const move = (position: number) => {
            if (!isActive || this.state.isTransition) {
                return;
            }
            destination = position - origin;
            const { current, next, previous } = this.getOrder();
            this.state.images[previous].style.left = 'calc(-100% + ' + destination + 'px)';
            this.state.images[current].style.left = destination + 'px';
            this.state.images[next].style.left = 'calc(100% + ' + destination + 'px)';
        }
        // DEFINE END
        const end = () => {
            if (!isActive || this.state.isTransition) {
                return;
            }
            isActive = false;
            if (destination >= 50)
                this.previousImage();
            else if (destination <= -50)
                this.nextImage();
            else
                this.currentImage();
        }
        // IF DESKTOP
        if (this.props.currentDevice === 'Desktop') {
            drag.addEventListener('mousedown', event => start(event.clientX));
            drag.addEventListener('mousemove', event => move(event.clientX));
            drag.addEventListener('mouseup', () => end());
            drag.addEventListener('mouseout', () => end());
        }
        // IF MOBILE
        if (this.props.currentDevice === 'Mobile') {
            drag.addEventListener('touchstart', event => start(event.touches[0].clientX));
            drag.addEventListener('touchmove', event => move(event.touches[0].clientX));
            drag.addEventListener('touchend', () => end());
        }
    }

    getOrder() {
        // DEFINE ORDER
        let current, next, previous;
        // CURRENT IMAGE
        current = this.state.current;
        // PREVIOUS IMAGE
        if (current - 1 < 0)
            previous = current - 1 + this.state.number;
        else
            previous = current - 1;
        // NEXT IMAGE
        if (current + 1 >= this.state.number)
            next = current + 1 - this.state.number;
        else
            next = current + 1;
        // RETURN ORDER
        return { current, next, previous };
    }

    setBullets() {
        // DELETE CLASS NAME FOR ALL BULLETS
        for (let index = 0; index < this.state.number; index++) {
            this.state.bullets[index].className = '';
        }
        // SET BULLETS
        this.state.bullets[this.state.current].className = 'current';
    }

    setImages() {
        // GET ORDER
        const { current, next, previous } = this.getOrder();
        // DELETE CLASS NAME FOR ALL IMAGES
        for (let index = 0; index < this.state.number; index++) {
            this.state.images[index].className = '';
        }
        // CHANGE IMAGES
        this.state.images[previous].className = 'show';
        this.state.images[previous].style.left = '-100%';
        this.state.images[current].className = 'show';
        this.state.images[current].style.left = '0%';
        this.state.images[next].className = 'show';
        this.state.images[next].style.left = '100%';
    }

    previousImage() {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.isTransition) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ isTransition: true });
        // GET ORDER
        let { current, next, previous } = this.getOrder();
        // CHANGE IMAGES
        this.state.images[previous].style.left = '0%';
        this.state.images[current].style.left = '100%';
        this.state.images[next].style.left = '200%';
        // DECREMENT CURRENT
        current = this.state.current - 1;
        // CHECK BOUNDARY
        if (current < 0) {
            current = current + this.state.number;
        }
        // SET CURRENT
        this.setState({ current });
        // SET BULLETS
        setTimeout(() => {
            this.setBullets();
        }, 250);
        // SET IMAGES & DEACTIVATE TRANSITION
        setTimeout(() => {
            this.setImages();
            this.setState({ isTransition: false });
        }, 500);
    }

    currentImage() {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.isTransition) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ isTransition: true });
        // GET ORDER
        let { current, next, previous } = this.getOrder();
        // CHANGE IMAGES
        this.state.images[previous].style.left = '-100%';
        this.state.images[current].style.left = '0%';
        this.state.images[next].style.left = '100%';
        // DEACTIVATE TRANSITION
        setTimeout(() => this.setState({ isTransition: false }), 500);
    }

    nextImage() {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.isTransition) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ isTransition: true });
        // GET ORDER
        let { current, next, previous } = this.getOrder();
        // CHANGE IMAGES
        this.state.images[previous].style.left = '-200%';
        this.state.images[current].style.left = '-100%';
        this.state.images[next].style.left = '0%';
        // INCREMENT CURRENT
        current = this.state.current + 1;
        // CHECK BOUNDARY
        if (current >= this.state.number) {
            current = current - this.state.number;
        }
        // SET CURRENT
        this.setState({ current });
        // SET BULLETS
        setTimeout(() => {
            this.setBullets();
        }, 250);
        // SET IMAGES & DEACTIVATE TRANSITION
        setTimeout(() => {
            this.setImages();
            this.setState({ isTransition: false });
        }, 500);
    }

	render() {
		return (
            <div className={['slider', this.state.isTransition ? 'transition' : ''].filter(x => x).join(' ')}>
                <div className='drag'/>
                <div className='click'>
                    <div className='left'>
                        <img onClick={() => this.previousImage()} src='assets/interface/sliderLeft.svg'/>
                    </div>
                    <div className='right'>
                        <img onClick={() => this.nextImage()} src='assets/interface/sliderRight.svg'/>
                    </div>
                </div>
                <div className={'bullets'}>
                    {[...Array(this.state.number)].map((bullet, index) => {
                        return <div key={index} data-index={index} className='bullet'/>
                    })}
                </div>
                <div className='images'>
                    {this.props.children}
                </div>
                <div className='placeholder'>
                    {React.Children.toArray(this.props.children)[0]}
                </div>
            </div>
        );
	}
}
