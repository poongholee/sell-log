import React, { Component } from 'react';
import ListSns from './ListSns';
import './MainFooterBottom.scss';

class MainFooterBottom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listSns : [
                {
                    src: "http://image.oliveyoung.co.kr/pc-static-root/image/footer/@facebook.gif",
                    alt: "페이스북"
                },
                {
                    src: "http://image.oliveyoung.co.kr/pc-static-root/image/footer/@twitter.gif",
                    alt: "트위터"
                },
                {
                    src: "http://image.oliveyoung.co.kr/pc-static-root/image/footer/@kakaotalk.gif",
                    alt: "카카오"
                },
                {
                    src: "http://image.oliveyoung.co.kr/pc-static-root/image/footer/@oliveyo.gif",
                    alt: "올리브영"
                },
                {
                    src: "http://image.oliveyoung.co.kr/pc-static-root/image/footer/@instagram.gif",
                    alt: "인스타그램"
                }
            ]
        }
    }

    render() {

        // map으로 컴포넌트 매핑
        const mapToComponent = (listSns) => {
            return listSns.map((item, index) => {
                return (<ListSns src={item.src} alt={item.alt} key={index} />)
            });
        }

        return (
            <div className="threeConts">
                <div className="conts">
                    <p className="copyright">
                    Copyright ⓒ 2017 CJ OliveNetworks. All Rights Reserved.
                    </p>
                    <div className="sns">
                        <h2>SELL LOG SNS</h2>
                        {mapToComponent(this.state.listSns)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainFooterBottom;