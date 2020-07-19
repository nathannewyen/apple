import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import iphoneX from '../static/images/iphoneX.jpg';

const StyleHomeContainer = styled.div`
	width: 500px;
	height: 500px;
`;

const Home = (props) => {
	return (
		<StyleHomeContainer style={{ backgroundImage: `url(${iphoneX})` }}>
			<h1>Home</h1>
		</StyleHomeContainer>
	);
};

export default Home;
