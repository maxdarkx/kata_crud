package com.jcarlosmaya.katalist_back.repository;

import com.jcarlosmaya.katalist_back.entidades.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends CrudRepository <Todo, Long>
{
}
