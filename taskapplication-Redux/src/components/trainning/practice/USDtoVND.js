import React from 'react';


function USDtoVND(props) {

    // const

    function convert(usd) {
        return usd * 23632
    }



    function exchangeMoneyToVND(e) {
        const usd = e.target.value;
        const vnd = convert(usd);
        const unitMoney = {
            usd,
            vnd,
        };
        props.onHanldeChange(unitMoney);
        console.log('change', unitMoney);
    }

    return (
        <div>
            <span>USD </span>
            <input onChange={e => exchangeMoneyToVND(e)} value={props.value}/>
        </div>
    );
}

export default USDtoVND;