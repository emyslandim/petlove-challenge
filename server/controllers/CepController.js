import axios from 'axios';

const CepController = {
    getCep: async(req, res) => {
        const { cep } = req.params;
        if (cep.length < 8 || cep.length > 8) {
            res.status(406).send({
                error: true,
                message: 'Digite um cep válido!',
            });
        } else {
            axios(`https://viacep.com.br/ws/${cep}/json/`).then(data => {
                const response = data.data;
                if (response.erro) {
                    res.status(406).send({
                        error: true,
                        message: 'Digite um cep válido!',
                    });
                } else {
                    res.send({
                        cep: response.cep,
                        logradouro: response.logradouro,
                        localidade: response.localidade,
                        uf: response.uf,
                    })
                }
            }).catch(error => {
                res.status(error.response.status).send({
                    error: true,
                    message: `${error}`
                })
            })
        }

    }
}

export default CepController;