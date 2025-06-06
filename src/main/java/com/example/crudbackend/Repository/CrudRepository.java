package com.example.crudbackend.Repository;

import com.example.crudbackend.Model.Crud;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrudRepository extends JpaRepository<Crud,Long>{

}
