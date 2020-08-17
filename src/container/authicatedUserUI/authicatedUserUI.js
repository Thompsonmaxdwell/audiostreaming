import React, { Component } from 'react';
import classes from './authicatedUserUI.module.scss';
import Aux from '../../hoc/aux/aux';
import music from '../../assets/audio/Duncan_Mighty_Ft_Wizkid_Fake_Love_9jaflaver.com_.mp3';

class authicatedUserUI extends Component {
	state = {
		audios: [
			{ name: 'Thomspon', date: new Date().getFullYear(), key: 1 },
			{ name: 'Bubi', date: new Date().getFullYear(), key: 2 },
			{ name: 'Mark', date: new Date().getFullYear(), key: 3 },
			{ name: 'Godstime', date: new Date().getFullYear(), key: 4 }
		]
	};
	render() {
		
		return (
			<div className={classes.User}>
				{this.state.audios.map((aud) => (
					<Aux key={aud.key}>
						<div className={classes.AudioList}>
							<div>
								<p>{aud.name}</p>
							</div>
							<div>
								<audio controls>
									<source src={music} type="audio/mp3" />
								</audio>
								{aud.date}
							</div>
						</div>
					</Aux>
				))}
			</div>
		);
	}
}

export default authicatedUserUI;
