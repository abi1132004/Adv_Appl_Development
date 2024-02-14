
package com.example.boat.mapper;

import com.example.boat.dto.boatDto;
import com.example.boat.model.boatmodel;

public class boatMapper {

    public static boatDto mapToBoatDto(boatmodel boat) {
        boatDto dto = new boatDto();
        dto.setId(boat.getId());
        dto.setBoatName(boat.getBoatName());
        dto.setBoatDescription(boat.getBoatDescription());
        dto.setCapacity(boat.getCapacity());
        dto.setPhone(boat.getPhone());
        dto.setNoOfPersons(boat.getNoOfPersons());
        dto.setBImage(boat.getBImage());
        dto.setPrice(boat.getPrice());
        // Map other properties as needed
        return dto;
    }

    public static boatmodel mapToBoatModel(boatDto boatDto) {
        boatmodel model = new boatmodel();
        model.setBoatName(boatDto.getBoatName());
        model.setBoatDescription(boatDto.getBoatDescription());
        model.setCapacity(boatDto.getCapacity());
        model.setPhone(boatDto.getPhone());
        model.setNoOfPersons(boatDto.getNoOfPersons());
        model.setBImage(boatDto.getBImage());
        model.setPrice(boatDto.getPrice());
        // Map other properties as needed
        return model;
    }

    public static void updateBoatModel(boatmodel existingBoat, boatDto updatedBoatDto) {
        // Update only the fields that should be updated
        existingBoat.setBoatName(updatedBoatDto.getBoatName());
        existingBoat.setBoatDescription(updatedBoatDto.getBoatDescription());
        existingBoat.setCapacity(updatedBoatDto.getCapacity());
        existingBoat.setPhone(updatedBoatDto.getPhone());
        existingBoat.setNoOfPersons(updatedBoatDto.getNoOfPersons());
        existingBoat.setBImage(updatedBoatDto.getBImage());
        existingBoat.setPrice(updatedBoatDto.getPrice());
        // Update other properties as needed
    }
}
