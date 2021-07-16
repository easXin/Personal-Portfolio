import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap'
function Contact() {
    return (
        <div className="contact">
            <div className="contact__title">
                <h2>Contact</h2>
                <hr />
                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                    ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                    ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                </p>
            </div>
            <div id="contact__detail">
                <Form>
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
                </Form>
                <Button type="submit">Send Message</Button>
            </div>
        </div>
    )
}

export default Contact
