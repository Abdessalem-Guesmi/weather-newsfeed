package com.actualite;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.actualite.entities.Actualite;
//@RepositoryRestResource
public interface ActualiteRepository extends JpaRepository<Actualite, Long>{
	@Query("select a.titre, a.nomAuteur, a.dateact,a.photo from Actualite a")
	public Page<Actualite> listActualites(Pageable pageable);

}
