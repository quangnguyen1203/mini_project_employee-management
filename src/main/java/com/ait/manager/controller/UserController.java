package com.ait.manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ait.manager.model.User;
import com.ait.manager.security.UserPrincipal;
import com.ait.manager.service.role.RoleServiceImpl;
import com.ait.manager.service.user.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @Autowired
    RoleServiceImpl roleService;

    private String getPrincipal() {
        String userName = "";
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            userName = ((UserDetails) principal).getUsername();
        } else {
            userName = principal.toString();
        }
        return userName;
    }

    @GetMapping("/create")
    public ModelAndView createForm(){
        return new ModelAndView("dashboard/user/create");
    }

    @GetMapping("/getUser")
    public ResponseEntity<UserPrincipal> getUserByUsername(){
        return new ResponseEntity<>(userService.findByUsername(getPrincipal()), HttpStatus.OK);
    }

    @GetMapping("/user-deleted")
    public ModelAndView getDeletedUsersForm(){
        return new ModelAndView("dashboard/user/deleted");
    }

    @PostMapping("/create")
    public ResponseEntity<User> createNewUser(@RequestBody User user){
        user.setRole(roleService.findById(user.getRole().getId()).get());
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        if (userService.isContainEmail(user.getEmail()) && userService.isContainUsername(user.getUsername()) && userService.isContainPhone(user.getPhone())){
            userService.createUser(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
