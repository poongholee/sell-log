import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Recommend.scss';
import RecommendContent from './RecommendContent';

class Recommend extends Component {


    state = {
        listContent: [
            {
                theme: "럭키딜",
                description: "쇼핑의 거품을 쏙 뺀 럭키특가",
                bigImage: "https://laftelimage.blob.core.windows.net/items/thumbs/large/b4e03701-0c57-4087-a763-e507c44aabae.jpg",
                bigTitle: "롱패딩",
                miniImage1: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle1: "에어프라이기",
                miniImage2: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle2: "에어프라이기",
                miniImage3: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle3: "에어프라이기",
                miniImage4: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle4: "에어프라이기",
                miniImage5: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle5: "에어프라이기",
                miniImage6: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle6: "에어프라이기",
            },
            {
                theme: "럭키딜",
                description: "쇼핑의 거품을 쏙 뺀 럭키특가",
                bigImage: "https://laftelimage.blob.core.windows.net/items/thumbs/large/b4e03701-0c57-4087-a763-e507c44aabae.jpg",
                bigTitle: "롱패딩",
                miniImage1: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle1: "에어프라이기",
                miniImage2: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle2: "에어프라이기",
                miniImage3: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle3: "에어프라이기",
                miniImage4: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle4: "에어프라이기",
                miniImage5: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle5: "에어프라이기",
                miniImage6: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle6: "에어프라이기",
            },
            {
                theme: "럭키딜",
                description: "쇼핑의 거품을 쏙 뺀 럭키특가",
                bigImage: "https://laftelimage.blob.core.windows.net/items/thumbs/large/b4e03701-0c57-4087-a763-e507c44aabae.jpg",
                bigTitle: "롱패딩",
                miniImage1: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle1: "에어프라이기",
                miniImage2: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle2: "에어프라이기",
                miniImage3: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle3: "에어프라이기",
                miniImage4: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle4: "에어프라이기",
                miniImage5: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle5: "에어프라이기",
                miniImage6: "https://laftelimage.blob.core.windows.net/items/thumbs/big/c02d8d60-fcb9-42b6-a4cd-6df7944cdfbf.jpg",
                miniTitle6: "에어프라이기",
            }
        ]
    }

    render() {

        // map으로 컴포넌트 매핑
        const mapToComponent = (listContent) => {
            return listContent.map((item, index) => {
                return (<RecommendContent 
                            theme={item.theme}
                            description={item.description} 
                            bigImage={item.bigImage}
                            bigTitle={item.bigTitle}
                            miniImage1={item.miniImage1}
                            miniTitle1={item.miniTitle1}
                            miniImage2={item.miniImage2}
                            miniTitle2={item.miniTitle2}
                            miniImage3={item.miniImage3}
                            miniTitle3={item.miniTitle3}
                            miniImage4={item.miniImage4}
                            miniTitle4={item.miniTitle4}
                            miniImage5={item.miniImage5}
                            miniTitle5={item.miniTitle5}
                            miniImage6={item.miniImage6}
                            miniTitle6={item.miniTitle6}
                            key={index} 
                        />);
            })         
        }

        return (
            <div className="recommend">
                <div className="widget-head">
                    <h2>추천상품</h2>
                </div>
                <div className="separator">
                    <div className="violet-segment"></div>
                </div>
                {mapToComponent(this.state.listContent)}
            </div>
        )
    }
}

export default Recommend;