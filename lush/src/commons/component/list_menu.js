function Lmenu({category, num}) {
    return(
        <>
            <div id="list_menu">
                {
                    category.map((category, index)=><button onClick={()=>{const Ecate=escape(category); window.location.replace(`/list?cate=${Ecate}`)}}>{category}({num[index]})</button>)
                }
            </div>
        </>
    )
}

export default Lmenu;