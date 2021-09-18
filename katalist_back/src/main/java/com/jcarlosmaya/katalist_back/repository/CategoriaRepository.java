package com.jcarlosmaya.katalist_back.repository;

import com.jcarlosmaya.katalist_back.entidades.Categoria;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends CrudRepository <Categoria, Long>
{
}
