import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleProjectPreviewModal } from '../../redux/actions';
import _ from 'lodash';
import {
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter, 
	Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import classnames from 'classnames';
import projects from '../../data/projects';

const ProjectPreview = (props) => {

  const { isOpen, projectKey, toggleProjectPreviewModal } = props;

	const [ project, setProject ] = useState(null);
  const [ items, setItems ] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width: "100%"}}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  useEffect(() => {
    if (projectKey !== null) {
      const prj = _.find(projects, p => p.projectKey === projectKey)
      setProject(prj);
      setItems(prj.previewItems);
    }
  }, [projectKey]);

  return (
  	<Modal isOpen={isOpen} toggle={toggleProjectPreviewModal} size="xl">
      <ModalHeader toggle={toggleProjectPreviewModal} style={{ background: "#f8f8f8 url('../../assets/images/patterns/pattern.jpg')" }}>
        { project && project.title }
      </ModalHeader>
      <ModalBody style={{padding: "0"}}>

        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

        {/*<div className='p-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>*/}
      </ModalBody>
      <ModalFooter>
        { project && 
          !_.isNull(project.sourcecodeLink) &&  
          <Button href={project.sourcecodeLink} color='primary'><i className='fa fa-github mr-2'/>Source Code</Button>
        }{' '}

        { project && 
          !_.isNull(project.videoLink) &&
          <Button href={project && project.videoLink} color='danger'><i className='fa fa-youtube mr-2'/>See Demo</Button>
        }{' '}

        <Button color="secondary" onClick={toggleProjectPreviewModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ project }) => {
  const { isOpen, projectKey } = project;
  return { isOpen, projectKey };
};

const mapActionsToProps = dispatch => ({
  toggleProjectPreviewModal: (projectKey) => dispatch(toggleProjectPreviewModal(projectKey)),
});

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(ProjectPreview);