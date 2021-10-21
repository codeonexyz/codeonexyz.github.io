import React, { Fragment } from 'react';
import Header from '../../components/header';
import ProjectCard from '../../components/project-card';
import SectionHeading from '../../components/section-heading';
import HireMe from '../../components/hire-me';
import Footer from '../../components/footer';
import ProjectPreview from '../../components/project-preview';
import projects from '../../data/projects';
import _ from 'lodash';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Projects = (props) => {
	return (
		<Fragment>
			<ProjectPreview />

			<Header />

			{/* Projects */}
      <section className='my-5 pt-3'>
        <Container>
          <SectionHeading title="Projects" subtitle="Here's some stuff I made recently." className='mb-5' />
          {
            projects && _.chunk(projects, 3).map((row, rowIdx) => {
              return (
                <Row className="mt-4" key={rowIdx}>
                  { 
                    row.map((col, colIdx) => {
                      return (
                        <Col md="4" key={colIdx}>
                          <ProjectCard project={col} />
                        </Col>
                      );
                    })
                  }
                </Row>
              );
            })
          }
        </Container>
      </section>


			<HireMe />
			<Footer />
		</Fragment>
	);
};

export default Projects;