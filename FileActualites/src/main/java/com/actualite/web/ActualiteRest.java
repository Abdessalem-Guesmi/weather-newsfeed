package com.actualite.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.actualite.ActualiteRepository;
import com.actualite.entities.Actualite;


@RestController
@CrossOrigin("http://localhost:8100")
public class ActualiteRest{
	@Autowired
	private ActualiteRepository actualiteRepository;
	
	@RequestMapping(value="/actualites", method=RequestMethod.GET)
	public Page<Actualite> pageActualite
	(@RequestParam(name="page",defaultValue="0")int page,
	 @RequestParam(name="size",defaultValue="10")int size){
		return actualiteRepository.findAll(new PageRequest(page, size));	
	}
	
	@RequestMapping(value="/actualite/{id}", method=RequestMethod.GET)
	public Actualite getActualite(@PathVariable(name="id")Long id){
		return actualiteRepository.findOne(id);	
	}
	
	@RequestMapping(value="/actualite/{id}", method=RequestMethod.DELETE)
	public boolean SupprimerAct(@PathVariable(name="id")Long id){
		actualiteRepository.delete(id);	
		return true;
	}
	@RequestMapping(value = "/actualite", method = RequestMethod.POST)
	public Object saveActualite(@RequestBody  Actualite actualite) {
	
		actualiteRepository.save(actualite);
		return actualite;
	}

}
