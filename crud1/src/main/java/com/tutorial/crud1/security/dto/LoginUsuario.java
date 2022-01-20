package com.tutorial.crud1.security.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class LoginUsuario {
	@NotBlank
	private String nombreUsiario;
	public String getNombreUsiario() {
		return nombreUsiario;
	}
	public void setNombreUsiario(String nombreUsiario) {
		this.nombreUsiario = nombreUsiario;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@NotBlank
	private String password;
}
