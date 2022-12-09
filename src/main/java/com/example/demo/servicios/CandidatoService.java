package com.example.demo.servicios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entidades.Candidato;

@Repository
public interface CandidatoService extends JpaRepository<Candidato, Integer> {

}
