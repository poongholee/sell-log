import React, { Component } from 'react';
import './Footer.css';

class MainFooterBottom extends Component {
    render() {
        return (
            <div className="fourConts">
                <div className="conts">
                    <ol>
                        <li class="isms">
                            정보보호 관리체계 ISMS 인증획득
                            <span class="bar">인증범위:온라인쇼핑몰운영(올리브영)</span>
                            <span class="bar">유효기간:2017.12.27 - 2020.12.26</span>
                        </li>
                        <li class="ncsi">
                            2017 국가고객만족도 NCSI 헬스앤뷰티전문점 부분 1위
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default MainFooterBottom;