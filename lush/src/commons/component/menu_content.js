import data from '../data/data'
import "../../assets/menu_content.css"

const cateArr = [...new Set(data.map((e)=>e.category))];

function MenuContent() {
    return(
        <div className="menu_content">
            <ul>
                <li id="menu_cate"><div onClick={()=>{const Ecate=escape("전체"); window.location.replace(`/list?cate=${Ecate}`)}}>샤워</div> 
                    <ul>
                        {
                            cateArr.map((category, index) => {
                                const Ecate=escape(category); 
                                return(
                                    <li key={index} onClick={()=>{window.location.replace(`/list?cate=${Ecate}`)}}>{category}</li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li>보디
                    <ul>
                        <li>클렌저</li>
                        <li>로션</li>
                        <li>핸드 앤 풋</li>
                        <li>마사지 바</li>
                    </ul>
                </li>
                <li>페이스
                    <ul>
                        <li>페이스 마스크</li>
                        <li>토너</li>
                        <li>프라이머</li>
                        <li>립</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default MenuContent;
