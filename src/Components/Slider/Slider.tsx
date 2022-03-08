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

    state: States = {
        current: null,
        bullets: null,
        images: null,
        isInitialized: false,
        isTransition: false,
        number: null
    }

    componentDidUpdate(prevProps: any) {
        if (!this.state.isInitialized && this.props.children && (this.props.children !== prevProps.children)) {
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
    }

    initDrag() {
        // GET DRAG ELEMENT
        const drag = document.querySelector('.slider .drag') as unknown as HTMLElement;
        // DEFINE POSITION
        let origin: number;
        let destination: number;
        let distance: number;
        // DEFINE ACTIVE
        let isActive = false;
        // DEFINE START
        const start = (position: number) => {
            // RETURN IN CASE OF TRANSITION
            if (this.state.isTransition) {
                return;
            }
            // SET ACTIVE
            isActive = true;
            // SET POSITION
            origin = position;
        }
        // DEFINE MOVE
        const move = (position: number) => {
            // RETURN IN CASE OF NOT ACTIVE OR TRANSITION
            if (!isActive || this.state.isTransition) {
                return;
            }
            // SET POSITION
            destination = position;
            distance = destination - origin;

            console.log(distance);

            // GET STATUS
            const { current, next, previous } = this.getStatus();
            // CHANGE IMAGES
            this.state.images[previous].style.left = 'calc(-100% + ' + distance + 'px)';
            this.state.images[current].style.left = distance + 'px';
            this.state.images[next].style.left = 'calc(100% + ' + distance + 'px)';
        }
        // DEFINE END
        const end = (position: number) => {
            // RETURN IN CASE OF NOT ACTIVE OR TRANSITION
            if (!isActive || this.state.isTransition) {
                return;
            }
            // SET ACTIVE
            isActive = false;
            //
            if (distance >= 50)
                this.previousImage();
            else if (distance <= -50)
                this.nextImage();
            else
                this.currentImage();
        }

        // IF DESKTOP
        if (this.props.currentDevice === 'Desktop') {
            // MOUSE DOWN
            drag.addEventListener('mousedown', event => start(event.clientX));
            // MOUSE MOVE
            drag.addEventListener('mousemove', event => move(event.clientX));
            // MOUSE UP
            drag.addEventListener('mouseup', event => end(event.clientX));
            // MOUSE OUT
            drag.addEventListener('mouseout', event => end(event.clientX));
        }
        // IF MOBILE
        if (this.props.currentDevice === 'Mobile') {
            // TOUCH START
            drag.addEventListener('touchstart', event => start(event.touches[0].clientX));
            // TOUCH MOVE
            drag.addEventListener('touchmove', event => move(event.touches[0].clientX));
            // TOUCH END
            drag.addEventListener('touchend', event => end(event.touches[0].clientX));
        }
    }

    getStatus() {
        // DEFINE STATUS
        let current, next, previous;
        // CURRENT STATUS
        current = this.state.current;
        // PREVIOUS STATUS
        if (current - 1 < 0)
            previous = current - 1 + this.state.number;
        else
            previous = current - 1;
        // NEXT STATUS
        if (current + 1 >= this.state.number)
            next = current + 1 - this.state.number;
        else
            next = current + 1;
        // RETURN STATUS
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
        // GET STATUS
        const { current, next, previous } = this.getStatus();
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
        // GET STATUS
        let { current, next, previous } = this.getStatus();
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
        // GET STATUS
        let { current, next, previous } = this.getStatus();
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
        // GET STATUS
        let { current, next, previous } = this.getStatus();
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
