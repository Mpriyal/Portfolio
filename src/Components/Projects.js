import React,{Component} from "react";
import dummyText from "../DummyText";

// Use Material UI complex interaction card
export default class Projects extends Component {
    render() {
        return (
            <div className={"projects" + (this.props.dark ? " section-dark my-5 mx-5" : "my-5 mx-5")}>
                <br/>
                <div className="main_title my-5" align="center">
                    <h2 align="center">{this.props.title}</h2>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                    </div>
                    <div className="card">
                        <img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                    additional content.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                    </div>
                    <div className="card">
                        <img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This card has even longer content than the first to
                                    show that equal height action.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}