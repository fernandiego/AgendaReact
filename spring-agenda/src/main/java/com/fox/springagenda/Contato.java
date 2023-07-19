package com.fox.springagenda;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Entity
@Table(name="contatos")
public class Contato {

    @Id
    Long contatoId;
    String nome;
    String telefone;
    String email;


    public Contato(Long id, String nome, String telefone, String email) {
        this.contatoId = contatoId;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    public Contato() {
    }

    public Long getId() {
        return contatoId;
    }

    public void setId(Long id) {
        this.contatoId = contatoId;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
