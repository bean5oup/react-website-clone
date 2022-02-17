import data from '../data/data';

function Litem(){
    return(
        <>
            {
                data.map((item)=>{
                    const {id, title, des, price, type, category, img} = item;
                    return (
                        <h1>{id}</h1>
                    )
                })
            }
        </>
    )
}

export default Litem;