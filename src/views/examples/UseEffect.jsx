import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    if(n < 0) return -1;
    if(n === 0) return 1;
    return n * calcFatorial(n-1)
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1)
    const [par, setPar] = useState(false)
    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])
    useEffect(() => {
        setPar(number % 2 === 0)
    }, [number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} 
                />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{par ? 'Par' : 'Impar'}</span>
                </div>
            </div>  
        </div>
    )
}

export default UseEffect
