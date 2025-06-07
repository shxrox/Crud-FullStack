package com.example.crudbackend.Service;


import com.example.crudbackend.Model.Crud;
import com.example.crudbackend.Repository.CrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrudService {

    @Autowired
    private CrudRepository crudRepository;

    public List<Crud> getCrud() {
        return crudRepository.findAll();
    }

    public Crud CrudById(Long id){
        return crudRepository.findById(id).orElse(null);
    }

    public Crud saveCrud(Crud crud){
        return crudRepository.save(crud);
    }

    public void deleteCrud(Long id){
         crudRepository.deleteById(id);
    }

    public Crud updateCrud(Long id, Crud crud) {
        Crud existingCrud = crudRepository.findById(id).orElse(null);
        if (existingCrud == null) {
            return null;
        }
        existingCrud.setName(crud.getName());
        existingCrud.setAge(crud.getAge());
        existingCrud.setEmail(crud.getEmail());
        return crudRepository.save(existingCrud);
    }



}
