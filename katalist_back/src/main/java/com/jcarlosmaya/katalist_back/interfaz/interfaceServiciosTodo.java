package com.jcarlosmaya.katalist_back.interfaz;

import com.jcarlosmaya.katalist_back.entidades.Todo;

public interface interfaceServiciosTodo {
    Iterable<Todo> get();
    Todo getById(Long id);
    Todo save(Todo todo);
    void delete(Long id);
    Todo update(Todo persona);
}
