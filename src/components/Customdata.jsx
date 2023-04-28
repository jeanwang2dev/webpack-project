import { useState } from 'react';

/** custom code */
const dataGroupOne = {
    dataStart: 22,
    dataMid: 13,
    dataEnd: 45,
};

const dataGroupTwo = {
    ...dataGroupOne,
    dataTail: 123,
    dataEnd: 90,
}

console.log(dataGroupOne);
console.log(dataGroupTwo);

const Customdata = () => {
    const [dataGroup, setDataGroup] = useState({});
    return (
        <div>
            <h3>Data Group</h3>
            <button className="rounded bg-gray-200 p-2 m-3" onClick={()=> setDataGroup(dataGroupOne)}>Group One</button>
            <button className="rounded bg-gray-200 p-2 m-3" onClick={()=> setDataGroup(dataGroupTwo)}>Group Two</button>
            <ul>
                {Object.keys(dataGroup).map((data) => (
                    <li key={data}>
                        {data}: {dataGroup[data]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Customdata;