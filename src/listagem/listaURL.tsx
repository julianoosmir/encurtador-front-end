import {useEffect, useState} from "react";
import {URLModel} from "../interfaces/URLModel";

export function ListaURL() {
    const [lista, setLista] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080')
            .then(r => r.json())
            .then(rc => setLista(rc));
    }, [])

    const excluir = (id : number | undefined) => {
        fetch('http://localhost:8080/' + id,{
            method: 'DELETE',
        }).then(()=>{
            window.location.reload();
        })
        return 0;
    }
    return (
        <div id="wapper">
            <div className="panel">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">url original</th>
                        <th scope="col">url encurtada</th>
                        <th scope="col">ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        lista.map((obj: URLModel, index) => {
                            return (<tr key={index}>
                                    <td>{obj.id}</td>
                                    <td>{obj.originalURL}</td>
                                    <td>{obj.shortURL}</td>

                                    <td>
                                        <button className="btn btn-danger"
                                                onClick={() => excluir(obj.id)}> excluir
                                        </button>
                                    </td>
                                </tr>
                            )
                        })

                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}