import React, { Component } from 'react';
import './UserBasket.scss';

class UserBasket extends Component {
    render() {
        return (
            <div className="userBasket">
                <h2 className="sub-title">셀로그 배송상품</h2>
                <table className="tb1_prd_list">
                    <caption>셀로그 배송상품 장바구니 목록</caption>
                </table>
                <colgroup>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">
                            <input type="checkbox" checked title="셀로그 배송상품 전체 선택"></input>
                        </th>
                        <th scope="col">상품정보</th>
                        <th scope="col">판매가</th>
                        <th scope="col">수량</th>
                        <th scope="col">구매가</th>
                        <th scope="col">배송정보</th>
                        <th scope="col">선택</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="7"></td>
                    </tr>
                </tbody>
                <div className="total_price_info">
                    <div className="detail_price">
                        <p>
                            총 판매가
                            <span className="tx_num">32,000</span>
                            원
                        </p>
                        <span className="tx_sign2 minus">-</span>
                        <p className="tx_sale">
                            총 할인금액
                            <span>
                                <span className="tx_num">9,600</span>
                                원
                            </span>
                        </p>
                        <span className="tx_sign2 plus">+</span>
                        <p>
                            배송비
                            <span>
                                <span className="tx_num">0</span>
                                원
                            </span>
                        </p>
                    </div>
                    <div className="sum_price">
                        <span className="tx_text">
                            배송비는 쿠폰할인금액에 따라 변경될 수 있습니다.
                        </span>
                        총 결제예상금액
                        <span className="tx_price">
                            <span className="tx_num">22,400</span>
                            원
                        </span>
                    </div>
                </div>
                <div className="order_btn_area">
                    <button type="button" class="btnOrangeW" name="partOrderBtn">선택주문</button>
                    <button type="button" class="btnOrange" name="allOrderBtn">전체주문</button>
                </div>
                <div className="cart_comment">
                    <p>장바구니 상품은 90일동안, 판매종료 된 상품은 10일동안 보관됩니다.</p>
                </div>
            </div>
        )
    }
}

export default UserBasket;