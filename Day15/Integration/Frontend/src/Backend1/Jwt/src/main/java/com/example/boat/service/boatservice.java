
package com.example.boat.service;

import com.example.boat.dto.boatDto;
import com.example.boat.mapper.boatMapper;
import com.example.boat.model.boatmodel;
import com.example.boat.repository.boatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class boatservice {

    private final boatRepo boatRepo;

    @Autowired
    public boatservice(boatRepo boatRepo) {
       this.boatRepo = boatRepo;
    }

    public List<boatDto> getAllBoats() {
        List<boatmodel> boats = boatRepo.findAll();
        return boats.stream().map(boatMapper::mapToBoatDto).collect(Collectors.toList());
    }

    public Optional<boatDto> getBoatById(Long boatId) {
        Optional<boatmodel> boat = boatRepo.findById(boatId);
        return boat.map(boatMapper::mapToBoatDto);
    }

    public boatDto createBoat(boatDto boatDto) {
        boatmodel boatModel = boatMapper.mapToBoatModel(boatDto);
        boatModel = boatRepo.save(boatModel);
        return boatMapper.mapToBoatDto(boatModel);
    }

    public boatDto updateBoat(Long boatId, boatDto updatedBoatDto) {
        Optional<boatmodel> existingBoatOptional = boatRepo.findById(boatId);

        if (existingBoatOptional.isPresent()) {
            boatmodel existingBoat = existingBoatOptional.get();

            // Map updatedBoatDto to existingBoat, updating only the fields that should be updated
            boatMapper.updateBoatModel(existingBoat, updatedBoatDto);

            existingBoat = boatRepo.save(existingBoat);
            return boatMapper.mapToBoatDto(existingBoat);
        }

        return null;
    }

    public void deleteBoat(Long boatId) {
        boatRepo.deleteById(boatId);
    }
}
