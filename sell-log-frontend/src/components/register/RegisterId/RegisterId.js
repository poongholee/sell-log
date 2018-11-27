import React, { Component } from 'react';
import './RegisterId.scss';
import RegisterIdInfo from './RegisterIdInfo';

class RegisterId extends Component {

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

        const mapToComponent = (datalist) => {
            return datalist.map((item, index) => {
                return (<RegisterIdInfo label={item.label} type={item.type}/>);
            });
        }

        return (
            <div className="join-table">
                {mapToComponent(this.state.registerList)}
            </div>
        )
    }
}

export default RegisterId;
