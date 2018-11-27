import React, { Component } from 'react';
import './RegisterUser.scss';

class RegisterUser extends Component {
    state = {
        registerList : [
            {
                label: "아이디 (4~12자 영문 대·소문자)",
                type: "text"
            },
            {
                label: "비밀번호는 6~16자 영문 대소문자, 숫자, 특수문자 중 최소 2가지 이상 조합하여 입력해주세요",
                type: "password"
            },
            {
                label: "비밀번호 확인",
                type: "password"
            }
        ]
    }

    render() {

        return (
            <div className="join-table">
                <div className="form-table first">
                    <div className="ipt">
                        <input type="text" className="place-h" placeholder="이름(실명으로 입력해주세요)"></input>
                    </div>
                </div>
                <div className="form-multi_table">
                    <div className="ipt_birth">
                        <input 
                            type="text" 
                            id="user-num" 
                            className="place-h" 
                            placeholder="생년월일(ex.19930402)"
                            >
                        </input>
                    </div>
                    <div className="ipt_tab">
                        <ul>
                            <li>
                                <input type="radio" name="gender" value="0" id="male" class="hide"></input>
                                <label for="male">남자</label>
                            </li>
                            <li>
                                <input type="radio" name="gender" value="1" id="female" class="hide" checked="checked"></input>
                                <label for="female">여자</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="form-table phone">
                    <div className="ipt">
                        <input type="text" className="place-h" placeholder="휴대폰번호"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterUser;