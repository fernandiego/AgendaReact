package com.fox.springagenda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringAgendaApplication {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(SpringAgendaApplication.class, args);

		ContatoService contatoService = ctx.getBean(ContatoService.class);

		Contato contato = new Contato();
		contato.nome = "Fernando";
		contato.telefone = "85999154477";
		contato.email = "fox@gmail.com";



		System.out.println(contato);
		contatoService.salvaContato(contato);
	}

}
