import React, { useState } from 'react';
import './cep.css';
import axios from 'axios';
import Box from '../box/Box';
import Button from '../button/Button';
import Input from '../input/Input';
import Loading from '../loading/Loading';

const Cep = () => {
    const [cep, setCep] = useState("");
    const [response, setResponse] = useState({});
    const [isLoading, setLoading] = useState(false);


    const SearchCep = () => {
        setLoading(true);
        const handleCep = cep.replace('-', '').replace('_', '');
        axios.get(`http://localhost:5000/cep/${handleCep}`).then(res => {
            setLoading(false)
            setResponse(res.data);
        })
            .catch(error => {
                setLoading(false)
                setResponse({ error: "Digite um CEP válido!" });
                console.error("Erro ao consultar cep", error);
            })
    }

    return (
        <div className="container">
            <Box className={"box"}>
            <Input className={"input-cep"} type={"text"} mask={"99999-999"} placeholder={"Digite o CEP"} value={cep} message={"Digite um cep válido"} onChange={e => { setCep(e.target.value) }} />
                <Button className={"button-search"} onClick={SearchCep}>Buscar cep</Button>
            </Box>
            {
                isLoading === true &&
                <Box className={"box-info"}>
                    <Loading />
                </Box>
            }
            {
                response.cep && isLoading === false &&
                <Box className={"box-info"}>
                    <p><strong>CEP: </strong>{response.cep}</p>
                    <p><strong>Estado: </strong>{response.uf}</p>
                    <p><strong>Cidade: </strong>{response.localidade}</p>
                    <p><strong>Logradouro: </strong>{response.logradouro}</p>
                </Box>
            }
            {
                response.error && isLoading === false &&
                <Box className={"box-info"}>
                    <p><strong>{response.error}</strong></p>
                </Box>
            }

        </div>
    )
}
export default Cep;