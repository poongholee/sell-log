import React, { Component } from 'react';
import './Footer.css';

class MainFooterBottom extends Component {
    render() {
        return (
            <div className="threeConts">
                <div className="conts">
                    <p className="copyright">
                    Copyright ⓒ 2017 CJ OliveNetworks. All Rights Reserved.
                    </p>
                    <div className="sns">
                        <h2>SELL LOG SNS</h2>
                        <a class="facebook" href="#" title="페이지 이동" target="_blank">
                            <img src="http://image.oliveyoung.co.kr/pc-static-root/image/footer/@facebook.gif" alt="페이스북"></img>
                        </a>
                        <a class="twitter" href="#" title="페이지 이동" target="_blank">
                            <img src="http://image.oliveyoung.co.kr/pc-static-root/image/footer/@twitter.gif" alt="트위터"></img>
                        </a>
                        <a class="kakao" href="#" title="페이지 이동" target="_blank">
                            <img src="http://image.oliveyoung.co.kr/pc-static-root/image/footer/@kakaotalk.gif" alt="카카오"></img>
                        </a>
                        <a class="cafe" href="#" title="페이지 이동" target="_blank">
                            <img src="http://image.oliveyoung.co.kr/pc-static-root/image/footer/@oliveyo.gif" alt="올리브영"></img>
                        </a>
                        <a class="insta" href="#" title="페이지 이동" target="_blank">
                            <img src="http://image.oliveyoung.co.kr/pc-static-root/image/footer/@instagram.gif" alt="인스타그램"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainFooterBottom;