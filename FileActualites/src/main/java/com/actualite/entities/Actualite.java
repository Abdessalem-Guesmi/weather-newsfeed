package com.actualite.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
@Entity
public class Actualite implements Serializable{
	@Id
	@GeneratedValue
private Long id;
private String nomAuteur;
@Lob
private String contenu;
private Date dateact;
private String photo;
private String titre;

public Actualite(String nomAuteur, String contenu, Date dateact, String photo, String titre) {
	super();
	this.nomAuteur = nomAuteur;
	this.contenu = contenu;
	this.dateact = dateact;
	this.photo = photo;
	this.titre = titre;
}
public Actualite() {
	super();
	// TODO Auto-generated constructor stub
}
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getNomAuteur() {
	return nomAuteur;
}
public void setNomAuteur(String nomAuteur) {
	this.nomAuteur = nomAuteur;
}
public String getContenu() {
	return contenu;
}
public void setContenu(String contenu) {
	this.contenu = contenu;
}
public Date getDateact() {
	return dateact;
}
public void setDateact(Date dateact) {
	this.dateact = dateact;
}
public String getPhoto() {
	return photo;
}
public void setPhoto(String photo) {
	this.photo = photo;
}
public String getTitre() {
	return titre;
}
public void setTitre(String titre) {
	this.titre = titre;
}

}
