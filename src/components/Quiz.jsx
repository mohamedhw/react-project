import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Quiz = () => {

  // State to track the active page, defaulting to 1
  const [activePage, setActivePage] = useState(1);
  
  // Array to store selected answers
  const [selectedAnswers, setSelectedAnswers] = useState(Array(15).fill(null));
  const [showQuiz, setShowQuiz] = useState(true);

  // Function to handle click on a page button
  const handlePageClick = (pageNum) => {
    setActivePage(pageNum);
    // Add logic here to handle page change
  };

  // Function to handle click on an answer button
  const handleAnswerClick = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[activePage - 1] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  // Function to handle click on the "Next" button
  const handleNextClick = () => {
    if (activePage === 15) {
      // Add logic here to handle last page actions
      return; // Do nothing when already on the last page
    }
    setActivePage(prevPage => prevPage + 1);
  };

  // Function to handle click on the "Finish" button
  const handleFinishClick = () => {
    // Print out all the selected answers
    console.log(selectedAnswers);
    // You can perform additional actions here with the selected answers
    setShowQuiz(false); // Close the component
  };

  if (!showQuiz) {
    return null; // Return null when the component should be hidden
  }

  return (
    <Container className='quiz-container' style={{padding: "0", margin: "0"}} fluid>
        <Row style={{padding: "0", margin: "0"}}>
          {/* xs={12} sm={12} md={10} lg={8} xl={8} */}
            <Col style={{padding: "0", margin: "0"}}>
                <div className='questions-container'>
                    <div className='allQuestions-container'>
                        <Col >
                        <div className='QA-container'>
                            <div className='photoOrAudio-container'>
                                <p>
                                    Photo/Audio
                                </p>
                            </div>
                            <div className='page-container'>
                                <div className='question-container'>
                                    <p className='question'>
                                    ......... will get me out of here here?
                                    </p>
                                </div>
                                {/* <div className='ahaa'> */}
                                <div className='answers-container' style={{padding: "0", margin: "0"}}>
                                    <Row className='all-answers' style={{padding: "0", margin: "0"}}>
                                        <Col md={12}>
                                        <div className='answer-container'>
                                            <button className={`answer ${selectedAnswers[activePage - 1] === "A" ? 'selected' : ''}`} onClick={() => handleAnswerClick("A")}>
                                                A. Who
                                            </button>
                                        </div>
                                        </Col>
                                        <Col md={12}>
                                        <div className='answer-container'>
                                            <button className={`answer ${selectedAnswers[activePage - 1] === "B" ? 'selected' : ''}`} onClick={() => handleAnswerClick("B")}>
                                                B. What
                                            </button>
                                        </div>
                                        </Col>
                                    </Row>
                                    <Row className='all-answers' style={{padding: "0", margin: "0"}}>
                                        <Col md={12}>
                                        <div className='answer-container'>
                                            <button className={`answer ${selectedAnswers[activePage - 1] === "C" ? 'selected' : ''}`} onClick={() => handleAnswerClick("C")}>
                                                C. Where
                                            </button>
                                        </div>
                                        </Col>
                                        <Col md={12}>
                                        <div className='answer-container'>
                                            <button className={`answer ${selectedAnswers[activePage - 1] === "D" ? 'selected' : ''}`} onClick={() => handleAnswerClick("D")}>
                                                D. When
                                            </button>
                                        </div>
                                        </Col>
                                    </Row>
                                {/* </div> */}
                                </div>
                            </div>
                        </div>
                        </Col>
                        
                        <div className='qPages-container'>
                            <div className='question-pages'>
                            {[...Array(15)].map((_, index) => (
                                <div className='question-page' key={index}>
                                    <button className={`page-num ${activePage === index + 1 ? 'active' : ''}`} onClick={() => handlePageClick(index + 1)}>
                                        {index + 1}
                                    </button>
                                </div>
                            ))}
                            </div>
                        </div>
                        
                    </div>
                    <div className='nextBtn-container'>
                        <Button className='nextBtn' onClick={activePage === 15 ? handleFinishClick : handleNextClick}>
                            {activePage === 15 ? "Finish" : "Next"}
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default Quiz;