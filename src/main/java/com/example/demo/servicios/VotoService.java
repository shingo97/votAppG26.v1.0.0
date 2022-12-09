 package com.example.demo.servicios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entidades.Voto;

@Repository
public interface VotoService extends JpaRepository<Voto, Integer> {
	
	Voto findByIdentificacion(int identificacion);

}
