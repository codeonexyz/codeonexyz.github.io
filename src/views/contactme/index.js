import React, { Fragment } from "react";
import Header from '../../components/header';
import SectionHeading from '../../components/section-heading';
import HireMe from '../../components/hire-me';
import Footer from '../../components/footer';
import { Address, ContactNumber, Email, Website } from '../../components/contact';
import { Container, Row, Col } from 'reactstrap';

const Contactme = (props) => {
	return (
		<Fragment>
			<Header />

			{/* Contact Me */}
      <section className='my-5'>
        <Container>
          <SectionHeading title="Contact Me" subtitle="Put your confidence in me. Let's start a new project." className='mb-4' />
          <Row>
            <Col md='3'>
              <Address value='Nador, Morocco 62000' />
            </Col>
            <Col md='3'>
              <ContactNumber value='+21253616347' />
            </Col>
            <Col md='3'>
              <Email value='codeone.xyz@gmail.com' />
            </Col>
            <Col md='3'>
              <Website value='codeone.xyz/me' />
            </Col>
          </Row>
        </Container>
      </section>

      <HireMe />
			<Footer />
		</Fragment>
	);
};

export default Contactme;