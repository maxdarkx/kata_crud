package com.jcarlosmaya.katalist_back.entidades;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "categoria")

public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "categoriaId")
    private Set<Todo> categoriaId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Todo> categoriaId() {
        return categoriaId;
    }

    public void setTodos1(Set<Todo> categoriaId) {
        this.categoriaId = categoriaId;
    }
}
