import React, {useState, useEffect} from 'react';
import './Agenda.css';

interface Contato {
    nome: string;
    telefone: string;
    email: string;
}

const initContatos = () => {
    const storedContatos = localStorage.getItem('contatos');
    if (storedContatos) {
        return JSON.parse(storedContatos);
    } else {
        return [];
    }
};

const Agenda: React.FC = () => {
    const [contatos, setContatos] = useState<Contato[]>(initContatos());
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(true); // State to track loading state

    useEffect(() => {
        fetch('http://localhost:8080/contato') // Replace with your Java Spring backend endpoint
            .then(response => response.json())
            .then(data => {
                setContatos(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

 const adicionarContato = () => {
  const novoContato = {
    nome: nome,
    telefone: telefone,
    email: email,
  };

  fetch('http://localhost:8080/contato', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoContato),
  })
    .then(response => response.json())
    .then(data => {
      // Assuming the response data contains the added contact
      setContatos([...contatos, data]);
      limparFormulario();
    })
    .catch(error => console.error('Error adding contact:', error));
};


    const limparFormulario = () => {
        setNome('');
        setTelefone('');
        setEmail('');
    };

    const removerContato = (index: number) => {
        const newContatos = [...contatos];
        newContatos.splice(index, 1);
        setContatos(newContatos);
    };

    useEffect(() => {
        saveContatosToLocalStorage();
    }, [contatos]);

    const saveContatosToLocalStorage = () => {
        localStorage.setItem('contatos', JSON.stringify(contatos));
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
                    onChange={e => setNome(e.target.value)}
                />

                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    id="telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                {isLoading ? (
                    <tr>
                        <td colSpan={4}>Loading...</td>
                    </tr>
                ) : (
                    contatos.map((contato, index) => (
                        <tr key={index}>
                            <td>{contato.nome}</td>
                            <td>{contato.telefone}</td>
                            <td>{contato.email}</td>
                            <td>
                                <button onClick={() => removerContato(index)}>Remover</button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Agenda;
