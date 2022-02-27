import React, {Component, component} from "react";
import {Link} from "react-router-dom";
import "../../assets/menu.css"
import MenuContent from "./menu_content"

class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <div className="logo_inner">
                    <div id="logo">
                        <Link to="/">
                            <img src="https://lush.co.kr/data/skin/front/howling/img/banner/8b07b23fdab3e3e461a6acc42bc930c3_43812.png"></img>
                        </Link>
                    </div>
                </div>
                <div className="menu_inner">
                    <ul>
                        <li id="menu1">
                            <div id="product" onClick={()=>{const Ecate=escape("전체"); window.location.replace(`/list?cate=${Ecate}`)}}>제품</div>
                            <MenuContent></MenuContent>
                        </li>
                        <li id="menu1">러쉬 소개</li>
                        <li id="menu1">매장 안내</li>
                        <li id="menu1">스파</li>
                        <li id="menu1">이벤트</li>
                    </ul>
                </div>
                <div className="nav">
                    <ul>
                        <li><img src="https://lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_search.png"></img></li>
                        <li><img src="https://lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_cart.png"></img></li>
                        <li><img src="https://lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_mypage.png"></img></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;
