import React, { Fragment } from 'react';
import Header from '../../components/header';
import ServiceCard from '../../components/service-card';
import SectionHeading from '../../components/section-heading';
import HireMe from '../../components/hire-me';
import Footer from '../../components/footer';
import services from '../../data/services';
import _ from 'lodash';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Services = (props) => {
	return (
		<Fragment>
			<Header />

			{/* Services */}
      <section className='my-5 pt-3'>
        <Container>
          <SectionHeading title="Services" subtitle="Here's all the stuff I do." className='mb-5' />
          { !_.isEmpty(services) && _.chunk(services, 3).map((row, idx) => {
            return <Row key={idx}>
              { row.map((col, idx) => {
                return <Col md='4' className='mb-4' key={idx}>
                  <ServiceCard icon={col.icon} title={col.title} description={col.description} />
                </Col>
              }) }
            </Row>
          }) }
        </Container>
      </section>

      <HireMe />
			<Footer />
		</Fragment>
	);
};

export default Services;