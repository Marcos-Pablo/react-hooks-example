import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'
import { AppContext} from '../../data/Store'
import SectionTitle from '../../components/layout/SectionTitle'

const UseContext = (props) => {
    const context = useContext(DataContext);

    function addNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    const {number, setNumber, text, setText} = useContext(AppContext);

    useEffect(() => {
        if(number > 1250)
            setText('eita!!!');
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">
                    {context.state.number}
                </span>
                <span className="text">
                    {context.state.text }
                </span>

                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">
                    {number}
                </span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>
                <span className="text">
                    { text }
                </span>
            </div>
        </div>
    )
}

export default UseContext
