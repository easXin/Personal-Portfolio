import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap'
function Contact() {
    return (
        <div id="contact">
            <div className="contact__title titleFont">
                <div className="contact__hireMe">
                    <h2>Contact</h2>
                    <a href="https://drive.google.com/file/d/1AnTG3uqifJj015RiCC4FJ4x_STIU1ewY/view?usp=sharing" className="hireButton pFont">Hire Me</a>
                </div>

                <hr />
                <p className="pFont">
                </p>
            </div>
            <div id="contact__detail pFont">
                <Form method="POST" action="https://formsubmit.co/eric.xinw1@email.com" enctype="multipart/form-data">
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Message Subject" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea"
                                    rows={3}
                                    placeholder="Drop your message here" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Send Message</Button>
                </Form>

            </div>
        </div>
    )
}

export default Contact
