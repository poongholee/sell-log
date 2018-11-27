import React, { Component } from 'react';
import './LoginSns.scss';
import LoginSnsInfo from './LoginSnsInfo';


class LoginSns extends Component {

    state = {
        snsList : [
            {
                id: "btn_naver",
                name: "네이버로 로그인"
            },
            {
                id: "btn_facebook",
                name: "페이스북으로 로그인"
            },
            {
                id: "btn_kakao",
                name: "카카오톡으로 로그인"
            }
        ]
    }

    render() {

        const mapToComponent = (snsList) => {
            return snsList.map((item, index) => {
                return (<LoginSnsInfo id={item.id} name={item.name}/>)
            });
        }

        return (
            <div className="login_sns">
                {mapToComponent(this.state.snsList)}
            </div>
        )
    }
}

export default LoginSns;
