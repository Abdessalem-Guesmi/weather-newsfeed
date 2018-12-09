package com.actualite;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.actualite.entities.Actualite;


@SpringBootApplication
public class FileActualitesApplication implements CommandLineRunner{
	
	@Autowired
private ActualiteRepository actualiteRepository;
	public static void main(String[] args) {
		SpringApplication.run(FileActualitesApplication.class, args);
		System.out.println("project mobile");
	}

	@Override
	public void run(String... args) throws Exception {
		
		/* for(int i=0; i<100; i++){
			Actualite actualite = new Actualite
			("admin", "<strong>bonjour tout le monde</strong> on est en cours pour préparer", new Date(), "concours"+i+".png","concours");
			actualiteRepository.save(actualite);	
			
		}
	*/
	}
	
}
