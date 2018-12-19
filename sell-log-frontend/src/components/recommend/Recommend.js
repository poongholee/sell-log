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
                bigImage: "url(http://www.elandrs.com/upload/prd/img/931/600/1711409931_0000026.jpg)",
                bigTitle: "신상특가+140호 추가★소폴리니 가을신상 실내복/내의 균일가 모음전",
                miniImage1: "url(http://www.elandrs.com/upload/dspl/banner/11/486/00/181200000094486.jpg)",
                miniTitle1: "메리 앤디 크리스마스",
                miniImage2: "url(http://www.elandrs.com/upload/prd/img/364/240/1812175364_0000002.jpg)",
                miniTitle2: "크라스마스 완구 선물",
                miniImage3: "url(http://www.elandrs.com/upload/dspl/banner/11/366/00/181200000094366.jpg)",
                miniTitle3: "[젤리스푼] X-mas",
                miniImage4: "url(http://www.elandrs.com/upload/dspl/banner/11/948/00/181200000093948.jpg)",
                miniTitle4: "[밀크마일]추위타파",
                miniImage5: "url(http://www.elandrs.com/upload/dspl/banner/11/778/00/181200000093778.jpg)",
                miniTitle5: "[NC] 겨울 출퇴근룩",
                miniImage6: "url(http://www.elandrs.com/upload/dspl/banner/11/782/00/181200000093782.jpg)",
                miniTitle6: "겨울피부 관리 비법",
            },
            {
                theme: "O'price",
                description: "쇼핑하기 좋은 날",
                bigImage: "url(https://www.elandrs.com/upload/prd/img/271/600/1808917271_0000014.jpg)",
                bigTitle: "나우썸 겨울아우터 ~70%할인 /겨울니트,맨투맨 1만원대",
                miniImage1: "url(https://www.elandrs.com/upload/prd/img/600/170/1811148600_0000002.jpg)",
                miniTitle1: "피어포 삭스부츠",
                miniImage2: "url(https://www.elandrs.com/upload/prd/img/924/170/1810025924_0000002.jpg)",
                miniTitle2: "베이직 비니",
                miniImage3: "url(https://www.elandrs.com/upload/prd/img/551/170/1808955551_0000006.jpg)",
                miniTitle3: "에코백",
                miniImage4: "url(https://www.elandrs.com/upload/prd/img/358/170/1809996358_0000003.jpg)",
                miniTitle4: "체크 볼캡",
                miniImage5: "url(https://www.elandrs.com/upload/prd/img/925/170/1811144925_0000001.jpg)",
                miniTitle5: "스웨이드 우드굽",
                miniImage6: "url(https://www.elandrs.com/upload/prd/img/787/170/1811113787_0000017.jpg)",
                miniTitle6: "짱구 룸슈즈",
            },
            {
                theme: "추천기획전",
                description: "주목해야할 금주의 트렌드",
                bigImage: "url(http://www.elandrs.com/upload/fckeditor/banner/2018091536804390796.jpg)",
                bigTitle: "[NB] 스페셜 세일",
                miniImage1: "url(http://www.elandrs.com/upload/prd/img/442/170/1709355442_0000007.jpg)",
                miniTitle1: "인디고뱅크키즈",
                miniImage2: "url(http://www.elandrs.com/upload/prd/img/408/170/1810062408_0000010.jpg)",
                miniTitle2: "볼륨 롱다운 점퍼",
                miniImage3: "url(http://www.elandrs.com/upload/prd/img/532/170/1812157532_0000001.jpg)",
                miniTitle3: "앵글부츠/롱부츠/로퍼",
                miniImage4: "url(http://www.elandrs.com/upload/prd/img/738/170/1812157738_0000002.jpg)",
                miniTitle4: "캐리어 24인치, 20인치",
                miniImage5: "url(http://www.elandrs.com/upload/prd/img/759/170/1804688759_0000015.jpg)",
                miniTitle5: "쁘띠/밍크 머플러",
                miniImage6: "url(http://www.elandrs.com/upload/prd/img/035/170/1810081035_0000011.jpg)",
                miniTitle6: "토들러 패딩부츠",
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