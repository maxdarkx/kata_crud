package com.jcarlosmaya.katalist_back.controller;

import com.jcarlosmaya.katalist_back.entidades.Categoria;
import com.jcarlosmaya.katalist_back.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "api")
public class CategoriaController {

    @Autowired
    private CategoriaService service;

    @GetMapping(value = "/categorias")
    public Iterable<Categoria> get(){
        return service.get();
    }

    @GetMapping(value = "/categoria/{id}")
    public Categoria getById(@PathVariable Long id)
    {
        return service.getById(id);
    }

    @PostMapping (value = "/categoria")
    public Categoria save(@RequestBody Categoria todo){
        return service.save(todo);
    }

    @DeleteMapping(value = "/categoria/{id}")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }

    @PutMapping(value = "/categoria")
    public Categoria update(@RequestBody Categoria todo){
        return service.update(todo);
    }
}
