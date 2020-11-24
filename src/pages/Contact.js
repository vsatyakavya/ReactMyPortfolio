import React from "react"
import Row from "../components/Row"
function Contact(props) {
    return (
        <div class="container">
            <Row>
                <div class="col-md-9">
                    <div class="col-md-12">
                        <h1>Contact</h1>
                        <hr />
                    </div>
                    <div class="col-md-6">
                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Name</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="FullName"
                                    required />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    placeholder="name@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    required />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>
            </Row>
        </div>
    )




}

export default Contact;

