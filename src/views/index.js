import React, { Fragment } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import HomeBanner from '../components/home-banner';
import SectionHeading from '../components/section-heading';
import HireMe from '../components/hire-me';
import BlogEntry from '../components/blog-entry';
import { Address, ContactNumber, Email, Website } from '../components/contact';
import ServiceCard from '../components/service-card';
import Counter from '../components/counter';
import About from '../components/about';
import services from '../data/services';
import articles from '../data/articles';
import _ from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { Button } from '@mui/material';

const Main = (props) => {
  return (
    <Fragment>
      <Header />
      <HomeBanner />
      
      <section className='my-5'>
        <Container>
          {/*<SectionHeading title="Our Blog" className='mb-5' />*/}
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

      <About />


      {/* Services */}
      {/*<section className='mt-5 pt-3'>
        <Container>
          <SectionHeading title="Services" subtitle="Here's all the stuff I do." className='mb-4' />
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
      </section>*/}


      {/* Counter */}
      {/*<section className='mt-5 pt-3'>
        <Container>
          <Row className='my-5'>
            <Col>
              <Counter number='100' title='Awards' />
            </Col>
            <Col>
              <Counter number='1,200' title='Complete Projects' />
            </Col>
            <Col>
              <Counter number='1,200' title='Happy Customers' />
            </Col>
            <Col>
              <Counter number='500' title='Cups of coffee' />
            </Col>
          </Row>
        </Container>
      </section> */}


      <HireMe />

      {/* Contact Me */}
      {/*<section className='my-5'>
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
      */}

      <Footer />
    </Fragment>
  );
}

export default Main;