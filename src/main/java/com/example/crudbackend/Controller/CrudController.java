package com.example.crudbackend.Controller;


import com.example.crudbackend.Model.Crud;
import com.example.crudbackend.Service.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/crud")
@CrossOrigin(origins = "http://localhost:5173/")
public class CrudController {

    @Autowired
    private CrudService crudService;

    @GetMapping
    public List<Crud> getAllStudents() {
        return crudService.getCrud();
    }

    @GetMapping("/{id}")
    public Crud CrudById(@PathVariable Long id) {
        return crudService.CrudById(id);
    }

    @PostMapping
    public Crud addCrud(@RequestBody Crud crud){
        return crudService.saveCrud(crud);
    }

    @PutMapping("/{id}")
    public Crud updateCrud(@PathVariable Long id, @RequestBody Crud crud){
        return crudService.updateCrud(id , crud);
    }

    @DeleteMapping("/{id}")
    public  void deleteCrud(@PathVariable Long id){
        crudService.deleteCrud(id);
    }
}
