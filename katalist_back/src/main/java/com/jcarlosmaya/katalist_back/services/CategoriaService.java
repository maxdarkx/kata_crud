package com.jcarlosmaya.katalist_back.services;

import com.jcarlosmaya.katalist_back.repository.CategoriaRepository;
import com.jcarlosmaya.katalist_back.interfaz.interfaceServiciosCategoria;
import com.jcarlosmaya.katalist_back.entidades.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class CategoriaService implements interfaceServiciosCategoria {
    @Autowired
    private CategoriaRepository repository;


    @Override
    public Iterable<Categoria> get() {
        return repository.findAll();
    }

    @Override
    public Categoria getById(Long id) {
        return repository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @Override
    public Categoria save (Categoria categoria)
    {
        return repository.save(categoria);
    }

    @Override
    public void delete(Long id) {
        if(repository.findById(id).isPresent())
            repository.deleteById(id);
        else
            throw new NoSuchElementException("No existe la categoria con el id pedido para eliminarlo");
    }

    @Override
    public Categoria update(Categoria categoria) {
        if(repository.findById(categoria.getId()).orElse(null) == null)
        {
            throw new NoSuchElementException("No existe la categoria con el id a actualizar");
        }
        return repository.save(categoria);
    }

}
