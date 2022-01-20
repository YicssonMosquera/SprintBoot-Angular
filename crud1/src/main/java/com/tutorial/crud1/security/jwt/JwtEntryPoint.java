package com.tutorial.crud1.security.jwt;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

//clase para comprobar si hay un token valido si no lanza error 401 no autorizado
@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {

	private final static Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);
	
	
	@Override
	public void commence(HttpServletRequest req, HttpServletResponse res,
			AuthenticationException authException) throws IOException, ServletException {
		logger.error("fail en el metodo comence");
		res.sendError(HttpServletResponse.SC_UNAUTHORIZED, "no autorizado");
	}
	

}
