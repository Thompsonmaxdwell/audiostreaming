import React, { Component } from 'react';
import Input from '../../../components/Utilitis/input/input';
import classes from './SignUp.module.scss';
import Aux from '../../../hoc/aux/aux';
import Button from '../../../components/Utilitis/buttn/button';
import firebase from '../../../components/firebase/firebase';
import Spinner from '../../../components/Utilitis/Spinner/Spinner';
import { withRouter } from 'react-router';

class SignUp extends Component {
	state = {
		spinner: false,
		error: !false,
		errorMess: '',
		signUpForm: {
			email: {
				elementType: 'email',
				inputConfig: {
					placeholder: 'Enter Your E-mail ',
					type: 'Email'
				},
				value: '',
				emailValidition: /^[a-z]+[@](g|e)mail.com$/i,
				Email: '',
				vaildate: false,
				errorMessgs: ''
			},
			password: {
				elementType: 'password',
				inputConfig: {
					placeholder: 'Enter Your Password ',
					type: 'Password'
				},
				value: '',
				passwordValidition: /^[\w]{8}[\w]+[(@|.|_|-|%|^|$|#|`|~)]$/i,
				Password: '',
				vaildate: false,
				errorMessgs: ''
			}
		}
	};
	// \da-z|
	onChangeHandler = (e, inputIndentifier) => {
		let signUpForm = { ...this.state.signUpForm };
		let loginFormValue = { ...signUpForm[inputIndentifier] };

		// Validition Email
		if (loginFormValue.inputConfig.type === 'Email') {
			if (loginFormValue.emailValidition.test(e.target.value)) {
				loginFormValue.Email = e.target.value;
				loginFormValue.vaildate = false;
				loginFormValue.errorMessgs = '';
			} else {
				loginFormValue.vaildate = true;
				loginFormValue.errorMessgs = 'Please include an "@" in the E-mail addresss.  Missing "@" ';
			}
		}

		// Password Validition
		if (loginFormValue.inputConfig.type === 'Password') {
			if (loginFormValue.passwordValidition.test(e.target.value)) {
				loginFormValue.Password = e.target.value;
				loginFormValue.vaildate = false;
				loginFormValue.passwordErrorMessg = '';
			} else {
				loginFormValue.vaildate = true;
				loginFormValue.passwordErrorMessg =
					'Your password most contains aphabets and numbers   and one special  character at the end, minimum of 8 charachter and above';
			}
		}

		loginFormValue.value = e.target.value;
		signUpForm[inputIndentifier] = loginFormValue;

		// updateform = updateFormValue
		this.setState({ signUpForm });
	};

	submitHandler = (e) => {
		e.preventDefault();
		let email = this.state.signUpForm.email.Email;
		let password = this.state.signUpForm.password.Password;
		this.setState({ spinner: true });

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((data) => {
				let signUpForm = { ...this.state.signUpForm };

				let emailValue = { ...signUpForm['email'] };
				let passwordValue = { ...signUpForm['password'] };

				emailValue.value = '';
				passwordValue.value = '';

				signUpForm['email'] = emailValue;
				signUpForm['password'] = passwordValue;

				this.setState({ signUpForm, spinner: false });
			})
			.catch((error) => {
				let queryParams = {};
				let queryString = [];
				if (!this.state.signUpForm.email.value) {
					queryParams.emailEmpty= "Your E-mail  " ;
				}

				if (!this.state.signUpForm.password.value) {
					queryParams.passwordEmpty = "Your password ";
				}

				// queryParams.error = error.message;
				
				for (let i in queryParams) {
					queryString.push(encodeURIComponent(i) + '=' + encodeURIComponent(queryParams[i]));
				}
				
				

				this.props.history.push({
					pathname: '/homepage',
					search: '?'+ queryString.join('&')
				});

				this.setState({ errorMess: error.message, error: true });
			});
	};

	render() {
		let inputTypeElement = [];
		for (let keys in this.state.signUpForm) {
			inputTypeElement.push({
				config: this.state.signUpForm[keys],
				key: keys
			});
		}

		let showSpinner = '';
		let spinnerChecker = this.state.spinner ? (showSpinner = <Spinner />) : null;

		return (
			<Aux>
				<div className={classes.SigupUpForm}>
					<form>
						{inputTypeElement.map((formElement) => {
							return (
								<Input
									key={formElement.key}
									elementType={formElement.config.elementType}
									change={(e) => this.onChangeHandler(e, formElement.key)}
									elemenConfig={formElement.config.inputConfig}
									{...formElement.config}
									value={formElement.config.value}
									label={formElement.config.inputConfig.type}
									emailErrorMessg={formElement.config.errorMessgs}
									passwordErrorMessg={formElement.config.passwordErrorMessg}
								/>
							);
						})}
						{showSpinner}
						<Button clicked={(e) => this.submitHandler(e)} block={classes.Block}>
							Sign up
						</Button>
					</form>
				</div>
			</Aux>
		);
	}
}

export default withRouter(SignUp);
