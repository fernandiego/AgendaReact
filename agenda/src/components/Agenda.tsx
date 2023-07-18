import React, {useState} from 'react';
import './Agenda.css';

interface Contato {
    nome: string;
    telefone: string;
    email: string;
}

const Agenda: React.FC = () => {
    const [contatos, setContatos] = useState<Contato[]>([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    const adicionarContato = () => {
        const novoContato: Contato = {
            nome: nome,
            telefone: telefone,
            email: email,
        };

        setContatos([...contatos, novoContato]);
        limparFormulario();
    };

    const limparFormulario = () => {
        setNome('');
        setTelefone('');
        setEmail('');
    };

    const removerContato = (index) => {
        const newContatos = [...contatos];
        newContatos.splice(index, 1);
        setContatos(newContatos);
    };

    return (
        <div className="Agenda">
            <h2>Agenda</h2>

            <form>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="button" onClick={adicionarContato}>
                    Adicionar Contato
                </button>
            </form>

            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Remover</th>
                    {/* New column for removing contacts */}
                </tr>
                </thead>
                <tbody>
                {contatos.map((contato, index) => (
                    <tr key={index}>
                        <td>{contato.nome}</td>
                        <td>{contato.telefone}</td>
                        <td>{contato.email}</td>
                        <td>
                            <button onClick={() => removerContato(index)}>Remover</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Agenda;
