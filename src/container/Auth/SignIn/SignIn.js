import React, { Component } from 'react';
import Aux from '../../../hoc/aux/aux';
import Input from '../../../components/Utilitis/input/input';
import classes from './SignIn.module.scss';
import Button from '../../../components/Utilitis/buttn/button';


class SignIn extends Component {
	state = {
		signInForm: {
			email: {
				elementType: 'email',
				inputConfig: {
					placeholder: 'Enter Your E-mail ',
					type: 'Email'
				},
				value: '',
				Email: '',
				vaildate: false,
			},
			password: {
				elementType: 'password',
				inputConfig: {
					placeholder: 'Enter Your Password ',
					type: 'Password'
				},
				value: '',
				Password: '',
				vaildate: false,
			}
		}
	};


    	onChangeHandler = (e, inputIndentifier) => {
		let signInForm = { ...this.state.signInForm };
		let signInFormValue = { ...signInForm[inputIndentifier] };

		// Validition Email
		if (signInFormValue.inputConfig.type === 'Email') {
				signInFormValue.Email = e.target.value;
				
			
		}

		// Password Validition
		if (signInFormValue.inputConfig.type === 'Password') {
				signInFormValue.Password = e.target.value;
				
			
		}
	

		signInFormValue.value = e.target.value;
		signInForm[inputIndentifier] = signInFormValue;

		// updateform = updateFormValue
        this.setState({ signInForm });

	};


	render() {

		let inputTypeElement = [];
		for (let keys in this.state.signInForm) {
			inputTypeElement.push({
				config: this.state.signInForm[keys],
				key: keys
			});
		}


		return (
			<Aux>
				<div className={classes.SigInForm}>
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
								/>
							);
                        })}
                        
                      
                        <Button block={classes.Block}>Sign In</Button>
					</form>
				</div>
			</Aux>
		);
	}
}

export default SignIn;
