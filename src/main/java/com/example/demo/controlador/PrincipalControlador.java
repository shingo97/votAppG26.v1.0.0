package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entidades.Votante;
import com.example.demo.servicios.VotanteService;


@Controller
public class PrincipalControlador {
	
	@Autowired
	private VotanteService votanteService;

	@GetMapping("/votAppG26")
	public String principal() {
		return "/index";
	}
	
	@GetMapping("/votapp")
	public String login() {
		return "/login";
	}

	@GetMapping("/EquipoPorColombia")
	public String partido() {
		return "/partidoEC";
	}

	@GetMapping("/equipoPorColombia")
	public String partido1() {
		return "/partidoEC";
	}

	@GetMapping("/pactoHistorico")
	public String partido2() {
		return "/partidoPactoHistorico";
	}


	@GetMapping("/ligaAnticorrupcion")
	public String partido5() {
		return "/partidoLGA";
	}

	@GetMapping("/centroEsperanza")
	public String partido6() {
		return "/partidoCCE";
	}

	@GetMapping("/index1")
	public String pagina() {
		return "/index";
	}

	@GetMapping("/partidoEquipoPorColombia")
	public String partidoPoli1() {
		return "/partidoEC";
	}

	@GetMapping("/partidoPactoHistoric")
	public String partidoPoli2() {
		return "/partidoPactoHistorico";
	}

	@GetMapping("/partidoLigadeGobernantesAnticorrupcion")
	public String partidoPoli5() {
		return "/partidoLGA";
	}

	@GetMapping("/partidoCoalicionCentroEsperanza")
	public String partidoPoli6() {
		return "/partidoCCE";
	}

	@GetMapping("/nuevoVotante")
	public String votant() {
		return "/addVotante";
	}

	@PostMapping("/saveVotante")
	public String addVotante(@Validated Votante votante) {
		votanteService.save(votante);
		return "redirect:/votAppG26";
	}

}
