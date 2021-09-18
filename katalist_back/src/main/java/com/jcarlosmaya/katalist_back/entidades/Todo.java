package com.jcarlosmaya.katalist_back.entidades;

import javax.persistence.*;

@Entity
@Table(name = "todo")

public class Todo {

    @Id
    @GeneratedValue
    private Long id;
    private Long categoriaId;
    private String name;

    private boolean isCompleted;

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

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }
}
