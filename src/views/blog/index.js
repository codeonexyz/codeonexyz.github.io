import React, { Fragment } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Address, ContactNumber, Email, Website } from '../../components/contact';
import BlogEntry from '../../components/blog-entry';
import SectionHeading from '../../components/section-heading';
import HireMe from '../../components/hire-me';
import _ from 'lodash';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import articles from '../../data/articles';

const Blog = (props) => {
	return (
		<Fragment>
			<Header />

			{/* My Blog */}
      <section className='my-4'>
        <Container>
          <SectionHeading title="My Blog" className='mb-4' />
          <Row>
            { !_.isEmpty(articles) && _.map(articles, (article, idx) => {
              return (
                <Col md='4' key={idx}>
                  <BlogEntry article={article} />
                </Col>
              );
            }) }
          </Row>
        </Container>
      </section>

      <HireMe />
			<Footer />
		</Fragment>
	);
};

export default Blog;