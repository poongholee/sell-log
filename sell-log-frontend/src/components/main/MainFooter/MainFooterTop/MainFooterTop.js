import React, { Component } from 'react';
import ListMenu from './ListMenu';
import './MainFooterTop.scss';

class MainFooterTop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listMenu: [
                "회사소개",
                "채용안내",
                "가맹점 개설문의",
                "제휴문의",
                "사이버 감사실"
            ]
        }
    }

    render() {

        // map으로 컴포넌트 매핑
        const mapToComponent = (listMenu) => {
            return listMenu.map((item, index) => {
                return (<ListMenu item={item} key={index} />);
            })
        }

        return (
            <div className="oneConts">
                <div className="conts">
                    <ul className="list-menu">
                        {mapToComponent(this.state.listMenu)}
                    </ul>
                    <div className="sel_family_group">
                        <select
                            value="셀로그 계열사 바로가기"
                        >
                            <option value="셀로그 주식회사">셀로그 계열사 바로가기</option>
                            <option value="셀로그 주식회사">셀로그 주식회사</option>
                            <option value="셀로그 제일제당 (식품)">셀로그 제일제당 (식품)</option>
                            <option value="셀로그 프레시웨이">셀로그 프레시웨이</option>
                            <option value="셀로그 푸드빌">셀로그 푸드빌</option>
                            <option value="셀로그 엠디원">셀로그 엠디원</option>
                            <option value="셀로그 제일제당 (바이오)">셀로그 제일제당 (바이오)</option>
                            <option value="셀로그 ENM(오쇼핑)">셀로그(오쇼핑)</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainFooterTop;