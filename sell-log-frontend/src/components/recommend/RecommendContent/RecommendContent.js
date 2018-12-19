import React, { Component } from 'react';
import './RecommendContent.scss';
import { Link } from 'react-router-dom';

class RecommendContent extends Component {
    render() {     
        return (
            <div className="recommendContent">
                <div className="widget-content">
                    <div className="theme-info">
                        <div className="theme-title">
                            <div className="box">핫딜</div>
                            <Link to="" className="title">{this.props.theme}</Link>
                            <Link to="" className="more">더보기 ></Link>
                        </div>
                        <div className="description">
                            <div className="text">{this.props.description}</div>
                        </div>
                        <div className="theme-content">
                            <div className="column">
                                <div className="big" src={this.props.bigImage}>
                                    <div className="layer">
                                        <Link to="" className="item-title">{this.props.bigTitle}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="mini">
                                    <div className="thumbnail-wrapper">
                                        <div className="thumbnail" src={this.props.miniImage1}></div>
                                    </div>
                                    <div className="layer">
                                        <Link to="" className="item-title">{this.props.miniTitle1}</Link>
                                    </div>
                                </div>
                                <div className="mini">
                                    <div className="thumbnail-wrapper">
                                        <div className="thumbnail" src={this.props.miniImage2}></div>
                                    </div>
                                    <div className="layer">
                                        <Link to="" className="item-title">{this.props.miniTitle2}</Link>
                                    </div>
                                </div>
                                <div className="mini">
                                    <div className="thumbnail-wrapper">
                                        <div className="thumbnail" src={this.props.miniImage3}></div>
                                    </div>
                                    <div className="layer">
                                        <Link to="" className="item-title">{this.props.miniTitle3}</Link>
                                    </div>
                                </div>
                                <div className="mini">
                                    <div className="thumbnail-wrapper">
                                        <div className="thumbnail" src={this.props.miniImage4}></div>
                                    </div>
                                    <div className="layer">
                                        <Link to="" className="item-title">{this.props.miniTitle4}</Link>
                                    </div>
                                </div>
                                <div className="mini">
                                    <div className="thumbnail-wrapper">
                                        <div className="thumbnail" src={this.props.miniImage5}></div>
                                    </div>
                                    <div className="layer">
                                        <Link to="" className="item-title">{this.props.miniTitle5}</Link>
                                    </div>
                                </div>
                                <div className="mini">
                                    <div className="thumbnail-wrapper">
                                        <div className="thumbnail" src={this.props.miniImage6}></div>
                                    </div>
                                    <div className="layer">
                                        <Link to="" className="item-title">{this.props.miniTitle6}</Link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        )
    }
}

export default RecommendContent;