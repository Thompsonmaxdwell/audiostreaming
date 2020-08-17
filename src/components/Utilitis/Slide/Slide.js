import React, { Component } from 'react';
import Showcase from '../showcase/showcase';
import img1 from '../../../assets/img/12.jpg';
import img2 from '../../../assets/img/pexels-photo-761963.jpeg';
import img3 from '../../../assets/img/premium-account.original.jpg';
import Aux from '../../../hoc/aux/aux';
import classes from './Slide.module.scss';

class Slide extends Component {
	state = {
		firstSlide: React.createRef(),
		lastSlide: React.createRef(),
		slideContaner: React.createRef(),
		slideCounter: 1,
		slideWidth: 0
	};

	nextSlide = (e) => {
		let slideContainer = this.state.slideContaner.current;
		if (this.state.slideCounter >=  slideContainer.children.length - 1) return;
		let slideCounter = this.state.slideCounter;
		slideCounter = slideCounter + 1;
		this.setState({ slideCounter });

		slideContainer.style.transform = `translateX(-${this.state.slideWidth * slideCounter}px `;
		slideContainer.style.transition = `transform 250ms ease-in-out`;
	};

	prevSlide = (e) => {
		if (this.state.slideCounter <= 0) return;
		let slideCounter = this.state.slideCounter;
		slideCounter = slideCounter - 1;
		this.setState({ slideCounter });

		let slideContainer = this.state.slideContaner.current;
		slideContainer.style.transform = `translateX(-${this.state.slideWidth * slideCounter}px `;
		slideContainer.style.transition = `transform 250ms ease-in-out`;
	};

	componentDidMount() {
		let {slideCounter } = this.state
		let slideWidth = this.state.firstSlide.current.getBoundingClientRect().width;
		this.setState({ slideWidth: Math.floor(slideWidth) });

		let slideContainer = this.state.slideContaner.current;
		slideContainer.style.transform = `translateX(-${slideWidth + slideCounter}px `;

		setInterval(this.nextSlide,4400)
	}

	transitionEnd = () => {
		let {slideCounter, slideWidth  } = this.state
		let slideContainer = this.state.slideContaner.current;
		let slideItem = slideContainer.children[slideCounter];

		if (slideItem.id === 'firstSlide') {
			slideContainer.style.transition = 'none';
			this.setState({ slideCounter: slideContainer.children.length - 1 });
			slideContainer.style.transform = `translateX(-${slideWidth + slideCounter}px `;
		}

		if (slideItem.id === 'lastSlide') {
			slideContainer.style.transition = 'none';
			this.setState({ slideCounter: slideContainer.children.length - slideCounter });
			slideContainer.style.transform = `translateX(-${slideWidth + slideCounter}px `;
		}
	};

	render() {
		
		return (
			<Aux>
				<div>
					<div
						className={classes.Slide_container}
						ref={this.state.slideContaner}
						onTransitionEnd={(e) => this.transitionEnd(e)}
					>
						<div className={classes.Slide_item} ref={this.state.firstSlide} id="firstSlide">
							<Showcase img={img1} />
						</div>
						<div className={classes.Slide_item}>
							<Showcase img={img1} />
						</div>
						<div className={classes.Slide_item}>
							<Showcase img={img2} />
						</div>
						<div className={classes.Slide_item}>
							<Showcase img={img3} />
						</div>
						<div className={classes.Slide_item} ref={this.state.lastSlide} id="lastSlide">
							<Showcase img={img3} />
						</div>
					</div>
				</div>
			</Aux>
		);
	}
}

export default Slide;
