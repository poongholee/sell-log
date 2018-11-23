import React, { Component } from 'react';
import './MainFooterTop.scss';

class MainFooterTop extends Component {
    render() {
        return (
            <div className="oneConts">
                <div className="conts">
                    <ul className="list-menu">
                        <li>
                            <a href="#">회사소개</a>
                        </li>
                        <li>
                            <a href="#">채용안내</a>
                        </li>
                        <li>
                            <a href="#">가맹점 개설문의</a>
                        </li>
                        <li>
                            <a href="#">제휴문의</a>
                        </li>
                        <li>
                            <a href="#">사이버 감사실</a>
                        </li>
                        <li>
                            <a href="#">고객센터</a>
                        </li>
                    </ul>
                    <div className="sel_family_group">
                        <select
                            value="CJ그룹 계열사 바로가기"
                        >
                            <option value="CJ주식회사">CJ그룹 계열사 바로가기</option>
                            <option value="CJ주식회사">CJ주식회사</option>
                            <option value="CJ제일제당 (식품)">CJ제일제당 (식품)</option>
                            <option value="CJ프레시웨이">CJ프레시웨이</option>
                            <option value="CJ푸드빌">CJ푸드빌</option>
                            <option value="CJ엠디원">CJ엠디원</option>
                            <option value="CJ제일제당 (바이오)">CJ제일제당 (바이오)</option>
                            <option value="CJENM(오쇼핑)">CJENM(오쇼핑)</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainFooterTop;