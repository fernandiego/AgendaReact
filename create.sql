
    create table contatos (
        contato_id bigint generated by default as identity,
        email varchar(255),
        nome varchar(255),
        telefone varchar(255),
        primary key (contato_id)
    );
