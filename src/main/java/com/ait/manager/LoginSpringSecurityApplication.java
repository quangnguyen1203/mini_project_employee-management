package com.ait.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ait.manager.model.Role;
import com.ait.manager.model.User;
import com.ait.manager.repository.UserRepository;

@SpringBootApplication
public class LoginSpringSecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginSpringSecurityApplication.class, args);
	}
	/*
	 * @Autowired UserRepository userRepository;
	 * 
	 * @Autowired PasswordEncoder passwordEncoder;
	 * 
	 * public void run(String... args) throws Exception { // Khi chương trình chạy
	 * // Insert vào csdl một user. User user = new User();
	 * user.setUsername("admin"); user.setPassword(passwordEncoder.encode("12345"));
	 * user.setFullName("admin"); user.setEmail("admin@gmail.com");
	 * user.setPhone("0905910001"); userRepository.save(user);
	 * System.out.println(user); }
	 */
}
