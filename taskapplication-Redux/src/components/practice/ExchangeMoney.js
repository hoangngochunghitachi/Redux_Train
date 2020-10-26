import React, { useState } from 'react';
import USDtoVND from './USDtoVND';
import VNDtoUSD from './VNDtoUSD';

function ExchangeMoney(props) {

    const [unitMoney, setUnitMoney] = useState({
        usd: 0,
        vnd: 0,
    });

    function handleChange(data) {
        setUnitMoney({
            // ...unitMoney,
            data,
        });
        console.log("update state", unitMoney)
    }

    return (
        <div style={{ margin: "3%" }}>
            <USDtoVND onHanldeChange={handleChange} value={unitMoney.usd} />
            <VNDtoUSD onHanldeChange={handleChange} value={unitMoney.vnd} />
            <hr />
            <code>exchange money</code>
        </div>
    );
}

export default ExchangeMoney;