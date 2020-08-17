import React, { Component } from 'react';
import SignUp from '../../../../container/Auth/SignUp/SignUp';
import Navbar from '../../../Navbar/Navbar';
import classes from './home.module.scss';
import SignIn from '../../../../container/Auth/SignIn/SignIn';
import Slide from '../../Slide/Slide';
import Modal from '../../Modal/Modal';
import Error from '../../Error/Error';
import Aux from '../../../../hoc/aux/aux';

// SignUpFormSlideOut
let signUpClasses = [];
let signInClasses = [];
// SignInFormSlideIn
class Home extends Component {
	state = {
		validateFormSlide: false,
		alreadyHaveAccbtn: 'I have account already Sign In.',
		show: false,
		errroParams: {},
		erroMessg: [],
		myError: true
	};
	slideForm = (e) => {
		let { validateFormSlide, alreadyHaveAccbtn } = this.state;
		validateFormSlide = !validateFormSlide;

		this.setState({ validateFormSlide });

		if (validateFormSlide) {
			signUpClasses.push(classes.SignUpFormSlideOut);
			signInClasses.push(classes.SignInFormSlideIn);

			alreadyHaveAccbtn = "I  don't have account  Sign Up.";
			this.setState({ alreadyHaveAccbtn });
			// this.state.alreadyHaveAccbtn
		} else {
			signUpClasses.pop();
			signInClasses.pop();
			alreadyHaveAccbtn = 'I have account already Sign In.';
			this.setState({ alreadyHaveAccbtn });
		}
	};

	UNSAFE_componentWillMount() {
		signUpClasses.push(classes.SignUpForm);
		signInClasses.push(classes.SignInForm);
	}
	componentDidUpdate() {
		let obj = this.state.errroParams;
		const query = new URLSearchParams(this.props.location.search);

		for (let param of query.entries()) {

			obj[param[0]] = param[1];
			// 
		}
		if (Object.getOwnPropertyNames(obj).length > 0 && !this.state.show && this.state.myError) {
			this.setState({ show: true, myError: false, erroMessg: [ obj ] });

			return false;
		}


	}

	render() {
		return (
			<Aux>
				{!this.state.show ? (
					<Modal>
						<Aux>
							<Error  error={true} >
								{this.state.erroMessg ? (
									this.state.erroMessg.map((error) => (
										<Aux key={error}>
											<p>{error.emailEmpty} and your  {error.passwordEmpty} field can't be empty.</p>
										</Aux>
									))
								) : (
									console.log('hello')
								)}
							</Error>
						</Aux>
				 </Modal>
				) : null}
				
				<Navbar />
				<Slide />
				<div className={classes.FormsWrapper}>
					<div className={classes.FormWrapperFlex}>
						<div className={signUpClasses.join(' ')}>
							<h1>Sign Up</h1>
							<SignUp />
						</div>
						<div className={signInClasses.join(' ')}>
							<h1>Sign In</h1>
							<SignIn />
						</div>
					</div>

					<p onClick={(e) => this.slideForm(e)} className={classes.AlreadyHaveAccbtn}>
						{this.state.alreadyHaveAccbtn}
					</p>
				</div>
			</Aux>
		);
	}
}

export default Home