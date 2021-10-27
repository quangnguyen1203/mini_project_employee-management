package com.ait.manager.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import com.ait.manager.model.Skill;
import com.ait.manager.service.skill.SkillService;
import com.ait.manager.service.skill.SkillServiceImpl;

@RestController
@RequestMapping("/skills")
public class SkillController {
	@Autowired
    private SkillServiceImpl skillServiceImpl;
    @GetMapping
    public ModelAndView homePage() {
        return new ModelAndView("dashboard/skill/list");
    }
    @GetMapping("/allSkill")
    public ResponseEntity<Iterable<Skill>> allSkills(){
        return new ResponseEntity<>(skillServiceImpl.findAll(), HttpStatus.OK);
    }
    
    @PostMapping
    public ResponseEntity<Skill> createSkill(@RequestBody Skill skill) {
        return new ResponseEntity<>(skillServiceImpl.save(skill), HttpStatus.CREATED);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Skill> deleteSkill(@PathVariable Long id) {
        Optional<Skill> skillOptional = skillServiceImpl.findById(id);
        if (!skillOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        skillServiceImpl.remove(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping("/edit/{id}")
    public ResponseEntity<Skill> editSkill(@RequestBody Skill skill,@PathVariable Long id){
        skill.setSkill_id(id);
        return new ResponseEntity<>(skillServiceImpl.save(skill),HttpStatus.OK);
    }
    
    @GetMapping("/edit-skill/{id}")
    public ResponseEntity<Skill> skillResponseEntity(@PathVariable Long id){
        Skill skill = skillServiceImpl.findById(id).get();
        return new ResponseEntity<>(skill,HttpStatus.OK);
	} 
}