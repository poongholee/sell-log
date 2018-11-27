import React, { Component } from 'react';
import './LoginCheck.scss';
import { Link } from 'react-router-dom';

class LoginCheck extends Component {
    render() {
        return (
            <div className="checkArea">
                    <span class="reN_Radio">
                        <input type="checkbox" class="rab"></input>
                        <label>아이디 저장</label>
                    </span>
                    <input type="hidden"></input>
                    <ul className="etc_link">
                        <li class="etc01"><Link to="/">회원가입</Link></li>
                        <li class="etc02"><Link to="/">아이디찾기</Link></li>
                        <li class="etc02"><Link to="/">비밀번호 찾기</Link></li>
                    </ul>
            </div>
        )
    }
}

export default LoginCheck;