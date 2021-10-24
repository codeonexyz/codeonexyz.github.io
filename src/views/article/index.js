import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AboutAuthor from '../../components/about-author';
import Sidebar from '../../components/sidebar';
import MiniBlogEntry from '../../components/mini-blog-entry';
import articles from '../../data/articles';
import _ from 'lodash';

const Article = (props) => {
	const { key } = props.match.params;
	const [ article, setArticle ] = useState(null);

	useEffect(() => {
		const art = _.find(articles, art => art.key === key);
		if (art) {
			setArticle(art);
			console.log(art);
		} else {
			props.history.push('/');
		}
	}, []);

	return (
		<Fragment>
			<Header />

			<Container className="pt-4 mt-4">

				{
					_.isNull(article) 
					? 
					<h3>Loading...</h3>
					:
					<Fragment>
						<Row className='mb-4'>
							<Col md='8' className='p-4 bg-light'>
								{ article.body }
								<div style={{marginTop: "50px"}}>	
									<AboutAuthor author={article.author} />
								</div>
							</Col>
							<Col md='4'>
								<Sidebar>
									{ _.map(articles, art => <MiniBlogEntry article={art} /> ) }
								</Sidebar>
							</Col>
						</Row>
					</Fragment>
				}
				

			</Container>

			<Footer />
		</Fragment>
	);
};

export default Article;