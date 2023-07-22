package com.fox.springagenda;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContatoService {
    private final ContatoRepository contatoRepository;

    public ContatoService(ContatoRepository contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    @Transactional
    public Contato salvaContato(Contato contato) {
        return contatoRepository.save(contato);
    }

    @Transactional
    public List<Contato> getAllContatos() {
        return contatoRepository.findAll();
    }

    @Transactional
    public void deleteContato(Long contactId) {
        contatoRepository.deleteById(contactId);
    }
}
