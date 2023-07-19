package com.fox.springagenda;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contato")
public class ContatoController {

    private final ContatoService contatoService;

    public ContatoController(ContatoService contatoService) {
        this.contatoService = contatoService;
    }

    @PostMapping
    public Contato addContato(@RequestBody Contato contato) {
        return contatoService.salvaContato(contato);
    }

    @GetMapping
    public List<Contato> getAllContatos() {
        return contatoService.getAllContatos;
    }

    @DeleteMapping("/ContatoId")
    public void deleteContato(@PathVariable Long contatoId) {
        contatoService.deleteContato(contatoId);
    }
}
