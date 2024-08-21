import React, { useState } from 'react';
import './Estoque.css'; 
import { Link } from 'react-router-dom';

import voltar from '/img/svgs/voltar.svg'




export default function Estoque() {
    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({
        nome: '',
        descricao: '',
        preco: '',
        tamanho: '',
        cor: '',
        quantidadeEmEstoque: ''
    });

    const adicionarProduto = () => {
        setProdutos([...produtos, novoProduto]);
        setNovoProduto({
            nome: '',
            descricao: '',
            preco: '',
            tamanho: '',
            cor: '',
            quantidadeEmEstoque: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoProduto(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="todocontainer">
            <div className="header">
                
                <img id= "voltar" src={voltar}  />
                <h1>Controle de Estoque</h1>
            </div>
            <div className="form-container">
                <h2>Adicionar Novo Produto</h2>

                <form className='tabela-estoque'>
                    <input
                        type="text"
                        name="nome"
                        value={novoProduto.nome}
                        onChange={handleChange}
                        placeholder="Nome"
                    />
                    <input
                        type="text"
                        name="descricao"
                        value={novoProduto.descricao}
                        onChange={handleChange}
                        placeholder="Descrição"
                    />
                    <input
                        type="number"
                        name="preco"
                        value={novoProduto.preco}
                        onChange={handleChange}
                        placeholder="Preço"
                    />
                    <input
                        type="text"
                        name="tamanho"
                        value={novoProduto.tamanho}
                        onChange={handleChange}
                        placeholder="Tamanho"
                    />
                    <input
                        type="text"
                        name="cor"
                        value={novoProduto.cor}
                        onChange={handleChange}
                        placeholder="Cor"
                    />
                    <input
                        type="number"
                        name="quantidadeEmEstoque"
                        value={novoProduto.quantidadeEmEstoque}
                        onChange={handleChange}
                        placeholder="Quantidade em Estoque"
                    />
                    <button type="button" onClick={adicionarProduto}>Adicionar Produto</button>
                </form>
            </div>
            <div className="table-container">
                <h2>Produtos em Estoque</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Tamanho</th>
                            <th>Cor</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.nome}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.tamanho}</td>
                                <td>{produto.cor}</td>
                                <td>{produto.quantidadeEmEstoque}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}