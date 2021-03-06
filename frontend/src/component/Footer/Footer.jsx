import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Footer = (props) => {
	return (
		<Typography variant='body2' color='textSecondary' align='center' {...props}>
			{'Copyright © '}
			<Link color='inherit' to='/'>
				pro shop
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default Footer;
