import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserBasket.scss';

class UserBasket extends Component {
    render() {
        return (
            <div className="userBasket">
                <h2 className="sub-title2">셀로그 배송상품</h2>
                <table className="tbl_prd_list">
                    <caption>셀로그 배송상품 장바구니 목록</caption>
                    <colgroup>
                        <col style={{width: "40px"}}/>
                        <col style={{width: "*"}}/>
                        <col style={{width: "110px"}}/>
                        <col style={{width: "100px"}}/>
                        <col style={{width: "110px"}}/>
                        <col style={{width: "120px"}}/>
                        <col style={{width: "150px"}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" className="col40">
                                <input className="checkbox" type="checkbox" checked title="셀로그 배송상품 전체 선택"></input>
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
                            <td colSpan="7">
                                <div className="tbl_cont_area">
                                    <div className="tbl_cell w40">
                                        <input type="checkbox"></input>
                                    </div>
                                    <div className="tbl_cell w390">
                                        <div className="prd_info">
                                            <Link to='/' className="prd_img">
                                                <img alt="상품이미지" src="https://image.oliveyoung.co.kr/uploads/images/goods/220/10/0000/0011/A00000011660402ko.jpg?l=ko" />
                                            </Link>
                                            <Link to='/' className="prd_name">
                                                <span className="tx_sale_info"></span>
                                                <span className="brandNm">케이트</span>
                                                <p className="goodsNm">케이트 핏 레어 젤 펜슬</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tbl_cell w110">
                                        <span className="cur_price">
                                            <span className="tx_num">16,000</span>
                                            원
                                        </span>
                                    </div>
                                    <div className="tbl_cell w100">
                                        <span className="cur_price">
                                            <span className="tx_num">1</span>
                                        </span>
                                    </div>
                                    <div className="tbl_cell w110">
                                        <span className="org_price">
                                            <span className="tx_num">16,000</span>
                                            원
                                        </span>
                                        <span className="pur_price">
                                            <span className="tx_num">12,800</span>
                                            원
                                        </span>
                                    </div>
                                    <div className="tbl_cell w120">
                                        <p className="prd_delivery">
                                            <strong className="deliStrongText">
                                                2,500
                                                <span className="ex">도서·산간 제외</span>
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="tbl_cell w150">
                                        <div className="btn_group">
                                            <button type="button" className="btnSmall wGreen" name="btn_buy"><span>바로구매</span></button>
                                            <button type="button" className="btnSmall wGray zzim" name="btnZzim"><span>쇼핑찜</span></button>
                                            <button type="button" className="btnSmall wGay delete" name="btnDelete"><span>삭제</span></button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="total_price_info">
                        <div className="detail_price">
                            <p>
                                총 판매가
                                <span>
                                    <span className="tx_num">32,000</span>
                                    원
                                </span>
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