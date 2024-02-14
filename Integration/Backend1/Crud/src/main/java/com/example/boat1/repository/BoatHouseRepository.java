package com.example.boat1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boat1.model.BoatHouse;

public interface BoatHouseRepository extends JpaRepository<BoatHouse, Long>{
    
}
