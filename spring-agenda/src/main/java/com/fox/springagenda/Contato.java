package com.fox.springagenda;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Entity
@Table(name="contatos")
@Data
@NoArgsConstructor
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    Long contatoId;
    @Column
    String nome;
    @Column
    String telefone;
    @Column
    String email;


    public Contato(Long id, String nome, String telefone, String email) {
        this.contatoId = contatoId;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

}
