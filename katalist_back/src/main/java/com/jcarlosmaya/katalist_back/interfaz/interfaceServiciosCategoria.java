package com.jcarlosmaya.katalist_back.interfaz;

import com.jcarlosmaya.katalist_back.entidades.Categoria;

public interface interfaceServiciosCategoria {
    Iterable<Categoria> get();
    Categoria getById(Long id);
    Categoria save(Categoria categoria);
    void delete(Long id);
    Categoria update(Categoria categoria);
}
