package com.example.boat1.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat1.model.BoatHouse;
import com.example.boat1.repository.BoatHouseRepository;

@Service
public class BoatHouseService {

    @Autowired
    private BoatHouseRepository boatHouseRepository;

    public List<BoatHouse> getAllBoatHouses() {
        return boatHouseRepository.findAll();
    }

    public Optional<BoatHouse> getBoatHouseById(Long id) {
        return boatHouseRepository.findById(id);
    }

    public BoatHouse createBoatHouse(BoatHouse boatHouse) {
        return boatHouseRepository.save(boatHouse);
    }

    public BoatHouse updateBoatHouse(Long id, BoatHouse updatedBoatHouse) {
        Optional<BoatHouse> existingBoatHouse = boatHouseRepository.findById(id);
        if (existingBoatHouse.isPresent()) {
            updatedBoatHouse.setId(id);
            return boatHouseRepository.save(updatedBoatHouse);
        } else {
            // Handle case where boat house is not found
            return null;
        }
    }

    public void deleteBoatHouse(Long id) {
        boatHouseRepository.deleteById(id);
    }
}
