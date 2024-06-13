import {useState} from "react";
import {Button, InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from "react-router-dom";


export function CadastroEncurtador() {
    const [nome, setnome] = useState("");
    const [urlEncurtada, seturlEncurtada] = useState("");
    const navigate = useNavigate();
    const submit = () => {
        const payload = {
            url: nome
        }
        const result = axios.post("http://localhost:8080", payload);
        result.then((response) => {
            seturlEncurtada(response.data)
            console.log(response.data);
        })
    }
    const redirecionar = () => {
        window.open(urlEncurtada);
    }

    const listar = () => {
        navigate("/lista");
    }

    return (
        <div id="wapper">
            <div className="panel">
                <h2> ENCURTADOR <span>APP</span></h2>
                <br/>
                <label>URL : </label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="url"
                        aria-label="url"
                        aria-describedby="basic-addon2"
                        value={nome}
                        onChange={event => setnome(event.target.value)}

                    />
                    <Button onClick={submit} className="btn btn-primary" id="button-addon2">
                        encurtar
                    </Button>
                </InputGroup>
                {
                    urlEncurtada.length > 0 ?
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="url"
                                aria-label="url"
                                aria-describedby="basic-addon2"
                                value={urlEncurtada}
                            />
                            <Button onClick={redirecionar} className="btn btn-primary" id="button-addon2">
                                redirecionar
                            </Button>
                        </InputGroup>
                        : null
                }
                <Button onClick={listar} className="btn btn-primary" id="button-addon2">
                    lista
                </Button>

            </div>
        </div>
    )
}